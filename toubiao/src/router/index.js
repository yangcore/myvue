import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import userinfo from '@/components/userinfo.vue'
import strategy from '@/components/strategy.vue'
import records from '@/components/records.vue'
Vue.use(Router)

export default new Router({
	 mode: 'history',
  routes: [
    {
      path: '/',
      name: 'userinfo',
      component: userinfo
    },
    {
      path: '/strategy',
      name: 'strategy',
      component: strategy
    },{
      path: '/records',
      name: 'records',
      component: records
    }
  ]
})
