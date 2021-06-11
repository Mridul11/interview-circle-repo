import {all, fork} from "redux-saga/effects";
import todoSaga from "./todos/todoSaga";

export function* rootSagaMiddleware(){
   yield all([fork(todoSaga)])
}
