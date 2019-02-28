import API from "../util/API";

const getTransactions = ({ state, commit }) => {
  state.loader = true;
  API.get(".json")
    .then(res => {
      commit("getTransactions", res.data);
    })
    .catch(() => console.log("Error in getTransactions"));
};

const updateTransaction = ({ state, dispatch }, payload) => {
  state.loader = true;
  API.put(`${payload.id}.json`, payload.data)
    .then(() => {
      dispatch("getTransactions");
    })
    .catch(() => console.log("Error in updateTransaction"));
};

const filterTransactions = ({ state, commit }, payload) => {
  state.loader = true;
  if (payload.path == "Amount") {
    API.get(`.json?orderBy="Amount"&equalTo=${payload.value}&print=pretty`)
      .then(res => {
        commit("getTransactionsByAmount", res.data);
      })
      .catch(() => console.log("Error in filterTransactions"));
  } else {
    API.get(".json")
      .then(res => {
        commit("filterTransactionsByValue", {
          data: res.data,
          key: payload.path,
          value: payload.value
        });
      })
      .catch(() => console.log("Error in filterTransactions"));
  }
};

export default {
  getTransactions,
  updateTransaction,
  filterTransactions
};
