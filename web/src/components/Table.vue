<template>
  <table class="_table table table-bordered table-striped">
    <thead>
      <tr class="_table_tr">
        <!-- loop through each value of the fields to get the table header -->
        <th class="_table_th" :class="[isActive === field.slug ? 'active' : '', decrease ? '' : 'up']" v-for="field in fields" :key="field.slug" @click="handleFieldClick(field.slug)" > 
          {{field.tw}} <span v-if="field.slug!='img'" class="material-icons _table_icon__arrowDown">keyboard_arrow_down</span>
        </th>
      </tr>
    </thead>
    <tbody>
      <!-- {{ tableData }} -->
      <tr v-for="item in tableData" :key='item.id'>
        <td v-for="field in fields" :key='field.slug' class="_table_td" :class="isActive === field.slug ? 'active' : ''">
          <div v-if="field.slug === 'img'">
            <img class="_table_img" :src="item[field.slug]" />
          </div>
          <div v-else>
            {{item[field.slug]}}
          </div>

        </td>
      </tr>
    </tbody>
  </table> 
</template>
<script>
export default {
  name: 'Table',
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
      decrease: true
    }
  },
  methods:{
    handleFieldClick(field){
      this.toggleIcon(field);
      this.sortTable({ 
        "ta" : field,
        "decrease" : this.decrease
      });
    },
    toggleIcon (field) {
      if (this.isActive === field) {
        this.decrease = !this.decrease;
      } else {
        this.decrease = true;
      }
      this.isActive = field;
    },
    sortTable (data) {
      this.$emit('update', data);
    }
  },
  mounted(){
  } 
}
</script>