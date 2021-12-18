import Vue from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './lib/i18n/lang'
import store from './store/index'
import VueMarkdown from 'vue-markdown'

import './assets/css/line-awesome.min.css'
Vue.component('vue-markdown', VueMarkdown);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  // VueMarkdown,
  render: h => h(App),
}).$mount('#app')
