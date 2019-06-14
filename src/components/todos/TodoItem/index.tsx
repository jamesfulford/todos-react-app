import React from 'react';
import { Todo } from '../todo.type';

export default function TodoItem ({ todo }: { todo: Todo }) {
    return <div>{todo.name}</div>
}
