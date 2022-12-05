import Router from 'vue-router'
import Vue from 'vue'
Vue.use(Router)

import HomeComp from './components/HomeComp.vue'
import ViewComp from './components/ViewComp.vue'
import LoginComp from './components/LoginComp.vue'

const routes = [
    {
      path: '/',
      name: 'HomeComp',
      component: HomeComp
    },
    {
      path: '/viewmovie',
      name: 'ViewComp',
      component: ViewComp
    },
    {
        path: '/login',
        name: 'LoginComp',
        component: LoginComp
    }
]

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
  
export default router
