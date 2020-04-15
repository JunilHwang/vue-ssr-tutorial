import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router'
import { createStore } from './store'

Vue.config.productionTip = false

export default (context: any) => {
  return new Promise(async (resolve, reject) => {

    const router = createRouter()
    const store = createStore()

    await router.push(context.url)

    router.onReady(() => {
      const app = new Vue({
        router,
        store,
        render: h => h(App)
      })
      resolve(app)
    }, reject)
  })
}