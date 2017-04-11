<template>
	<div class="menux">
		<el-col :span="4">
			<el-menu :default-active="menuActive" class="el-menu-vertical-demo" @select='handleOpen' theme="dark" router>
				<el-menu-item index="/">策略管理</el-menu-item>
				<el-menu-item index="/ZDYstrategy">自定义策略</el-menu-item>
				<el-menu-item index="/bidinfo">投标记录</el-menu-item>
			</el-menu>
		</el-col>
	</div>
</template>
<script>
	import indexRouter from '../router/index.js' ;
	export default {
		name: 'menux',
		data() {
			return {
				menuActive: '',
				menuActiveArray:['/','/ZDYstrategy',"/bidinfo"]
			}
		},
		mounted(){
			this.menuListActive('/',0);
			this.menuListActive('ZDYstrategy',1);
		},
		methods: {
			handleOpen(key, keyPath) {
//				console.log(key, keyPath);
			},
			parseURL(url) {
				var a = document.createElement('a');
				a.href = url;
				return {
					source: url,
					protocol: a.protocol.replace(':', ''),
					host: a.hostname,
					port: a.port,
					query: a.search,
					params: (function() {
						var ret = {},
							seg = a.search.replace(/^\?/, '').split('&'),
							len = seg.length,
							i = 0,
							s;
						for(; i < len; i++) {
							if(!seg[i]) {
								continue;
							}
							s = seg[i].split('=');
							ret[s[0]] = s[1];
						}
						return ret;
					})(),
					file: (a.pathname.match(/\/([^\/?#]+)$/i) || [, ''])[1],
					hash: a.hash.replace('#', ''),
					path: a.pathname.replace(/^([^\/])/, '/$1'),
					relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ''])[1],
					segments: a.pathname.replace(/^\//, '').split('/')
				};
			},
			menuListActive(path,index){
			var _this=this,url=window.location.href,hash=this.parseURL(url).hash;
			for(var i=0;i<this.menuActiveArray.length;i++){
				if(hash=='/'){
					this.menuActive="/"
					break
				}else{
					if(hash.indexOf(this.menuActiveArray[i].split('/')[1])>0){
						this.menuActive=this.menuActiveArray[i];
						break;
					}
				}
			}
			indexRouter.afterEach(route => {
				var elMenuItem=document.getElementsByClassName('el-menu-item');
				console.info(route.path)
				if(route.path=='/'){
					for(var i=0;i<elMenuItem.length;i++){
						elMenuItem[i].classList.remove('is-active');
					}
						elMenuItem[0].classList.add('is-active');	
						return;
				}else if(route.path!='/' && route.path.indexOf(path)>0){
					for(var i=0;i<elMenuItem.length;i++){
						elMenuItem[i].classList.remove('is-active');
					}
					elMenuItem[index].classList.add('is-active');
				}else{
					elMenuItem[index].classList.remove('is-active');
				}
			})
			}
		}
	}
</script>

<style>
	.menuxlistStyle {
		height: 70px;
		background: #3d454d;
		text-align: center;
		line-height: 70px;
		cursor: pointer;
		border-bottom: 1px solid white;
	}
	
	.menuxlistStyle a {
		text-decoration: none;
		color: #b9bbbe;
	}
	
	.menuxlistStyle .active {
		color: #FF6600;
	}
</style>