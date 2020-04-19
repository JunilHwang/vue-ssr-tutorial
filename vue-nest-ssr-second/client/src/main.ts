import { createApp } from './app'

const { app, store } = createApp()

if ((window as any).__INITIAL_STATE__) {
  store.replaceState((window as any).__INITIAL_STATE__)
}

app.$mount('#app', true)
