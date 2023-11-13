import React from "react";
import { useState } from "react";
import { IoIosAddCircleOutline } from 'react-icons/io'
import './TodoItem.css' 

export const TodoItem = ({ todoItem, editAction, isDarkMode }) => {
  const [todoTitle, setTodoTitle] = useState(todoItem.title ?? '');
  const handleChange = (event) => {
    const {value} = event.target;
    setTodoTitle(value);
  }
  console.log('isDarkMode', isDarkMode)
  return (
    <>
      {todoItem?.isEditing ? (
        <div className="todo-item">
          <input type="text" className="todo-item-input" onChange={handleChange} value={todoTitle} placeholder="Update task"/>
          <button className="edit-btn" onClick={() => editAction(todoItem.id, false, todoTitle)} ><IoIosAddCircleOutline /></button>
        </div>
      ) : (
        <div className={`todo-output ${ isDarkMode && 'dark-mode-input' }`}>
          <div onClick={() => editAction(todoItem.id, true)} >{todoItem?.title}</div>
        </div>
      )}
    </>
  );
};
