<template>
  <div class="loader">
    <h6>BriteCore</h6>  
  </div>  
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.loader {
  margin: 20% auto;
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #0191a9;
  border-bottom: 16px solid #0191a9;
  width: 100px;
  height: 100px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
  h6{
    position: relative;
    top: 25%;
  }
}
</style>
