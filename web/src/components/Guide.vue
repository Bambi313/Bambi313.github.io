<template>
  <div class="_guide">
    <h1>貼圖分析小幫手 超・beta 版</h1>
    <div class="_guide_welcome">
        <p>哈囉～目前為 beta 版的 beta 版的 beta 版，因此若有超出條件的操作，資料跑不出來是<span class="_guide_highlight_txt">非常正常</span> der。<br>
        目前亦沒有存檔機制，因此<span class="_guide_highlight_txt">操作時請小心不要跳出本頁</span>，不然就要重新上傳一次資料了OwQ</p>
        <p>** 沒有做rwd！請使用電腦操作保護您的眼睛 **</p>
    </div>
    
    
    <h3 class="_guide_subtitle">目前功能：</h3>
    <div class="_guide_function">
        <p>可依據 sent, receive, userSentTo, userReceive, 平均接收人數<span class="_guide_function__ps">(註一)</span>及平均傳送次數<span class="_guide_function__ps">(註二)</span>顯示貼圖排序。</p>
        <p class="_guide_function__ps">
            註一：平均接收人數公式為 userReceive / userSentTo，數字大於 1 則代表貼圖被使用於群組內。<br>
            註二：平均傳送次數公式為 sent / userSentTo，代表同一個使用者重複使用此張貼圖的次數。
        </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Guide',
  props: {
    // msg: String
  }
}
</script>
