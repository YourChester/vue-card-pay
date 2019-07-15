<template>
  <div class="card__history">
    <template v-if="history.length > 0">
      <div   v-for="(item, index) in history.reverse()" :key="index">

        <div class="card__history__group">
          <p class="text--dark">Счет: {{item.chet}}</p>
          <p class="text--dark">{{item.summa}} &#8381;</p>
          <p class="text">Дата: {{item.date}}</p>
        </div>

        <hr v-if="index !== history.length-1">

      </div>
    </template>
    <div v-else class="card__history">

      <div class="card__history__empty">
        <p class="text">История Пуста</p>
      </div>

    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SuccessPay',
  data() {
    return {}
  },
  computed: {
    ...mapGetters('historyPay', [
      'history'
    ])
  },
}
</script>

<style lang="scss">
  .card__history {
    background-color: white;
    padding: 0 95px 0 95px;
    hr {
      background-color: gray;
    }
    @media screen and (max-width: 480px) {
      padding: 0;
      width: inherit;
      hr {
        margin: auto;
        width: 450px;
      }
    }
  }

  .card__history__group {
    display: grid;
    padding: 15px 0 15px 0;
    grid-template-columns: 300px 100px;
    
    p {
      padding: 0 0 10px 0;
    }
    @media screen and (max-width: 768px) {
      grid-template-columns: 400px 100px;
      padding: 15px 15px 15px 15px;
    }
    @media screen and (max-width: 480px) {
      grid-template-columns: 300px 100px;
      padding: 15px 15px 15px 15px;
    }
  }

  .card__history__empty {
    text-align: center;
    padding: 15px 0 15px 0;
  }
</style>
