import React, { useState } from 'react';
import { Todo } from '../todo.type';

export default function TodoForm({ onSubmit }: { onSubmit: (todo: Todo) => void }) {
    const [todoText, setTodoText] = useState('');
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            onSubmit({
                name: todoText,
                completed: false,
            });
            setTodoText('');
        }}>
            <input type="text" onChange={e => setTodoText(e.target.value)} value={todoText}/>
        </form>
    );
}
