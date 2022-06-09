<template>
  <div class="_homeView">
    <div class="">
      <Header />
      <WelconMsg />
      <Guide />
    </div>
    <div class="_homeView_container">
      <div class="_homeView_chooseFile">
        <h4 class="_homeView_chooseFile__title">開始上傳檔案</h4>
        <div class="_homeView_chooseFile__item">
          <h4 class="_homeView_chooseFile__subtitle">1. 選擇由 line 貼圖後台下載的 .csv</h4>
          <p class="_homeView_chooseFile__des">
            目前僅支援單一貼圖分析，即檔名為 stats-<span class="_homeView_chooseFile__highlight">sticker_detail</span>-(sitckerId)-all-(date) 的檔案，<br>
            return-XXXXX.csv（收益報表）以及 stats-sticker-all-XXXX.csv（跨貼圖報表）都是不行的噢。<br>
            想確定下載檔案的位置是否正確請參考<a class="_footer_link" href="https://www.bambiland.me/blogs-detail/line-sticker-analyze-tool-beta-launch" target="_blank">這篇文章</a>
          </p>
          <input class="_homeView_chooseFile__btn" type="file" @change="handleFileChange" multiple>
        </div>
        <div class="_homeView_chooseFile__item">
          <h4 class="_homeView_chooseFile__subtitle">2. 選擇該組貼圖圖片（完成第一步驟後才會顯示上傳按鈕）</h4>
          <p class="_homeView_chooseFile__des">檔名必須為 01.png, 02.png ... 40.png</p>
          <input class="_homeView_chooseFile__btn" type="file" @change="handlePicChange" multiple  v-if="tableData">
        </div>
      </div>
      
      <!-- <div class="_homeView_table" v-if="tableData"> -->
      <div class="_homeView_table">
        <div v-if="stickerName">
          <h5 class="_homeView_table__title">{{ stickerName }} 結果</h5>
        </div>
        
        <div class="_homeView_control">
          <div class="_homeView_control__item">
            開始日期:
            <input :v-model="startDate" :value="startDate" >
          </div>
          <div class="_homeView_control__item">
            結束日期:
            <input :v-model="lastDate" :value="lastDate" >
          </div>
        </div>

        <Table :fields='fields' :tableData="tableData" @update="reSortData"></Table>
        
      </div>
    </div>

    <div class="_homeView_bottom">
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
import Guide from '@/components/Guide.vue';
import Table from '@/components/Table.vue';
import Header from '../components/Header.vue';
import WelconMsg from '../components/WelconMsg.vue';

export default {
  name: 'HomeView',
  components: {
    Table,
    Guide,
    Header,
    WelconMsg
  },
  data() {
    return {
      stickerName: '',
      stickerId: '',
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
          tw: '平均接收人數'
        }, {
          slug: 'avgSent',
          tw: '平均傳送次數/人'
      }],
      // sampleData: [10, 20, 30]
    }
  },
  methods: {
    handleFileChange (e) {
      let files = e.target.files;
      
      for (let i = 0; i < files.length; i++) {
        let fileName = files[i].name;
        let splitName = fileName.split('-');
        this.stickerId = splitName[2];
        let fileNameDate = splitName[4].replace('.csv','') ;
        this.lastDate = moment(fileNameDate).subtract(1, 'days').format('YYYY/MM/DD');

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
