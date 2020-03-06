import React from "react";
import './todo-list-item.css'

class TodolistItem extends React.Component {

    state = {
        isDone: false,
        important: false
    };

    onLabelClick = () => {
        this.setState(({isDone}) => {
            return {
                isDone: !isDone
            }
        })
    };

    onMarkImportant = () => {
        this.setState(({important}) => {
            return {
                important: !important
            }
        })
    };

    render() {
        const {label, onDeleted} = this.props;
        const {isDone, important} = this.state;

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
                      onClick={this.onLabelClick}>
                    {label}
                </span>

                <button onClick={this.onMarkImportant} type="button"
                        className="btn btn-outline-success btn-sm float-right">
                    <i className="fa fa-exclamation"/>
                </button>

                <button onClick={onDeleted} type="button" className="btn btn-outline-danger btn-sm float-right">
                    <i className="fa fa-trash-o"/>
                </button>
            </span>
        )
    }
}


export default TodolistItem;