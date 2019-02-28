<template>
  <div class="error">
    <h4>The page you are looking for can't be found.</h4>
    <p class="number">404</p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.error {
  width: 30%;
  padding: 3%;
  margin: 10% auto;
  background: rgb(197, 197, 197);
  color: rgb(82, 82, 82);
  .number {
    font-size: 500%;
    color: #0191a9;
  }
}
@media only screen and (max-width: 900px) {
  .error {
    background: transparent;
    width: 100%;
  }
}
</style>
