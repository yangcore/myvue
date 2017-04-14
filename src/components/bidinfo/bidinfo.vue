<template>
  <div class="bidinfo">
    <el-row>
      <el-col :span='3'>
        投标时间：
      </el-col>
      <el-col :span='10'>
        <el-date-picker v-model="value3"
                        :editable=false
                        type="datetimerange"
                        placeholder="请选择投标时间范围"
                        format="yyyy-MM-dd HH:mm">
        </el-date-picker>
      </el-col>
      <el-col :span='3'>
        策略名称：
      </el-col>
      <el-col :span='5'>
        <el-autocomplete class="inline-input"
                         v-model="state2"
                         :fetch-suggestions="querySearch"
                         placeholder="请输入内容"
                         :trigger-on-focus="false"
                         @select="handleSelect"></el-autocomplete>
      </el-col>
    </el-row>
  
    <el-row class="pat20">
      <el-col :span='3'>标的状态：</el-col>
      <el-col :span='13'>
        <el-radio-group v-model="biaoState">
          <el-radio-button label="投标中"></el-radio-button>
          <el-radio-button label="投标成功"></el-radio-button>
          <el-radio-button label="投标失败"></el-radio-button>
        </el-radio-group>
      </el-col>
      <el-button type="success">查询</el-button>
      <el-button type="info">下载</el-button>
    </el-row>
    <!--table-->
    <div v-show="tableShow"
         style="padding-bottom:50px">
      <el-col class="pat50">共<span class="cfclor">10</span>条记录 实际投标总金额：<span class="cfclor">394.39元</span></el-col>
  
      <el-table :data="tableData"
                style="width: 100%">
        <el-table-column prop="name"
                         label="策略名称">
        </el-table-column>
        <el-table-column prop="bidId"
                         label="标的ID">
        </el-table-column>
        <el-table-column prop="tbMoney"
                         label="投标金额">
        </el-table-column>
        <el-table-column prop="sjtbMoney"
                         label="实际投标金额"
                         width='120'>
        </el-table-column>
        <el-table-column prop="biaoDj"
                         label="标的等级">
        </el-table-column>
        <el-table-column prop="jkLv"
                         label="借款利率">
        </el-table-column>
        <el-table-column prop="qx"
                         label="期限">
        </el-table-column>
        <el-table-column prop="biaostate"
                         label="标的状态">
        </el-table-column>
        <el-table-column prop="biaoTime"
                         label="投标时间"
                         width='110'>
        </el-table-column>
      </el-table>
    </div>
    <el-pagination @size-change="handleSizeChange"
                   @current-change="handleCurrentChange"
                   :current-page="currentPage1"
                   :page-size="100"
                   layout="total, prev, pager, next"
                   :total="1000">
    </el-pagination>
  
  </div>
</template>

<script>
    export default {
        name: 'bidinfo',
        data() {
            return {
                value3: '',
                state2: '',
                biaoState: '',
                tableData: [{
                    name: '稳健快投',
                    bidId: '1000000',
                    tbMoney: '1518',
                    sjtbMoney: '2000',
                    biaoDj: '5',
                    jkLv: '10%',
                    qx: '15',
                    biaostate: '成功',
                    biaoTime: '2017-04-11 15:59'
                }, {
                    name: '稳健快投',
                    bidId: '1000000',
                    tbMoney: '1518',
                    sjtbMoney: '2000',
                    biaoDj: '5',
                    jkLv: '10%',
                    qx: '15',
                    biaostate: '成功',
                    biaoTime: '2017-04-11 15:59'
                }],
                //是否显示表格
                tableShow: true,
                currentPage1: 1,
            }
        },
        methods: {
            querySearch(queryString, cb) {
                var restaurants = this.restaurants;
                var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
                // 调用 callback 返回建议列表的数据
                cb(results);
            },
            createFilter(queryString) {
                return (restaurant) => {
                    return (restaurant.value.indexOf(queryString.toLowerCase()) === 0);
                };
            },
            loadAll() {
                return [{
                        "value": "三全鲜食（北新泾店）",
                        "address": "长宁区新渔路144号"
                    },
                    {
                        "value": "Hot honey 首尔炸鸡（仙霞路）",
                        "address": "上海市长宁区淞虹路661号"
                    },
                    {
                        "value": "新旺角茶餐厅",
                        "address": "上海市普陀区真北路988号创邑金沙谷6号楼113"
                    },
                    {
                        "value": "泷千家(天山西路店)",
                        "address": "天山西路438号"
                    },
                    {
                        "value": "胖仙女纸杯蛋糕（上海凌空店）",
                        "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101"
                    },
                    {
                        "value": "贡茶",
                        "address": "上海市长宁区金钟路633号"
                    },
                    {
                        "value": "豪大大香鸡排超级奶爸",
                        "address": "上海市嘉定区曹安公路曹安路1685号"
                    }
                ];
            },
            handleSelect(item) {
                console.log(item);
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                this.currentPage = val;
                console.log(`当前页: ${val}`);
            }
        },
        mounted() {
            this.restaurants = this.loadAll();
        }
    }
</script>

<style>
    .bidinfo {
        padding-top: 50px;
        padding-left: 30px
    }

    .bidinfo .pat20 {
        padding-top: 20px
    }

    .bidinfo .pat50 {
        padding-top: 50px;
        padding-bottom: 50px;
    }

    .cfclor {
        color: #ff6600
    }

    .bidinfo .cell {
        text-align: center;
    }
</style>