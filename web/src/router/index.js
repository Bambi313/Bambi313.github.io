import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'allSticker',
    component: () => import(/* webpackChunkName: "allSticker" */ '../views/AllStickerView.vue')
  },
  {
    path: '/single-analyze',
    name: 'singleSticker',
    component: () => import(/* webpackChunkName: "singleSticker" */ '../views/SingleStickerView.vue')
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
