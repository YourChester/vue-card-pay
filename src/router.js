import Vue from 'vue'
import Router from 'vue-router'
import Paying from './views/Paying'
import SuccessPay from './views/SuccessPay'
import HistoryPay from './views/HistoryPay'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { 
      path: '/', 
      redirect: { name: 'pay' }
    },
    {
      path: '/pay',
      name: 'pay',
      component: Paying
    },
    {
      path: '/success-pay',
      name: 'successPay',
      component: SuccessPay
    },
    {
      path: '/histori-pay',
      name: 'historiPay',
      component: HistoryPay
    },
  ]
})
