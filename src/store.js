import Vue from "vue";
import Vuex from "vuex";
import API from "./util/API";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    transactions: []
  },
  getters: {
    transactions: state => {
      return state.transactions
    }
  },
  mutations: {
    getTransactions(state, payload) {
      state.transactions = payload;
    }
  },
  actions: {
    getTransactions({commit}) {
      API.get('.json')
        .then(res => {
          commit('getTransactions', res.data);
        })
        .catch(err => console.log('Error in getTransactions'));
    },
    updateTransaction({commit}, payload) {
      console.log('updateTransaction', payload);
      API.put(`${payload.id}.json`, payload.data)
        .then(res => {
          console.log(res);
        })
        .catch(err => console.log('Error in updateTransaction'))
    }
  }
});
