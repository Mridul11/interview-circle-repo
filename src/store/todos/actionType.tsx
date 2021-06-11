import {
    FETCH_TODO_REQUEST,
    FETCH_TODO_SUCCESS,
    FETCH_TODO_FAILURE
} from "./types";

export interface ITodo{
    id: string;
    userId: string;
    title: string;
    description: string;
}

export interface TodoState{
    pending: boolean;
    todos: ITodo[];
    errors: string | null;
}

export interface FetchSuccessPayload{
    todos: ITodo[];
}  

export interface FetchFailurePayload{
    errors: string;
}

export interface FetchTodoRequest{
    type: typeof FETCH_TODO_REQUEST;
}

export interface FetchTodoSuccess{
    type: typeof FETCH_TODO_SUCCESS;
    payload: FetchSuccessPayload;
}

export interface FetchTodoFailure{ 
    type: typeof FETCH_TODO_FAILURE;
    payload: FetchFailurePayload;
}

export type TodoActions = FetchTodoRequest | FetchTodoSuccess | FetchTodoFailure;