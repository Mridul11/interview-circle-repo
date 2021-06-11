import { FetchTodoRequest, FetchTodoSuccess, FetchTodoFailure, FetchFailurePayload, FetchSuccessPayload } from "./actionType";
import {
    FETCH_TODO_REQUEST,
    FETCH_TODO_SUCCESS,
    FETCH_TODO_FAILURE
} from "./types";

export const fetchTodoRequest = (): FetchTodoRequest => ({
    type: FETCH_TODO_REQUEST
});

export const fetchTodoSuccess = (payload: FetchSuccessPayload): FetchTodoSuccess => ({
    type: FETCH_TODO_SUCCESS,
    payload
});

export const fetchTodoFailure = (payload: FetchFailurePayload): FetchTodoFailure => ({
    type: FETCH_TODO_FAILURE,
    payload
});