import {
  SWAP_CURRENCY,
  CHANGE_BASE_CURRENCY,
  INITIAL_LOADING,
  CHANGE_QUOTE_CURRENCY,
  CHANGE_CURRENCY_AMOUNT
} from "../actions/currencies";
import { takeEvery, call, put, select } from "redux-saga/effects";

function* rootSaga() {
  yield takeEvery(SWAP_CURRENCY, workerSaga),
    yield takeEvery(CHANGE_BASE_CURRENCY, workerSaga),
    yield takeEvery(INITIAL_LOADING, workerSaga),
    yield takeEvery(CHANGE_QUOTE_CURRENCY, workerSaga);
  yield takeEvery(CHANGE_CURRENCY_AMOUNT, workerSaga);
}

function* workerSaga(action) {
  let base = null;
  let quote = null;
  try {
    base = yield select(state => state.currencies.baseCurrency);
    quote = yield select(state => state.currencies.quoteCurrency);
    const payload = yield call(getData, base, quote);
    yield put({ type: "DATA_LOADED", payload });
  } catch (e) {
    yield put({ type: "API_ERRORED", payload: e });
  }
}

function getData(base, quote) {
  console.log("ready to fetch data");
  const URL = `https://frankfurter.app/latest?from=${base}&to=${quote}`;
  return fetch(URL)
    .then(response => response.json())
    .then(responseJson => {
      console.log(responseJson.rates[quote]);
      return responseJson.rates[quote];
    });
}

export default rootSaga;
