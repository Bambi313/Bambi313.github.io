<template>
  <div class="_home">
    <div class="_container">
      <div class="_home_intro">
        <div class="_home_intro__photo">
          <img class="_home_intro__img" src="../assets/img/bambi_profile.jpg">
        </div>
        <div class="_home_intro__des">
          <h1 class="_home_intro__hi" v-html="$t('home.intro.hi')">Hi! 我是班比。</h1>
          <p v-html="$t('home.intro.des')">
            現任前端工程師。喜歡畫圖、動漫、遊戲、跳舞跟可愛的一切。<br>
            持續學習日文跟英文中。
          </p>
          <!-- <span v-html="$t('home.intro.know_more')">know_more</span>
          <router-link class="_home_intro__a" :to="`/${this.$i18n.locale}/about`" rel="noopener"><span v-html="$t('home.intro.about')">關於我</span></router-link> -->
        </div>
      </div>

      <div class="_home_category">
        <div class="_home_category__title" v-html="$t('home.category.social_media')">
          不定期出沒地點
        </div>
      
        <ul class="_home_links">
          <li class="_home_link__item">
            <a class="_home_links__title _home_links__title--line" href="https://line.me/S/shop/sticker/author/2490379" target="_blank" rel="noopener">
              <svg class="_button_icon _button_icon--line" clip-rule="evenodd" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#000"><path d="m34.692 48.783c-9.875-.492-17.703-7.036-17.703-15.026 0-8.309 8.467-15.055 18.897-15.055s18.898 6.746 18.898 15.055c0 3.485-1.49 6.695-3.988 9.247 0 0-2.071 2.003-6.412 5.393l-9.692 6.198z" stroke-width="3.69" transform="matrix(1.29988 0 0 1.29988 -11.3854 -11.3727)"/><g stroke-width="3.5"><path d="m24.671 29.37v8.18h4.159" transform="matrix(1.12661 0 0 1.3257722912 -9.11059 -12.1438308885)"/><path d="m31.845 29.37v8.18" transform="matrix(1.12661 0 0 1.3257722912 -7.02313 -12.1438308885)"/><path d="m35.276 37.55v-8.18l5.391 8.18v-8.18" transform="matrix(1.12661 0 0 1.3257722912 -5.40354 -12.1438308885)"/><path d="m48.221 29.37h-4.721v8.18h4.314" transform="matrix(1.12661 0 0 1.3257616653 -3.11059 -12.1438733921)"/><path d="m47.968 33.753h-4.453" transform="matrix(1.12661 0 0 1.3257616653 -3.11059 -12.532366922)"/></g></g></svg>
              <span v-html="$t('home.links.line')">Line stickers</span>
              <i class="_button_icon__angle las la-angle-right"></i>
            </a>
            <p class="_home_links__des" v-html="$t('home.links.line_des')">太想用自己角色貼圖 ＋ WFH 之下的產物。</p>
          </li>
          <li class="_home_link__item">
            <a class="_home_links__title _home_links__title--instgram" href="https://linevoom.line.me/user/_dR6u2SLls3lUolYAomDjVo4DwcRkC7GvzZLvyvc" target="_blank" rel="noopener">
              <svg class="_button_icon _button_icon--line" height="70" viewBox="0 0 70 70" width="70" xmlns="http://www.w3.org/2000/svg"><path d="m28.3454542 59.702028 26.5950545-15.3931613c6.3787471-3.6919037 6.3787471-12.9257957 0-16.6176994l-26.5950545-15.3931613c-6.3698836-3.68687398-14.3454542.9172691-14.3454542 8.3088496v10.5980656l.004379.0247968c.0069994.0344693.0203122.0847662.0426293.1473737.0259106.0728075.0581444.146084.0932155.2140976l.0580316.1005442c.0512422.0421853.1261953.0952961.2239051.1513966.0642722.0370486.1296309.0704236.1919596.0987181l.0907059.0384555c.0473248.0186415.0825855.0300726.1053071.0365796l.0238295-.0024621c.0655267-.0073863.1513833-.0239175.2490052-.0488901l.2140259-.0629591 10.6911678-6.1880055c.6215194-.3713711 1.3488735-.5844826 2.1208266-.5844826 2.2920473 0 4.1424837 1.8614982 4.1424837 4.1484279 0 1.4753102-.7699375 2.7702106-1.925068 3.5044428l-.1960224.1171155-13.0752445 7.5679365-.5711263.4982341c-.0989237.0885311-.2041717.1839054-.3127288.284007l-.3784841.3568032c-.4291775.4141023-.8034714.8109699-1.0018338 1.0893228-.5503166.7723488-.7563488 1.2955502-.7868659 1.9377838l-.004098.1783824v6.5806385c0 7.3915453 7.9755706 11.9956532 14.3454542 8.3088496z" fill="none" stroke="#00c300" stroke-width="5"/></svg>
              <span v-html="$t('home.links.voom_life')">Line Voom</span>
              <i class="_button_icon__angle las la-angle-right"></i>
            </a>
            <p class="_home_links__des" v-html="$t('home.links.voom_life_des')"></p>
          </li>
          <li class="_home_link__item">
            <a class="_home_links__title _home_links__title--instgram" href="https://www.instagram.com/bambitall/" target="_blank" rel="noopener">
              <i class="_button_icon _button_icon--instgram lab la-instagram"></i>
              <span v-html="$t('home.links.ig_draw')">Instgram</span>
              <i class="_button_icon__angle las la-angle-right"></i>
            </a>
            <p class="_home_links__des" v-html="$t('home.links.ig_draw_des')">塗鴉聚集地。</p>
          </li>
          <li class="_home_link__item">
            <a class="_home_links__title _home_links__title--instgram" href="https://www.instagram.com/bambitall/" target="_blank" rel="noopener">
              <i class="_button_icon _button_icon--instgram lab la-instagram"></i>
              <span v-html="$t('home.links.ig_life')">Instgram</span>
              <i class="_button_icon__angle las la-angle-right"></i>
            </a>
            <p class="_home_links__des" v-html="$t('home.links.ig_life_des')">玩耍、美食、穿搭...等等，有的沒的各種紀錄。</p>
          </li>
          <!-- <li class="_home_link__item">
            <a class="_home_links__title _home_links__title--facebook" href="https://www.facebook.com/bambitall" target="_blank" rel="noopener">
              <i class="_button_icon _button_icon--facebook lab la-facebook"></i>
              <span v-html="$t('home.links.fb')">Facebook</span>
              <i class="_button_icon__angle las la-angle-right"></i>
            </a>
            <p class="_home_links__des" v-html="$t('home.links.fb_des')">目前是個留紀錄的地方。</p>
          </li>
          <li class="_home_link__item">
            <a class="_home_links__title _home_links__title--youtube" href="https://www.youtube.com/c/%E7%8F%AD%E6%AF%94" target="_blank" rel="noopener">
            <i class="_button_icon _button_icon--youtube lab la-youtube"></i>
              <span v-html="$t('home.links.yt')">youtube</span>
              <i class="_button_icon__angle las la-angle-right"></i>
            </a>
            <p class="_home_links__des" v-html="$t('home.links.yt_des')">
              除了 vlog 之外還有怪物彈珠、貓咪大戰爭活動影片的放置處。
              有很多影片素材待剪，但不確定什麼時候會卯起來更新的頻道。
            </p>
          </li> -->
        </ul>
      </div>

      <!-- <div class="_home_category">
        <div class="_home_category__title" v-html="$t('home.category.stickers')">
          Line 貼圖們
        </div>
        <div class="_home_stickers" v-for="(item,idx) in getStickerData()" :key="idx">
          <h2 class="_home_stickers__title">{{ item.data.title }}</h2>
          <p class="_home_stickers__des">{{ item.data.note }}</p>
          <p class="_home_stickers__des">{{ item.data.des }}</p>
          <div class="_home_stickers__wrap">
            <div class="_home_stickers__img" v-for="i in 8" :key="i">
              <img :src="`../assets/img/set_${item.id}/${currLang}/line_sticker_${i}.png`" />
            </div>
          </div>
          <a class="_home_stickers__btn" target="_blank" :href="`https://store.line.me/stickershop/product/${item.id}/${line_lang}`" rel="noopener">
            <span v-html="$t('home.button.all')">看全部</span>
            <i class="_button_icon__angle las la-angle-right"></i>
          </a>
        </div>

        <div class="_home_stickers">
          <h2 class="_home_stickers__title" v-html="$t('home.stickers.set2.title')">班比與 BROWN & FRIENDS 的日常</h2>
          <p class="_home_stickers__des" v-html="$t('home.stickers.set2.des')">販售時間： 2021年08月25日～2023年08月24日 09:59</p>
          <div class="_home_stickers__wrap">
            <div class="_home_stickers__img">
              <img src="../assets/img/set_16376129/en/line_sticker_1.png">
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
          <a class="_home_stickers__btn" target="_blank" :href="`https://store.line.me/stickershop/product/16728302/${this.line_lang}`" rel="noopener">
            <span v-html="$t('home.button.all')">看全部</span>
            <i class="_button_icon__angle las la-angle-right"></i>
          </a>
        </div>

      </div> -->

      <div class="_home_category">
        <div class="_home_category__title" v-html="$t('home.category.updates')">
          更新
        </div>
        <ul class="_home_news">
          <li class="_home_news__item">
            <span class="_home_news__date">2021/12/19</span>
            <span class="_home_news__title"  v-html="$t('home.updates.title_1')">網站第一版上線！</span>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
// import Header from '@/components/Header.vue'
import i18n from '../lib/i18n/lang';

export default {
  name: 'Home',
  data(){
    return{
      currLang: this.$i18n.locale,
      // line_lang: this.checkLangForLineLink(),
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
    // checkLangForLineLink(){
    //   let val = ``
    //   if( this.$i18n.locale === 'tw' ){
    //     val = 'zh-Hant'
    //   } else {
    //     val = this.$i18n.locale
    //   }      
    //   return val
    // },
    getCookie(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(';');
      for(var i=0;i < ca.length;i++) {
          var c = ca[i];
          while (c.charAt(0)==' ') c = c.substring(1,c.length);
          if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
      }
      return null;
    },
    eraseCookie(name) {   
        document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
  },
  created(){
    const lang = this.getCookie('lang');
    const path = this.getCookie('path') ? this.getCookie('path') : '' ;
    
    if( lang ){
      i18n.local = lang;
      this.$router.push( lang + '/' + path );
      
      this.eraseCookie('lang');
      this.eraseCookie('path');
    }
  }
}
</script>
