import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import category from '@/components/category.vue'
import discover from '@/components/discover.vue'
import cart from '@/components/cart.vue'
import user from '@/components/user.vue'

Vue.use(VueRouter)
  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/category',
    name: 'category',
    component: category
  },
  {
    path: '/discover',
    name: 'discover',
    component: discover
  },
  {
    path: '/cart',
    name: 'cart',
    component: cart
  },
  {
    path: '/user',
    name: 'user',
    component: user
  }
]

const router = new VueRouter({
  routes
})

export default router
