import React from "react";
import { useState } from "react";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { IoIosCheckmark } from "react-icons/io";
import { MdRadioButtonUnchecked } from "react-icons/md";
import "./TodoItem.css";

export const TodoItem = ({ todoItem, editAction, isDarkMode, deleteTodo, toggleComplete }) => {
  const [todoTitle, setTodoTitle] = useState(todoItem.title ?? "");

  const [isCheckMark, setIsCheckMark] = useState(false);

  const handleChange = (event) => {
    const { value } = event.target;
    setTodoTitle(value);
  };
  console.log("isDarkMode", isDarkMode);

  const handleCheckMark = () => {
    setIsCheckMark((prev) => !prev);
    toggleComplete(todoItem.id);
  };

  return (
    <>
      {todoItem?.isEditing ? (
        <div className={`todo-item ${isDarkMode && "dark-mode-input"}`}>
          <input
            type="text"
            className="todo-item-input"
            onChange={handleChange}
            value={todoTitle}
            placeholder="Update task"
          />
          <button
            className="edit-btn"
            onClick={() => editAction(todoItem.id, false, todoTitle)}
          >
            <AiOutlineCheck size={14} />
          </button>
        </div>
      ) : (
        <div className={`todo-output ${isDarkMode && "dark-mode-input"}`}>
          <div>
            <div className="icon-flex">
              <div className="left-btn">  
                <button onClick={handleCheckMark}>
                  {isCheckMark ? (
                    <div className="check-mark-wrapper">
                      <IoIosCheckmark className="check-mark" />{" "}
                    </div>
                  ) : (
                    <MdRadioButtonUnchecked className="completed-icon" />
                  )}
                </button>
                <p className={`${todoItem.isComplete && 'completed'}`} onClick={() => editAction(todoItem.id, true)}>
                  {todoItem?.title}{" "}
                </p>
              </div>
              <button onClick={() => deleteTodo(todoItem.id)}>
                <AiOutlineClose className="delete-icon" />
              </button>
            </div>
          </div>
         
        </div>
      )}
      
    </>
    
  );
};
