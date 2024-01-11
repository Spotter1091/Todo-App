import React, { useState } from 'react'
import { TodoItem } from '../TodoItems/TodoItem';
import './TodoList.css'

export const TodoList = ({
  todoItems,
  editAction,
  isDarkMode,
  deleteTodo,
  toggleComplete,
  removeCompletedTask,
}) => {
  const activeLength = todoItems?.filter(
    (item) => item.isComplete === false
  ).length;

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
      <p
        className={`todo-output text-flex border-bottom ${
          isDarkMode && "dark-mode-status"
        }`}
      >
        {activeLength} items left{" "}
        <button onClick={removeCompletedTask}> Clear completed</button>
      </p>
    </div>
  );
};
