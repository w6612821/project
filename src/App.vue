<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view  v-if="closeSecond == 0"/>
    <transition name="fade">
      <div class="welcome-pic" v-if="closeSecond !== 0">
        <button @click="closeWelcome">跳过({{closeSecond}}s)</button>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      closeSecond: 5
    };
  },
  created() {
    let timer = setInterval(()=>{
      this.welcome();
      if(this.closeSecond == 0){
        clearInterval(timer)
      }
    },1000)
    
  },
  methods: {
    welcome() {
      this.closeSecond = this.closeSecond - 1;
    },
    closeWelcome() {
      this.closeSecond == 0;
      // console.log(this.closeSecond);
    }
  }
};
</script>

<style lang="scss">
@import "/style/main.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .welcome-pic {
    width: 100%;
    height: 100vh;
    background: rgb(9, 168, 231);
    position: fixed;
    top: 0;
    left: 0;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.8s;
  }
  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
