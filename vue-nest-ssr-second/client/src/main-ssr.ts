import { createApp } from './app'

export default (context: any) => {
  return new Promise(async (resolve, reject) => {
    const { app, router, store } = createApp()

    store.commit('userStore/init', context.user)

    await router.push(context.url)

    router.onReady(() => {
      context.rendered = () => {
        context.state = store.state
      }

      resolve(app)
    }, reject)
  })
}