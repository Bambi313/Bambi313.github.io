<template>
  <div class="_about">
    <div class="_container">
      <div class="_about_des">
        <div class="_about_photo">
          <img class="_about_img" src="../assets/img/bambi_profile.jpg">
        </div>
        <div class="_about_des_txt">
          <h1 class="_about_des_h1">
            嗨～<br>
            我是班比。
          </h1>
        </div>
      </div>
      
      目前是個前端攻城獅。<br>
      工作以外的時間會畫圖、看動畫、玩遊戲、找有趣的事情做＆亂跑、睡覺...等等。<br>
      <br>
      喜歡穿搭；但最喜歡穿得簡單舒適。<br>
      喜歡打扮；但沒有特別事情時偏好素顏。<br>
      <br>
      分別在日本跟加拿大居住過半年～一年的時間，<br>
      持續學習日文及英文中。<br>
      喜歡把生活過得簡單。
      
      <h3 class="_shared_category__title" v-html="$t('about.subtitle')">關於這個站</h3>
      一直想要有個地方把所有東西集中在一起，<br>
      但目前不論哪個平台都無法快速＆簡單達成我的需求，<br>
      所以就決定乾脆自己做一個了。<br>
      <br>
      更新內容以繁體中文優先，<br>
      有空時會再陸續加上其他語言，<br>
      如發現有任何錯誤都歡迎糾正，<br>
      甘溫(感恩) <i class="las la-smile"></i>
      <h3 class="_shared_category__title">網站組成</h3>
      Vue, github pages<br>
      字型：<a target="_blank" href="https://justfont.com/huninn/?gclid=Cj0KCQiAqvaNBhDLARIsAH1Pq52RDi2mUCddU05Hl499eH2RaX9r7pDut2Wi1KpJ2P96LyaC7JGbdmUaArj4EALw_wcB">粉圓體</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
}
</script>
