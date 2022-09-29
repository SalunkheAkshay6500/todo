import React from 'react'
import TodoItem from './TodoItem'

const Todo = (props) => {
  //Todo.js
  //Todo.js is son of App.js
  //and Todo.js child is TodoItem.js
  return (
    <div className=" container my-5">
    <h1 className=' my-3'>****Todo List****</h1>
   {
      props.todos1.length===0 ? "NO data to delete" :  //ternary operation (if this is true ? print true  : else false )
    
    
    props.todos1.map((todo)=>
    {
      return(
        <>
        <TodoItem todo={todo} key={props.sno} onDelete={props.onDelete}/> <hr/>
        </>
        
      )
      
    }
                    )
  }
   
   
      
    </div>
  )
}

export default Todo
 