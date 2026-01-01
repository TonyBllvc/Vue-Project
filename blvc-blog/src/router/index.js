import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Details from '../views/Details.vue'
import NotFound from '@/views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: "/posts/:id",
    name: "details",
    component: Details,
    props: true // helps to access the parameter as a prop in the component
  },
  // Catch all 404
  {
    path: '/:catchAll(.*)',
    name: "notFound",
    component: NotFound

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
