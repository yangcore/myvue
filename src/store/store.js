import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {//驱动应用的数据源
    count: 0,
    userName:'初始值'
  },
  mutations: {//变化  //store.commit触发状态变更  //store.state.count 获取数据
   getName(state){
         console.info(state)
       return state;
     
   }
  }
})
export default store;