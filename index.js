import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Settings from '../views/Settings.vue'
import SpecificSettings from '../views/SpecificSettings.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/a",
      redirect: {
        name: "settings"
      }
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import("../views/About.vue"),
      alias: "/about-us"
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings,
      children: [
        {
          path: ":id",
          name: "SpecificSettings",
          component: SpecificSettings 
        }
      ]
    },
  ]
})

export default router
