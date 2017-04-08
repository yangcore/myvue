<template>
	<div class="menux">
		<el-col :span="4">
    		<el-menu  default-active="/" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark"  router>
	      <el-menu-item index="/" >策略管理</el-menu-item>
	      <el-menu-item index="/strategy">自定义策略</el-menu-item>
	      <el-menu-item index="/records">投标记录</el-menu-item>
    </el-menu>
		</el-col>
	</div>
</template>
<script>
	export default {
		name: 'menux',
		data() {
			return {
				
			}
		},
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
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
	.menuxlistStyle a{
		text-decoration: none;
		color: #b9bbbe;
	}
	.menuxlistStyle .active{
		color: #FF6600;
	}
</style>