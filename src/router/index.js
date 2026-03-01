import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/Index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL || '/portfolio/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    }
  ]
})

export default router