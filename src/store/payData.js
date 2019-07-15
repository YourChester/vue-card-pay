export default {
  namespaced: true,
  state: {
    payData: {},
    show: false,
  },
  getters: {
    payData(state) {
      return state.payData
    },
    show(state) {
      return state.show
    }
  },
  mutations: {
    clearData(state, payload) {
      state.payData = payload
      state.show = false;
    },
    addData(state, payload) {
      state.payData = payload
      state.show = true;
    }
  },
  actions: {
    clearData(store) {
      store.commit('clearData', {})
    },
    addData(store, payload) {
      store.commit('addData', payload)
    }
  }
}