<template>
  <div id="app">
    <div id="nav" v-if="!notFound">
      <router-link to="/">Home</router-link> |
      <router-link to="/data-table">Data Table</router-link>
    </div>
    <router-view />
    <appFooter />
  </div>
</template>

<script>
import Footer from "./views/Footer";
export default {
  components: {
    appFooter: Footer
  },
  data() {
    return {
      notFound: false
    };
  },
  watch: {
    $route(val) {
      val.name == "notFound" ? (this.notFound = true) : (this.notFound = false);
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #0191a9;
    }
  }
}
</style>
