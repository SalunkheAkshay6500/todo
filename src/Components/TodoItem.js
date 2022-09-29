import React from 'react'

export default function TodoItem({todo, onDelete}) {
  //TodoItem.js
  //son of Todo.js 
  //grandson of App.js
  return (
    <div>
    
    <h4>{todo.title}</h4>
    <p>{todo.desc}</p>
    <button  class=" btn btn-primary" onClick={()=>onDelete(todo)}
    >Delete</button>
    </div>
  )
}
