import React, { useState } from 'react'
import { TodoItem } from '../TodoItems/TodoItem';
import './TodoList.css'

export const TodoList = ({ todoItems, editAction, isDarkMode }) => {

  return (
    <div className='todo-list'>
      {todoItems.map(item => <TodoItem key={item.id} editAction={editAction} todoItem={item} isDarkMode={isDarkMode} />)}
    </div>

  )
}
