import Vue from "vue";
import Vuex from "vuex";
import API from "./util/API";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    transactions: [],
    userIndex: null,
    loader: false
  },
  getters: {
    transactions: state => {
      return state.transactions
    },
    userIndex: state => {
      return state.userIndex
    },
    loader: state => {
      return state.loader
    }
  },
  mutations: {
    getTransactions(state, payload) {
      state.loader = false;
      state.userIndex = null;
      state.transactions = payload;
    },
    getTransactionsByAmount(state, payload) {
      state.loader = false;
      state.userIndex = parseInt(Object.keys(payload));
      state.transactions = payload;
    },
    filterTransactionsByValue(state, payload) {
      state.loader = false;
      let trans = [];
      if(payload.value.length) {
        trans = payload.data.filter(transaction => {
          return transaction[payload.key] == payload.value;
        })
        state.userIndex = state.transactions.findIndex(element => {return element.ID == trans[0].ID});
        state.transactions = trans;
      } else {
        state.userIndex = null;
        state.transactions = payload.data;
      }
    }
  },
  actions: {
    getTransactions({state, commit}) {
      state.loader = true;
      API.get('.json')
        .then(res => {
          commit('getTransactions', res.data);
        })
        .catch(err => console.log('Error in getTransactions'));
    },
    updateTransaction({ state, commit, dispatch}, payload) {
      state.loader = true;
      API.put(`${payload.id}.json`, payload.data)
        .then(res => {
          dispatch('getTransactions');
        })
        .catch(err => console.log('Error in updateTransaction'))
    },
    filterTransactions({ state, commit }, payload) {
      state.loader = true;
      if(payload.path == 'Amount') {
        API.get(`.json?orderBy="Amount"&equalTo=${payload.value}&print=pretty`)
          .then(res => {
            commit('getTransactionsByAmount', res.data);
          })
          .catch(err => console.log('filterTransactions'))
      } else {
        API.get('.json')
          .then(res => {
            commit('filterTransactionsByValue', {data: res.data, key: payload.path, value: payload.value});
          })
          .catch(err => console.log(err));
      }
    }
  }
});
