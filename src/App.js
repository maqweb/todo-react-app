import React from "react";
import './App.css'

import AppHeader from "./components/app-header/app-header";
import SearchPanel from "./components/search-panel/search-panel";
import Todolist from "./components/todo-list/todo-list";
import ItemStatusFilter from "./components/item-status-filter/item-status-filter";
import ItemAddForm from "./components/item-add-form/item-add-form";


class App extends React.Component {

    state = {
        todoData: [
            {id: 1, label: 'Drink Cofee', important: false},
            {id: 2, label: 'Build React App', important: true},
            {id: 3, label: 'Have a lunch', important: false},
        ]
    };

    deletItem = (id) => {
        this.setState(({todoData}) => {
            // const indx = todoData.findIndex(el => el.id === id);
            // const newData = [...todoData.slice(0, indx), ...todoData.slice(indx + 1)];
            const newData = todoData.filter(el => el.id !== id);
            return {
                todoData: newData
            }
        })
    };

    render() {
        return (
            <div className="todo-app">
                <AppHeader toDo={1} done={3}/>

                <div className="top-panel d-flex">
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>

                <Todolist todos={this.state.todoData} onDeleted={this.deletItem}/>
                <ItemAddForm/>
            </div>
        )
    }
}

export default App;