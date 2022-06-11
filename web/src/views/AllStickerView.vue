<template>
  <div class="_allSticker">
    <div class="">
      <Header />
      <WelconMsg />
      <GuideAll />
    </div>
    <div class="_allSticker_container">
      <div class="_allSticker_chooseFile">
        <h4 class="_allSticker_chooseFile__title">開始上傳檔案</h4>
        <div class="_allSticker_chooseFile__item">
          <h4 class="_allSticker_chooseFile__subtitle">1. 選擇由 line 貼圖後台下載的 .csv</h4>
          <p class="_allSticker_chooseFile__des">
            支援檔名為 stats-<span class="_allSticker_chooseFile__highlight">sticker-all</span>-XXXX.csv 的檔案
          </p>
          <input class="_allSticker_chooseFile__btn" type="file" @change="handleFileChange" multiple>
        </div>
        <div class="_allSticker_chooseFile__item">
          <h4 class="_allSticker_chooseFile__subtitle">2. 上傳貼圖首圖們（完成第一步驟後才會顯示上傳按鈕）</h4>
          <p class="_allSticker_chooseFile__des">檔名必須為貼圖英文名，建議從 line 後台直接複製貼上 (副檔名必須為 .png)</p>
          <input class="_allSticker_chooseFile__btn" type="file" @change="handlePicChange" multiple  v-if="tableData">
        </div>
      </div>
      
      <div class="_allSticker_table" v-if="tableData">
      <!-- <div class="_allSticker_table"> -->
        <!-- <div v-if="stickerName">
          <h5 class="_allSticker_table__title">{{ stickerName }} 結果</h5>
        </div> -->
        
        <div class="_allSticker_control">
          <div class="_allSticker_control__item">
            開始日期:
            <input :v-model="startDate" :value="startDate" disabled>
          </div>
          <div class="_allSticker_control__item">
            結束日期:
            <input :v-model="lastDate" :value="lastDate" disabled>
          </div>
        </div>

        <Table :fields='fields' :tableData="tableData" @update="reSortData"></Table>
        
      </div>
    </div>

    <div class="_allSticker_bottom">
      操作有問題請至<a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLScqYKZccHfAeqmrb_GfiSvps9eJw-9SihZ8krmzrDLEoCJ_eA/viewform?usp=pp_url">問題回報表單</a>,
      也歡迎到 <a target="_blank" href="https://docs.google.com/spreadsheets/d/1DmnFdTNJP_aGh3nmgx0th1_PzLz65qLn0LrJi2ABpqQ/edit?usp=sharing">line 貼圖分析許願池</a> 告訴我你想要的功能喔～
    </div>
    <div class="_footer">
      © <a class="_footer_link" href="https://www.bambiland.me" target="_blank"> 班比牧場 Bambiland </a> 
    </div>
    <!-- <button @click="changeData">New Data</button> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import * as d3 from "d3";
import _ from 'lodash';
import * as moment from "moment/moment";
import GuideAll from '@/components/GuideAll.vue';
import Table from '@/components/Table.vue';
import Header from '../components/Header.vue';
import WelconMsg from '../components/WelconMsg.vue';

export default {
  name: 'AllStickerView',
  components: {
    Table,
    GuideAll,
    Header,
    WelconMsg
  },
  data() {
    return {
      // stickerName: '',
      startDate: null,
      lastDate: null,
      jsonData: null,
      tableData: null,
      fields: [{
          slug: 'img',
          tw: '首圖'
        },{
          slug: 'name',
          tw: '貼圖名稱'
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
          slug: 'avgSent',
          tw: '平均傳送次數/天'
        }, {
          slug: 'avgUserSent',
          tw: '平均傳送人次/天'
        }, {
          slug: 'avgUserReceive',
          tw: '平均接收人次/天'
      }],
      // sampleData: [10, 20, 30]
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
        container.name = file.name.replace('.png','');
        const FR = new FileReader();
        
        FR.addEventListener("load", function(evt) {
          container.img = evt.target.result;
          const idx = _this.tableData.findIndex(item => item.name === container.name);
            _.merge(_this.tableData[idx], container);
        });
        
        FR.readAsDataURL(file);
      });
    },
    restructureData (src) {
      // this.stickerName = src.shift()[0];
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
          // console.log('src[i]',src[i]);
        }
      }
      res = _.remove(res, function(n) {
        // console.log('n',n);
        // console.log('n.length',n.length);
        return n.length > 2;
      });
      // console.log('splitStickerArr res', res);
      
      return res;
    },
    arrToObj (src) {
      let res = [];
      src.forEach( (item) => {
        let sticker = {};
        sticker.name = item.shift()[0];
        sticker.data = [];
        let detail = {};

        // remove field name
        item.shift();

        item.forEach( data => {
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
      const days = moment(this.lastDate).diff(moment(this.startDate), 'days');
      
      // sum
      let resArr = [];
      let newData = {};
  
      for (let i = 0; i < src.length; i++) {
        newData.name = src[i].name;
        newData.id = src[i].no;
        let data = src[i].data;
        newData.sent = _.sumBy(data, function(o) { return o.sent; });
        newData.receive = _.sumBy(data, function(o) { return o.receive; });
        newData.userSentTo = _.sumBy(data, function(o) { return o.userSentTo; });
        newData.userReceive = _.sumBy(data, function(o) { return o.userReceive; });

        // customize data
        newData.avgSent = Math.round((newData.sent/days) * 100) / 100;
        newData.avgUserSent = Math.round((newData.userSentTo/days) * 100) / 100;
        newData.avgUserReceive = Math.round((newData.userReceive/days) * 100) / 100;
        
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
    // draw(newData) {
    //   let dataset = newData || this.sampleData;
    //   let circle = d3.select("svg").selectAll("circle");
    //   let update = circle.data(dataset);
    //   let enter = update.enter();
    //   let exit = update.exit();

    //   update
    //     .attr("cx", function(d, i) {
    //       return (i + 1) * 100;
    //     })
    //     .attr("cy", 100)
    //     .attr("r", function(d) {
    //       return d;
    //     })
    //     .style("fill", "red");

    //   enter
    //     .append("circle")
    //     .attr("cx", function(d, i) {
    //       return (i + 1) * 100;
    //     })
    //     .attr("cy", 100)
    //     .attr("r", function(d) {
    //       return d;
    //     })
    //     .style("fill", "red");

    //   exit.remove();
    // },
    // changeData() {
    //   this.sampleData = [5, 30];
    // },
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

<style>
/* @import "../assets/css/reset.css"; */
@import '../../node_modules/bootstrap/dist/css/bootstrap.css';
@import "../assets/css/app.css";
/* not ready @import "../assets/css/font.css"; */
</style>
