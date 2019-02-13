<template>
  <div class="table">
    <div class="table-header">
      <div class="header-data hide-on-mobile id">ID</div>
      <div class="header-data name">Name</div>
      <div class="header-data description">Desc.</div>
      <div class="header-data hide-on-mobile date">Date</div>
      <div class="header-data amount">Amount</div>
      <div class="header-data edit">Edit</div>
    </div>
    <div class="table-body" v-for='transaction in transactions' :key='transaction.id'>
      <div class="body-data hide-on-mobile id">{{ transaction.id }}</div>
      <div class="body-data name">{{ transaction.fullName }}</div>
      <div class="body-data description">{{ transaction.description }}</div>
      <div class="body-data hide-on-mobile date">{{ transaction.date }}</div>
      <div class="body-data amount">{{ transaction.amount }} €</div>
      <div class="body-data edit">
        <Modal :transaction="transaction"/>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "./Modal";
export default {
  name: "Table",
  components: {
    Modal
  },
  data() {
    return {
      transactions: [
        {
          id: 123,
          fullName: "Bernard Doci",
          description: "This is payment is for programming course",
          date: new Date().toLocaleTimeString(),
          amount: 25
        },
        {
          id: 213,
          fullName: "Nerxhan Musliu",
          description: "Hello World",
          date: new Date().toLocaleTimeString(),
          amount: 25
        },
        {
          id: 321,
          fullName: "Endrit Zhuri",
          description: "",
          date: new Date().toLocaleTimeString(),
          amount: 25
        },
        {
          id: 665,
          fullName: "Yllka Abdullahi",
          description: "How are you???",
          date: new Date().toLocaleTimeString(),
          amount: 25
        },
        {
          id: 543,
          fullName: "Fiona Pepiqi",
          description: "Good bye",
          date: new Date().toLocaleTimeString(),
          amount: 25
        },
        {
          id: 765,
          fullName: "Arita Thaqi",
          description: "Bye bye",
          date: new Date().toLocaleTimeString(),
          amount: 25
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
$borderStyle: 1px solid #2c3e50;
.table {
  width: 80%;
  margin: 2% auto;
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
    padding: 0 1%;
    text-align: "left"; 
    margin: 2% 0;
  }
  .id,
  .edit {
    width: 5%;
  }
  .name,
  .description {
    width: 15%;
  }
  .date,
  .amount {
    width: 10%;
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
      width: 25%;
      padding: 0;
    }
  }
}
@media only screen and (max-width: 575px) {
  .table {
    font-size: 14px;
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
