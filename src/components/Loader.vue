<template>
  <div class="loader">
    <h5>BriteCore</h5>  
  </div>  
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.loader {
  margin: 5% auto;
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #0191a9;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}
</style>
