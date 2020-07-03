<template>
  <div class="home">
    <h1>home</h1>
    <ul>
      <li v-for="item in this.$store.state.test.list" :key="item.id">{{item.name}},{{item.age}}</li>
    </ul>
    <img :src="url" alt />
    <meter min="0" max="5">2</meter>
    <meter>2 out of 10</meter>
    <meter>30%</meter>
  </div>
</template>

<script>
import {test} from "../api/index";
export default {
  data() {
    return {
      url: ""
    };
  },
  created() {
    // this.$store.dispatch("test/fatchList");
    console.log(this.$store);
    // getImg().then(res => {
    //   this.url = res.path;
    // });
    test(666690).then((res)=>{
      console.log(res)
    })
  }
};
</script>

<style lang="scss" scoped>
ul {
  width: 5rem;
  height: 5rem;
  background: red;
  font-size: 0.5rem;
}
</style>