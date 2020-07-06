import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
const Home = () => import('../views/Home.vue')
const About = () => import('../views/About.vue')
const Share = () => import('../views/Share.vue')
const Shopcart = () => import('../views/Shopcart.vue')
Vue.use(VueRouter)

  const routes = [
    // {
    //   path: '',
    //   redirect: '/home'
    // },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/share',
      component: Share
    },
    {
      path: '/shopcart',
      component: Shopcart
    }
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    
  
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
