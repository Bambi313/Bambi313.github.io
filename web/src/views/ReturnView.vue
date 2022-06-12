<template>
  <div class="_returnView">
    <!-- <div class="">
      <Header />
      <WelconMsg />
      <Guide />
    </div> -->
    <div class="_returnView_container">
      <div class="_returnView_chooseFile">
        <h4 class="_returnView_chooseFile__title">上傳檔案</h4>
        <div class="_returnView_chooseFile__item">
          <h4 class="_returnView_chooseFile__subtitle">1. 選擇由 line 貼圖後台下載的 .csv</h4>
          <p class="_returnView_chooseFile__des">
            此工具支援 return-XXXXX.csv（收益報表） 的檔案，<br>
          </p>
          <input class="_returnView_chooseFile__btn" type="file" @change="handleFileChange" multiple>
        </div>
        <div class="_returnView_chooseFile__item">
          <h4 class="_returnView_chooseFile__subtitle">2. 選擇該組貼圖圖片（完成第一步驟後才會顯示上傳按鈕）</h4>
          <p class="_returnView_chooseFile__des">檔名必須為 01.png, 02.png ... 40.png</p>
          <input class="_returnView_chooseFile__btn" type="file" @change="handlePicChange" multiple  v-if="tableData">
        </div>
      </div>
      
      <div class="_returnView_table" v-if="tableData">
      <!-- <div class="_returnView_table"> -->
        <div v-if="stickerName">
          <h5 class="_returnView_table__title">{{ stickerName }} 結果</h5>
        </div>
        
        <div class="_returnView_control">
          <div class="_returnView_control__item">
            開始日期:
            <input :v-model="startDate" :value="startDate" disabled>
          </div>
          <div class="_returnView_control__item">
            結束日期:
            <input :v-model="lastDate" :value="lastDate" disabled>
          </div>
        </div>

        <Table :fields='fields' :tableData="tableData" @update="reSortData"></Table>
        
      </div>
    </div>

    <div class="_returnView_bottom">
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
// import * as moment from "moment/moment";
// import Guide from '@/components/Guide.vue';
import Table from '@/components/Table.vue';
// import Header from '../components/Header.vue';
// import WelconMsg from '../components/WelconMsg.vue';

export default {
  name: 'HomeView',
  components: {
    Table,
    // Guide,
    // Header,
    // WelconMsg
  },
  data() {
    return {
      stickerName: '',
      stickerId: '',
      startDate: null,
      lastDate: null,
      allDataArr: null,
      jsonData: null,
      tableData: null,
      fields: [{
          originIdx: 0,
          slug: 'month',
          tw: '月份'
        },{
          originIdx: 3,
          slug: 'id',
          tw: 'ID'
        },{
          originIdx: 4,
          slug: 'title',
          tw: '名稱'
        },{
          originIdx: 2,
          slug: 'type',
          tw: '類型'
        },{
          originIdx: 5,
          slug: 'country',
          tw: '販售國家'
        },{
          originIdx: 7,
          slug: 'salesCounts',
          tw: '販售組數'
        },{
          originIdx: 9,
          slug: 'shareRate',
          tw: '分潤比'
        }, {
          originIdx: 12,
          slug: 'revenueShare',
          tw: '金額'
        }],
        // for filter
        monthArr: [],
        idArr: [],
        typeArr: [],
        countryArr: [],

        filterCategoryList: ['id', 'type', 'country'],
        filterSrcArr: [],
        
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
      // remove table head
      src.shift()[0];
      // remove last 2 empty element
      src.splice(-2, 2);
      
      let dataArr = this.arrangeData(src);
      this.allDataArr = _.concat( this.allDataArr, dataArr);
      console.log('this.allDataArr',this.allDataArr);
      
      // this.jsonData = dataObj;
      // this.filterData(dataObj);
    },
    arrangeData (src) {
      let res = [];

      src.forEach( (item) => {
        let itemObj = {};
        this.fields.map((o)=>{
          itemObj[o.slug] = item[o.originIdx];
        });

        res.push(itemObj);
        // console.log('itemObj',itemObj);
        
        //save data for filter
        this.idArr.push(itemObj.id);
        this.typeArr.push(itemObj.type);
        this.countryArr.push(itemObj.country);
        
        itemObj = {};
      });
      console.log('this.idArr',this.idArr);
      console.log('this.typeArr',this.typeArr);
      console.log('this.countryArr',this.countryArr);
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
