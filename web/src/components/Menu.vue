<template>
  <div class="_menu">
    <div class="_menu_title">想分析什麼呢？</div>
    <div class="_menu_wrap">
      <router-link class="_menu_wrap__item" to="/">收益排行</router-link>
      <router-link class="_menu_wrap__item" to="/all-analyze">愛用貼圖排行(以組為單位)</router-link>
      <router-link class="_menu_wrap__item" to="/single-analyze">愛用貼圖排行(以張為單位)</router-link>
      <!-- <router-link class="_menu_wrap__item" to="/return">收益排行</router-link> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  props: {
  }
}
</script>
