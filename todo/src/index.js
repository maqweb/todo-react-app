import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from "./components/appHeader";
import SearchPanel from "./components/searchPanel";
import TodoList from "./components/todoList";


const App = () => {

  const todoData = [
    {label: 'Drink Coffee', important: false, id: 1},
    {label: 'Make Awesome App', important: true, id: 2},
    {label: 'Have a Lunch', important: false, id: 3}
  ];

  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList todos={todoData}/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));