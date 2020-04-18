import Vue from 'vue'
import App from './App.vue'
import { createRouter, createStore } from './middleware'

Vue.config.productionTip = false

export default (context: any) => new Promise(async (resolve, reject) => {
  const router = createRouter()
  const store = createStore()

  store.commit('userStore/init', context.user)

  await router.push(context.url)

  router.onReady(
() => {
      const render = (h: Function) => h(App)
      const app = new Vue({ router, store, render }).$mount('#app')
      resolve(app)
    },
    reject
  )
})