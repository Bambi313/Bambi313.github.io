<template>
  <div class="_control">
      <div class="_control_des">
        <h4 class="_control_des__title">上傳檔案</h4>
        <div class="_control_des__item">
          <h4 class="_control_des__subtitle">1. 選擇由 line 貼圖後台下載的 .csv</h4>
          <p class="_control_des__des">
            支援檔名為 stats-<span class="_control_des__highlight">sticker-all</span>-XXXX.csv 的檔案。
          </p>
          <input class="_control_des__btn" type="file" @change="handleFileChange" multiple>
        </div>
        <div class="_control_des__item">
          <h4 class="_control_des__subtitle">2. 上傳貼圖首圖們（完成第一步驟後才會顯示上傳按鈕）</h4>
          <p class="_control_des__des">檔名必須為貼圖英文名，建議從 line 後台直接複製貼上 (副檔名必須為 .png)</p>
          <p class="_control_des__des">* 不一定要上傳圖片，但有圖片可以幫助更快看出是哪組貼圖喔</p>
          <input class="_control_des__btn" type="file" @change="handlePicChange" multiple  v-if="tableData">
        </div>
      </div>
      <!-- <button @click="changeData">New Data</button>
      <div class="_control_table">
        <div id="graph">
        </div>
      </div> -->

      <div class="_control_table" v-if="tableData">
        <div class="_control_block">
          <div class="_control_block__wrap">
            <div class="_control_time__item">
              開始日期
              <input :v-model="startDate" :value="startDate" disabled>
            </div>
            <div class="_control_time__item">
              結束日期
              <input :v-model="lastDate" :value="lastDate" disabled>
            </div>
          </div>
        </div>

        <Table :fields='fields' :tableData="tableData" @update="reSortData" :active="'sent'"></Table>
        
      </div>
    </div>
</template>

<script>
import _ from 'lodash';
import * as moment from "moment/moment";
import Table from './Table.vue';
import * as d3 from "d3";

