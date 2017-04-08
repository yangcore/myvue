<template>
	<div class="navheader">
		<el-row>
		  <el-col :span="5"><div class="grid-content bg-purple-dark">logo</div></el-col>
		  <el-col :span="19">
		  	<div class="grid-content bg-purple-dark">
			  	<el-dropdown>
			      <span class="el-dropdown-link">
			      		  下拉菜单
			        <i class="el-icon-caret-bottom el-icon--right"></i>
			      </span>
			      <el-dropdown-menu slot="dropdown">
			        <el-dropdown-item>黄金糕</el-dropdown-item>
			        <el-dropdown-item>狮子头</el-dropdown-item>
			      </el-dropdown-menu>
			    </el-dropdown>
		  </div>
		  </el-col>
		</el-row>
	</div>
</template>
<script>
	export default {
	  name: 'navheader'
}
</script>

<style>
	.navheader{
		height: 70px;
		background: black;
		color: white;
		line-height: 70px;
		text-align: center;
	}
	.el-dropdown{
		float: right;
		margin-right: 5%;
	}
	.el-dropdown-link{
		color: white;
	}
</style>