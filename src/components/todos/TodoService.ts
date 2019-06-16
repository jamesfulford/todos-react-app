import axios from "axios";
import { Todo, TodoResponse } from "./todo.type";

const _extractData = r => r.data;
export const TODOS_BASE_URL: string = '/api/todos';

// Methods
export const INDEX = (): Promise<TodoResponse[]> => axios({
    method: 'GET',
    url: TODOS_BASE_URL,
}).then(_extractData);

export const CREATE = (todo: Todo): Promise<TodoResponse> => axios({
    method: 'POST',
    url: TODOS_BASE_URL,
    data: todo,
}).then(_extractData);

export const DELETE = (todo: TodoResponse): Promise<void> => axios({
    method: 'DELETE',
    url: `${TODOS_BASE_URL}/${todo._id}`
}).then(_extractData);
