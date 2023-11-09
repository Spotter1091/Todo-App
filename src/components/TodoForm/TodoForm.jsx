import React, { useState } from 'react'
import { HiDownload } from 'react-icons/hi'
import './TodoForm.css'



export const TodoForm = () => {
   const [userInput, setUserInput] = useState('')


    const handleChange = (e) => {
      setUserInput(e.target.value)
   }


  return (
    <div className='input-container'>
      <span className='download-icon'><HiDownload /></span>
      <input type="text" className='todo-input' placeholder='Create a new todo...' />


    </div>
  )
}
