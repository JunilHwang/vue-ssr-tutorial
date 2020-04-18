import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const createRouter = () => new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('@/views/About.vue')
    },
    {
      path: '/user',
      name: 'User',
      component: () => import('@/views/User.vue')
    }
  ]
})
