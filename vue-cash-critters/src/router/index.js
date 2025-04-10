import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CritterView from '@/views/CritterView.vue';
import CritterDetailView from '@/views/CritterRoomView.vue';
import AdoptView from '@/views/AdoptView.vue';
import AboutView from '@/views/AboutView.vue'
import HowToPlayView from '@/views/HowToPlayView.vue';
import GeneralStoreView from '@/views/GeneralStoreView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/critters',
      name: 'critters',
      component: CritterView
    },
    {
      path: '/critters/:crittername',
      name: 'critter-room',
      component: CritterDetailView
    },
    {
      path: '/adopt',
      name: 'adopt',
      component: AdoptView,
    },
    {
      path: '/howtoplay',
      name: 'howtoplay',
      component: HowToPlayView
    },
    {
      path: '/store',
      name: 'store',
      component: GeneralStoreView
    }
  ]
})

export default router
