<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" class="logo" />
    <h1>Engineering Application</h1>
    <button @click="this.showTable" to="/data-table" class="show-table-btn">
      Show Table >
    </button>
  </div>
</template>

<script>
export default {
  name: "home",
  methods: {
    showTable() {
      this.$router.push({ path: "/data-table" });
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  margin-top: 10%;
  .logo {
    width: 30%;
  }
  .show-table-btn {
    width: 200px;
    height: 50px;
    border: none;
    background-color: #0191a9;
    color: #fff;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
  }
}
@media only screen and (max-width: 575px) {
  .home {
    margin-top: 20%;
    .logo {
      width: 80%;
    }
  }
}
</style>
