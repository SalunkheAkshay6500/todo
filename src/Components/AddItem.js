import { useState } from "react"


const AddItem = ({addTodo}) => {

  let addtodoStyle={

    top: "50px",
    position: "relative"
  }

    const [title, setTitle]=useState("");
    const [desc, setDesc]=useState("");

    const submit=(e)=>
    {
       e.preventDefault();
   
    if(!title )            //(!title II !desc)
    {
        alert(" Title is Required!!! ");
    }
    else
    {
     addTodo(title, desc);
     setTitle("");
     setDesc("");
    }
     

    }


  return (
    <div className="container" style={addtodoStyle}>
    <h1>Add Todo</h1>
     <form onSubmit={submit}>
  <div className="mb-3 my-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text"  value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="title" />
   
  </div>
  <div className="mb-3 my-2">
    <label htmlFor="desc" className="form-label">Description</label>
    <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="desc" />
  </div>
  
  <button type="submit" className="btn btn-success"> Add </button>
</form>
    </div>
  )
}

export default AddItem
