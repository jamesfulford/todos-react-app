import axios from "axios";
import { Todo, TodoResponse } from "./todo.type";

const BASE_URL: string = '/api/todos';
const TODO_URL = (todo: TodoResponse): string => `${BASE_URL}/${todo._id}`;

// Core methods
export const INDEX = async (): Promise<TodoResponse[]> => (await axios({
    method: 'GET',
    url: BASE_URL,
})).data;

export const CREATE = async(todo: Todo): Promise<TodoResponse> => (await axios({
    method: 'POST',
    url: BASE_URL,
    data: todo,
})).data;

export const DELETE = async (todo: TodoResponse): Promise<void> => (await axios({
    method: 'DELETE',
    url: TODO_URL(todo),
})).data;

export const UPDATE = async (todo: TodoResponse): Promise<TodoResponse> => (await axios({
    method: 'PUT',
    url: TODO_URL(todo),
    data: todo,
})).data;

// Convenience methods
export const TOGGLE_COMPLETION = (todo: TodoResponse): Promise<TodoResponse> => UPDATE({
    ...todo,
    completed: !todo.completed,
});
