import React from 'react';
import TodoListItem from './todoListItem';

const TodoList = ({ todos }) => {

  const elements = todos.map((item) => {

    const {id, ...itemProps} = item;
    return (
      <li key={item.id}>
        <TodoListItem { ...itemProps } />
      </li>
    )
  });

  return (
    <ul>
      { elements }
    </ul>
  );
};

export default TodoList;