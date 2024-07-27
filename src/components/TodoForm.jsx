import React from 'react'
import { useState } from 'react'

const TodoForm = ({addTask}) => {
const [text, setText] = useState("");
  return (
    <div className='todo-form'><h1>Add new todo</h1>
    <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder='Todo-task' />
    <button onClick={()=>addTask(text)}>Add task</button>
    
    
    </div>
  )
}

export default TodoForm