<template>
  <table id="tableComponent" class="_table table table-bordered table-striped">
    <thead>
      <tr class="_table_tr">
        <!-- loop through each value of the fields to get the table header -->
        <th class="_table_th" :class="isActive === field?'active':''" v-for="field in fields" :key='field' @click="handleFieldClick(field)" > 
          {{field}} <span v-if="field!='img'" class="material-icons">keyboard_arrow_down</span>
        </th>
      </tr>
    </thead>
    <tbody>
      <!-- {{ tableData }} -->
      <tr v-for="item in tableData" :key='item.id'>
        <td v-for="field in fields" :key='field' class="_table_td" :class="isActive === field?'active':''">
          <div v-if="field === 'img'">
            <img class="_table_img" :src="item[field]" />
          </div>
          <div v-else>
            {{item[field]}}
          </div>

        </td>
      </tr>
    </tbody>
  </table> 
</template>
<script>
export default {
  name: 'TableComponent',
  props:{
      tableData:{
          type: Array,
      },
      fields:{
          type: Array,
      },
      imgData:{
          type: Array,
      },
  },
  data() {
    return {
      isActive: 'id',
    }
  },
  methods:{
    handleFieldClick(field){
      this.sortTable(field);
      this.toggleIcon(field);
    },
    toggleIcon (field) {
      this.isActive = field;
    },
    sortTable (field) {
      this.$emit('update', field);
    }
  },
  mounted(){
  } 
}
</script>