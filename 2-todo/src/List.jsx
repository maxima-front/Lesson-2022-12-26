import React, { useEffect, memo } from 'react'

import Task from './Task'

const List= ({ todoList, handleDelete }) => {
  useEffect(() => {
    // every new render
    // console.log('Rendering <List />')
  })

  return (
    <ul>
      {todoList.map((todo) => (
        <Task 
          key={todo.id} 
          id={todo.id}
          task={todo.task} 
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  )
}

export default memo(List)