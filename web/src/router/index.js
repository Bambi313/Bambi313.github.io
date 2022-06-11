import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/sticker',
    name: 'home',
    component: HomeView
  },
  {
    path: '/',
    name: 'allSticker',
    component: () => import(/* webpackChunkName: "allSticker" */ '../views/AllStickerView.vue')
  },
  {
    path: '/return',
    name: 'return',
    component: () => import(/* webpackChunkName: "return" */ '../views/ReturnView.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
