import React from 'react';
import { Todo } from '../todo.type';

export default function TodoItem ({ todo, onDelete, onTap }: { todo: Todo, onDelete: () => void, onTap: () => void }) {
    return <li>
        <span
            style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
            }}
            onClick={onTap}
        >{todo.name}</span>
        <span onClick={onDelete}> X </span>
    </li>
}
