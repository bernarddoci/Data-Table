const getTransactions = (state, payload) => {
  state.loader = false;
  state.userIndex = null;
  state.transactions = payload;
};

const getTransactionsByAmount = (state, payload) => {
  state.loader = false;
  state.userIndex = parseInt(Object.keys(payload));
  state.transactions = payload;
};

const filterTransactionsByValue = (state, payload) => {
  state.loader = false;
  let trans = [];
  if (payload.value.length) {
    trans = payload.data.filter(transaction => {
      return transaction[payload.key] == payload.value;
    });
    state.userIndex = state.transactions.findIndex(element => {
      if (trans.length) {
        return element.ID == trans[0].ID;
      }
    });
    state.transactions = trans;
  } else {
    state.userIndex = null;
    state.transactions = payload.data;
  }
};

export default {
  getTransactions,
  getTransactionsByAmount,
  filterTransactionsByValue
};
