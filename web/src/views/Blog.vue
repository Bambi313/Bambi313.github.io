<template>
  <div class="_blog">
    <div class="_container">
      
      <h2 class="_shared_page__title">部落格</h2>
      <section class="_blog_section">
        <div class="_home_category__title">生活日記</div>
        <ul class="_blog_items">
          <li class="_blog_item">
            <router-link class="_blog_item__link" :to="`/${this.$i18n.locale}/blog/funsiamo-cake-making-experience`" rel="noopener">
              <div class="_blog_item__cover">
                <img src="../assets/img/blog/funsiamo_cover.jpg"/>
              </div>
              
              <h3 class="_blog_item__title">做蛋糕囉～ Funsiamo 烘焙體驗</h3>
              <div class="_blog_item__summary"> 
                <div class="_blog_item__des">
                  離開學校就沒有再做過點心之類的東西，
                  因為家裡沒有適合的空間、工具，還要準備很多材料太麻煩，
                  所以看到有這種「只要人到就好」的烘焙體驗就一直很想去。
                </div>
              </div>
              <div class="_blog_item__bottom">
                <div class="_blog_item__time">
                  2021/12/18
                </div>
                <div class="_blog_item_tags"><span>baking</span><span>experience</span><span>life</span></div>
              </div>
            </router-link>
          </li>
          <!-- <li class="_blog_item">
            <router-link class="_blog_item__link" :to="`/${this.$i18n.locale}/blog/fix-router-redirect-while-using-vue-and-gitpage`" rel="noopener">
              <div class="_blog_item__time">2021/12/18</div>
              解決使用 vue 發佈到 git page 時，router 抓不到內容的問題。
            </router-link>
          </li> -->
        </ul>
      </section>

      <section class="_blog_section">
        <div class="_home_category__title">程式筆記</div>
        <ul class="_blog_items">
          <li class="_blog_item">
            <router-link class="_blog_item__link" :to="`/${this.$i18n.locale}/blog/fix-router-redirect-while-using-vue-and-gitpage`" rel="noopener">
              
              <h3 class="_blog_item__title">解決使用 vue 發佈到 git page 時，router 抓不到內容的問題。</h3>
              <div class="_blog_item__summary">
                <div class="_blog_item__des">
                  這次因為 SEO 考量使用了 <em>history mode</em> 再加上<em>語系</em>，
                  所以讓整個需求變得比較複雜。
                  如果不需考量語系的人可以直接參考這篇文章。google 了很久始終找不到完美解法，
                  所以就改了一個自己的版本出來，
                  希望可以幫助有同樣需求的迷途羔羊們找到出口。
                </div>
              </div>
              <div class="_blog_item__bottom">
                <div class="_blog_item__time">
                  2021/12/18
                </div>
                <div class="_blog_item_tags">
                  <span>coding</span>
                  <span>javascript</span>
                  <span>vue</span>
                  <span>github pages</span>
                </div>
              </div>
            </router-link>
          </li>
          <!-- <li class="_blog_item">
            <router-link class="_blog_item__link" :to="`/${this.$i18n.locale}/blog/fix-router-redirect-while-using-vue-and-gitpage`" rel="noopener">
              <div class="_blog_item__time">2021/12/18</div>
              解決使用 vue 發佈到 git page 時，router 抓不到內容的問題。
            </router-link>
          </li> -->
        </ul>
      </section>
    
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
