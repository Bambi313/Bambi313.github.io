<template>
  <div class="_header" :class="menuOpen? 'active':''">
    <div class="_header_logo">
      Bambi
    </div>
    <div class="_header_menu">
      <i @click="toggleMenu( false )" class="_header_menu__close las la-times"></i>
      <ul class="_header_links">
        <li class="_header_links__item"><router-link class="_header_links__a" :to="`/${this.$i18n.locale}`" rel="noopener">Home</router-link></li>
        <li class="_header_links__item"><router-link class="_header_links__a" :to="`/${this.$i18n.locale}/about`" rel="noopener">About</router-link></li>
        <!-- <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li> -->
      </ul>
    </div>
    <div class="_header_hamburger" @click="toggleMenu( true )"><i class="las la-bars"></i></div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data:function(){
    return{
        menuOpen: false,
    }
  },
  props: {
    // msg: String
  },
  methods:{
    toggleMenu( status ){
      this.menuOpen = status;
    }
  }
}
</script>