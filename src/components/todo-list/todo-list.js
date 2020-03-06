import React from 'react';
import './todo-list.css'

import TodolistItem from "../todo-list-item/todo-list-item";


const Todolist = ({todos, onDeleted}) => {

    const elements = todos.map(item => {
        const { id, ...itemProps }= item;
        return (
            <li className="list-group-item" key={id}>
                <TodolistItem {...itemProps} onDeleted={() => onDeleted(id)}/>
            </li>
        )
    });

    return (
        <ul className="list-group todo-list">
            {elements}
        </ul>
    );
};

export default Todolist;