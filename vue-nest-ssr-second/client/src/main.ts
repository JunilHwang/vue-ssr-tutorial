import Vue from 'vue'
import App from './App.vue'
import { createRouter, createStore } from './middleware'

Vue.config.productionTip = false

const router = createRouter()
const store = createStore()

console.log((window as any).__INITIAL_STATE__)

if ((window as any).__INITIAL_STATE__) {
  store.replaceState((window as any).__INITIAL_STATE__)
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
