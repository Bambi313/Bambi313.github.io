<template>
  <div class="_control">
    <div class="_control_des">
      <h4 class="_control_des__title">上傳檔案</h4>
      <div class="_control_des__item">
        <h4 class="_control_des__subtitle">1. 選擇由 line 貼圖後台下載的 .csv</h4>
        <p class="_control_des__des">
          支援檔名為 stats-<span class="_control_des__highlight">sticker_detail</span>-(sitckerId)-all-(date) 的檔案。<br>
          想確定下載檔案的位置是否正確請參考<a class="_footer_link" href="https://www.bambiland.me/blogs-detail/line-sticker-analyze-tool-beta-launch" target="_blank">這篇文章</a>
        </p>
        <input class="_control_des__btn" type="file" @change="handleFileChange" multiple>
      </div>
      <div class="_control_des__item">
        <h4 class="_control_des__subtitle">2. 選擇該組貼圖圖片（完成第一步驟後才會顯示上傳按鈕）</h4>
        <p class="_control_des__des">檔名必須為 01.png, 02.png ... 40.png</p>
        <p class="_control_des__des">* 不一定要上傳圖片，但有圖片可以幫助更快看出是哪張貼圖喔</p>
        <input class="_control_des__btn" type="file" @change="handlePicChange" multiple  v-if="tableData">
      </div>
    </div>
    
    <div class="_control_table" v-if="tableData">
    <!-- <div class="_control_table"> -->
      <div v-if="stickerName">
        <h5 class="_control_table__title">{{ stickerName }} 結果</h5>
      </div>
      
      <div class="_control_time">
        <div class="_control_time__item">
          開始日期
          <input :v-model="startDate" :value="startDate" disabled>
        </div>
        <div class="_control_time__item">
          結束日期
          <input :v-model="lastDate" :value="lastDate" disabled>
        </div>
      </div>

      <Table :fields='fields' :tableData="tableData" @update="reSortData" :active="'id'"></Table>
      
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
// import * as moment from "moment/moment";
import Table from './Table.vue';

export default {
  name: 'AllSticker',
  components: {
    Table,
  },
  data() {
    return {
      stickerName: '',
      startDate: null,
      lastDate: null,
      jsonData: null,
      tableData: null,
      fields: [{
          slug: 'img',
          tw: '貼圖'
        },{
          slug: 'id',
          tw: '編號'
        },{
          slug: 'sent',
          tw: '貼圖傳送次數'
        },{
          slug: 'receive',
          tw: '貼圖被接收次數'
        },{
          slug: 'userSentTo',
          tw: '傳送貼圖人數'
        },{
          slug: 'userReceive',
          tw: '接收貼圖人數'
        }, {
          slug: 'avgUserReceive',
          tw: '平均接收人數/張'
        }, {
          slug: 'avgSent',
          tw: '平均傳送次數/人'
      }],
    }
  },
  methods: {
    handleFileChange (e) {
      let files = e.target.files;
      
      for (let i = 0; i < files.length; i++) {
        this.$papa.parse (files[i], {
          complete: (results) => {
            this.restructureData(results.data);
          }
        });
      }
      
    },
    handlePicChange (e) {
      let files = e.target.files;
      var filesArr = _.values(files);
      let _this = this;

      filesArr.forEach( (file) => {
        let container = {};
        container.id = file.name.replace('.png','');
        const FR = new FileReader();
        
        FR.addEventListener("load", function(evt) {
          container.img = evt.target.result;
          const idx = _this.tableData.findIndex(item => item.id === container.id);
            _.merge(_this.tableData[idx], container);
        });
        
        FR.readAsDataURL(file);
      });
    },
    restructureData (src) {
      this.stickerName = src.shift()[0];
      let dataArr = this.splitStickerArr(src);
      let dataObj = this.arrToObj(dataArr);
      this.jsonData = dataObj;
      this.filterData(dataObj);
      // this.draw();
    },
    splitStickerArr(src){
      let res = [];
      let container = [];

      // remove last 1 empty element
      src.splice(-1, 1);

      for (let i = 0; i < src.length; i++) {
        if (src[i].length === 1 && src[i][0] === '') {
          // move to next sticker
          res.push(container);
          container = [];
        } else {
          container.push(src[i]);
        }
      }
      return res;
    },
    arrToObj (src) {
      let res = [];
      src.forEach( (eachSticker) => {
        let sticker = {};
        sticker.no = eachSticker.shift()[0];
        sticker.data = [];
        let detail = {};

        // remove field name
        eachSticker.shift();

        eachSticker.forEach( data => {
          for (let l = 0; l < data.length; l++) {
            detail.date = data[0];
            detail.sent = parseInt(data[1]);
            detail.receive = parseInt(data[2]);
            detail.userSentTo = parseInt(data[3]);
            detail.userReceive = parseInt(data[4]);
          }
          sticker.data.push(detail);
          detail = {};
        });

        res.push(sticker);
        sticker = {};
      });

      return res;
    },
    filterData (src) {
      // get start date & last date
      const srcData = src[0].data;
      this.startDate = srcData[0].date;
      this.lastDate = srcData[srcData.length - 1].date;
      
      // sum
      let resArr = [];
      let newData = {};

      for (let i = 0; i < src.length; i++) {
        newData.id = src[i].no;
        let data = src[i].data;
        newData.sent = _.sumBy(data, function(o) { return o.sent; });
        newData.receive = _.sumBy(data, function(o) { return o.receive; });
        newData.userSentTo = _.sumBy(data, function(o) { return o.userSentTo; });
        newData.userReceive = _.sumBy(data, function(o) { return o.userReceive; });
        newData.avgUserReceive = Math.round((newData.userReceive/newData.userSentTo) * 100) / 100;
        newData.avgSent = Math.round((newData.sent/newData.userSentTo) * 100) / 100;
        resArr.push(newData);
        newData = {};
      }
      this.tableData = resArr;
    },
    reSortData(data){
      let conArr = [];
      conArr = _.sortBy( this.tableData, function(o) { return o[data.ta]; })
      if( data.decrease ){
        this.tableData = _(conArr).reverse().value();
      } else {
        this.tableData = _(conArr).value();
      }
    }
  },
  watch: {
    // sampleData: function() {
    //   this.draw(this.sampleData);
    // }
  },
  created(){
    // d3.select("#app")
    //   .append("svg")
    //   .attr("width", 500)
    //   .attr("height", 500);
  },
  mounted(){
    // const range = _.range(1, 3);
    // console.log('range', range);
  }
}
</script>