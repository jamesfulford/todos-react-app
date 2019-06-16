import React, {useEffect, useState} from 'react';
import axios, { AxiosRequestConfig } from 'axios';
import TodoItem from '../TodoItem';
import TodoForm from '../TodoForm';
import { TodoResponse, Todo } from '../todo.type';
import { TODOS_INDEX, TODOS_CREATE } from '../requests';

export default function TodoList () {
    const [todos, setTodos] = useState<TodoResponse[]>(null);
    useEffect(() => {
        axios(TODOS_INDEX())
            .then(r => {
                return r.data;
            })
            .then((data: TodoResponse[]) => {
                setTodos(data);
            })
            .catch(console.error);
        },
    );
    if (todos === null) {
        return (<div>Loading...</div>)
    }
    return (
        <div>
            <h1><pre>TODO(jamesfulford):</pre></h1>
            <TodoForm
                onSubmit={(t: Todo) => {
                    axios(TODOS_CREATE(t))
                        .then(r => r.data)
                        .then((newTodo: TodoResponse) => {
                            setTodos([ newTodo, ...todos ]);
                        })
                        .catch(console.error);
                }}
            />
            <ul>
                {todos.map(t => (<TodoItem todo={t} key={t._id} />))}
            </ul>
        </div>
    );

}
