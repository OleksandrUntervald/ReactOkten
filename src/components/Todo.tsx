import {ITodo} from "../moduls/ITodo.ts";

interface TodoProps {
    item: ITodo,
}

export const Todo = ({item}: TodoProps) => {
    return (
        <div>
                <h3>{item.title}</h3>
        </div>
    );
};