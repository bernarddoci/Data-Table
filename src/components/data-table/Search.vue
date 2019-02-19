<template>
  <div class="search">
    <input clsss="search-input" type="text" placeholder="Search" />
    <button class="search-btn">Search</button>
    <button class="show-btn" @click="toggle">{{ showFilterLabel }}</button>
    <transition name="fade">
      <form v-if="showFilter">
        <input type="text" placeholder="Id" />
        <input type="text" placeholder="Full Name" />
        <input type="text" placeholder="Amount" />
        <button class="filter-btn">Filter</button>
      </form>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      showFilter: false
    }
  },
  methods: {
    toggle() {
      this.showFilter = !this.showFilter;
    }
  },
  computed: {
    showFilterLabel() {
      return this.showFilter ? 'Hide Filter' : 'Show Filter';
    }
  }
}
</script>


<style lang="scss" scoped>
.search {
  margin: 0 10%;
  text-align: left;
  input, button {
    margin: 5px;
    width: 200px;
    outline: none;
    border: 2px solid #0191a9;
    border-radius: 20px;
  }
  input {
    height: 34px;
    padding-left: 1%;
  }
  button {
    height: 40px;
  }
  .search-btn, .show-btn, .filter-btn {
    cursor: pointer;
    color: #fff;
    &:active {
      border: 1px solid #0191a9;
    }
  }
  .search-btn, .filter-btn {
    background-color: #0875C0;
  }
  .show-btn {
    background-color: #08C0A8;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
}
@media only screen and (max-width: 900px) {
  .search {
    width: 100%;
    margin: 0;
    min-height: 0;
    .search-input {
      width: 170px;
    }
    .search-btn {
      width: 120px;
    }
    .show-btn, .filter-btn {
      width: 165px;
    }
    form input {
      width: 100px;
    }
  }
}
</style>
