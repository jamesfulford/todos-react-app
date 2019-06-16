import { AxiosRequestConfig } from "axios";
import { Todo } from "./todo.type";

export const TODOS_BASE_URL: string = '/api/todos';
export const TODOS_INDEX= (): AxiosRequestConfig => ({
    method: 'GET',
    url: TODOS_BASE_URL,
});
export const TODOS_CREATE = (todo: Todo): AxiosRequestConfig => ({
    method: 'POST',
    url: TODOS_BASE_URL,
    data: todo,
});