export default {
  name: 'AllSticker',
  components: {
    Table,
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
          tw: '首圖',
          sortable: false
        },{
          slug: 'name',
          tw: '貼圖名稱',
          sortable: false
        },{
          slug: 'sent',
          tw: '貼圖傳送次數',
          sortable: true
        },{
          slug: 'receive',
          tw: '貼圖被接收次數',
          sortable: true
        },{
          slug: 'userSentTo',
          tw: '傳送貼圖人數',
          sortable: true
        },{
          slug: 'userReceive',
          tw: '接收貼圖人數',
          sortable: true
        }, {
          slug: 'avgSent',
          tw: '平均傳送次數/天',
          sortable: true
        }, {
          slug: 'avgUserSent',
          tw: '平均傳送人次/天',
          sortable: true
        }, {
          slug: 'avgUserReceive',
          tw: '平均接收人次/天',
          sortable: true
      }],
      sampleData: [
        { x: 1, y: 80 },
        { x: 2, y: 40 },
        { x: 3, y: 50 },
        { x: 4, y: 100 },
        { x: 5, y: 20 },
        { x: 6, y: 40 },
        { x: 7, y: 50 },
        { x: 8, y: 100 },
        { x: 9, y: 20 },
        { x: 10, y: 50 },
        { x: 11, y: 100 },
        { x: 12, y: 20 }
      ]
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
      let dataArr = this.splitStickerArr(src);
      
      // for d3
      let dataArrD3 =_.cloneDeep(dataArr);
      // console.log('dataArrD3',dataArrD3);
      this.arrangeDataForD3(dataArrD3);
          
      // for table
      let dataObj = this.arrToObj(dataArr);
      this.jsonData = dataObj;
      this.filterData(dataObj);
      // this.draw();
    },
    splitStickerArr(originData){
      let res = [];
      // remove last 1 empty element
      originData.splice(-1, 1);

      let stickerGroup = [];
      let stickerTemp = [];
      for (let i = 0; i < originData.length; i++) {
        if (originData[i].length === 1) {
          if(originData[i][0] != ''){
            stickerTemp.push(originData[i]);  
          } else {
            stickerGroup.push(stickerTemp);
            stickerTemp = []; 
          }
        } else {
          if(!originData[i][0].includes('Date')){
            stickerTemp.push(originData[i]);
          }
        }
      }
      // remove no counts data
      stickerGroup = _.remove(stickerGroup, function(n) {
        return n.length > 1;
      });
      res = stickerGroup;
      return res;
    },
    arrangeDataForD3(d3SrcArr) {
      // console.log('d3SrcArr',d3SrcArr);
      let setObj = {
        name : '',
      };
      d3SrcArr.map((e)=>{
        // console.log('e',e);
        setObj.name = e.shift()[0];
        // console.log('setObj.name', setObj.name)
      });

    },
    arrToObj (srcArr) {
      let res = [];
      srcArr.forEach( (item) => {
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
      let no = 0;
      
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
        newData.no = no;
        no++;
        resArr.push(newData);
        newData = {};
      }
      this.tableData = resArr;

      // this.drawD3();
    },
    reSortData(data){
      let conArr = [];
      conArr = _.sortBy( this.tableData, function(o) { return o[data.ta]; })
      if( data.decrease ){
        this.tableData = _(conArr).reverse().value();
      } else {
        this.tableData = _(conArr).value();
      }
    },
    drawD3(){
      d3.select("#graph")
        .append("svg")
        // .attr("width", 250)
        // .attr("height", 250)
        .attr("preserveAspectRatio", "xMinYMin meet")
        .attr("viewBox", "0 0 960 500")
        .style("border", "1px solid #00000060");

      this.draw();
    },
    draw(newData) {
      // console.log('draw newData',newData);
      
      let dataset = newData || this.sampleData;
      let Xdata = dataset.map(function(d) {
        return d.x;                              // [10, 70, 60, 30, 90]
      });
      let Xscale = d3
        .scaleLinear()
        .domain([0, d3.max(Xdata)])              // 座標 X 軸的長度將會依據 0 至 Xdata 資料的最大值
        .range([0, 800]);                        // 換算成實際上會輸出的長度 0 至 200

      let Xaxis = d3.axisBottom(Xscale).tickFormat(function(d) {
        return d + "月";
      });
      let gXaxis = d3
        .select("svg")
        .append("g")
        .attr("transform", "translate(30,220)");

        Xaxis(gXaxis);


        let Ydata = dataset.map(function(d) {
          return d.y;
        });
        let Yscale = d3
          .scaleLinear()
          .domain([0, d3.max(Ydata)])
          .range([200, 0]);
        let Yaxis = d3.axisLeft(Yscale);
        let gYaxis = d3
          .select("svg")
          .append("g")
          .attr("transform", "translate(30,20)");

        Yaxis(gYaxis);


        let line = d3.line()                        // 定義線段
          .x(function (d) {
              return Xscale(d.x);
          })
          .y(function (d) {
              return Yscale(d.y);
          })

        d3.select('svg').append('path')
          .attr('d', line(dataset))               // 使用定義線段
          .attr("transform", "translate(30,20)")
          .attr('stroke', '#e1e1e1')
          .attr('stroke-width',1)
          .attr('fill', 'none');

        // d3.select('svg').append("text")
        //   // .attr("transform", "translate(" + 500 + "," + 30 + ")")
        //   .attr("dy", ".35em")
        //   .attr("text-anchor", "start")
        //   .style("fill", "steelblue")
        //   .text("Close");
    },
    changeData() {
      this.sampleData = [5, 30];
    },
  },
  watch: {
    sampleData: function() {
      // console.log('sampleData');
      
      this.draw(this.sampleData);
    }
  },
  created(){
  },
  mounted(){
    // this.drawD3();
  }
}
</script>