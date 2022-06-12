<template>
  <div class="_homeView">
    <div class="">
      <!-- <Header />
      <WelconMsg /> -->
      <Menu />
      <Guide />
    </div>
    
    <SingleSticker />
    <Footer />
    <!-- <button @click="changeData">New Data</button> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import * as d3 from "d3";
// import _ from 'lodash';
// import * as moment from "moment/moment";
import Guide from '@/components/Guide.vue';
// import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import Menu from '@/components/Menu.vue';
// import WelconMsg from '../components/WelconMsg.vue';
import SingleSticker from '../components/SingleSticker.vue';

export default {
  name: 'singleSticker',
  components: {
    // Table,
    Guide,
    // Header,
    // WelconMsg,
    Footer,
    Menu,
    SingleSticker
  },
  data() {
    return {
      // sampleData: [10, 20, 30]
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
    // const range = _.range(1, 3);
    // console.log('range', range);
  }
}
</script>

