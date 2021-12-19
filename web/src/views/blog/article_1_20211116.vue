<template>
  <article class="_article">
    <div class="_container">
        <header>
          <router-link class="_article_back" :to="`/${this.$i18n.locale}/blog/`" rel="noopener">
            <i class="las la-angle-left"></i>
            回部落格首頁
          </router-link>
          <h1 class="_article_title">解決使用 vue cli 發佈到 git pages 時，子路徑抓不到內容的問題。</h1>
          <div class="_article_info">
            <span class="_article_time">2021/11/30</span>
            <div class="_article_tags">
              <span>coding</span>
              <span>javascript</span>
              <span>vue</span>
              <span>github pages</span>
            </div>
          </div>
          
        </header>

        <section>
          <h2 class="_shared_category__title">原因</h2>
          <p>
            這次因為 SEO 考量使用了 <em>history mode</em> 再加上<em>語系</em>，
            所以讓整個需求變得比較複雜。
            如果不需考量語系的人可以直接參考<a href="https://siddharam.com.tw/post/20190929/" target="_blank">這篇文章</a>。<br>
          </p>
          <p>
            google 了很久始終找不到完美解法，<br>
            所以就改了一個自己的版本出來，<br>
            希望可以幫助有同樣需求的迷途羔羊們找到出口。
          </p>
          
          <!--
          <vue-markdown>
            `
            let val = location.pathname.split('/');

            function setCookie(name,value,days) {
              var expires = "";
              if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days*24*60*60*1000));
                expires = "; expires=" + date.toUTCString();
              }
              document.cookie = name + "=" + (value || "")  + expires + "; path=/";
            }

            setCookie('lang', val[1], 7);
            setCookie('path', val[2], 7);
            window.location.href = location.origin;
            `
          </vue-markdown> -->

          <h2 class="_shared_category__title">實作</h2>
          <p>
            <!-- 第一步・<br> -->
            建立 <em>404.html 至根目錄</em>，
            並於 header 內加入以下內容：<br>
            拆解 url 成語系跟其餘路徑，接著<em>分別存入兩個 cookie</em>。<br>
            再重新導向至根目錄。
          </p>

          <iframe 
          width="100%"
          height="480"    
          src="data:text/html;charset=utf-8,
          <head><base target='_blank' /></head>
          <body style='margin:0;'><script src='https://gist.github.com/Bambi313/ef82ce90a28641ab40616e5fa89540c1.js'></script>
          </body>" />

          <p>
            <!-- 第二步・<br> -->
            在網站首頁（ 你指定給 root path 的 .vue 檔案 ）由 cookie 讀取語系及路徑，再由 vue-router 切換至對應的路徑，顯示對應的語系的內容。
          </p>

          <iframe 
          width="100%"
          height="480"    
          src="data:text/html;charset=utf-8,
          <head><base target='_blank' /></head>
          <body style='margin:0;'><script src='https://gist.github.com/Bambi313/4bc696e711a564ca59d65dd7d2a66eda.js'></script>
          </body>" />

          <p>
            以上～如果網址有其他結構安排的話也可以透過這樣方式跳轉到需要的頁面噢～<br>
            祝大家開發順利<i class="las la-smile"></i>
          </p>

        </section>

        <footer>
          <div class="_article_recommend">
            <router-link class="_article_recommend__btn prev" target="_self" :to="`/${this.$i18n.locale}/blog/funsiamo-cake-making-experience`" rel="noopener">
              <div class="_article_recommend__arrow"><i class="las la-angle-left"></i>上一篇</div>
              <div class="_article_recommend__title">做蛋糕囉～ Funsiamo 烘焙體驗</div>
            </router-link>
            <!-- <router-link class="_article_recommend__btn next" target="_self" :to="`/${this.$i18n.locale}/blog/fix-router-redirect-while-using-vue-and-gitpage`" rel="noopener">
              <div class="_article_recommend__arrow">下一篇<i class="las la-angle-right"></i></div>
              <div class="_article_recommend__title">解決使用 vue 發佈到 git page 時，router 抓不到內容的問題。</div>
            </router-link> -->
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
