import React, { useEffect, useState } from 'react';
import TodoItem from '../TodoItem';
import TodoForm from '../TodoForm';
import { TodoResponse, Todo } from '../todo.type';
import * as TodoService from '../TodoService';

// NOTE(jamesfulford): React.Suspense does not support data-fetching yet (16.8.6)
export default function TodoList () {
    const [todos, setTodos] = useState<TodoResponse[]>(null);
    useEffect(() => {
        if (!todos) {
            TodoService.INDEX()
                .then((data: TodoResponse[]) => {
                    setTodos(data);
                })
                .catch(console.error);
        }
    });

    // Avoid defining new callback for each todo
    const deleteTodo = async (todo: TodoResponse) => {
        try {
            await TodoService.DELETE(todo)
            setTodos(todos.filter(({ _id }) => _id !== todo._id));
        } catch (e) {
            console.error(e);
        }
    }
    const toggleTodo = async (todo: TodoResponse) => {
        try {
            const updatedTodo: TodoResponse = await TodoService.TOGGLE_COMPLETION(todo);
            setTodos(todos.map(t => t._id === updatedTodo._id ? updatedTodo : t));
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div>
            <h1><pre>TODO(jamesfulford):</pre></h1>
            <TodoForm
                onSubmit={async (t: Todo) => {
                    try {
                        const newTodo: TodoResponse = await TodoService.CREATE(t);
                        setTodos([...todos, newTodo]);
                    } catch (e) {
                        console.error(e);
                    }
                }}
            />
            <ul>
                {
                    todos
                        ? todos.map(t => (
                            <TodoItem
                                todo={t}
                                key={t._id}
                                onDelete={() => deleteTodo(t)}
                                onTap={() => toggleTodo(t)}
                            />
                        ))
                        : (<div>Loading...</div>)
                }
            </ul>
        </div>
    );

}
