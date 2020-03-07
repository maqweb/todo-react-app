import React from "react";
import './App.css'

import AppHeader from "./components/app-header/app-header";
import SearchPanel from "./components/search-panel/search-panel";
import Todolist from "./components/todo-list/todo-list";
import ItemStatusFilter from "./components/item-status-filter/item-status-filter";
import ItemAddForm from "./components/item-add-form/item-add-form";


class App extends React.Component {

    componentDidMount() {
        this.restoreState()
    }

    saveState = () => {
      const stateAsString = JSON.stringify(this.state);
      localStorage.setItem('your-state', stateAsString)
    };

    restoreState = () => {
        let state = {
            todoData: [],
            filter: 'all',
            term: ''
        };
        const stateAsString = localStorage.getItem('your-state');
        if (stateAsString !== null) {
            state = JSON.parse(stateAsString)
        }
        this.setState(state)
    };

    maxId = 100;

    state = {
        todoData: [
           /* this.createTodoItem('Learn JavaScript'),
            this.createTodoItem('Learn React'),
            this.createTodoItem('Build React App'),*/
        ],
        filter: 'all',
        term: ''
    };

    createTodoItem(label) {
        return {
            id: this.maxId++,
            label,
            important: false,
            isDone: false
        }
    }

    addTask = (text) => {
        let newTask = this.createTodoItem(text);
        this.setState({
            todoData: [...this.state.todoData, newTask]
        }, () => this.saveState())
    };

    deletItem = (id) => {
        this.setState(({todoData}) => {
            const newData = todoData.filter(el => el.id !== id);
            return {
                todoData: newData
            }
        }, () => this.saveState())
    };

    onToggleProperty = (arr, id, propName) => {
        const indx = arr.findIndex(el => el.id === id);
        const oldItem = arr[indx];
        const newItem = {...oldItem, [propName]: !oldItem[propName]};
        return [...arr.slice(0, indx), newItem, ...arr.slice(indx + 1)];
    };

    onToggleImortant = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.onToggleProperty(todoData, id, 'important')
            }
        }, () => this.saveState())
    };

    onToggleDone = (id) => {
        this.setState(({todoData}) => {
           return {
               todoData: this.onToggleProperty(todoData, id, 'isDone')
           }
        }, () => this.saveState())
    };

    onSearchChange = (term) => {
        this.setState({term})
    };

    search(items, term) {
        if (term.length === 0) return items;
        return items.filter(item => {
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1
        })
    };

    onFilterChange = (filter) => {
        this.setState({filter})
    };

    filter(items, filter) {
        switch (filter) {
            case 'all':
                return items;
            case 'active':
                return items.filter(item => !item.isDone);
            case 'done':
                return items.filter(item => item.isDone);
            default:
                return items;
        }
    }

    render() {
        const {todoData, term, filter} = this.state;

        const visibleItems = this.filter(this.search(todoData, term), filter);
        const doneCount = todoData.filter(el => el.isDone).length;
        const todoCount = todoData.length - doneCount;


        return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount}/>

                <div className="top-panel d-flex">
                    <SearchPanel onSearchChange={this.onSearchChange}/>
                    <ItemStatusFilter filter={filter} onFilterChange={this.onFilterChange}/>
                </div>

                <Todolist todos={visibleItems}
                          onDeleted={this.deletItem}
                          onToggleImortant={this.onToggleImortant}
                          onToggleDone={this.onToggleDone}
                />

                <ItemAddForm addTask={this.addTask}/>
            </div>
        )
    }
}

export default App;