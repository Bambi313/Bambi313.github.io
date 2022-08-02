<template>
  <div class="_control">
    <div class="_control_des">
      <h4 class="_control_des__title">上傳檔案</h4>
      <div class="_control_des__item">
        <h4 class="_control_des__subtitle">1. 選擇由 line 貼圖後台下載的 .csv</h4>
        <p class="_control_des__des">
          此工具支援 return-XXXXX.csv（收益報表） 的檔案，<br>
        </p>
        <input class="_control_des__btn" type="file" @change="handleFileChange" multiple>
      </div>
      <!-- <div class="_control_des__item">
        <h4 class="_control_des__subtitle">2. 選擇該組貼圖圖片（完成第一步驟後才會顯示上傳按鈕）</h4>
        <p class="_control_des__des">檔名必須為 01.png, 02.png ... 40.png</p>
        <input class="_control_des__btn" type="file" @change="handlePicChange" multiple  v-if="tableData">
      </div> -->
    </div>
    
    <!-- <div class="_control_table" v-if="tableData"> -->
    <div class="_control_table">
      <div v-if="stickerName">
        <h5 class="_control_table__title">{{ stickerName }} 結果</h5>
      </div>
      
      <div class="_control_block">
        <div class="_control_block__wrap">
          <div class="_control_time__item">
            開始月份:
            <input :v-model="startDate" :value="startDate" disabled>
          </div>
          <div class="_control_time__item">
            結束月份:
            <input :v-model="lastDate" :value="lastDate" disabled>
          </div>
        </div>
        
        <div class="_filter">
          <span class="_filter_icon material-symbols-rounded" @click="switchFilter()">
            filter_list
          </span>
          
          <div class="_filter_block" :class="openFilter ? 'active':''">
            <div class="_filter_block__control">
              <div class="_filter_block__controlBtn" @click="updateFilter('none')">全部取消</div>
              <div class="_filter_block__controlBtn" @click="updateFilter('all')">全部選取</div>
            </div>
            <div class="_filter_block__height">
                <!-- <ul class="_filter_category">
                  <li class="_filter_category__item">
                    <div class="_filter_category__name">
                      Type
                    </div>
                    <ul class="_filter_category__ul">
                      <li class="_filter_category__li" v-for="(type,idx) in typeArr" :key="idx"> 
                        
                        <div class="_filter_checkbox" >
                          <div class="_filter_checkbox__wrap" >
                            <input class="_filter_checkbox__input" :id="type" v-model="chosenType" type="checkbox" :value="type"/>
                          </div>
                        </div>
                        <label :for="type">{{type}}</label>
                      </li>
                    </ul>
                  </li>
                </ul> -->
                <ul class="_filter_category">
                  <li class="_filter_category__item">
                    <div class="_filter_category__name">
                      Title
                    </div>
                    <ul class="_filter_category__ul">
                      <li class="_filter_category__li" v-for="(item,idx) in idSrcArr" :key="idx"> 
                        
                        <div class="_filter_checkbox" >
                          <div class="_filter_checkbox__wrap" >
                            <input class="_filter_checkbox__input" :id="item.id" v-model="chosenId" type="checkbox" :value="item.id"/>
                          </div>
                        </div>
                        <label class="_filter_category__label" :for="item.id">{{item.title}}</label>
                      </li>
                    </ul>
                  </li>
                </ul>
            </div>
            <div class="_filter_bottom">
              <div class="_filter_bottom__submit" @click="filterData('customize')">
                送出
              </div>
            </div>
          </div>

        </div>
      </div>

      <div class="_control_rank">
        <div class="_control_rank__set">
          <div class="_control_rank__title">
            販售組數最高：
          </div>
          <div class="_control_rank__list">
            <div class="_control_rank__item">
              <span class="_control_rank__num _control_rank__num--gold">1</span>
              <span v-if="saleCountsSortArr[0]">{{ saleCountsSortArr[0].title }}</span>
            </div>
            <div class="_control_rank__item">
              <span class="_control_rank__num _control_rank__num--silver">2</span>
              <span v-if="saleCountsSortArr[1]">{{ saleCountsSortArr[1].title }}</span>
            </div>
            <div class="_control_rank__item">
              <span class="_control_rank__num _control_rank__num--copper">3</span>
              <span v-if="saleCountsSortArr[2]">{{ saleCountsSortArr[2].title }}</span>
            </div>
          </div>
        </div>
        <div class="_control_rank__set">
          <div class="_control_rank__title">
            分潤金額最高：
          </div>
          <div class="_control_rank__list">
            <div class="_control_rank__item">
              <span class="_control_rank__num _control_rank__num--gold">1</span>
              <span v-if="revenueShareSortArr[0]">{{ revenueShareSortArr[0].title }}</span>
            </div>
            <div class="_control_rank__item">
              <span class="_control_rank__num _control_rank__num--silver">2</span>
              <span v-if="revenueShareSortArr[1]">{{ revenueShareSortArr[1].title }}</span>
            </div>
            <div class="_control_rank__item">
              <span class="_control_rank__num _control_rank__num--copper">3</span>
              <span v-if="revenueShareSortArr[2]">{{ revenueShareSortArr[2].title }}</span>
            </div>
          </div>  
        </div>
      </div>

      <Table :fields='fields' :tableData="tableData" @update="reSortData"></Table>
      <div class="_control_total">總分潤: {{ totalShare }} 円</div>
      <div class="_control_total__twd" v-if="exrateData">約為新台幣 {{ parseInt(totalShare / exrateData.USDJPY.Exrate * exrateData.USDTWD.Exrate) }} 元</div>
      <div class="_control_exrate_update" v-if="exrateData">匯率來源：<a href="https://tw.rter.info/" target="_blank">RTER.info</a> 更新時間：{{exrateData.USDJPY.UTC}} </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
