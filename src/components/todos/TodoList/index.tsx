import React, {useEffect, useState} from 'react';
import TodoItem from '../TodoItem';
import TodoForm from '../TodoForm';
import { TodoResponse, Todo } from '../todo.type';
import * as TodoService from '../TodoService';

export default function TodoList () {
    const [todos, setTodos] = useState<TodoResponse[]>(null);
    useEffect(() => {
        TodoService.INDEX()
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
                    TodoService.CREATE(t)
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
