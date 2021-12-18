<template>
  <div class="_header" :class="menuOpen? 'active':''">
    <div class="_header_logo">
      <router-link :to="`/${this.$i18n.locale}`">Bambi</router-link>
    </div>
    <div class="_header_menu">
      <i @click="toggleMenu( false )" class="_header_menu__close las la-times"></i>
      <ul class="_header_links">
        <li class="_header_links__item"><router-link class="_header_links__a" :to="`/${this.$i18n.locale}`" rel="noopener" v-html="$t('header.home')">Home</router-link></li>
        <li class="_header_links__item"><router-link class="_header_links__a" :to="`/${this.$i18n.locale}/about`" rel="noopener" v-html="$t('header.about')">About</router-link></li>
        <li class="_header_links__item"><router-link class="_header_links__a" :to="`/${this.$i18n.locale}/blog`" rel="noopener" v-html="$t('header.blog')">Blog</router-link></li>
      </ul>
      
      <div class="_header_lang _header_lang--desktop">
        <select class="_header_lang_wrap" v-model="selectedLang" @change="switchLang(selectedLang)">
          <option class="_header_lang_item" value="tw">TW</option>
          <option class="_header_lang_item" value="en">EN</option>
          <!-- <option class="_header_lang_item" value="jp">JP</option> -->
        </select>
      </div>

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
        selectedLang: this.$i18n.locale
    }
  },
  props: {
    // msg: String
  },
  methods:{
    toggleMenu( status ){
      this.menuOpen = status;
      console.log('this.menuOpen',this.menuOpen);
      
    },
    switchLang( lang ){
      let fullPath = this.$route.fullPath;
      let newFullPath = fullPath.replace(this.$i18n.locale, lang );
      this.$i18n.locale = lang;
      this.$router.push( newFullPath );
    }
  },
  mounted(){
  }
}
</script>