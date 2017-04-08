<template>
	<div class="menux">
		<el-col :span="4">
			<el-menu :default-active="menuActive" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark" router>
				<el-menu-item index="/">策略管理</el-menu-item>
				<el-menu-item index="/ZDYstrategy">自定义策略</el-menu-item>
				<el-menu-item index="/bidinfo">投标记录</el-menu-item>
			</el-menu>
		</el-col>
	</div>
</template>
<script>
	export default {
		name: 'menux',
		data() {
			return {
				menuActive: '/'
			}
		},
		
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
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