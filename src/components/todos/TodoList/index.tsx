import React, {useEffect, useState} from 'react';
import axios from 'axios';
import TodoItem from '../TodoItem';

export default function TodoList () {
    const [todos, setTodos] = useState(null);
    useEffect(() => {
        axios({
            method: 'GET',
            url: '/api/todos'
        })
            .then(r => {
                return r.data;
            })
            .then(data => {
                console.log(data);
                setTodos(data)
            })
            .catch(console.error);
        },
        [ todos ],
    );
    if (todos === null) {
        return (<div>Loading...</div>)
    }
    return todos.map(t => (<TodoItem todo={t} />))
}
