import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('views/home/Home.vue')
const Cart = () => import('views/cart/Cart.vue')
const Category = () => import('views/category/Category.vue')
const Profile = () => import('views/profile/Profile.vue')


Vue.use(VueRouter)

const routes = [
  {
  	path:'',
  	redirect:'/home',
  },
  {
  	path:'/cart',
  	component:Cart
  },
  {
  	path:'/profile',
  	component:Profile
  },
  {
  	path:'/category',
  	component:Category
  },
  {
  	path:'/home',
  	component:Home
  }
    
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
