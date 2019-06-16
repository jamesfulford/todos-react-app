import React, {useEffect, useState} from 'react';
import axios, { AxiosRequestConfig } from 'axios';
import TodoItem from '../TodoItem';

const TODOS_INDEX: AxiosRequestConfig = {
    method: 'GET',
    url: '/api/todos',
};

export default function TodoList () {
    const [todos, setTodos] = useState(null);
    useEffect(() => {
        axios(TODOS_INDEX)
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
    return (
        <div>
            <h1><pre>TODO(jamesfulford):</pre></h1>
            <ul>
                {todos.map(t => (<TodoItem todo={t} key={t._id} />))}
            </ul>
        </div>
    );

}
