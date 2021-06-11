import {TodoActions, TodoState} from "./actionType";
import { FETCH_TODO_FAILURE, FETCH_TODO_REQUEST, FETCH_TODO_SUCCESS } from "./types";

const initialState: TodoState = {
    pending: false,
    todos: [],
    errors: null
}
const todosReducer = (state = initialState, action: TodoActions) => {
    switch (action.type) {
        case FETCH_TODO_REQUEST:
            return {
                ...state, 
                pending: true
            }
        case FETCH_TODO_SUCCESS:
            return {
                ...state,
                pending:false,
                todos: action.payload.todos,
                errors: ""
            }
        case FETCH_TODO_FAILURE:
            return {
                ...state,
                pending: false,
                todos: [],
                errors: action.payload.errors
            }
        default:
            return  state;
    }
}
export default todosReducer;