import {createSelector} from "reselect";
import { AppState } from "../rootReducer";

const getPending = (state: AppState) => state.todos.pending;
const getTodos = (state: AppState) => state.todos.todos;
const getErrors = (state: AppState) => state.todos.errors;

export const getPendingSelector = createSelector(getPending, pending => pending);
export const getTodosSelector = createSelector(getTodos, todos => todos);
export const getErrorSelector = createSelector(getErrors, errors => errors);