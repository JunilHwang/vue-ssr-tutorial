import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router'
import { createStore } from './store'

Vue.config.productionTip = false

export default (context: any) => {
  return new Promise(async (resolve, reject) => {

    const router = createRouter()
    const store = createStore()
    const app = new Vue({
      data: {
        url: context.url
      },
      router,
      store,
      render: h => h(App)
    })

    await router.push(context.url)

    router.onReady(() => {
      resolve(app)
    }, reject)
  })
}