<template>
  <div class="ZDYstrategy">
    <el-form :model="ruleForm"
             :rules="rules"
             ref="ruleForm"
             label-width="160px"
             class="demo-ruleForm">
      <!--策略名称-->
      <el-form-item label="策略名称:"
                    prop="strategyName">
        <el-input v-model="ruleForm.strategyName"
                  class="strategyName"></el-input>
      </el-form-item>
      <!--当前策略单笔投资额-->
      <el-form-item label="当前策略单笔投资额:"
                    prop="strategyMoney">
        <el-input v-model="ruleForm.strategyMoney"
                  class="strategyMoney"></el-input>
      </el-form-item>
      <!--借款基本信息——————————————————————————————————————————————————————————————————————————————————————————————-->
      <el-row class="jkinfoTitle">
        <el-col :span="24">
          <h2>借款基本信息</h2></el-col>
      </el-row>
      <!--借款期限范围-->
      <el-row class="Jkqx">
        <el-col :span='5'>
          <el-form-item label="借款期限范围:"
                        required>
          </el-form-item>
        </el-col>
        <el-col :span='5'
                class="leftxx">
          <el-form-item label=""
                        label-width='0'
                        prop="JkqxStart"
                        required>
            <el-input v-model="ruleForm.JkqxStart"></el-input>
          </el-form-item>
        </el-col>
        <el-col class="line"
                :span="2">至</el-col>
        <el-col :span='5'>
          <el-form-item label=""
                        label-width='0'
                        prop="JkqxEnd"
                        required>
            <el-input v-model="ruleForm.JkqxEnd"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span='2'
                class="danwei">个月</el-col>
      </el-row>
  
      <!--借款金额范围-->
      <el-row class="Jkmoney clearBoth">
        <el-col :span='5'>
          <el-form-item label="借款金额范围:"
                        required>
          </el-form-item>
        </el-col>
        <el-col :span='5'
                class="leftxx">
          <el-form-item label=""
                        label-width='0'
                        prop="JkmoneyStart"
                        required>
            <el-input v-model="ruleForm.JkmoneyStart"></el-input>
          </el-form-item>
        </el-col>
        <el-col class="line"
                :span="2">至</el-col>
        <el-col :span='5'>
          <el-form-item label=""
                        label-width='0'
                        prop="JkmoneyEnd"
                        required>
            <el-input v-model="ruleForm.JkmoneyEnd"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span='2'
                class="danwei">元</el-col>
      </el-row>
  
      <!--利率范围-->
      <el-row class="Lnvfw">
        <el-col :span='5'>
          <el-form-item label="利率范围:"
                        required>
          </el-form-item>
        </el-col>
        <el-col :span='5'
                class="leftxx">
          <el-form-item label=""
                        label-width='0'
                        prop="LnvFwStart"
                        required>
            <el-input v-model="ruleForm.LnvFwStart"></el-input>
          </el-form-item>
        </el-col>
        <el-col class="line"
                :span="2">至</el-col>
        <el-col :span='5'>
          <el-form-item label=""
                        label-width='0'
                        prop="LnvFwEnd"
                        required>
            <el-input v-model="ruleForm.LnvFwEnd"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span='2'
                class="danwei">%</el-col>
      </el-row>
  
      <el-row class="clearBoth">
        <el-col :span='5'>
          <el-form-item label="利率范围:"
                        required>
          </el-form-item>
        </el-col>
        <el-checkbox-group v-model="ruleForm.checkedList"
                           @change='getCheckedList'>
          <el-checkbox label="AAA"></el-checkbox>
          <el-checkbox label="AA"></el-checkbox>
          <el-checkbox label="A"></el-checkbox>
          <el-checkbox label="B"></el-checkbox>
          <el-checkbox label="C"></el-checkbox>
          <el-checkbox label="D"></el-checkbox>
          <el-checkbox label="E"></el-checkbox>
          <el-checkbox label="F"></el-checkbox>
        </el-checkbox-group>
      </el-row>
  
      <!--借款人基本信息——————————————————————————————————————————————————————————————-->
  
      <el-row class="jkReninfoTitle">
        <el-col :span="24">
          <h2>借款人基本信息</h2></el-col>
      </el-row>
      <!--年龄范围-->
      <el-row class="JkRenAge">
        <el-col :span='5'>
          <el-form-item label="年龄范围:"
                        required>
          </el-form-item>
        </el-col>
        <el-col :span='5'
                class="leftxx">
          <el-form-item label=""
                        label-width='0'
                        prop="JkRenAgeStart"
                        required>
            <el-input v-model="ruleForm.JkRenAgeStart"></el-input>
          </el-form-item>
        </el-col>
        <el-col class="line"
                :span="2">至</el-col>
        <el-col :span='5'>
          <el-form-item label=""
                        label-width='0'
                        prop="JkRenAgeEnd"
                        required>
            <el-input v-model="ruleForm.JkRenAgeEnd"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span='2'
                class="danwei">岁</el-col>
      </el-row>
      <!--性别-->
      <el-row class="clearBoth">
        <el-col :span='5'>
          <el-form-item label="性别:">
          </el-form-item>
        </el-col>
  
        <el-checkbox-group v-model="ruleForm.sexRadio">
          <el-checkbox label="男"></el-checkbox>
          <el-checkbox label="女"></el-checkbox>
  
        </el-checkbox-group>
      </el-row>
  
      <el-row class="clearBoth">
        <el-col :span='5'>
          <el-form-item label="学历认证状态:">
          </el-form-item>
        </el-col>
        <el-checkbox-group v-model="ruleForm.xlRadio">
          <el-checkbox label="已认证"></el-checkbox>
          <el-checkbox label="未认证"></el-checkbox>
        </el-checkbox-group>
      </el-row>
  
      <!--学历-->
      <el-row class="clearBoth">
        <el-col :span='5'>
          <el-form-item label="学历:">
          </el-form-item>
        </el-col>
        <el-checkbox-group v-model="ruleForm.xlcheckList">
          <el-checkbox label="博士"></el-checkbox>
          <el-checkbox label="硕士"></el-checkbox>
          <el-checkbox label="本科"></el-checkbox>
          <el-checkbox label="专科"></el-checkbox>
          <el-checkbox label="无"></el-checkbox>
        </el-checkbox-group>
      </el-row>
      <!--学习形式-->
      <el-row class="clearBoth">
        <el-col :span='5'>
          <el-form-item label="学习形式:">
          </el-form-item>
        </el-col>
        <el-checkbox-group v-model="ruleForm.xxxsCheckList">
          <el-checkbox label="普通"></el-checkbox>
          <el-checkbox label="研究生"></el-checkbox>
          <el-checkbox label="成人"></el-checkbox>
          <el-checkbox label="自考"></el-checkbox>
          <el-checkbox label="网络教育"></el-checkbox>
          <el-checkbox label="开放教育"></el-checkbox>
          <el-checkbox label="无"></el-checkbox>
        </el-checkbox-group>
      </el-row>
      <!--征信认证-->
      <el-row class="clearBoth">
        <el-col :span='5'>
          <el-form-item label="征信认证:">
          </el-form-item>
        </el-col>
        <el-checkbox-group v-model="ruleForm.zxRadio">
          <el-checkbox label="已认证"></el-checkbox>
          <el-checkbox label="未认证"></el-checkbox>
        </el-checkbox-group>
      </el-row>
      <!--征信认证-->
      <el-row class="clearBoth">
        <el-col :span='5'>
          <el-form-item label="手机认证:">
          </el-form-item>
        </el-col>
        <el-checkbox-group v-model="ruleForm.phoneRadio">
          <el-checkbox label="已认证"></el-checkbox>
          <el-checkbox label="未认证"></el-checkbox>
        </el-checkbox-group>
      </el-row>
  
      <!--借款历史统计——————————————————————————————————————————————————————-->
      <el-row class="jkReninfoTitle">
        <el-col :span="24">
          <h2>借款基本信息</h2></el-col>
      </el-row>
      <!--历史成功借款次数范围-->
      <el-row class="LsJkcs">
        <el-col :span='5'>
          <el-form-item label="历史成功借款次数范围:"
                        label-width='170px'
                        required>
          </el-form-item>
        </el-col>
        <el-col :span='5'
                class="leftxx">
          <el-form-item label=""
                        label-width='0'
                        prop="LsJkcsStart"
                        required>
            <el-input v-model="ruleForm.LsJkcsStart"></el-input>
          </el-form-item>
        </el-col>
        <el-col class="line"
                :span="2">至</el-col>
        <el-col :span='5'>
          <el-form-item label=""
                        label-width='0'
                        prop="LsJkcsEnd"
                        required>
            <el-input v-model="ruleForm.LsJkcsEnd"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span='2'
                class="danwei">次</el-col>
      </el-row>
  
      <!--历史流标借款次数范围-->
      <el-row class="LsJklb clearBoth">
        <el-col :span='5'>
          <el-form-item label="历史流标借款次数范围:"
                        label-width='170px'
                        required>
          </el-form-item>
        </el-col>
        <el-col :span='5'
                class="leftxx">
          <el-form-item label=""
                        label-width='0'
                        prop="LsJklbStart"
                        required>
            <el-input v-model="ruleForm.LsJklbStart"></el-input>
          </el-form-item>
        </el-col>
        <el-col class="line"
                :span="2">至</el-col>
        <el-col :span='5'>
          <el-form-item label=""
                        label-width='0'
                        prop="LsJklbEnd"
                        required>
            <el-input v-model="ruleForm.LsJklbEnd"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span='2'
                class="danwei">次</el-col>
      </el-row>
  
      <!--正常还清次数范围-->
      <el-row class="Zchqcs clearBoth">
        <el-col :span='5'>
          <el-form-item label="正常还清次数范围:"
                        label-width='170px'
                        required>
          </el-form-item>
        </el-col>
        <el-col :span='5'
                class="leftxx">
          <el-form-item label=""
                        label-width='0'
                        prop="ZchqcsStart"
                        required>
            <el-input v-model="ruleForm.ZchqcsStart"></el-input>
          </el-form-item>
        </el-col>
        <el-col class="line"
                :span="2">至</el-col>
        <el-col :span='5'>
          <el-form-item label=""
                        label-width='0'
                        prop="ZchqcsEnd"
                        required>
            <el-input v-model="ruleForm.ZchqcsEnd"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span='2'
                class="danwei">次</el-col>
      </el-row>
  
      <!--逾期（0~15天）还清次数范围-->
      <el-row class="Yqcs015 clearBoth">
        <el-col :span='5'>
          <el-form-item label="逾期（0~15天）还清次数范围:"
                        label-width='170px'
                        required>
          </el-form-item>
        </el-col>
        <el-col :span='5'
                class="leftxx">
          <el-form-item label=""
                        label-width='0'
                        prop="Yqcs015Start"
                        required>
            <el-input v-model="ruleForm.Yqcs015Start"></el-input>
          </el-form-item>
        </el-col>
        <el-col class="line"
                :span="2">至</el-col>
        <el-col :span='5'>
          <el-form-item label=""
                        label-width='0'
                        prop="Yqcs015End"
                        required>
            <el-input v-model="ruleForm.Yqcs015End"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span='2'
                class="danwei">次</el-col>
      </el-row>
  
      <!--逾期（0~15天）还清次数范围-->
      <el-row class="Yqcs15 clearBoth">
        <el-col :span='5'>
          <el-form-item label="逾期（15天以上）次数范围:"
                        label-width='170px'
                        required>
          </el-form-item>
        </el-col>
        <el-col :span='5'
                class="leftxx">
          <el-form-item label=""
                        label-width='0'
                        prop="Yqcs15Start"
                        required>
            <el-input v-model="ruleForm.Yqcs15Start"></el-input>
          </el-form-item>
        </el-col>
        <el-col class="line"
                :span="2">至</el-col>
        <el-col :span='5'>
          <el-form-item label=""
                        label-width='0'
                        prop="Yqcs15End"
                        required>
            <el-input v-model="ruleForm.Yqcs15End"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span='2'
                class="danwei">次</el-col>
      </el-row>
      <!--待还金额范围-->
  
      <el-row class="DhMoney clearBoth">
        <el-col :span='5'>
          <el-form-item label="待还金额范围:"
                        label-width='170px'
                        required>
          </el-form-item>
        </el-col>
        <el-col :span='5'
                class="leftxx">
          <el-form-item label=""
                        label-width='0'
                        prop="DhMoneyStart"
                        required>
            <el-input v-model="ruleForm.DhMoneyStart"></el-input>
          </el-form-item>
        </el-col>
        <el-col class="line"
                :span="2">至</el-col>
        <el-col :span='5'>
          <el-form-item label=""
                        label-width='0'
                        prop="DhMoneyEnd"
                        required>
            <el-input v-model="ruleForm.DhMoneyEnd"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span='2'
                class="danwei">次</el-col>
      </el-row>
  
      <el-row class="clearBoth">
        <el-form-item>
          <el-button type="primary"
                     @click="submitForm('ruleForm')"
                     v-loading.fullscreen.lock="confing.fullscreenLoading"
                     element-loading-text="数据保存中">保存</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-row>
    </el-form>
  </div>
