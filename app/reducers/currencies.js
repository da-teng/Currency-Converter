import {
  SWAP_CURRENCY,
  CHANGE_CURRENCY_AMOUNT,
  CHANGE_BASE_CURRENCY,
  CHANGE_QUOTE_CURRENCY
} from "../actions/currencies";

const initialState = {
  baseCurrency: "AUD",
  quoteCurrency: "CNY",
  amount: "" + 100,
  conversion: {
    rate: null,
    amount: 200
  }
};

const reducer = (state = initialState, action) => {
  if (action.type == "DATA_LOADED") {
    console.log("yield reducers");
    state = {
      ...state,
      conversion: {
        ...state.conversion,
        rate: action.payload,
        amount: "" + state.amount * action.payload
      }
    };
  }

  if (action.type == SWAP_CURRENCY) {
    state = {
      ...state,
      baseCurrency: state.quoteCurrency,
      quoteCurrency: state.baseCurrency
    };
  }

  if (action.type == CHANGE_CURRENCY_AMOUNT) {
    state = {
      ...state,
      amount: action.amount || 0
    };
  }

  if (action.type == CHANGE_BASE_CURRENCY) {
    console.log("reducer" + action.baseCurrency);
    state = {
      ...state,
      baseCurrency: action.baseCurrency
    };
  }

  if (action.type == CHANGE_QUOTE_CURRENCY) {
    state = {
      ...state,
      quoteCurrency: action.quoteCurrency
    };
  }
  return state;
};

export default reducer;
