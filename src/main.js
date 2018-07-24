import Vue from 'vue'
import App from './App.vue'
import anime from 'animejs'

Object.defineProperties(Vue.prototype, {'$anime': { value: anime }})

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
