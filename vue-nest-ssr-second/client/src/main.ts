import { createApp } from './app'

const { app, store } = createApp()

const { initState } = window as any

if (initState) {
  const { user } = initState
  if (user) {
    store.commit('userStore/init', user)
  }
}

app.$mount('#app', true)
