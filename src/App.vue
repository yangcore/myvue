<template>
  <div id="app">
    <!--<router-view></router-view>-->
    <navheader :userName='userName'></navheader>
   <div class="appmain">
    	<menux></menux>
    	<contentx></contentx>
   </div>
   </div>
</template>

<script>
	import menux from './components/menu.vue';
	import navheader from './components/navheader.vue';
	import contentx from './components/content.vue';
	import indexRouter from './router/index.js' ;
	import Hub from './eventHub.js';
	export default {
	  name: 'app',
	  indexRouter,
	  template: ['<menux/>','<navheader/>','<contentx/>'],
	  components: { menux,navheader,contentx },
		data(){
			return{
				userName:''
			}
		},
		created (){
			Hub.$emit('userName',this.GetQueryString('userName'));
		},
		mounted () {
			this.userName = this.GetQueryString('userName');
			Hub.$emit('userName',this.GetQueryString('userName'));
			indexRouter.afterEach(route => {
					// console.info(route);
					if(route.name=='strategyGL'){
							Hub.$emit('userName',this.GetQueryString('userName'));
					}
			})
		},
	  methods: {
		GetQueryString(name){
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
			}
		}
	}
</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
*{
	margin: 0;
	padding: 0;
	font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
#app{
	width: 1200px;
	margin: 0 auto;
}
.appmain{
	clear: both;
	overflow: hidden;
}
</style>
