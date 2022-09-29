
import { useState } from 'react';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Todo from './Components/Todo';
import AddItem from './Components/AddItem';

function App() {
  //App.js
  //father 
  const onDelete=(todo)=>{
    console.log("i am on delete",todo);

    settodos1(todos1.filter((e)=>{
    return e!==todo
  }))
  }
  const addTodo=(title,desc)=>{
    console.log("i am adding this in  todo: ",title,desc)
    let sno;
    if(todos1.length===0)
    {
        sno=0;
    }
    else{
      sno=todos1[todos1.length-1].sno+1;
    }
   
    const mytodo={
      sno:sno,
      title:"title"+title,
      desc:desc
    }
    settodos1([...todos1,mytodo]);
    console.log(mytodo);
  }
 const [todos1, settodos1]=useState([]);
  return (
   <div>

    <Header title="ToDo list" searchBar={true}/>
    <AddItem addTodo={addTodo}/>
    <Todo todos1={todos1} onDelete={onDelete}/>

    <Footer/>

   </div>
  );
}

export default App;
