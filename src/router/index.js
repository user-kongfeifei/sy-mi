import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Category from '@/components/Category.vue'
import Discover from '@/components/Discover.vue'
import Cart from '@/components/Cart.vue'
import User from '@/components/User.vue'
import product from "../components/Product.vue"
// 产品路由
import searchList from "../components/SearchList.vue"
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
    component: Category
  },
  {
    path: '/discover',
    name: 'discover',
    component: Discover
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/user',
    name: 'user',
    component: User
  },
  {
    path:'/product',
    name:'product',
    component:product
  },
  {
    path:'/search',
    name:'searchList',
    component:searchList
  }
]

const router = new VueRouter({
  routes
})

export default router