import * as moment from "moment/moment";
import Table from './Table.vue';
import axios from "axios";

export default {
  name: 'Return',
  components: {
    Table
  },
  data() {
    return {
      fileLength: 0,
      fileCounter: 0,
      viewTotal: true,
      openFilter: false,
      stickerName: '',
      stickerId: '',
      startDate: '',
      lastDate: '',
      allDataArr: null,
      jsonData: null,
      tableData: null,
      fields: [
        {
          originIdx: 0,
          slug: 'month',
          tw: '月份',
          sortable: false
        },
        {
          originIdx: 3,
          slug: 'id',
          tw: 'ID',
          sortable: false
        },{
          originIdx: 4,
          slug: 'title',
          tw: '名稱',
          sortable: false
        },{
          originIdx: 2,
          slug: 'type',
          tw: '類型',
          sortable: false
        },{
          originIdx: 5,
          slug: 'country',
          tw: '販售國家',
          sortable: false
        },{
          originIdx: 7,
          slug: 'salesCounts',
          tw: '販售組數',
          sortable: true
        },
        // {
        //   originIdx: 9,
        //   slug: 'shareRate',
        //   tw: '分潤比'
        // },
        {
          originIdx: 12,
          slug: 'revenueShare',
          tw: '分潤(円)',
          sortable: true
        }],
        // for filter
        monthArr: [],
        idSrcArr: [],
        idArr: [],
        titleArr: [],
        typeArr: [],
        countryArr: [],

        filterCategoryList: ['type', 'id'],
        chosenType: [],
        chosenCountry: [],
        chosenId: [],
        saleCountsSortArr: [],
        revenueShareSortArr: [],
        totalShare: 0,
        exrateData: null,
    }
  },
  methods: {
    switchFilter(){
      this.openFilter = !this.openFilter;
    },
    updateFilter(val) {
      if(val === 'all'){
        this.chosenId = this.idArr;
        this.chosenCountry = this.countryArr;
        this.chosenType = this.typeArr;
      } else if (val === 'none'){
        this.chosenId = [];
        this.chosenCountry = [];
        this.chosenType = [];
      }
    },
    resetAllDataContainer(){
      this.fileLength = 0;
      this.fileCounter = 0;
      this.allDataArr = [];
      this.tableData = [];
      this.jsonData = [];
      this.idSrcArr = [];
      this.startDate = '';
      this.lastDate = '';
      this.monthArr = [];
      this.idSrcArr = [];
      this.idArr = [];
      this.titleArr = [];
    },
    handleFileChange (e) {
      // reset all data container start
      this.resetAllDataContainer();

      let files = e.target.files;
      this.fileLength = files.length;
      for (let i = 0; i < files.length; i++) {
        this.$papa.parse (files[i], {
          complete: (results) => {
            this.restructureData(results.data);
          }
        });
      }
    },
    restructureData (src) {
      // remove table head
      src.shift()[0];
      // remove last 2 empty element
      src.splice(-2, 2);
      
      // 初步整理資料格式
      let dataArr = this.arrangeData(src);
      // 合併全部整理完的資料
      this.allDataArr = _.concat( this.allDataArr, dataArr);
    },
    arrangeObjData( allDataArr ){
      this.getFilterSrcArr();
      let res = [];
      this.idArr.map((id)=>{
        res.push( _.filter(allDataArr, {'id': id }) );
      });

      this.jsonData = res;
    },
    arrangeData (src) {
      // files
      let res = [];
      
      src.forEach( (item) => {
        let itemObj = {};
        this.fields.map((o)=>{
          itemObj[o.slug] = item[o.originIdx];
        });

        res.push(itemObj);
        
        //save data for filter
        this.idSrcArr.push({
          id: itemObj.id,
          title: itemObj.title,
        });

        this.typeArr.push(itemObj.type);
        this.countryArr.push(itemObj.country);
        this.monthArr.push(itemObj.month);
        
        itemObj = {};
      });

      return res;
    },
    getFilterSrcArr(){
      // 更新 filter 資料基底
      this.idArr = _.uniq( JSON.parse(JSON.stringify( _.values(_.mapValues(this.idSrcArr, 'id') ))) );
      // this.chosenId = this.idArr;
      // 整理 idSrcArr
      this.idSrcArr = _.uniqBy(this.idSrcArr, 'id');
      // this.idSrcArr = _.filter(_.uniq(row.country), function(o) { return o != ''; } );
      this.chosenType = _.uniq( JSON.parse(JSON.stringify(this.typeArr)));
      this.typeArr = this.chosenType;
      this.chosenCountry = _.uniq( JSON.parse(JSON.stringify(this.countryArr)));
      this.countryArr = this.chosenCountry;

      // arrange month
      let tempMonthArr = _.sortedUniq( JSON.parse(JSON.stringify( this.monthArr )) )
      const newArr = tempMonthArr.sort((a, b) => {
        return moment(a).diff(b);
      });
      this.monthArr = newArr;
      
      // set startDate
      this.startDate = this.monthArr[0];
      // set lastDate
      this.lastDate = this.monthArr[this.monthArr.length-1];
    },
    getLastMonthSoldId(){
      let res = [];
        let latestMonth = this.lastDate;
        this.allDataArr.map((item)=>{
          if(item.month === latestMonth){
            res.push(item.id);
          }
        });
      
      this.chosenId = res;
    },
    filterData (type) {
      let resArr = [];
      if(type != 'customize'){
        this.getLastMonthSoldId();
      }

      // total
      this.jsonData.forEach( (item) => {
        let row = {
          salesCounts: 0,
          country: [],
          revenueShare: 0
        }

        item.forEach( (e) => {
          // if(_.includes(this.chosenId, e.id) && _.includes(this.chosenCountry, e.country) && _.includes(this.chosenType, e.type)) {
          if(_.includes(this.chosenId, e.id)) {
            row.id = e.id;
            row.title = e.title;
            row.type = e.type;
            if( e.salesCounts != "" ){
              row.salesCounts += parseInt(e.salesCounts);
            }
            row.country.push(e.country);
            row.revenueShare += parseInt(e.revenueShare);
          }
        });

        // country
        row.country = _.join( _.filter(_.uniq(row.country), function(o) { return o != ''; } ) , ', ');
        resArr.push(row);
      });
      
      let finalArr = [];
      resArr.map((item)=>{
        if(item.revenueShare != 0){
          finalArr.push(item);
        }
      });

      this.tableData = finalArr;
      
      // total
      let subTotal = 0;
      _.forEach( this.tableData , function(value) {
        subTotal += value.revenueShare
      });
      this.totalShare = subTotal;

      const getExrate = async () => {
        try {
              const response = await axios.get('https://cors-anywhere.herokuapp.com/https://tw.rter.info/capi.php')
              this.exrateData = response.data;
        } catch(err) {
              console.log('err')
        }
      }
      if( !this.exrateData ){
        getExrate();
      }

      // get ranking data
      let saleCountsData = _.sortBy( this.tableData, function(o) { return parseInt(o.salesCounts); });
      this.saleCountsSortArr = _(saleCountsData).reverse().value();
    
      let revenueShareData = _.sortBy( this.tableData, function(o) { return parseInt(o.revenueShare); });
      this.revenueShareSortArr = _(revenueShareData).reverse().value();
      
      // close filter
      this.openFilter = false;
    },
    reSortData(data){
      let conArr = [];
      conArr = _.sortBy( this.tableData, function(o) { return parseInt(o[data.ta]); })
      if( data.decrease ){
        this.tableData = _(conArr).reverse().value();
      } else {
        this.tableData = _(conArr).value();
      }
    }
  },
  watch: {
    allDataArr: async function( data ) {
      if( this.fileCounter === this.fileLength ){
        // 合併完此次的全部資料，開始安排 filter 用選項 ＆ 把資料整理成顯示用格式
        await this.getFilterSrcArr();
        await this.arrangeObjData( data );
        // 過濾需要的資料
        await this.filterData();
      }

      this.fileCounter ++;
    },
  },
  created(){
  },
  mounted(){
  }
}
</script>

<style>
/* @import "../assets/css/reset.css"; */
@import '../../node_modules/bootstrap/dist/css/bootstrap.css';
@import "../assets/css/app.css";
/* not ready @import "../assets/css/font.css"; */
</style>
