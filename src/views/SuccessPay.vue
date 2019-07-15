<template>
  <div class="card">
    <div class="card__success">
      <div class="card__success__text">
        <h3>Операция завершена успешно!</h3>
      </div>

      <div class="card__success__group">
        <p class="text">Номер счета:</p>
        <p class="text--dark">{{payData.chet}}</p>
      </div>

      <div class="card__success__group">
        <p class="text">Сумма:</p>
        <p class="text--dark">{{payData.summa}} &#8381;</p>
      </div>

      <div class="card__success__group">
        <p class="text">Имя держателя карты:</p>
        <p class="text--dark">{{payData.name}}</p>
      </div>

      <div class="card__success__group">
        <p class="text">Номер карты:</p>
        <p class="text--dark">{{payData.card}}</p>
      </div>

      <div class="card__success__group">
        <p class="text">Дата оплаты:</p>
        <p class="text--dark">{{payData.date}}</p>
      </div> 
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'SuccessPay',
  created() {
    if (!this.show) {
      this.$router.push({name: 'pay'})
    }
  },
  beforeDestroy() {
    this.addHistory(this.payData)
    this.clearData()
  },
  data() {
    return {
      text: '',
    }
  },
  computed: {
    ...mapGetters('payData', [
      'payData',
      'show'
    ])
  },
  methods: {
    ...mapActions('payData', [
      'clearData'
    ]),
    ...mapActions('historyPay', [
      'addHistory'
    ])
  }
}
</script>

<style lang="scss">
  .card__success {
    color: white;
    text-align: left;
  }

  .card__success__group {
    padding: 0 50px 20px 90px;
    display: grid;
    grid-template-columns: 250px 200px;
  }

  .card__success__text{
    padding: 0 0 50px 0;
    text-align: center;
    h3 {
      color: green;
    }
  }
</style>
