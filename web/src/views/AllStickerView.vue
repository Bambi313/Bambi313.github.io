<template>
  <div class="_allSticker">
    <div class="">
      <!-- <Header />
      <WelconMsg /> -->
      <Menu />
      <GuideAll />
    </div>
    
    <AllSticker />

    <Footer />
    <!-- <button @click="changeData">New Data</button> -->
  </div>
</template>

<script>
// @ is an alias to /src
import GuideAll from '@/components/GuideAll.vue';
// import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
// import WelconMsg from '../components/WelconMsg.vue';
import Menu from '../components/Menu.vue';
import AllSticker from '../components/AllSticker.vue';

export default {
  name: 'AllStickerView',
  components: {
    GuideAll,
    // Header,
    // WelconMsg,
    Menu,
    AllSticker,
    Footer
  },
  data() {
    return {
      // stickerName: '',
    }
  },
  methods: {
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
  }
}
</script>