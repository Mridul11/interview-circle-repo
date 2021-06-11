import { ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodoRequest } from "../../../store/todos/actions";
import { getErrorSelector, getPendingSelector, getTodosSelector } from "../../../store/todos/todosSelector";
import LoaderExampleLoader from "../../ui/Loader";

export const Todo: React.FC = (props) : ReactElement => {
    const dispatch = useDispatch();
    const pending = useSelector(getPendingSelector);
    const todos = useSelector(getTodosSelector);
    const error = useSelector(getErrorSelector);

    useEffect(function(){
        document.title="Home";
        dispatch(fetchTodoRequest());
    }, [dispatch]);
    
    return(
        <div className ="ui container">
            {pending ? (
                <LoaderExampleLoader />
            ) : error ? (
                <div>Error</div>
            ) : (
                todos.map((todo, index) => (
                <div style={{ marginBottom: "10px" }} key={todo.id}>
                    {++index}. {todo.title}
                </div>
                ))
            )}
        </div>
        )
    }
