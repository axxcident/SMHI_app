import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CityView from '../views/CityView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/weather/:city/:country',
      name: 'cityView',
      component: CityView
    }
  ]
})

export default router


// {                                      enligt video.
//   path: '/weather/:state/:city',
//   name: 'cityView',
//   component: CityView
// }
