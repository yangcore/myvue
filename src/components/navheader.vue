<template>
    <div class="navheader">
    
        <el-row>
            <el-col :span="5">
                <div class="grid-content bg-purple-dark">logo</div>
            </el-col>
            <el-col :span="19">
                <div class="grid-content bg-purple-dark">
                    <el-dropdown class="point"
                                 trigger='click'>
                        <span class="el-dropdown-link">
    			      		  {{userName}}
    			        <i class="el-icon-caret-bottom el-icon--right"></i>
    			      </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>退出</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    name: 'navheader',
    props: ['userName']
}
</script>

<style>
.navheader {
    height: 70px;
    background: black;
    color: white;
    line-height: 70px;
    text-align: center;
}

.navheader .el-col {
    height: 70px;
    line-height: 70px;
}

.el-dropdown {
    float: right;
    margin-right: 5%;
}

.el-dropdown-link {
    color: white;
}

.point {
    cursor: pointer;
}
</style>