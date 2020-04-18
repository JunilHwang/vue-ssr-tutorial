export default {

  namespaced: true,

  state: () => ({
    userInfo: null
  }),

  mutations: {
    init (state: any, user: any) {
      state.userInfo = user
    }
  }
}