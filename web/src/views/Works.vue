<template>
  <div class="_works">
    <div class="_container">
      
      
      <div class="_home_category">
        <div class="_home_category__title" v-html="$t('home.category.stickers')">
          Line 貼圖們
        </div>
        <!-- <div class="_home_stickers" v-for="(item,idx) in getStickerData()" :key="idx">
          <h2 class="_home_stickers__title">{{ item.data.title }}</h2>
          <p class="_home_stickers__des">{{ item.data.note }}</p>
          <p class="_home_stickers__des">{{ item.data.des }}</p>
          <div class="_home_stickers__wrap">
            <div class="_home_stickers__img">
              <img src="../assets/img/set_16376129/tw/line_sticker_1.png">
            </div>
            <div class="_home_stickers__img">
              <img src="../assets/img/set_16376129/tw/line_sticker_2.png">
            </div>
            <div class="_home_stickers__img">
              <img src="../assets/img/set_16376129/tw/line_sticker_3.png">
            </div>
            <div class="_home_stickers__img">
              <img src="../assets/img/set_16376129/tw/line_sticker_4.png">
            </div>
            <div class="_home_stickers__img">
              <img src="../assets/img/set_16376129/tw/line_sticker_5.png">
            </div>
            <div class="_home_stickers__img">
              <img src="../assets/img/set_16376129/tw/line_sticker_6.png">
            </div>
            <div class="_home_stickers__img">
              <img src="../assets/img/set_16376129/tw/line_sticker_7.png">
            </div>
            <div class="_home_stickers__img">
              <img src="../assets/img/set_16376129/tw/line_sticker_8.png">
            </div>
          </div>
          <a class="_home_stickers__btn" target="_blank" :href="`https://store.line.me/stickershop/product/${item.id}/${line_lang}`" rel="noopener">
            <span v-html="$t('home.button.all')">看全部</span>
            <i class="_button_icon__angle las la-angle-right"></i>
          </a>
        </div> -->

        <div class="_home_stickers">
          <h2 class="_home_stickers__title" v-html="$t('home.stickers.set3.title')"></h2>
          <p class="_home_stickers__des" v-html="$t('home.stickers.set3.des')"></p>
          <!-- <p class="_home_stickers__des" v-html="$t('home.stickers.set3.note')"></p> -->

          <div class="_home_stickers__wrap">
            <div class="_home_stickers__img">
              <img src="../assets/img/set_17561269/tw/line_sticker_1.png">
            </div>
            <div class="_home_stickers__img">
              <img src="../assets/img/set_17561269/tw/line_sticker_2.png">
            </div>
            <div class="_home_stickers__img">
              <img src="../assets/img/set_17561269/tw/line_sticker_3.png">
            </div>
            <div class="_home_stickers__img">
              <img src="../assets/img/set_17561269/tw/line_sticker_4.png">
            </div>
            <div class="_home_stickers__img">
              <img src="../assets/img/set_17561269/tw/line_sticker_5.png">
            </div>
            <div class="_home_stickers__img">
              <img src="../assets/img/set_17561269/tw/line_sticker_6.png">
            </div>
            <div class="_home_stickers__img">
              <img src="../assets/img/set_17561269/tw/line_sticker_7.png">
            </div>
            <div class="_home_stickers__img">
              <img src="../assets/img/set_17561269/tw/line_sticker_8.png">
            </div>
          </div>
          <div class="_home_stickers__btnWrap">
            <a class="_home_stickers__btn" target="_blank" :href="`https://store.line.me/stickershop/product/17561269/${this.line_lang}`" rel="noopener">
              <span v-html="$t('home.button.sticker_tw')"></span>
              <i class="_button_icon__angle las la-angle-right"></i>
            </a>
            <a class="_home_stickers__btn" target="_blank" :href="`https://store.line.me/stickershop/product/17618963/${this.line_lang}`" rel="noopener">
              <span v-html="$t('home.button.sticker_jp')"></span>
              <i class="_button_icon__angle las la-angle-right"></i>
            </a>
          </div>
        </div>

        <div class="_home_stickers">
          <h2 class="_home_stickers__title" v-html="$t('home.stickers.set1.title')"></h2>
          <p class="_home_stickers__des" v-html="$t('home.stickers.set1.des')"></p>
          <p class="_home_stickers__des" v-html="$t('home.stickers.set1.note')"></p>

          <div class="_home_stickers__wrap">
            <div class="_home_stickers__img">
              <img src="../assets/img/set_16376129/tw/line_sticker_1.png">
            </div>
            <div class="_home_stickers__img">
              <img src="../assets/img/set_16376129/tw/line_sticker_2.png">
            </div>
            <div class="_home_stickers__img">
              <img src="../assets/img/set_16376129/tw/line_sticker_3.png">
            </div>
            <div class="_home_stickers__img">
              <img src="../assets/img/set_16376129/tw/line_sticker_4.png">
            </div>
            <div class="_home_stickers__img">
              <img src="../assets/img/set_16376129/tw/line_sticker_5.png">
            </div>
            <div class="_home_stickers__img">
              <img src="../assets/img/set_16376129/tw/line_sticker_6.png">
            </div>
            <div class="_home_stickers__img">
              <img src="../assets/img/set_16376129/tw/line_sticker_7.png">
            </div>
            <div class="_home_stickers__img">
              <img src="../assets/img/set_16376129/tw/line_sticker_8.png">
            </div>
          </div>
          <div class="_home_stickers__btnWrap">
            <a class="_home_stickers__btn" target="_blank" :href="`https://store.line.me/stickershop/product/16376129/${this.line_lang}`" rel="noopener">
              <span v-html="$t('home.button.all')">看全部</span>
              <i class="_button_icon__angle las la-angle-right"></i>
            </a>
          </div>
        </div>


        <div class="_home_stickers">
          <h2 class="_home_stickers__title" v-html="$t('home.stickers.set2.title')"></h2>
          <!-- <p class="_home_stickers__des" v-html="$t('home.stickers.set1.note')"></p> -->
          <p class="_home_stickers__des" v-html="$t('home.stickers.set2.des')"></p>

          <div class="_home_stickers__wrap">
            <div class="_home_stickers__img">
              <img src="../assets/img/set_16728302/tw/line_sticker_1.png">
            </div>
            <div class="_home_stickers__img">
              <img src="../assets/img/set_16728302/tw/line_sticker_2.png">
            </div>
            <div class="_home_stickers__img">
              <img src="../assets/img/set_16728302/tw/line_sticker_3.png">
            </div>
            <div class="_home_stickers__img">
              <img src="../assets/img/set_16728302/tw/line_sticker_4.png">
            </div>
            <div class="_home_stickers__img">
              <img src="../assets/img/set_16728302/tw/line_sticker_5.png">
            </div>
            <div class="_home_stickers__img">
              <img src="../assets/img/set_16728302/tw/line_sticker_6.png">
            </div>
            <div class="_home_stickers__img">
              <img src="../assets/img/set_16728302/tw/line_sticker_7.png">
            </div>
            <div class="_home_stickers__img">
              <img src="../assets/img/set_16728302/tw/line_sticker_8.png">
            </div>
          </div>
          <div class="_home_stickers__btnWrap">
            <a class="_home_stickers__btn" target="_blank" :href="`https://store.line.me/stickershop/product/16728302/`" rel="noopener">
              <span v-html="$t('home.button.sticker_tw')"></span>
              <i class="_button_icon__angle las la-angle-right"></i>
            </a>
            <a class="_home_stickers__btn" target="_blank" :href="`https://store.line.me/stickershop/product/16742410/`" rel="noopener">
              <span v-html="$t('home.button.sticker_jp')"></span>
              <i class="_button_icon__angle las la-angle-right"></i>
            </a>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
