import { createStore, applyMiddleware} from "redux";
import logger from 'redux-logger';
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from "./rootReducer";
import {rootSagaMiddleware} from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware , logger)));
sagaMiddleware.run(rootSagaMiddleware);

export default store;