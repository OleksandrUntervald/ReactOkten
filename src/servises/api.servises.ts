import {ITodosResponse} from "../moduls/ITodosResponse.ts";

const url = import.meta.env.VITE_API_URL

export const getAllTodos = async (): Promise<ITodosResponse> =>{
  const todosResponsObject = await  fetch(url + '/todos')
        .then(value => value.json());
  return todosResponsObject;
}

