<template>
	<div class="userinfo">
		<el-row>
			<el-col :span="6" :push='2'>
				<div>{{userName}}，你好!</div>
			</el-col>
			<el-col :span="6" :push='2'>
				自动投标状态：
				<el-switch v-model="value2" on-color="#13ce66" off-color="#ff4949">
				</el-switch>
			</el-col>
		</el-row>

		<el-row>
			<el-col :span="12" :push='2'>
				账户余额： {{surplusMoney}}元
			</el-col>
			<el-col :span="12" :push='2'>
			</el-col>
		</el-row>
		<el-row>
			<el-col :span="14" :push='2'>
				账户保留金额：
				<span v-if='showinpunt=="hide"'>{{input}}元</span>
				<el-input v-model="input" v-if='showinpunt=="show"'></el-input>
				<span class="errorinfo" v-if='efficacy'>可输入范围[0.00,99999999.99]的纯数字</span>
			</el-col>
			<el-col :span="4" :push='2'>
				<el-button :type='inputtype' @click='reviseMoney'>{{inputhtml}}</el-button>
			</el-col>
		</el-row>
	</div>
</template>
<script>
// import Hub from '../../eventHub.js';
	export default {
		name: 'userinfo',
		data() {
			return {
				userName: '',
				value1: true,
				value2: true,
				surplusMoney: 388,
				input: '0.00',
				inputtype: '',
				inputhtml: '修改',
				showinpunt: 'hide',
				efficacy:false
			}
		},
		mounted() {
			// var _this=this;
			// Hub.$on('userName', (e) => { //Hub接收事件
			// 		_this.userName=e;
			// });
				this.userName = this.GetQueryString('userName');//获取userName
				this.GetInpunt();//初始化账户保留金额
		},
		methods: {
			checkMoneyFormat(val) {
				var reg = /^(([0-9]+)|([0-9]+\.[0-9]{1,2}))$/;
				var isMoneyFormatRight = reg.test(val);
				if(isMoneyFormatRight && val>=0.00 && val<=99999999.99 || val==''){
					return true;
				}else{
					return false;
				}
			},
			reviseMoney(event) {
				if(this.checkMoneyFormat(this.input)){
					this.efficacy=false;
					if(this.inputtype == '') {
						this.inputtype = 'primary';
						this.inputhtml = '保存';
						this.showinpunt = 'show'
					} else {
						this.inputtype = '';
						this.inputhtml = '修改';
						this.showinpunt = 'hide';
						if(this.input==''){
							this.input='0.00';
							return;
						}else{
							this.AlterInpunt();//保存信息
						}
					}
				}else{
					this.efficacy=true;
				}
			},
			GetQueryString(name){
				var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
				var r = window.location.search.substr(1).match(reg);
				if(r!=null)return  unescape(r[2]); return null;
			},
			// 账户保留金额获取
			GetInpunt(){
				this.$http.post('//bid.paicaifu.com/bid/userAmount/queryAmount')
				.then((response) => {
					if(response.body.responseCode=='0000'){
							this.input=response.body.result.data.amount;
					}else if(response.body.responseCode=='1001'){
							 this.$alert('接口错误', '错误信息', {
								showConfirmButton:false,
								});
					}
				},(response) => {
					 this.$alert('网络连接错误', '错误信息', {
								showConfirmButton:false,
								});
				})
			},
			AlterInpunt(){
				this.$http.post('//bid.paicaifu.com/bid/userAmount/queryAmount',{amount:this.input})
				.then((response) => {
					if(response.body.responseCode=='0000'){
							this.input=response.body.result.data.amount;
					}else if(response.body.responseCode=='1001'){
							 this.$alert('接口错误', '错误信息', {
								showConfirmButton:false,
								});
					}
				},(response) => {
					 this.$alert('网络连接错误', '错误信息', {
								showConfirmButton:false,
								});
				})
			}
		}

	}
</script>

<style>
	.el-row {
		height: 40px;
		line-height: 40px;
		margin: 0 auto;
	}
	
	.userinfo {
		width: 100%;
		margin: 0 auto;
		margin-top: 10px;
		padding: 30px 0;
		background: #fafafa;
	}
	
	.userinfo .el-input {
		width: 100px;
	}
	.userinfo .errorinfo{
		color: #FF6600;
		font-size: 14px;
	}
</style>