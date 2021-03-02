import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about/1',
    component: () => import('../components/HelloWorldA.vue')
  },

  {
    path: '/about/2',
    component: () => import('../components/HelloWorldB.vue')
  },
  {
    path: '/about/:id([\\d+a-d])',
    name: 'About',
    component: () => import('../views/About.vue')
  },
]
const router = new VueRouter({
  routes
})

export default router
