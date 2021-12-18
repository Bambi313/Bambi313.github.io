import Vue from 'vue'
import VueRouter from 'vue-router'
import i18n from '../lib/i18n/lang'

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
        component: () => import('../views/Home.vue')
      },
      {
        path: 'about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      },
      {
        path: 'blog/',
        name: 'Blog',
        component: () => import('../views/Blog.vue')
      },
      // blog
      {
        path: 'blog/fix-router-redirect-while-using-vue-and-gitpage',
        // name: 'article1',
        component: () => import('../views/blog/article_1_20211116.vue')
      },
      {
        path: 'blog/funsiamo-cake-making-experience',
        // name: 'article2',
        component: () => import('../views/blog/article_1_20211218.vue')
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
