<template>
  <div id="app">
    <Header/>
    <router-view/>
    <div class="_app_bambi"><img src="./assets/img/looking_bambi.png"/></div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  components: {
    Header
  },
  methods:{
  },
  created(){
  },
}
</script>

<style>
@import "./assets/css/main.css";
</style>
