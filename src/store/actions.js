import API from "../util/API";

const getTransactions = ({ state, commit }) => {
  state.loader = true;
    API.get(".json")
      .then(res => {
        commit('getTransactions', res.data);
      })
      .catch(err => console.log('Error in getTransactions'));
};

const updateTransaction = ({ state, commit, dispatch }, payload) => {
  state.loader = true;
  API.put(`${payload.id}.json`, payload.data)
    .then(res => {
      dispatch('getTransactions');
    })
    .catch(err => console.log(err))
};

const filterTransactions = ({ state, commit }, payload) => {
  state.loader = true;
  if(payload.path == 'Amount') {
    API.get(`.json?orderBy="Amount"&equalTo=${payload.value}&print=pretty`)
      .then(res => {
        commit('getTransactionsByAmount', res.data);
      })
      .catch(err => console.log(err))
  } else {
    API.get(".json")
      .then(res => {
        commit('filterTransactionsByValue', {data: res.data, key: payload.path, value: payload.value});
      })
      .catch(err => console.log(err));
  }
};

export default {
  getTransactions,
  updateTransaction,
  filterTransactions
}
