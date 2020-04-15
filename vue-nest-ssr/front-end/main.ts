import { router } from './router'
import { store } from './store'
import Vue from "vue";
import App from "@/App.vue";

router.onReady(() => {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
})
