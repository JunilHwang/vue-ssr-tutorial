import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const createStore = (context: { [k: string]: string }) => {
  const state = { ...context }
  const mutations = {}
  const actions = {}
  const modules = {}
  return new Vuex.Store({ state, mutations, actions, modules })
}