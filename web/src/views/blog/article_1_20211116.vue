<template>
  <div class="_article">
    <div class="_container">
        <div class="_article_info">
          <span class="_article_time">2021/11/30</span>
          <div class="_article_tags">
            <span>coding</span>
            <span>vue</span>
            <span>github pages</span>
            <span>javascript</span>
          </div>
        </div>
        <h1 class="_article_title">解決使用 vue 發佈到 git page 時，router 抓不到內容的問題。</h1>
        
        關於如何發布 vue 專案到 git page 已經有很多文章了就不多著墨，<br>
        主要是因為 SEO 考量使用了 history mode 再加上語系，<br>
        整個需求就變得很複雜<i class="las la-grin-beam-sweat"></i>。<br>
        <br>
        google 了很久始終找不到完美解法，
        所以就改了一個自己的版本出來，
        讓也有同樣需求的迷途羔羊們找到出口。
        <br>
        主要是因為我將網站發佈到 git page 上
        有多語系的需求，又想要不論從哪個網址
        <br>
        可以參考 <a href="https://dean34520.medium.com/vue%E7%B3%BB%E5%88%97%E6%96%87-%E5%B0%87vue%E6%AA%94%E6%A1%88%E9%83%A8%E7%BD%B2%E8%87%B3github-334951cadede" target="_blank">[Vue] 將Vue專案部署至Github Pages</a> 。
    </div>
  </div>
</template>

<script>
export default {
  name: 'article1',
}
</script>
