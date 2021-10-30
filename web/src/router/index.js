import Vue from 'vue'
import VueRouter from 'vue-router'
import i18n from '../lib/i18n/lang'

import Home from '../views/Home.vue'

import MissingPage from '../views/MissingPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect: `/${i18n.locale}`
  },
  {
    path: '/:lang',
    component:{
      render (c) { return c('router-view') }
    },
    children:[
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: 'about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      },
      {
        path: '*',
        component: MissingPage
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

router.beforeEach((to, from, next)=>{
  let lang = to.params.lang;
  if( !lang ) {
    lang = 'tw'
  }

  i18n.locale = lang;
  next()
})
