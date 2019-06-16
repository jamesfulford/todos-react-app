import React from 'react';
import { Todo } from '../todo.type';

export default function TodoItem ({ todo }: { todo: Todo }) {
    return <li
        style={{
            textDecoration: todo.completed ? 'line-through' : 'none',
        }}
    >{todo.name}</li>
}
