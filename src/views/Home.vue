<template>
  <div class="home">
    <h1>home</h1>
    <ul>
      <li v-for="item in this.$store.state.test.list" :key="item.id">{{item.name}},{{item.age}}</li>
    </ul>
  </div>
</template>

<script>

export default {
created(){
  this.$store.dispatch('test/fatchList')
  console.log(this.$store)
}
}
</script>

<style lang="scss" scoped>
  ul{
    width:5rem;
    height:5rem;
    background: red;
    font-size: 0.5rem;
  }
</style>