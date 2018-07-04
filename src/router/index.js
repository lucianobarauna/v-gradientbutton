import Vue from 'vue'
import Router from 'vue-router'
import GradientButton from '@/components/GradientButton/GradientButton'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GradientButton',
      component: GradientButton
    }
  ]
})
