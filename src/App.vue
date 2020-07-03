<template>
  <div id="app">
    <router-view v-if="closeSecond == 0" />
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>

    <transition name="fade">
      <div class="welcome-pic" v-if="isdisplay">
        <button @click="closeWelcome">跳过({{closeSecond}}s)</button>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      closeSecond: 5,
      isdisplay: true
    };
  },
  created() {
    // this.closeWelcome()
  },
  methods: {
    welcome() {
      this.closeSecond = this.closeSecond - 1;
    },
    closeWelcome() {
      // let timer = setInterval(() => {
        this.welcome();
      //   if (this.closeSecond == 0) {
      //     clearInterval(timer);
      //     this.closeWelcome();
      //   }
      // }, 1000);
      // this.isdisplay = false;
      console.log(this.isdisplay);
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
