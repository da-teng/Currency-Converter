export const SWAP_CURRENCY = "SWAP_CURRENCY";
export const CHANGE_CURRENCY_AMOUNT = "CHANGE_CURRENCY_AMOUNT";
export const CHANGE_BASE_CURRENCY = "CHANGE_BASE_CURRENCY";
export const CHANGE_QUOTE_CURRENCY = "CHANGE_QUOTE_CURRENCY";
export const INITIAL_LOADING = "INITIAL_LOADING";

export const swapCurrency = () => {
  return { type: SWAP_CURRENCY };
};
export const initialLoading = () => {
  return {
    type: INITIAL_LOADING
  };
};
export const changeCurrencyAmount = amount => {
  return {
    type: CHANGE_CURRENCY_AMOUNT,
    amount
  };
};

export const changeBaseCurrency = item => {
  console.log("action currency is" + item);
  return {
    type: CHANGE_BASE_CURRENCY,
    baseCurrency: item
  };
};

export const changeQuoteCurrency = item => {
  return {
    type: CHANGE_QUOTE_CURRENCY,
    quoteCurrency: item
  };
};
