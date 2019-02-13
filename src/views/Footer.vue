<template>
  <div class="footer">
    <p>
      <router-link to="/">Home</router-link> |
      <router-link to="/data-table">Data Table</router-link>
      <br />
      Copyright &copy; {{ this.dateFormat }}
    </p>
  </div>
</template>

<script>
export default {
  name: "Footer",
  computed: {
    dateFormat() {
      return new Date().getFullYear();
    }
  }
};
</script>

<style lang="scss" scoped>
.footer {
  text-align: right;
  margin-bottom: 0px;
  width: 100%;
  height: 130px;
  background: #2c3e50;
  color: #fff;
  position: absolute;
  top: 100%;
  bottom: 0;
  p {
    padding: 35px 50px 0;
    a {
      color: #fff;
    }
  }
}
</style>
