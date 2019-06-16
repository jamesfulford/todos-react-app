import axios from "axios";
import { Todo, TodoResponse } from "./todo.type";

const _extractData = r => r.data;
const BASE_URL: string = '/api/todos';
const TODO_URL = (todo: TodoResponse): string => `${BASE_URL}/${todo._id}`;

// Core methods
export const INDEX = (): Promise<TodoResponse[]> => axios({
    method: 'GET',
    url: BASE_URL,
}).then(_extractData);

export const CREATE = (todo: Todo): Promise<TodoResponse> => axios({
    method: 'POST',
    url: BASE_URL,
    data: todo,
}).then(_extractData);

export const DELETE = (todo: TodoResponse): Promise<void> => axios({
    method: 'DELETE',
    url: TODO_URL(todo),
}).then(_extractData);

export const UPDATE = (todo: TodoResponse): Promise<TodoResponse> => axios({
    method: 'PUT',
    url: TODO_URL(todo),
    data: todo,
}).then(_extractData);

// Convenience methods
export const TOGGLE_COMPLETION = (todo: TodoResponse): Promise<TodoResponse> => UPDATE({
    ...todo,
    completed: !todo.completed,
});
