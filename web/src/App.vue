<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
    <div class="_app_bambi"><img src="./assets/img/looking_bambi.png"/></div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
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
