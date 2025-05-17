import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import Jobs from '@/views/jobs/Jobs.vue'
import JobDetails from '@/views/jobs/JobDetails.vue'
import NotFound from '@/views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
    // // route level code-splitting
    // // this generates a separate chunk (about.[hash].js) for this route
    // // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/jobs',
    name: "jobs",
    component: Jobs
  },
  {
    path: '/jobs/:id',
    name: "jobDetails",
    component: JobDetails,
    props: true //  accept any params as props in another component i.e: Jobs in JobDetails
  },
  // Redirect
  {
    path: '/all-jobs',
    redirect: '/jobs'
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
