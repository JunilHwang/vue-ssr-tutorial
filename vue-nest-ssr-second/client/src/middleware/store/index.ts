import Vue from 'vue'
import Vuex from 'vuex'
import userStore from './user'

Vue.use(Vuex)

export const createStore = () => {
  const state = () => ({ })
  const mutations = {  }
  const actions = { }
  const modules = { userStore }
  return new Vuex.Store({ state, mutations, actions, modules })
}