import Vue from 'vue'
import Router from 'vue-router'
//import Hello from '@/components/Hello'
import strategyGL from '@/components/strategyGL/strategyGL.vue'
import ZDYstrategy from '@/components/ZDYstrategy/ZDYstrategy.vue'
import bidinfo from '@/components/bidinfo/bidinfo.vue'
Vue.use(Router)

const routercofing = new Router({
    //	 mode: 'history',
    routes: [{
            path: '/',
            name: 'strategyGL',
            component: strategyGL
        },
        {
            path: '/ZDYstrategy',
            name: 'ZDYstrategy',
            component: ZDYstrategy
        }, {
            path: '/bidinfo',
            name: 'bidinfo',
            component: bidinfo
        }
    ]
})
//routercofing.beforeEach((to, from, next) => {
//// ...
////console.info(to,from);
//next();
//})
//routercofing.afterEach(route => {
//console.info(route)
//})
export default routercofing;