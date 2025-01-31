import {Todo} from "./Todo.tsx";
import {useEffect, useState} from "react";
import {ITodo} from "../moduls/ITodo.ts";
import {getAllTodos} from "../servises/api.servises.ts";

export const Todos = () => {
    const [todos, setTodos ] = useState<ITodo[]>([]);
    useEffect(() => {
        getAllTodos().then(({todos}) => setTodos(todos))
    }, []);
    return (
        <>
            {
                todos.map(todo => <Todo key={todo.id} item={todo}/>)

            }
        </>
    );
};