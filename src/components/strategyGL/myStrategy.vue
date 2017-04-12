<template>
	<div class="myStrategy">
	
		<el-row class='myStrategy-title1'>
			<el-col :span="3">
				<h2>我的策略</h2></el-col>
		</el-row>
	
		<el-row class='myStrategy-title2'>
			<el-col :span="8">策略名称</el-col>
			<el-col :span="8">每笔投资金额（元）</el-col>
			<el-col :span="8">操作</el-col>
		</el-row>
	
		<el-row class='myStrategy-list'
		        v-for='(iteam,index) in myStrategyList'
		        :key="iteam.id">
			<el-col :span="8">{{iteam.name}}</el-col>
			<el-col :span="8">{{iteam.money}}</el-col>
			<el-col :span="8">
				<router-link :to="{name:'ZDYstrategy',params: { dataId:iteam.id }}" class="routerLink">编辑策略</router-link> &nbsp;&nbsp;
				<i class="el-icon-arrow-up"
				   @click="up(index)"></i> &nbsp;&nbsp;&nbsp;&nbsp;
				<i class="el-icon-arrow-down"
				   @click='down(index)'></i> &nbsp;&nbsp;
				<el-switch v-model="iteam.value2"
				           on-color="#13ce66"
				           off-color="#ff4949"
				           :change='openORclose(iteam.value2)'>
				</el-switch>
			</el-col>
		</el-row>
	
		<el-row class='myStrategy-add'>
			<el-col :span="24">
				<router-link :to="{name:'ZDYstrategy'}" class="routerLink">+新增自定义策略</router-link>
			</el-col>
		</el-row>
	</div>
</template>
<script>
export default {
	name: 'myStrategy',
	data() {
		return {
			myStrategyList: [
				{id:1, name: '稳健快投', money: 50, value2: true },
				{id:2, name: '智商捉急', money: 1000, value2: true },
				{id:3, name: '你看着办', money: 300, value2: false }
			]
		}
	},
	methods: {
		openORclose(e) {
			//				console.info(this.myStrategyList)
		},
		down(index) {
			if (index == this.myStrategyList.length - 1) {
				return
			} else {
				this.myStrategyList.splice(index + 2, 0, this.myStrategyList[index])
				this.myStrategyList.splice(index, 1)
			}
		},
		up(index) {
			Array.prototype.del = function (n) {
				if (n < 0)
					return this;
				else
					return this.slice(0, n).concat(this.slice(n + 1, this.length));
			}
			if (index == 0) {
				return
			} else {
				this.myStrategyList.splice(index - 1, 0, this.myStrategyList[index])
				this.myStrategyList = this.myStrategyList.del(index + 1)
			}
		}
	}
}
</script>
<style>
.myStrategy-title1 {
	padding-bottom: 50px !important;
}

.myStrategy-title1 .el-col {
	height: 50px;
	line-height: 50px;
	text-align: center;
}

.myStrategy-title2,
.myStrategy-list,
.myStrategy-add {
	border: 1px solid #dfe6ec;
	border-top: none
}

.myStrategy-title2 {
	background: #eef1f6;
	font-weight: 500;
	border-top: 1px solid #dfe6ec
}

.myStrategy-title2 .el-col {
	height: 40px;
	line-height: 40px;
	text-align: center;
}

.myStrategy-list {
	height: 40px;
	line-height: 40px;
	text-align: center;
	font-size: 14px;
}

.myStrategy-list .el-col {
	height: 40px;
	line-height: 40px;
	text-align: center;
}

.el-icon-arrow-down,
.el-icon-arrow-up {
	cursor: pointer;
}

.myStrategy-add {
	height: 50px;
	line-height: 50px;
	text-align: center;
	cursor: pointer;
}
/*.routerLink{
	color: #FF6600;
	text-decoration: none;
}*/
</style>