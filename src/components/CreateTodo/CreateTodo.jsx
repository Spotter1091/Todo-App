import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { HiDownload } from "react-icons/hi";
import "./CreateTodo.css";
import { TodoList } from "../Todo-List/TodoList";

export const CreateTodo = ({ isDarkMode }) => {
  const [userInput, setUserInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [buttonColor, setButtonColor] = useState("black");
  const [filter, setFilter] = useState("all");

  const handleChange = (e) => {
    setUserInput(e.target.value);
    if (e.target.value.length > 0) {
      setButtonColor("#595b70");
    } else {
      setButtonColor("black");
    }
  };

  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
    );

    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    console.log(id);
    const newTodoList = todos.filter((todo) => todo.id !== id);
    setTodos(newTodoList);
  };

  const handleAddTodo = () => {
    const todo = {
      id: uuidv4(),
      title: userInput,
      isEditing: false,
      isComplete: false,
    };

    setTodos((prevTodos) => [...prevTodos, todo]);
    setUserInput("");
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAddTodo();
    }
  };

  const editAction = (id, isEditing, title) => {
    const newTodo = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          title,
          isEditing,
        };
      }
      return todo;
    });

    setTodos(newTodo);
  };

  
  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  const filterTodoList = (todos) => {
    const filteredTodo = todos.filter((todo) => {
      if (filter === "active") {
        return !todo.isComplete;
      } else if (filter === "completed") {
        return todo.isComplete;
      }
      return true;
    });

    return filteredTodo;
  }

 const removeCompletedTask = () => {
   const newList = todos.filter((todo) => !todo.isComplete);
   setTodos(newList)
 }

  return (
    <>
      <div className={`input-container ${isDarkMode && "dark-mode-input"}`}>
        <button
          onClick={handleAddTodo}
          className="download-btn"
          style={{
            color: buttonColor,
          }}
        >
          <HiDownload className="download-icon" />
        </button>
        <input
          type="text"
          value={userInput}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          className="todo-input"
          placeholder="Create a new todo..."
        />
      </div>
      <TodoList
        todoItems={filterTodoList(todos)}
        editAction={editAction}
        isDarkMode={isDarkMode}
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
        removeCompletedTask={removeCompletedTask}
      />

      <div className={`task-status ${isDarkMode && "dark-mode-status"}`}>
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => handleFilterChange("all")}
        >
          All
        </button>
        <button
          className={filter === "active" ? "active" : ""}
          onClick={() => handleFilterChange("active")}
        >
          Active
        </button>
        <button
          className={filter === "completed" ? "active" : ""}
          onClick={() => handleFilterChange("completed")}
        >
          Completed
        </button>
      </div>
    </>
  );
};
