<template>
  <div>
    <Search />
    <div class="table">
      <hr />
      <Loader v-if="loader" />
      <div v-else>
        <div class="table-header">
          <div class="header-data hide-on-mobile id">ID</div>
          <div class="header-data name">Full Name</div>
          <div class="header-data description">Desc.</div>
          <div class="header-data hide-on-mobile date">Date</div>
          <div class="header-data amount">Amount</div>
          <div class="header-data edit">Edit</div>
        </div>
        <div
          class="table-body"
          v-for="transaction in transactions"
          :key="transaction.ID"
        >
          <div class="body-data hide-on-mobile id">{{ transaction.ID }}</div>
          <div class="body-data name">{{ transaction.Name }}</div>
          <div class="body-data description">{{ transaction.Description }}</div>
          <div class="body-data hide-on-mobile date">
            {{ dateFormat(transaction.Date) }}
          </div>
          <div class="body-data amount">{{ transaction.Amount }} €</div>
          <div class="body-data edit">
            <modal-edit :transData="transaction" :transactions="transactions" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ModalEdit from "./ModalEdit";
import Search from "./Search";
import Loader from "../Loader";
export default {
  name: "Table",
  components: {
    ModalEdit,
    Search,
    Loader
  },
  computed: {
    ...mapGetters(["transactions", "loader"])
  },
  methods: {
    ...mapActions(["getTransactions"]),
    dateFormat(date) {
      return new Date(date).toLocaleDateString("en-US");
    }
  },
  created() {
    this.getTransactions();
  }
};
</script>

<style lang="scss" scoped>
$borderStyle: 1px solid #2c3e50;
.table {
  width: 80%;
  height: 600px;
  overflow-y: scroll;
  margin: 2% auto;
  clear: both;
  .table-header,
  .table-body {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-top: $borderStyle;
    border-left: $borderStyle;
    border-right: $borderStyle;
  }
  .table-header {
    color: #fff;
    font-weight: 700;
    background-color: #0191a9;
    text-transform: uppercase;
  }
  .table-body:last-child {
    border-bottom: $borderStyle;
  }
  .header-data,
  .body-data {
    text-align: "left";
    margin: 1%;
  }
  .edit {
    width: 5%;
  }
  .id,
  .name,
  .description {
    width: 15%;
  }
  .date,
  .amount {
    width: 10%;
  }
  .id {
    font-size: 12px;
  }
}
@media only screen and (max-width: 900px) {
  .table {
    width: 98%;
    .hide-on-mobile {
      display: none;
    }
    .header-data,
    .body-data {
      width: 20%;
      padding: 0;
    }
  }
}
@media only screen and (max-width: 575px) {
  .table {
    font-size: 14px;
    // margin: 5% 0;
    .table-body {
      flex-wrap: wrap;
    }
    .table-body {
      padding: 1%;
    }
    .description {
      overflow-x: scroll;
    }
  }
}
</style>
