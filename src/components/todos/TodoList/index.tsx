import React, { useEffect, useState } from 'react';
import TodoItem from '../TodoItem';
import TodoForm from '../TodoForm';
import { TodoResponse, Todo } from '../todo.type';
import * as TodoService from '../TodoService';

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
    const deleteTodo = (todo: TodoResponse) => {
        TodoService.DELETE(todo)
            .then(() => {
                setTodos(todos.filter(({ _id }) => _id !== todo._id ));
            })
            .catch(console.error);
    }
    const toggleTodo = (todo: TodoResponse) => {
        console.log('toggling...');
        TodoService.TOGGLE_COMPLETION(todo)
            .then((updatedTodo) => {
                console.log('toggled...');
                setTodos(todos.map(t => t._id === updatedTodo._id ? updatedTodo : t))
            })
            .catch(console.error);
    }

    return (
        <div>
            <h1><pre>TODO(jamesfulford):</pre></h1>
            <TodoForm
                onSubmit={(t: Todo) => {
                    TodoService.CREATE(t)
                        .then((newTodo: TodoResponse) => {
                            setTodos([ ...todos, newTodo ]);
                        })
                        .catch(console.error);
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
