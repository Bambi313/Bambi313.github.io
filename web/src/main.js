import Vue from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './lib/i18n/lang'
import store from './store/index'

import './assets/css/line-awesome.min.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
