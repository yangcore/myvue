<template>
	<div class="contentx">
		<el-col :span="24">
			
			<router-view></router-view>
			
			<!--<userinfo></userinfo>-->
		</el-col>
	</div>
</template>
<script>
	export default {
	  name: 'contentx',
	}
</script>

<style>
	.contentx{
		background: white;
		width: 1000px;
		float: left;
		height: auto;
		padding-bottom: 100px
	}
	.el-col {
		margin: 0 auto;
	}
</style>