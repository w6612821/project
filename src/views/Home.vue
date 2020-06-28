<template>
  <div class="home">
<h1>home</h1>
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
