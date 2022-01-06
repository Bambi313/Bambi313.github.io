<template>
  <article class="_article">
    <!-- <div class="_article_category">
      <ul class="_article_category__container">
        <li>部落格首頁</li>
      </ul>
    </div> -->
    
    <div class="_container">
        <header>
          <router-link class="_article_back" :to="`/${this.$i18n.locale}/blog/`" rel="noopener">
            <i class="las la-angle-left"></i>
            回部落格首頁
          </router-link>
          <h1 class="_article_title">歡樂姊妹聚-自己動手做蛋糕～ Funsiamo 烘焙體驗</h1>
          <div class="_article_info">
            <span class="_article_time">2021/12/18</span>
            <div class="_article_tags">
              <span>baking</span>
              <span>experience</span>
              <span>life</span>
            </div>
          </div>
          
          <!-- <div class="_article_cover">
            <img src="../../assets/img/blog/funsiamo_cover.jpg"/>
          </div> -->
        </header>

        <section>

          <h2 class="_shared_category__title">摘要</h2>
          <ul class="_article_summary">
            <li class="_article_summary__title"><span>地點</span>Funsiamo</li>
            <li class="_article_summary__title"><span>地址</span><a target="_blank" href="https://g.page/funsiamo?share">106 台北市大安區光復南路200巷28號1樓<br>（師大店已關，所以放上光復店地址）</a></li>
            <li class="_article_summary__title"><span>官網</span><a target="_blank" href="https://www.funsiamo.com/">www.funsiamo.com</a></li>
            <li class="_article_summary__title"><span>品名</span>玩美UNICORN彩虹蛋糕</li>
            <li class="_article_summary__title"><span>花費</span>NTD 1000</li>
          </ul>

          <h2 class="_shared_category__title">正文</h2>
          <p>
            離開學校就沒有再做過點心之類的東西，
            因為家裡沒有適合的空間、工具，還要準備很多材料太麻煩，
            所以看到有這種「只要人到就好」的烘焙體驗就一直很想去。
          </p>
          <p>
            趁著 8 月疫情好轉的時候去做了一個巧克力香蕉派，
            沒想到之後整個愛上。
          </p>

          <figure class="_article_img_normal">
            <img src="../../assets/img/blog/funsiamo_1.jpg"/>
            <figcaption>
              第一次的巧克力香蕉派，巧克力味超香超好吃～
            </figcaption>
          </figure>
          
          <p>
            剛好看到他們 10 月底有五倍券活動（ 多款蛋糕都只要 1000 元 ），
            立刻跟姊姊約了再去一次。
          </p>
          <p>
            因為記錯時間我們差點大遲到，
            還好店員們都很親切沒有直接關門下班<i class="lar la-sad-tear"></i>。
          </p>
          <p>
            可能因為是星期日晚上，
            整場只有我跟姊姊兩個人。
            進店之後先挑想喝的飲料，
            我的是葡萄可爾必思之類的，
            還不錯喝，
            但開始做蛋糕之後整個遺忘它，
            幾乎是要離開前才一次灌完。
          </p>

          <figure class="_article_img_normal">
            <img src="../../assets/img/blog/funsiamo_2.jpg"/>
            <figcaption>
              桌上有一些工具，還有更多材料放在桌下的小推車
            </figcaption>
          </figure>

          <p>
            整個環境就是真實版的 Overcooked，
            在玩 Overcooked 的時候我最怕遇到攪拌器了...
            超級容易攪到火燒厝，
            不然就是把攪拌盆亂丟找不到<i class="lar la-grin-squint-tears"></i>
          </p>
          <p>
            基本上就是用 iPad 觀看一次製作流程後剩下直接實作，
            該用到的東西、該做的事都有詳細寫在裡面。
            過程中有不懂的地方就直接問店員就好，
            甚至我覺得店員其實都有在<s>偷偷</s>觀察我們，
            所以也不用太擔心做出異次元食物 lol。
          </p>

          <figure class="_article_img_normal">
            <img src="../../assets/img/blog/funsiamo_3.jpg"/>
            <figcaption>
              剛烤出來的五色蛋糕層，圓圓的很可愛
            </figcaption>
          </figure>


          <figure class="_article_img_normal">
            <img src="../../assets/img/blog/funsiamo_4.jpg"/>
            <figcaption>
              擠花擠得很開心的我
            </figcaption>
          </figure>
          <p>
            有剪了短短的紀錄影片，有興趣的歡迎點下圖過去看看噢～
          </p>
          <h2 class="_shared_category__title">短影片紀錄</h2>
          <div class="_article_video">
            <a class="_article_video__a" href="https://www.instagram.com/tv/CXkK4y5D4SS/?utm_source=ig_web_copy_link" target="_blank">
              <img src="../../assets/img/blog/funsiamo_video_cover.jpg"/>
            </a>
          </div>
          
        </section>

        <footer>
          <div class="_article_recommend">
            <!-- <router-link class="_article_recommend__btn prev" target="_self" :to="`/${this.$i18n.locale}/blog/funsiamo-cake-making-experience`" rel="noopener">
              <div class="_article_recommend__arrow"><i class="las la-angle-left"></i>上一篇</div>
              <div class="_article_recommend__title">歡樂姊妹聚-自己動手做蛋糕～ Funsiamo 烘焙體驗</div>
            </router-link> -->
            <router-link class="_article_recommend__btn next" target="_self" :to="`/${this.$i18n.locale}/blog/fix-router-redirect-while-using-vue-and-gitpage`" rel="noopener">
              <div class="_article_recommend__arrow">下一篇<i class="las la-angle-right"></i></div>
              <div class="_article_recommend__title">解決使用 vue 發佈到 git page 時，router 抓不到內容的問題。</div>
            </router-link>
          </div>
        </footer>
    </div>
  </article>
</template>

<script>
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  gsap.registerPlugin(ScrollTrigger);

  export default {
    // name: 'article1',
    methods:{
      
    },
    mounted(){
      ScrollTrigger.create({
        trigger: "._article",
        start: "top top",
        endTrigger: "footer",
        pin: "header",
        // markers: true
      });
    }
  }
</script>
