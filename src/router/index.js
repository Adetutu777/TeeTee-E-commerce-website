import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Catalog from '../views/catalog/Catalog.vue'
import description from '../views/catalog/description.vue'
import cart from '../views/catalog/cart.vue'
import Contact from '../views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    component:About
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: Catalog
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  
  {
    path: '/catalog/:id',
    name: 'description',
    component: description
  },
  // {
  //   path: '/cart',
  //   name: 'cart',
  //   component: cart
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
