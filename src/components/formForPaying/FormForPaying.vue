<template>
  <div>
    <div class="card">
      <!-- First form -->
      <div class="form" v-if="next">
        <div class="form__label">
          <h3>Ведите информацию по оплате</h3>
        </div>
        <div class="form__input-group">
          <div class="lable">
            <p class="text">Номер счета:</p>
          </div>
          <div>
            <input 
              type="number" 
              class="input" 
              :class="shet.valid ? '' :  'input__invalid'"
              v-model="shet.value" 
              @change="checkShet()"
              @input="shet.valid = true"
            >
          </div>
        </div>
        <div class="form__input-group">
          <div class="lable">
            <p class="text">Сумма:</p>
          </div>
          <div>
            <input 
              type="number" 
              class="input" 
              :class="summa.valid ? '' :  'input__invalid'"
              v-model="summa.value"
              @change="checkSumma()"
              @input="summa.valid = true"
            >
          </div>
        </div>
        <div class="form__button">
          <button class="button" @click="nextStep" :disabled="lengthInput" >Продолжить</button>
        </div>
      </div>
      <!-- Second form -->
      <div v-else class="card-form">
        <div class="card-form__text">
          <p class="text">Информацию по оплате:</p>
        </div>

        <div class="card-form__input-group">
          <p class="text">Номер счета:</p>
          <p class="text--dark">{{shet.value}}</p>
        </div>

        <div class="card-form__input-group">
          <p class="text">Сумма:</p>
          <p class="text--dark">{{summa.value}} &#8381;</p>
        </div>

        <div class="card-form__label">
          <h3>Ведите информацию по оплате</h3>
        </div>

        <form class="card-form__credit-card" autocomplete="off">
          <div class="card-form__front-card">
            <div class="card-form__grup">
              <label for="number" id="label-namber">Номер карты</label>
              <div class="card-form__grup-input-number">
                <input 
                  type="number" 
                  id="number" 
                  v-model="cardNumber.firsval"
                  :class="cardNumber.valid[0] ? '' : 'input__invalid'"
                  @change="checkCardNumber('firsval', 0)"
                  @input="cardNumber.valid[0] = true"
                >
                <input 
                  type="number" 
                  id="number"
                  v-model="cardNumber.secondval"
                  :class="cardNumber.valid[1] ? '' : 'input__invalid'"
                  @change="checkCardNumber('secondval', 1)"
                  @input="cardNumber.valid[1] = true"
                >
                <input 
                  type="number" 
                  id="number" 
                  v-model="cardNumber.therdval"
                  :class="cardNumber.valid[2] ? '' : 'input__invalid'"
                  @change="checkCardNumber('therdval', 2)"
                  @input="cardNumber.valid[2] = true"
                >
                <input 
                  type="number" 
                  id="number" 
                  v-model="cardNumber.forthval"
                  :class="cardNumber.valid[3] ? '' : 'input__invalid'"
                  @change="checkCardNumber('forthval', 3)"
                  @input="cardNumber.valid[3] = true"
                >
              </div>
            </div>
            <div class="card-form__grup">
              <label for="data" id="label-data">Срок действия</label>
              <div class="card-form__grup-input-data">
                <select 
                  name="month"
                  id="data" 
                  v-model="month.value"
                  :class="month.valid ? '' : 'input__invalid'"
                  @change="month.value ? month.valid = true : month.valid = false"
                  @input="month.valid = true"
                >
                  <option value=""></option>
                  <template v-for="month in months">
                    <option :value="month" :key="month" v-html="month < 10 ? `0${month}` : month"></option>
                  </template>
                </select>
                <select 
                  name="year"
                  id="data" 
                  v-model="year.value"
                  :class="year.valid ? '' : 'input__invalid'"
                  @change="year.value ? year.valid = true : year.valid = false"
                  @input="year.valid = true"
                >
                  <option :value="''"></option>
                  <template v-for="year in years">
                    <option :value="year" :key="year">{{year}}</option>
                  </template>
                </select>
              </div>
            </div>
            <div class="card-form__input-name">
              <input 
                type="text" 
                id="name_card"
                name="name_card"
                placeholder="Держатель карты" 
                :class="name.valid ? '' : 'input__invalid'"
                v-model="name.value" 
                @change="checkName()"
                @input="name.valid = true"
              >
            </div>
          </div>
          <div class="card-form__back-card">
            <label for="cvc">Код CVV2 / CVC2</label>
            <input 
              type="number"
              id="cvc"
              :class="cvc.valid ? '' : 'input__invalid'"
              v-model="cvc.value"
              @change="checkCvc()"
              @input="cvc.valid = true"
            >
          </div>
        </form>

        <div class="card-form__button">
          <button class="button" :disabled="lengthInputCard" @click="cendData">Оплатить</button>
        </div>
      </div>
    </div>
    <div class="same-info">
      <p>Исходя из астатической системы координат Булгакова, соединение стабильно. Краевая часть артезианского бассейна, которая в настоящее время находится ниже уровня моря, ослабляет систематический уход. Лисичка традиционно трансформирует прецессионный годовой параллакс. <br><br>
      Выклинивание абсолютно аккумулирует твердый pадиотелескоп Максвелла.<br><br>
      Алмаз слагает горст. Делювий длительно колеблет лазерный подвижный объект.<br><br>
      Устойчивость, например, параллельна. Аргумент перигелия определяет боксит. Проекция вертикально дает уходящий диабаз. Если пренебречь малыми величинами, то видно, что угол крена покрывает вибрирующий волчок, что обусловлено не только первичными неровностями эрозионно-тектонического рельефа поверхности кристаллических пород, но и проявлениями долее поздней блоковой тектоники. Засветка неба заставляет иначе взглянуть на то, что такое волчок.
      </p>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style src="./style.scss" lang="scss"></style>

