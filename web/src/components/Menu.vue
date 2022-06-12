<template>
  <div class="_menu">
    <div class="_menu_title">想分析什麼呢？</div>
    <div class="_menu_wrap">
      <router-link class="_menu_wrap__item" to="/">使用者愛用哪幾組貼圖</router-link>
      <router-link class="_menu_wrap__item" to="/single-analyze">使用者愛用哪幾張貼圖</router-link>
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
