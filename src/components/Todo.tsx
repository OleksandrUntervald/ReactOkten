
import {ITodo} from "../moduls/ITodo.ts";

interface TodoProps {
    item: ITodo
}

export const Todo = ({item}: TodoProps) => {
    return (
        <>
            <h3>{item.todo}</h3>
        </>
    );
};