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
      <div class="_control_des__item">
        <h4 class="_control_des__subtitle">2. 選擇該組貼圖圖片（完成第一步驟後才會顯示上傳按鈕）</h4>
        <p class="_control_des__des">檔名必須為 01.png, 02.png ... 40.png</p>
        <input class="_control_des__btn" type="file" @change="handlePicChange" multiple  v-if="tableData">
      </div>
    </div>
    
    <!-- <div class="_control_table" v-if="tableData"> -->
    <div class="_control_table">
      <div v-if="stickerName">
        <h5 class="_control_table__title">{{ stickerName }} 結果</h5>
      </div>
      
      <div class="_control_time">
        <div class="_control_time__item">
          開始月份:
          <input :v-model="startDate" :value="startDate" disabled>
        </div>
        <div class="_control_time__item">
          結束月份:
          <input :v-model="lastDate" :value="lastDate" disabled>
        </div>
        <div class="_control_switch">
          <div class="_control_switch__btn" :class="viewTotal ? 'active':''" @click="switchViewType('total')">顯示總和</div>
          <div class="_control_switch__btn" :class="viewTotal ? '':'active'" @click="switchViewType('separate')">全部展開</div>
        </div>
        <div class="_filter">
          <span class="_filter_icon material-symbols-rounded">
          filter_list
          </span>
          
          <div class="_filter_block">
            <div class="_filter_block__control">
              <div class="_filter_block__controlBtn" @click="updateFilter('none')">全部取消</div>
              <div class="_filter_block__controlBtn" @click="updateFilter('all')">全部選取</div>
            </div>
            <div class="_filter_block__height">
              <ul class="_filter_category" v-for="(category,key) in filterSrcObj" :key="key">
                <li class="_filter_category__item">
                  <div class="_filter_category__name">
                    {{key}}
                  </div>
                  <ul class="_filter_category__ul">
                    <li class="_filter_category__li" v-for="(item,idx) in category" :key="idx"> 
                      <div class="_filter_checkbox">
                        <input class="_filter_checkbox__input" :id="item" v-model="filterShowArr" :checked="isChecked(item)" type="checkbox" :value="item"/>
                      </div>
                      <label :for="item">{{item}}</label>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div class="_filter_bottom">
              <div class="_filter_bottom__submit" @click="updateFilter()">
                送出
              </div>
            </div>
          </div>

        </div>
      </div>

      <Table :fields='fields' :tableData="tableData" @update="reSortData"></Table>
      
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
import * as moment from "moment/moment";
import Table from './Table.vue';

export default {
  name: 'Return',
  components: {
    Table
  },
  data() {
    return {
      viewTotal: true,
      stickerName: '',
      stickerId: '',
      startDate: null,
      lastDate: null,
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
          tw: '金額(円)',
          sortable: true
        }],
        // for filter
        monthArr: [],
        idArr: [],
        typeArr: [],
        countryArr: [],

        filterCategoryList: ['type', 'country', 'id'],
        filterSrcObj: {},
        filterShowArr: []
        // fileLength: 0,
    }
  },
  methods: {
    isChecked(item){
      return _.includes(this.filterShowArr, item);
    },
    updateFilter(val) {
      if(val === 'all'){
        this.filterShowArr = _.flatMap(this.filterSrcObj);
        // this.filterShowArr = this.filterSrcObj;
      } else if (val === 'none'){
        this.filterShowArr = [];
        // this.filterShowArr = {};
      }
      // else {
      // console.log('照值顯示 filterShowArr', this.filterShowArr);
      // }
    },
    handleFileChange (e) {
      let files = e.target.files;
      // this.fileLength = files.length;

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
    },
    arrangeObjData( allDataArr ){
      this.getFilterSrcArr();

      let res = [];
      let idArr = JSON.parse(JSON.stringify( this.filterSrcObj.id ));
      
      idArr.map((id)=>{
        res.push( _.filter(allDataArr, {'id': id }) );
      });

      return res;
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
        this.idArr.push(itemObj.id);
        this.typeArr.push(itemObj.type);
        this.countryArr.push(itemObj.country);
        this.monthArr.push(itemObj.month);
        
        itemObj = {};
      });

      return res;
    },
    getFilterSrcArr(){
      console.log('getFilterSrcArr');
      
      this.filterCategoryList.map((o)=>{
        this.filterSrcObj[o] = _.uniq( JSON.parse(JSON.stringify( this[o+'Arr'])) );
      });
      this.filterShowArr = _.flatMap(this.filterSrcObj);

      // arrange month
      let tempMonthArr = _.sortedUniq( JSON.parse(JSON.stringify( this.monthArr )) )
      const newArr = tempMonthArr.sort((a, b) => {
        return moment(a).diff(b);
      });
      this.monthArr = newArr;
      
      // set startDate
      this.startDate = this.monthArr[0];
      // set startDate
      this.lastDate = this.monthArr[this.monthArr.length-1];

      console.log('this.filterSrcObj',this.filterSrcObj);
      
    },
    filterData (src, type) {
      let resArr = [];
      let no = 0;
      if(type === 'total') {
        // total
        src.forEach( (item) => {
          // console.log('item',item);
          let row = {
            salesCounts: 0,
            country: [],
            revenueShare: 0
          }

          item.forEach( (e) => {
            row.id = e.id;
            row.title = e.title;
            row.type = e.type;
            if( e.salesCounts != "" ){
              row.salesCounts += parseInt(e.salesCounts);
            }
            row.country.push(e.country);
            row.revenueShare += parseInt(e.revenueShare);
          });

          row.country = _.join(_.uniq(row.country), ',');
          row.no = no;
          no ++;
          resArr.push(row);
        });
      } else {
        // separate
        let no = 0;
        src.forEach( (item) => {
          item.forEach( (e) => {
            e.no = no;
            no++;
            resArr.push(e);
          });
        });

      }
      
      this.tableData = resArr;
    },
    reSortData(data){
      // console.log('data.ta',data.ta);
      // console.log('this.tableData',this.tableData);
      
      let conArr = [];
      conArr = _.sortBy( this.tableData, function(o) { return parseInt(o[data.ta]); })
      if( data.decrease ){
        this.tableData = _(conArr).reverse().value();
      } else {
        this.tableData = _(conArr).value();
      }
    },
    switchViewType(type) {
      if(type === 'total') {
        this.viewTotal = true;
      } else {
        this.viewTotal = false;
      }
      this.filterData(this.jsonData, type);
    }
  },
  watch: {
    allDataArr: function( data ) {
      this.jsonData = this.arrangeObjData( data );
      this.filterData(this.jsonData, 'total');
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
