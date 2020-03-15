import Vue from 'vue'
import router from '../admin/router/routes'
import '../admin/components'
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
})