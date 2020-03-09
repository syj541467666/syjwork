import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import About from '../views/About.vue'
import Product from '../views/Product.vue'
import News from '../views/News.vue'
import Solve from '../views/Solve.vue'
import Case from '../views/Case.vue'
import Contact from '../views/Contact.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  }, {
    path: '/about',
    name: 'About',
    component: About
  }, {
    path: '/product',
    name: 'Product',
    component: Product
  }, {
    path: '/news',
    name: 'News',
    component: News
  }, {
    path: '/solve',
    name: 'Solve',
    component: Solve
  }, {
    path: '/case',
    name: 'Case',
    component: Case
  }, {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }

]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
