import React from 'react';
import { Todo } from '../todo.type';

export default function TodoItem ({ todo, onDelete }: { todo: Todo, onDelete: () => void }) {
    return <li
        style={{
            textDecoration: todo.completed ? 'line-through' : 'none',
        }}
    >
        <span>{todo.name}</span>
        <span onClick={onDelete}> X </span>
    </li>
}
