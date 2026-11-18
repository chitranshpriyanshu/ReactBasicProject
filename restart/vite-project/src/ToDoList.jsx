import { useState } from "react";
import {v4 as uuidv4} from "uuid"

export default function ToDoList()
{
  let [tasks,setTasks]=useState([{taskList:"Task1",id:uuidv4(),isDone:false}])
  let [todo,setTodo]=useState("")
  
  function addTask()
  {
      if (todo.trim() === "") return;

    setTasks((taskArr)=>{
      return [...taskArr,{taskList:todo,id:uuidv4(),isDone:false}]
    })
    setTodo("")

  }
  function newTodo(event)
  {
    let taskVal = event.target.value;
    setTodo(taskVal)
   
    
  }
  function deleteTask(delId)
  {
    setTasks((taskArr)=>{
     return taskArr.filter(task=>task.id!=delId)
    })
  }
  let updateUpperCase=()=>
  {
    setTasks((prevTasks)=>(
     prevTasks.map((task)=>{
      return {...task,taskList:task.taskList.toUpperCase()}
     })
    )
    )
  }
 function upperCaseOne(idUp)
 {
    setTasks((prevTasks)=>(
      prevTasks.map((task)=> {
        if(task.id==idUp)
        {
          return {...task,taskList:task.taskList.toUpperCase()}
        }else{
          return task;
        }
      }
    )))
 }
 function markAsDoneOne(idUp)
 { 
  setTasks((prevTasks)=>(
      prevTasks.map((task)=> {
        if(task.id==idUp)
        {
          return {...task,isDone:true}
        }else{
          return task;
        }
      }
    )))
 }
 function markAsDoneAll()
 {
  setTasks((prevTasks)=>(
    prevTasks.map((task)=>{
    return {...task,isDone:true}
   })
  ))
 }
  return(<>
  <h1>ToDo List</h1>
    <div>

      <input type="text" placeholder="Enter Task" value={todo} onChange={newTodo} id="task"/>
      <button onClick={addTask}>Add Task </button>
    </div>
    <br /><br /><br />

    <h3>Tasks To Do</h3>
    <ul>
       { tasks.map((task)=>(
          <li key={task.id}><span>{task.taskList}</span> <span>{task.isDone?"Done":""}</span>
                    <button onClick={()=>deleteTask(task.id)}>Delete</button>
                    <button onClick={()=>markAsDoneOne(task.id)}>Mark as Done</button>
                    <button onClick={()=>upperCaseOne(task.id)}>UpperCase</button>

          </li>
        ))
      }
      <button onClick={markAsDoneAll}>Mark All as Done</button>
      <button onClick={updateUpperCase}>UpperCase All</button>
    </ul>
  </>)
}