<template>
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
    padding: 20px 0 20px 30px;
    background-color: white;
    text-align: left;
    @media screen and (max-width: 480px) {
      width: 480px - 30px;
    }
  }

  .card__success__group {
    display: grid;
    grid-template-columns: 250px 200px;
    @media screen and (max-width: 480px) {
      padding: 0 0 20px 0;
      grid-template-columns: 200px 200px;
    }
  }

  .card__success__text{
    padding: 0 0 50px 0;
    text-align: center;
    h3 {
      color: green;
    }
  }
</style>
