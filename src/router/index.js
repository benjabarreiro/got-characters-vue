import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

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
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/stark',
    name: 'Stark',
    component: () => import('../views/Stark.vue')
  },
  {
    path: '/lannister',
    name: 'Lannister',
    component: () => import('../views/Lannister.vue')
  },
  {
    path: '/targaryen',
    name: 'Targaryen',
    component: () => import('../views/Targaryen.vue')
  },
  {
    path: '/baratheon',
    name: 'Baratheon',
    component: () => import('../views/Baratheon.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
