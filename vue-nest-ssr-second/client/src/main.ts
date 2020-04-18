import Vue from 'vue'
import App from './App.vue'
import { createRouter, createStore } from './middleware'

Vue.config.productionTip = false

const router = createRouter()
const store = createStore()

const w: any = window

console.log(w.__INITIAL_STATE__)

if (w.__INITIAL_STATE__) {
  store.replaceState(w.__INITIAL_STATE__)
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
