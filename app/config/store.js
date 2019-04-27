import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../config/saga";
import reducer from "../reducers";
const initialiseSagaMiddleware = createSagaMiddleware();
const middleware = [initialiseSagaMiddleware];
if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

const store = createStore(reducer, applyMiddleware(...middleware));
initialiseSagaMiddleware.run(rootSaga);
export default store;