</template>
<script>
    import indexRouter from '../../router/index.js';
    export default {
        name: 'ZDYstrategy',
        data() {
            var _this = this;
            // 检查策略名称
            var checkstrategyName = (rule, value, callback) => {
                // console.info(value)
                if (!value) {
                    return callback(new Error('请输入策略名称'));
                }
                setTimeout(() => {
                    if (!/^(?!_)(?!.*?_$)[a-zA-Z0-9\u4e00-\u9fa5]+$/.test(value)) {
                        if (value.length > 0 && value.length < 30) {
                            callback(new Error('请输入中文、英文、数字，0到30个字'));
                        }
                    } else {
                        callback();
                    }
                }, 500);
            };
            // 检测策略单笔投资额
            var checkStrategyMoney = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('请输入当前策略单笔投资额'));
                }
                setTimeout(() => {
                    if (!Number.isInteger(Number(value))) {
                        callback(new Error('请输入整数数字'));
                    } else {
                        if (Number(value) < 0) {
                            callback(new Error('请输入大于0的值'));
                        } else {
                            callback();
                        }
                    }
                }, 500);
            };
            //借款期限检测
            var checkJkqxStart = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('请输入借款期限起始值'));
                }
                setTimeout(() => {
                    if (!Number.isInteger(Number(value))) {
                        callback(new Error('请输入整数数字'));
                    } else {
                        if (Number(value) < 0) {
                            callback(new Error('请输入大于0的值'));
                        } else if (this.ruleForm.JkqxEnd != '' && Number(value) > Number(this.ruleForm.JkqxEnd)) {
                            callback(new Error('请输入小于借款期限结束值'));
                        } else {
                            console.info(value, this.ruleForm.JkqxEnd)
                            callback();
                        }
                    }
                }, 500);
            };

            var checkJkqxEnd = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('请输入借款期限结束值'));
                }
                setTimeout(() => {
                    if (!Number.isInteger(Number(value))) {
                        callback(new Error('请输入整数数字'));
                    } else {
                        if (Number(value) < 0) {
                            callback(new Error('请输入大于0的值'));
                        } else if (Number(value) < Number(this.ruleForm.JkqxStart)) {
                            callback(new Error('请输入大于借款期限起始值'));
                        } else {
                            callback();
                        }
                    }
                }, 500);
            };


            // 检测金额范围
            var checkJkmoneyStart = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('请输入借款金额起始值'));
                }
                setTimeout(() => {
                    if (!Number.isInteger(Number(value))) {
                        callback(new Error('请输入整数数字'));
                    } else {
                        if (Number(value) < 0) {
                            callback(new Error('请输入大于0的值'));
                        } else if (this.ruleForm.JkmoneyEnd != '' && Number(value) > Number(this.ruleForm.JkmoneyEnd)) {
                            console.info(value, this.ruleForm.JkmoneyEnd)
                            callback(new Error('请输入小于借款金额结束值'));
                        } else {
                            callback();
                        }
                    }
                }, 500);
            };

            var checkJkmoneyEnd = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('请输入借款金额结束值'));
                }
                setTimeout(() => {
                    if (!Number.isInteger(Number(value))) {
                        callback(new Error('请输入整数数字'));
                    } else {
                        if (Number(value) < 0) {
                            callback(new Error('请输入大于0的值'));
                        } else if (Number(value) < Number(this.ruleForm.JkmoneyStart)) {
                            callback(new Error('请输入大于借款金额起始值'));
                        } else {
                            callback();
                        }
                    }
                }, 500);
            };
            // 检测利率范围
            var checkLnvFwStart = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('请输入利率范围起始值'));
                }
                setTimeout(() => {
                    if (!/(^[0-9]+(.[0-9]{1})+([1-9]{1})$)|(^[0-9]+(.[1-9]{1})$)|(^[0-9]*$)/.test(value)) {
                        callback(new Error('请输入大于对于0且最多保留两位数字'));
                    } else if (this.ruleForm.LnvFwEnd != '' && Number(value) > Number(this.ruleForm.LnvFwEnd)) {
                        callback(new Error('请输入小于结束利率结束值'));
                    } else {
                        callback();
                    }
                }, 500);
            };
            var checkLnvFwEnd = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('请输入利率范围结束值'));
                }
                setTimeout(() => {

                    if (!/(^[0-9]+(.[0-9]{1})+([1-9]{1})$)|(^[0-9]+(.[1-9]{1})$)|(^[0-9]*$)/.test(value)) {
                        callback(new Error('请输入大于对于0且最多保留两位数字'))
                    } else if (Number(value) < Number(this.ruleForm.LnvFwStart)) {
                        callback(new Error('请输入大于起始利率起始值'));
                    } else {
                        callback();
                    }

                }, 500);
            };

            // 借款人年龄
            var checkJkRenAgeStart = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('请输入借款人年龄起始值'));
                }
                setTimeout(() => {
                    if (!/^(?:[1-9][0-9]?|1[01][0-9]|120)$/.test(value)) {
                        callback(new Error('请输入1-120的值'));
                    } else if (this.ruleForm.JkRenAgeEnd != '' && Number(value) > Number(this.ruleForm.JkRenAgeEnd)) {
                        callback(new Error('请输入小于借款人年龄的结束值'));
                    } else {
                        callback();
                    }
                }, 500);
            };
            var checkJkRenAgeEnd = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('请输入借款人年龄结束值'));
                }
                setTimeout(() => {
                    if (!/^(?:[1-9][0-9]?|1[01][0-9]|120)$/.test(value)) {
                        callback(new Error('请输入1-120的值'));
                    } else if (Number(value) < Number(this.ruleForm.JkRenAgeStart)) {
                        callback(new Error('请输入大于借款人年龄的起始值'));
                    } else {
                        callback();
                    }
                }, 500);
            };

            // 历史成功借款次数范围
            var checkLsJkcsStart = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('请输入历史成功借款次数起始值'));
                }
                setTimeout(() => {
                    if (!Number.isInteger(Number(value))) {
                        callback(new Error('请输入整数数字'));
                    } else {
                        if (Number(value) < 0) {
                            callback(new Error('请输入大于0的值'));
                        } else if (this.ruleForm.LsJkcsEnd != '' && Number(value) > Number(this.ruleForm.LsJkcsEnd)) {
                            callback(new Error('请输入小于历史成功借款次数的结束值'));
                        } else {
                            callback();
                        }
                    }
                }, 500);
            };

            var checkLsJkcsEnd = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('请输入历史成功借款次数结束值'));
                }
                setTimeout(() => {
                    if (!Number.isInteger(Number(value))) {
                        callback(new Error('请输入整数数字'));
                    } else {
                        if (Number(value) < 0) {
                            callback(new Error('请输入大于0的值'));
                        } else if (Number(value) < Number(this.ruleForm.LsJkcsStart)) {
                            callback(new Error('请输入大于历史成功借款次数的起始值'));
                        } else {
                            callback();
                        }
                    }
                }, 500);
            };


            // 历史流标借款次数范围
            var checkLsJklbStart = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('请输入历史流标借款次数起始值'));
                }
                setTimeout(() => {
                    if (!Number.isInteger(Number(value))) {
                        callback(new Error('请输入整数数字'));
                    } else {
                        if (Number(value) < 0) {
                            callback(new Error('请输入大于0的值'));
                        } else if (this.ruleForm.LsJklbEnd != '' && Number(value) > Number(this.ruleForm.LsJklbEnd)) {
                            callback(new Error('请输入小于历史流标借款次数的结束值'));
                        } else {
                            callback();
                        }
                    }
                }, 500);
            };

            var checkLsJklbEnd = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('请输入历史流标借款次数结束值'));
                }
                setTimeout(() => {
                    if (!Number.isInteger(Number(value))) {
                        callback(new Error('请输入整数数字'));
                    } else {
                        if (Number(value) < 0) {
                            callback(new Error('请输入大于0的值'));
                        } else if (Number(value) < Number(this.ruleForm.LsJklbStart)) {
                            callback(new Error('请输入大于历史流标借款次数的起始值'));
                        } else {
                            callback();
                        }
                    }
                }, 500);
            };



            // 正常还清次数范围
            var checkZchqcsStart = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('请输入正常还清次数起始值'));
                }
                setTimeout(() => {
                    if (!Number.isInteger(Number(value))) {
                        callback(new Error('请输入整数数字'));
                    } else {
                        if (Number(value) < 0) {
                            callback(new Error('请输入大于0的值'));
                        } else if (this.ruleForm.ZchqcsEnd != '' && Number(value) > Number(this.ruleForm.ZchqcsEnd)) {
                            callback(new Error('请输入小于正常还清次数的结束值'));
                        } else {
                            callback();
                        }
                    }
                }, 500);
            };

            var checkZchqcsEnd = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('请输入正常还清次数结束值'));
                }
                setTimeout(() => {
                    if (!Number.isInteger(Number(value))) {
                        callback(new Error('请输入整数数字'));
                    } else {
                        if (Number(value) < 0) {
                            callback(new Error('请输入大于0的值'));
                        } else if (Number(value) < Number(this.ruleForm.ZchqcsStart)) {
                            callback(new Error('请输入大于正常还清次数的起始值'));
                        } else {
                            callback();
                        }
                    }
                }, 500);
            };


            // 逾期（0~15天）还清次数范围
            var checkYqcs015Start = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('请输入逾期（0~15天）还清次数起始值'));
                }
                setTimeout(() => {
                    if (!Number.isInteger(Number(value))) {
                        callback(new Error('请输入整数数字'));
                    } else {
                        if (Number(value) < 0) {
                            callback(new Error('请输入大于0的值'));
                        } else if (this.ruleForm.Yqcs015End != '' && Number(value) > Number(this.ruleForm.Yqcs015End)) {
                            callback(new Error('请输入小于逾期（0~15天）还清次数的结束值'));
                        } else {
                            callback();
                        }
                    }
                }, 500);
            };

            var checkYqcs015End = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('请输入逾期（0~15天）还清次数结束值'));
                }
                setTimeout(() => {
                    if (!Number.isInteger(Number(value))) {
                        callback(new Error('请输入整数数字'));
                    } else {
                        if (Number(value) < 0) {
                            callback(new Error('请输入大于0的值'));
                        } else if (Number(value) < Number(this.ruleForm.Yqcs015Start)) {
                            callback(new Error('请输入大于逾期（0~15天）还清次数的起始值'));
                        } else {
                            callback();
                        }
                    }
                }, 500);
            };


            // 逾期（15天以上）次数范围
            var checkYqcs15Start = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('请输入逾期（15天以上）还清次数起始值'));
                }
                setTimeout(() => {
                    if (!Number.isInteger(Number(value))) {
                        callback(new Error('请输入整数数字'));
                    } else {
                        if (Number(value) < 0) {
                            callback(new Error('请输入大于0的值'));
                        } else if (this.ruleForm.Yqcs15End != '' && Number(value) > Number(this.ruleForm.Yqcs15End)) {
                            callback(new Error('请输入小于逾期（15天以上）还清次数的结束值'));
                        } else {
                            callback();
                        }
                    }
                }, 500);
            };

            var checkYqcs15End = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('请输入逾期（15天以上）还清次数结束值'));
                }
                setTimeout(() => {
                    if (!Number.isInteger(Number(value))) {
                        callback(new Error('请输入整数数字'));
                    } else {
                        if (Number(value) < 0) {
                            callback(new Error('请输入大于0的值'));
                        } else if (Number(value) < Number(this.ruleForm.Yqcs15Start)) {
                            callback(new Error('请输入大于逾期（15天以上）还清次数的起始值'));
                        } else {
                            callback();
                        }
                    }
                }, 500);
            };





            //待还金额范围
            var checkDhMoneyStart = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('请输入待还金额范围起始值'));
                }
                setTimeout(() => {
                    if (!/(^[0-9]+(.[0-9]{1})+([1-9]{1})$)|(^[0-9]+(.[1-9]{1})$)|(^[0-9]*$)/.test(value)) {
                        callback(new Error('请输入大于对于0且最多保留两位数字'));
                    } else if (this.ruleForm.DhMoneyEnd != '' && Number(value) > Number(this.ruleForm.DhMoneyEnd)) {
                        callback(new Error('请输入小于待还金额范围结束值'));
                    } else {
                        callback();
                    }
                }, 500);
            };
            var checkDhMoneyEnd = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('请输入待还金额范围结束值'));
                }
                setTimeout(() => {

                    if (!/(^[0-9]+(.[0-9]{1})+([1-9]{1})$)|(^[0-9]+(.[1-9]{1})$)|(^[0-9]*$)/.test(value)) {
                        callback(new Error('请输入大于对于0且最多保留两位数字'))
                    } else if (Number(value) < Number(this.ruleForm.DhMoneyStart)) {
                        callback(new Error('请输入大于待还金额范围起始值'));
                    } else {
                        callback();
                    }

                }, 500);
            };



            return {
                confing: {
                    fullscreenLoading: ''
                },
                ruleForm: {
                    // delivery: false,
                    strategyName: '', //策略名称
                    strategyMoney: '', //策略金额
                    JkqxStart: 0, //借款期限范围开始时间
                    JkqxEnd: '', //借款期限范围结束时间
                    JkmoneyStart: 0, //借款金额范围开始
                    JkmoneyEnd: '', //借款金额范围结束
                    LnvFwStart: '', //利率开始
                    LnvFwEnd: '', //利率结束
                    checkedList: [], //魔镜选择
                    JkRenAgeStart: '', //借款人年龄开始
                    JkRenAgeEnd: '', //借款人年龄结束
                    sexRadio: [], //性别
                    xlRadio: [], //学历认证
                    xlcheckList: [], //学历
                    xxxsCheckList: [], //学习形式
                    zxRadio: [], //征信
                    phoneRadio: [], //手机认证
                    LsJkcsStart: '', //历史成功借款次数开始
                    LsJkcsEnd: '', //历史成功借款次数结束
                    LsJklbStart: '', //历史流标借款次数开始
                    LsJklbEnd: '', //历史流标借款次数结束
                    ZchqcsStart: '', //正常还清次数范围开始
                    ZchqcsEnd: '', //正常还清次数范围结束
                    Yqcs015Start: '', //0-15逾期开始
                    Yqcs015End: '', //0-15逾期结束
                    Yqcs15Start: '', //15以上逾期开始
                    Yqcs15End: '', //15以上逾期结束
                    DhMoneyStart: '', //待还金额开始
                    DhMoneyEnd: '', //待还金额结束
                },
                rules: {
                    strategyName: [{
                        required: true,
                        validator: checkstrategyName,
                        trigger: 'blur'
                    }],
                    strategyMoney: [{
                        required: true,
                        type: 'number',
                        validator: checkStrategyMoney,
                        trigger: 'blur'
                    }],
                    JkqxStart: [{
                        required: true,
                        type: 'number',
                        validator: checkJkqxStart,
                        trigger: 'blur'
                    }],
                    JkqxEnd: [{
                        required: true,
                        type: 'number',
                        validator: checkJkqxEnd,
                        trigger: 'blur'
                    }],
                    JkmoneyStart: [{
                        required: true,
                        type: 'number',
                        validator: checkJkmoneyStart,
                        trigger: 'blur'
                    }],
                    JkmoneyEnd: [{
                        required: true,
                        type: 'number',
                        validator: checkJkmoneyEnd,
                        trigger: 'blur'
                    }],
                    LnvFwStart: [{
                        required: true,
                        type: 'number',
                        validator: checkLnvFwStart,
                        trigger: 'blur'
                    }],
                    LnvFwEnd: [{
                        required: true,
                        type: 'number',
                        validator: checkLnvFwEnd,
                        trigger: 'blur'
                    }],
                    JkRenAgeStart: [{
                        required: true,
                        type: 'number',
                        validator: checkJkRenAgeStart,
                        trigger: 'blur'
                    }],
                    JkRenAgeEnd: [{
                        required: true,
                        type: 'number',
                        validator: checkJkRenAgeEnd,
                        trigger: 'blur'
                    }],
                    LsJkcsStart: [{
                        required: true,
                        type: 'number',
                        validator: checkLsJkcsStart,
                        trigger: 'blur'
                    }],
                    LsJkcsEnd: [{
                        required: true,
                        type: 'number',
                        validator: checkLsJkcsEnd,
                        trigger: 'blur'
                    }],
                    LsJklbStart: [{
                        required: true,
                        type: 'number',
                        validator: checkLsJklbStart,
                        trigger: 'blur'
                    }],
                    LsJklbEnd: [{
                        required: true,
                        type: 'number',
                        validator: checkLsJklbEnd,
                        trigger: 'blur'
                    }],
                    ZchqcsStart: [{
                        required: true,
                        type: 'number',
                        validator: checkZchqcsStart,
                        trigger: 'blur'
                    }],
                    ZchqcsEnd: [{
                        required: true,
                        type: 'number',
                        validator: checkZchqcsEnd,
                        trigger: 'blur'
                    }],
                    Yqcs015Start: [{
                        required: true,
                        type: 'number',
                        validator: checkYqcs015Start,
                        trigger: 'blur'
                    }],
                    Yqcs015End: [{
                        required: true,
                        type: 'number',
                        validator: checkYqcs015End,
                        trigger: 'blur'
                    }],
                    Yqcs15Start: [{
                        required: true,
                        type: 'number',
                        validator: checkYqcs15Start,
                        trigger: 'blur'
                    }],
                    Yqcs15End: [{
                        required: true,
                        type: 'number',
                        validator: checkYqcs15End,
                        trigger: 'blur'
                    }],
                    DhMoneyStart: [{
                        required: true,
                        type: 'number',
                        validator: checkDhMoneyStart,
                        trigger: 'blur'
                    }],
                    DhMoneyEnd: [{
                        required: true,
                        type: 'number',
                        validator: checkDhMoneyEnd,
                        trigger: 'blur'
                    }]
                }
            };
        },
        mounted() {

        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (!valid) {
                        // alert('submit!');
                        this.confing.fullscreenLoading = true;
                        setTimeout(() => {
                            this.confing.fullscreenLoading = false;
                        }, 3000);
                        setTimeout(() => {
                            indexRouter.push({
                                path: '/'
                            });
                        }, 3001)
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                for (var key in this.ruleForm) {
                    if (this.ruleForm[key] instanceof Array) {
                        this.ruleForm[key] = [];
                    }
                }
                this.$refs[formName].resetFields();
            },
            getCheckedList(e) {
                console.info(this.ruleForm.checkedList)
            }
        }
    }
</script>

<style>
    .ZDYstrategy {
        width: 90%;
        margin: 0 auto;
        margin-top: 50px
    }

    .ZDYstrategy .strategyName,
    .ZDYstrategy .strategyMoney {
        width: 100px;
    }

    .jkinfoTitle {
        height: 50px;
        line-height: 50px;
        font-size: 16px;
        border-bottom: 1px solid black;
        margin-bottom: 40px
    }

    .ZDYstrategy .line {
        width: 100px;
        text-align: center;
    }

    .jkReninfoTitle {
        height: 50px;
        margin-bottom: 40px;
        border-bottom: 1px solid black;
    }
    /*.ZDYstrategy .Jkmoney .el-input{
    width: 193px
}*/

    .leftxx {
        margin-left: -26px !important;
    }

    .Lnvfw {
        clear: both
    }

    .clearBoth {
        clear: both;
    }

    .danwei {
        text-align: center;
    }

    .ZDYstrategy .el-row {
        margin-bottom: 20px
    }
</style>