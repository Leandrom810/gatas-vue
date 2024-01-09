<script setup>
  import { RouterView } from "vue-router";

  import Navig from "./components/navig.vue";
  import Bg from "./components/bg.vue"
</script>

<template>
  <Navig/>
  <div class="view">
    <RouterView v-slot="{ Component }">
        <KeepAlive>
          <component :is="Component"/>
        </KeepAlive>
    </RouterView>
  </div>
  <Bg></Bg>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz@6..12&display=swap');
  body {
    margin: 0px;
    font-family: 'Nunito Sans', Helvetica, sans-serif;
    color: #060c13;
    background: linear-gradient(180deg, rgb(163, 195, 231) 0%, rgb(154, 238, 255) 100%);
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
  .view {
    margin: 6px;
  }
</style>