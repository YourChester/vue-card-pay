import {
  mapActions
} from 'vuex'

export default {
  name: 'FormForPaying',
  mounted() {
    const year = new Date().getFullYear();
    for (let i = 0; i <= 20; i++) {
      this.years.push(year + i);
    }
  },
  data: () => ({
    years: [],
    months: 12,
    next: true,
    shet: {
      value: null,
      valid: true,
    },
    summa: {
      value: null,
      valid: true,
    },
    cardNumber: {
      firsval: null,
      secondval: null,
      therdval: null,
      forthval: null,
      valid: [
        true,
        true,
        true,
        true,
      ],
      reg: /\d{5}/g,
    },
    year: {
      value: '',
      valid: true,
    },
    month: {
      value: '',
      valid: true,
    },
    name: {
      value: '',
      valid: true,
      reg: /\d/g,
    },
    cvc: {
      value: '',
      valid: true,
      reg: /\d{4}/g,
    },
  }),
  watch: {
    'name.value'(newVal, oldVal) {
      if (newVal.match(/[а-яА-Я]/g)) {
        this.name.value = oldVal
      } else if (newVal.match(/[0-9]/g)) {
        this.name.value = oldVal
      } else {
        this.name.value = newVal
      }
    },
    'cvc.value'(newVal) {
      this.cvc.value = this.checkValue(newVal, this.cvc.reg, 3);
    },
    'cardNumber.firsval'(newVal) {
      this.cardNumber.firsval = this.checkValue(newVal, this.cardNumber.reg, 4);
    },
    'cardNumber.secondval'(newVal) {
      this.cardNumber.secondval = this.checkValue(newVal, this.cardNumber.reg, 4);
    },
    'cardNumber.therdval'(newVal) {
      this.cardNumber.therdval = this.checkValue(newVal, this.cardNumber.reg, 4);
    },
    'cardNumber.forthval'(newVal) {
      this.cardNumber.forthval = this.checkValue(newVal, this.cardNumber.reg, 4);
    },
  },
  computed: {
    lengthInput() {
      if (this.shet.value && this.summa.value) {
        if (this.shet.value.length === 8 && this.summa.value.length >= 1 && Number(this.summa.value) !== 0) {
          return false;
        } else {
          return true;
        }
      } else {
        return true;
      }
    },
    cardNumberCheck() {
      if (this.cardNumber.firsval && this.cardNumber.secondval && this.cardNumber.therdval && this.cardNumber.forthval) {
        if (this.cardNumber.firsval.length === 4 &&
          this.cardNumber.secondval.length === 4 &&
          this.cardNumber.therdval.length === 4 &&
          this.cardNumber.forthval.length === 4
        ) {
          return true
        } else {
          return false
        }
      } else {
        return false
      }
    },
    lengthInputCard() {
      if (this.cardNumberCheck && this.name.value && this.cvc.value && this.year.value && this.month.value) {
        if (this.cardNumberCheck &&
          this.name.value.length >= 4 &&
          this.cvc.value.length === 3 &&
          String(this.year.value).length === 4 &&
          String(this.month.value).length > 0
        ) {
          return false;
        } else {
          return true;
        }
      } else {
        return true;
      }
    }
  },
  methods: {
    ...mapActions('payData', [
      'addData',
    ]),
    nextStep() {
      this.next = false;
    },
    checkShet() {
      if (this.shet.value.length === 8) {
        this.shet.valid = true;
      } else {
        this.shet.valid = false;
      }
    },
    checkSumma() {
      if (this.summa.value.length >= 1 && Number(this.summa.value) !== 0) {
        this.summa.valid = true;
      } else {
        this.summa.valid = false;
      }
    },
    checkCardNumber(key, index) {
      if (this.cardNumber[key].length === 4 && this.cardNumber[key] !== ' ') {
        this.$set(this.cardNumber.valid, index, true)
      } else {
        this.$set(this.cardNumber.valid, index, false)
      }
    },
    checkName() {
      if (this.name.value.length >= 4 && this.name.value !== ' ') {
        this.name.valid = true;
      } else {
        this.name.valid = false;
      }
    },
    checkCvc() {
      if (this.cvc.value.length === 3 && this.cvc.value !== ' ') {
        this.cvc.valid = true;
      } else {
        this.cvc.valid = false;
      }
    },
    checkValue(val, re, num) {
      if (val.match(re)) {
        const buf = val.split('').splice(0, num).join('')
        val = buf
        return val
      } else {
        return val
      }
    },
    cendData() {
      const date = new Date();
      const card = `${this.cardNumber.firsval} ${this.cardNumber.secondval} ${this.cardNumber.therdval} ${this.cardNumber.forthval}`
      this.addData({
        name: this.name.value,
        chet: this.shet.value,
        card,
        summa: this.summa.value,
        date: `${date.getDate()}.${(date.getMonth()+1) < 10 ? '0' + (date.getMonth()+1) : date.getMonth()+1}.${date.getFullYear()}`,
      })
      this.$router.push({
        name: 'successPay'
      })
    }
  }
}