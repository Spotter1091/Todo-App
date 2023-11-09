import React, { useState } from 'react'
import { v4 as uuidv4 } from "uuid";
import { HiDownload } from 'react-icons/hi'
import './CreateTodo.css'



export const  CreateTodo = () => {
  const [userInput, setUserInput] = useState('')
  const [todos, setTodos] = useState([])
  const [buttonColor, setButtonColor] = useState('#595b70')



  const handleChange = (e) => {
    setUserInput(e.target.value)
    if (e.target.value.length > 0) {
      setButtonColor('white'); 
    } else {
      setButtonColor('#595b70');
    }
  }

  const handleAddTodo = () => {
    const todo = {
      id: uuidv4(),
      title: userInput,
      isEditing: false,
      isComplete: false
    }

    setTodos(prevTodos => [...prevTodos, todo])
    setUserInput('')
  }

  return (
    <div className='input-container'>
      <button onClick={handleAddTodo} className='download-btn' style={{
          color: buttonColor}} >
        <HiDownload className='download-icon'/></button>
      <input type="text" value={userInput}  onChange={handleChange} className='todo-input' placeholder='Create a new todo...' />
    </div>
  )
}
