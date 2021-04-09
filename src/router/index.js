import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Testimony from '../views/Testimony.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Testimony.vue',
    name: 'Testimony',
    component: Testimony
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
