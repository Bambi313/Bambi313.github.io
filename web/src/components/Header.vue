<template>
  <div class="_header">
    <ul>
      <li><router-link :to="`/${this.$i18n.locale}`" rel="noopener">Home</router-link></li>
      <li><router-link :to="`/${this.$i18n.locale}/about`" rel="noopener">About</router-link></li>
      <!-- <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li> -->
    </ul>

  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    // msg: String
  }
}
</script>