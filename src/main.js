// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vueResource from 'vue-resource'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
//import 'element-ui/lib/theme-default/fonts/element-icons.ttf'
//import 'element-ui/lib/theme-default/fonts/element-icons.woff'
import router from './router'
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(vueResource);
/* eslint-disable no-new */
let Hub = new Vue();
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

