<template>
  <div class="_home">
    <div class="_home_container">
      <div class="_home_intro">
        <div class="_home_intro__photo">
          <img class="_home_intro__img" src="../assets/img/bambi_profile.jpg">
        </div>
        <div class="_home_intro__des">
          <h1 class="_home_intro__hi">嗨，我是班比。</h1>
          <p>
            現任前端工程師，喜歡畫圖、動漫、遊戲、跳舞跟可愛的一切。<br>
            持續學習日文跟英文中。<br>
            不定期出沒在以下平台。
            <!-- 了解更多<router-link :to="`/${this.$i18n.locale}/about`" rel="noopener">關於我</router-link>。 -->
          </p>
          <!-- <h1 v-html="$t('home.hello')">Hi, this is Bambi.</h1> -->
        </div>
      </div>
      <ul class="_home_links">
        <li class="_home_link__item"><a class="_home_links__title _home_links__title--line" href="https://line.me/S/shop/sticker/author/2490379" target="_blank" rel="noopener" v-html="$t('home.links.line')">My Line stickers</a></li>
        <li class="_home_link__item"><a class="_home_links__title _home_links__title--instgram" href="https://www.instagram.com/bambitall/" target="_blank" rel="noopener" v-html="$t('home.links.ig_life')"><i class="lab la-instagram"></i>Instgram</a></li>
        <li class="_home_link__item"><a class="_home_links__title _home_links__title--instgram" href="https://www.instagram.com/bambitall/" target="_blank" rel="noopener" v-html="$t('home.links.ig_draw')"><i class="lab la-instagram"></i>Instgram</a></li>
        <li class="_home_link__item"><a class="_home_links__title _home_links__title--facebook" href="https://www.facebook.com/bambitall" target="_blank" rel="noopener" v-html="$t('home.links.fb')">Facebook</a></li>
        <li class="_home_link__item"><a class="_home_links__title _home_links__title--youtube" href="https://www.youtube.com/c/%E7%8F%AD%E6%AF%94" target="_blank" rel="noopener" v-html="$t('home.links.yt')"><i class="lab la-youtube"></i>Youtube</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
// import Header from '@/components/Header.vue'

export default {
  name: 'Home',
  components: {
    // Header
  }
}
</script>
