<template>
  <div id="app">
    <nav-menu></nav-menu>
    <router-view/>
  </div>
</template>

<script>
import NavMenu from '@/components/common/menu/NavMenu.vue'

export default {
  components: {
    NavMenu,
  },
  data() {
    return {
      toolbarMenu: false,
    }
  },
  methods: {
    shomMenu() {
      this.toolbarMenu = !this.toolbarMenu
    }
  }
}
</script>

<style lang="scss">
$text: 'Open Sans', sans-serif;

* {
  padding: 0;
  margin: 0;
  font-family: $text;
  list-style: none;

  input[type=number]::-webkit-inner-spin-button, 
  input[type=number]::-webkit-outer-spin-button { 
    appearance: none;
  }
}

h1, h2, h3, h4, h5  {
  color: #383d43;
}

body {
  height: 100vh;
  background-color: #101114;
}

#app {
  display: flex;
  width: 1000px;
  margin: auto;
  @media screen and (max-width: 1500px) {
    margin: auto;
  }
  @media screen and (max-width: 1200px) {
    margin: 0 0 0 0;
  }
  @media screen and (max-width: 768px) {
    width: inherit;
    display: block;
  }
  @media screen and (max-width: 480px) {
    display: block;
    width: 480px;
  }
}
</style>