// import Header from '@/components/Header.vue'
// import i18n from '../lib/i18n/lang';

export default {
  name: 'Works',
  data(){
    return{
      currLang: this.$i18n.locale,
      line_lang: this.checkLangForLineLink(),
      // stickerData: this.getStickerData(),
      // stickerData_en: {
      //     set1: {
      //       id: `16376129`,
      //       data: {
      //         title: `Bambi's daily life with BROWN & FRIENDS`,
      //         note: `Avaliable： 2021/08/25 ～ 2023/08/24 09:59`,
      //         des: `Let Bambi and BROWN by your side. Bring you joy and happy life ~` 
      //       }
      //     },
      //     set2: {
      //       id: `16728302`,
      //       data: {
      //         title: `Bambi cares about you`,
      //         // note: `Avaliable： 2021/08/25 ～ 2023/08/24 09:59`,
      //         des: `Show your loved ones that you really care about/love them.`
      //       }
      //     },
      // },
      // stickerData_tw:{
      //     set1: {
      //       id: `16376129`,
      //       data: {
      //         title: `班比與 BROWN & FRIENDS 的日常`,
      //         note: `販售時間： 2021年08月25日～2023年08月24日 09:59`,
      //         des: `讓班比跟熊大的好朋友們陪在你身邊。跟你一起開心享受生活～`
      //       }
      //     },
      //     set2: {
      //       id: `16728302`,
      //       data: {
      //         title: `班比關心你`,
      //         // note: `Avaliable： 2021/08/25 ～ 2023/08/24 09:59`,
      //         des: `讓你愛的人們接收到你滿滿的關心跟愛～`
      //       }
      //     },
      // }
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
    checkLangForLineLink(){
      let val = ``
      if( this.$i18n.locale === 'tw' ){
        val = 'zh-Hant'
      } else {
        val = this.$i18n.locale
      }      
      return val
    },
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
