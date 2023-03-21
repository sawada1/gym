import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import aboutView from '../views/AboutView.vue'
import blogGrid from '../views/blogGrid.vue'
import blogDetail from '../views/blogDetail.vue'
import testi from '../views/testi.vue'
import contact from '../views/contact.vue'
import classes from '../views/classes.vue'
import trainers from '../views/trainers.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    component: aboutView,
  },
  {
    path: '/blogGrid',
    name: 'blogGrid',
    component: blogGrid
  },
  {
    path: '/testi',
    name: 'testi',
    component: testi
  },
  {
    path: '/blogDetail',
    name: 'blogDetail',
    component: blogDetail
  },
  {
    path: '/contact',
    name: 'contact',
    component:contact
  },
  {
    path: '/trainers',
    name: 'trainers',
    component: trainers
  },
  {
    path: '/classes',
    name: 'classes',
    component:classes
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
