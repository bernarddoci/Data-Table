<template>
  <div class="search">
    <input type="text" v-model="name" @keyup.enter="(e) => filterData('Name', name, e)" placeholder="Search by name" />
    <button class="search-btn" @click="(e) => filterData('Name', name, e)"><i class="icon-search"></i></button>
    <button class="show-btn" @click="toggle">{{ showFilterLabel }}</button>
    <transition name="fade">
      <div class="search-filters" v-if="showFilter">
        <input type="text" v-model="id" @keyup.enter="(e) => filterData('ID', id, e)" placeholder="Filter by id" />
        <button class="search-btn" @click="(e) => filterData('ID', id, e)"><i class="icon-search"></i></button>
        <input type="number" v-model.number="amount" @keyup.enter="(e) => filterData('Amount', amount, e)" placeholder="Filter by amount" />
        <button class="search-btn" @click="(e) => filterData('Amount', amount, e)"><i class="icon-search"></i></button>
      </div>
    </transition>
  </div>
</template>

<script>
import API from "@/util/API";
import { mapActions } from 'vuex';
export default {
  name: 'Search',
  data() {
    return {
      showFilter: false,
      id: null,
      name: '',
      amount: ''
    }
  },
  methods: {
    ...mapActions([
      'filterTransactions'
    ]),
    toggle() {
      this.showFilter = !this.showFilter;
    },
    filterData(path, value, e) {
      e.preventDefault();
      this.filterTransactions({path, value})
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
    cursor: pointer;
  }
  .show-btn {
    color: #fff;
    &:active {
      border: 1px solid #0191a9;
    }
  }
  .search-btn, .filter-btn {
    background-color: rgb(248, 248, 248);
    color: black;
  }
  .search-btn {
    position: relative;
    left: -44px;
    height: 36px;
    border: none;
    border-right: 2px solid #0191a9;
    border-left: 1px solid transparent;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    background: rgb(207, 207, 207);
  }
  .show-btn {
    position: relative;
    left: -43px;
    background-color: #08C0A8;
  }
  .filter-btn {
    width: 75px;
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
    .show-btn {
      left: -45px;
    }
  }
}
@media only screen and (max-width: 600px) {
  .search {
    input {
      padding-left: 3%;
    }
    .search-filters input {
      width: 75%;
    }
  }
}
</style>
