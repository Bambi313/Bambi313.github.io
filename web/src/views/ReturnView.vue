<template>
  <div class="_returnView">
    <div class="">
      <Menu />
      <GuideReturn />
    </div>
    
    <Return />

    <Footer />
    <!-- <button @click="changeData">New Data</button> -->
  </div>
</template>

<script>
// @ is an alias to /src
import GuideReturn from '@/components/GuideReturn.vue';
// import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
// import WelconMsg from '../components/WelconMsg.vue';
import Menu from '../components/Menu.vue';
import Return from '../components/Return.vue';

export default {
  name: 'ReturnView',
  components: {
    GuideReturn,
    Menu,
    Return,
    Footer
  },
  data() {
    return {
      // stickerName: '',
    }
  },
  methods: {
    // draw(newData) {}
  },
  watch: {
  },
  created(){
  },
  mounted(){
  }
}
</script>