import {createRouter, createWebHistory} from 'vue-router'
import Index from '@/views/Index.vue'
import Button from '@/components/layout/Button.vue'
import Tip from '@/components/layout/Tip.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
 {
   path: '/',
   name: 'Index',
   component: Index
   },
 {
   path: '/button',
   name: 'Button',
   component: Button
   },
 {
   path: '/tip',
   name: 'Tip',
   component: Tip
   },
]
})

export default router;