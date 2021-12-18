<template>
  <div class="_about">
    <div class="_container">
      嗨～我是跟你一樣每天努力過著生活的班比。<br>
      <br>
      目前是個不誤正業的前端工程師。<br>
      工作之外的時間會畫圖、聽音樂、看動畫、玩遊戲、更新技術知識、跳舞、上山下海...等等。<br>
      <br>
      喜歡穿搭；但上班都以簡單舒適為主。<br>
      喜歡打扮；但沒有特別事情時都以素顏見人。<br>
      <br>
      分別在日本跟加拿大居住過半年～一年的時間，<br>
      持續學習日文及英文中。<br>
      <br>
      <!-- 覺得很多東西值比量還要重要太多，<br>
      例如物質跟人際關係。<br>
      <br> -->
      喜歡簡單過生活 <i class="las la-smile"></i>
      
      <h3 class="_shared_category__title" v-html="$t('about.subtitle')">關於這個站</h3>
      一直想要有個地方把自己的所有集中在一起，<br>
      但目前不論哪個平台都無法快速＆簡單達成我的需求，<br>
      所以就決定乾脆自己做一個了 <i class="lar la-grin-tongue"></i><br>
      <br>
      更新內容以繁體中文優先，<br>
      有空時會再陸續加上英文跟日文翻譯，<br>
      如發現英文跟日文有錯誤歡迎糾正，<br>
      甘溫～
      <h3 class="_shared_category__title">組成</h3>
      Vue cli3, github pages, vue-router, vue-i18n, vuex<br>
      字型：粉圓體
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
}
</script>
