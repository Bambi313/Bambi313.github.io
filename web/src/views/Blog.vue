<template>
  <div class="_blog">
    <div class="_container">
      <li class="_blog_items">
        <router-link class="_blog_item" :to="`/${this.$i18n.locale}/blog/article1`" rel="noopener"><span>2021/11/16</span> 解決使用 vue 發佈到 git page 時，router 抓不到內容的問題。</router-link>
        
        
      </li>
      
    </div>
  </div>
</template>

<script>
// import Header from '@/components/Header.vue'
// import i18n from '../lib/i18n/lang';

export default {
  name: 'Blog',
  data(){
    return{
      // currLang: this.$i18n.locale,
      // line_lang: this.checkLangForLineLink(),
      // stickerData: this.getStickerData(),
    }
  },
  components: {
    // Header
  },
  methods:{
    // getStickerData(){
    //   if( this.$i18n.locale === 'tw' ){
    //     return this.stickerData_tw;
    //   } else {
    //     return this.stickerData_en;
    //   }
    // },
    // checkLangForLineLink(){
    //   let val = ``
    //   if( this.$i18n.locale === 'tw' ){
    //     val = 'zh-Hant'
    //   } else {
    //     val = this.$i18n.locale
    //   }      
    //   return val
    // },
    // getCookie(name) {
    //   var nameEQ = name + "=";
    //   var ca = document.cookie.split(';');
    //   for(var i=0;i < ca.length;i++) {
    //       var c = ca[i];
    //       while (c.charAt(0)==' ') c = c.substring(1,c.length);
    //       if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    //   }
    //   return null;
    // },
    // eraseCookie(name) {   
    //     document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    // }
  },
  created(){
    // const lang = this.getCookie('lang');
    // const path = this.getCookie('path') ? this.getCookie('path') : '' ;
    
    // if( lang ){
    //   i18n.local = lang;
    //   this.$router.push( lang + '/' + path );
      
    //   this.eraseCookie('lang');
    //   this.eraseCookie('path');
    // }
  }
}
</script>
