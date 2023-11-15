import React, { useState } from 'react'
import { TodoItem } from '../TodoItems/TodoItem';
import './TodoList.css'

export const TodoList = ({ todoItems, editAction, isDarkMode, deleteTodo, toggleComplete }) => {
  return (
    <div className="todo-list">
      {todoItems.map((item) => (
        <TodoItem
          key={item.id}
          editAction={editAction}
          todoItem={item}
          isDarkMode={isDarkMode}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
        />
      ))}
      <p className='todo-output text-flex'>
        5 items left  <span>Clear completed</span>
      </p>
    </div>
  );
};
