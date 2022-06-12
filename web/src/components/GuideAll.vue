<template>
  <div class="_guide">
    <h2 class="_guide_title">使用者愛用哪幾組貼圖？</h2>
    <h3 class="_guide_subtitle">目前功能</h3>
    <div class="_guide_des">
      <div class="_guide_des__main">
        <p>可依據以下七個值顯示貼圖排序</p>
        <ul class="_guide_ul">
          <li>貼圖傳送次數 / No. of Stickers Sent</li>
          <li>貼圖被接收次數 / No. of Stickers Received</li>
          <li>傳送貼圖人數 / No. of Users Sent to <span class="_guide_dot _guide_dot--red"></span></li>
          <li>接收貼圖人數 / No. of Users who Received <span class="_guide_dot _guide_dot--red"></span></li>
          
          <li>平均傳送次數/天 <span class="_guide_des__ps">(註一)</span> <span class="_guide_dot _guide_dot--red"></span><span class="_guide_dot _guide_dot--green"></span></li>
          <li>平均傳送人次/天 <span class="_guide_des__ps">(註二)</span> <span class="_guide_dot _guide_dot--red"></span><span class="_guide_dot _guide_dot--green"></span></li>
          <li>平均接收人次/天 <span class="_guide_des__ps">(註三)</span> <span class="_guide_dot _guide_dot--red"></span><span class="_guide_dot _guide_dot--green"></span></li>
        </ul>
      </div>
      
      <div class="_guide_des__note">
        <div class="_guide_des__ps">
            <p>註一：貼圖傳送次數 / 天數，平均每天被傳送的貼圖次數。<br>
            註二：傳送貼圖人數 / 天數，平均每天使用到這組貼圖的人數。<br>
            註三：接收貼圖人數 / 天數，平均每天接收到這組貼圖的人數。</p>
        </div>
        <div class="_guide_dotBlock">
          <p class="_guide_dotBlock__item"><span class="_guide_dot _guide_dot--red"></span> 目前 line 後台沒有顯示</p>
          <p class="_guide_dotBlock__item"><span class="_guide_dot _guide_dot--green"></span> 額外新增</p>
        </div>
      </div>
    </div>

    <h3 class="_guide_subtitle">預計新增功能</h3>
    <div class="_guide_des">
        <ul class="_guide_ul">
          <li>可修改時間區段（開始日期＆結束日期）篩選資料</li>
          <li>以曲線圖呈現數值</li>
          <li>分析賣出組數及國家(使用收益 csv)</li>
        </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: 'GuideAll',
  props: {
    // msg: String
  }
}
</script>
