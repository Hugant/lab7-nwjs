import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Lab from '@/components/Lab'
import Update from '@/components/Update'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/lab',
      name: 'Lab',
      component: Lab
    },
    {
      path: '/update',
      name: 'Update',
      component: Update
    }
  ]
})
