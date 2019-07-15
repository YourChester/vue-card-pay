export default {
  namespaced: true,
  state: {
    history: []
  },
  getters: {
    history(state) {
      return state.history
    }
  },
  mutations: {
    addHistory(state, payload) {
      state.history.push(payload)
    }
  },
  actions: {
    addHistory(store, payload) {
      store.commit('addHistory', payload)
    }
  }
}