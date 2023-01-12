import {createRouter, createWebHistory} from 'vue-router'
import Index from '@/views/Index.vue'
import CSS from '@/components/layout/Quiz_css.vue'
import HTML from '@/components/layout/Quiz_html.vue'
import JS from '@/components/layout/Quiz_js.vue'
import Registration from '@/components/layout/Registration_form.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
 {
   path: '/',
   name: 'Index',
   component: Index
   },
 {
   path: '/quiz_css',
   name: 'CSS',
   component: CSS
   },
  {
    path: '/quiz_html',
    name: 'HTML',
    component: HTML
  }, 
 {
   path: '/quiz_js',
   name: 'JS',
   component: JS
  },
  {
    path: '/registration_form',
    name: 'Registration',
    component: Registration
   }
]
})

export default router;