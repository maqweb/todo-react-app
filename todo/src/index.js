import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from "./components/app-header/app-header";
import SearchPanel from "./components/search-panel/search-panel";
import TodoList from "./components/todo-list/todo-list";

import './index.css'

const App = () => {

    const todoData = [
        {label: 'Drink Coffee', important: false, id: 1},
        {label: 'Make Awesome App', important: true, id: 2},
        {label: 'Have a Lunch', important: false, id: 3}
    ];

    return (
        <div className="todo-app">
            <AppHeader toDo={1} done={3}/>
            <div className="top-panel d-flex">
                <SearchPanel/>
                <TodoList todos={todoData}/>
            </div>
        </div>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));