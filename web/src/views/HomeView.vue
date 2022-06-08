<template>
  <div class="_homeView">
    <div class="_homeView_container">
      <Guide />
    </div>
    <div class="_homeView_container">
      <div class="_homeView_chooseFile">
        <h4>操作區</h4>
        <div class="_homeView_chooseFile__item">
          <h4 class="_homeView_chooseFile__title">1. 選擇由 line 貼圖後台下載的 .csv</h4>
          <p class="_homeView_chooseFile__des">目前僅支援單一貼圖分析，即檔名為 stats-<span class="_homeView_chooseFile__highlight">sticker_detail</span>-(sitckerId)-all-(date).csv</p>
          <input class="_homeView_chooseFile__btn" type="file" @change="handleFileChange" multiple>
        </div>
        <div v-if="tableData" class="_homeView_chooseFile__item">
          <h4 class="_homeView_chooseFile__title">2. 選擇該組貼圖圖片</h4>
          <p class="_homeView_chooseFile__des">檔名必須為 01.png, 02.png ... 40.png</p>
          <input class="_homeView_chooseFile__btn" type="file" @change="handlePicChange" multiple>
        </div>
      </div>

      <div v-if="stickerName">
        <h1>{{ stickerName }}</h1>
      </div>
      
      <div class="_homeView_control">
        <div class="_homeView_control__item" v-if="startDate">
          start date:
          <input :v-model="startDate" :value="startDate" disabled>
        </div>
        <div class="_homeView_control__item" v-if="lastDate">
          last date:
          <input v-if="lastDate" :v-model="lastDate" :value="lastDate" disabled>
        </div>
      </div>

      <div>
        <Table :fields='fields' :tableData="tableData" @update="reSortData"></Table>
      </div>
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
import Table from '@/components/TableComponent.vue';

export default {
  name: 'HomeView',
  components: {
    Table,
    Guide
  },
  data() {
    return {
      stickerName: '',
      stickerId: '',
      startDate: null,
      lastDate: null,
      jsonData: null,
      tableData: null,
      fields: ['img', 'id', 'sent', 'receive', 'userSentTo', 'userReceive', '平均接收人數', '平均傳送次數/人'],

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
        // customize
        newData['平均接收人數'] = Math.round((newData.userReceive/newData.userSentTo) * 100) / 100;
        newData['平均傳送次數/人'] = Math.round((newData.sent/newData.userSentTo) * 100) / 100;
        resArr.push(newData);
        newData = {};
      }
      this.tableData = resArr;
    },
    reSortData(sortBy){
      let conArr = [];
      conArr = _.sortBy( this.tableData, function(o) { return o[sortBy]; })
      this.tableData = _(conArr).reverse().value();
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
@import "../assets/css/app.css";
/* @import "../assets/css/app.css"; */
</style>
