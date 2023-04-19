import Home from '../views/Home.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Settings from '../views/Settings.vue'

const routes = [
  {
    path: '',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
    children: [
      {
        path: ":id",
        name: "SpecificSettings",
        component: () => import('../views/SpecificSettings.vue')
      }
    ]
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
