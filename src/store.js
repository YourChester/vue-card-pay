import Vue from 'vue'
import Vuex from 'vuex'
import payData from './store/payData'
import historyPay from './store/historyPay'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    payData,
    historyPay,
  }
})
