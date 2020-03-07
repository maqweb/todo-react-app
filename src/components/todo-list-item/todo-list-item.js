import React from "react";
import './todo-list-item.css'

const TodolistItem = ({label, onDeleted, onToggleImortant, onToggleDone, isDone, important}) => {

    let classNames = 'todo-list-item';
    if (isDone) {
        classNames += ' done'
    }
    if (important) {
        classNames += ' important'
    }

    return (
        <span className={classNames}>
                <span className="todo-list-item-label"
                      onClick={onToggleDone}>
                    {label}
                </span>

                <button onClick={onToggleImortant} type="button"
                        className="btn btn-outline-success btn-sm float-right">
                    <i className="fa fa-exclamation"/>
                </button>

                <button onClick={onDeleted} type="button" className="btn btn-outline-danger btn-sm float-right">
                    <i className="fa fa-trash-o"/>
                </button>
            </span>
    )
};


export default TodolistItem;