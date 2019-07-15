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
  width: 100vw;
  background-color: #101114;
}

#app {
  display: flex;
  width: 960px;
  margin: 0 0 0 20%;
  @media screen and (max-width: 1500px) {
    margin: 0 0 0 10%;
  }
  @media screen and (max-width: 1200px) {
    margin: 0 0 0 0;
  }
  @media screen and (max-width: 768px) {
    display: block;
  }
}
</style>
