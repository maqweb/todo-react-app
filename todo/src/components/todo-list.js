import React from 'react';
import TodoListItem from './todo-list-item';

const TodoList = ({ todos }) => {

  const elements = todos.map((item) => {
    return (
      <li>
        <TodoListItem { ... item } />
      </li>
    )
  });

  return (
    <ul>
      <li>
        { elements }
      </li>
    </ul>
  );
};

export default TodoList;