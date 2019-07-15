<template>
<div>
  <div class="toolbar">
    <div class="link-menu" @click="shomMenu">
      <span></span>
    </div>
  </div>
  <ul class="list-menu" :class="toolbarMenu ?  'list-menu__open' : ''">
    <router-link 
      v-for="item in listMenu"
      @click.native="shomMenu"
      :key="item.id" 
      :to="item.href"
      class="list-menu__item list-menu__item_background_gray"
      active-class="list-menu__item_active"
      tag="li"
      exact
    > 
      {{item.title}}
    </router-link>
    <router-link 
      v-for="item in optionalMenu"
      @click.native="shomMenu"
      :key="item.id" 
      :to="item.href"
      class="list-menu__item list-menu__item_background_dark"
      tag="li"
      exact
    > 
      {{item.title}}
    </router-link>
  </ul>
</div>
</template>
<script src="./index.js"></script>
<style src="./style.scss" lang="scss"></style>

