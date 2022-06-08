import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VuePapaParse from 'vue-papa-parse'
// import { BootstrapVue } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

createApp(App)
    .use(VuePapaParse)
    .use(router)
    // .use(BootstrapVue)
    .mount('#app')
