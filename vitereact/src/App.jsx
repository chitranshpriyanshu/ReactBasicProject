import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let [counter,setCount]=useState(0)

 let addValue=()=>{
  console.log("clicked",counter)
  if(counter<20)
  {
   counter=counter+1

  }
   setCount(counter)
 }
 let removeValue=()=>{
  console.log("clicked",counter)
  if(counter>0)
  {
  counter=counter-1

  }
  setCount(counter)
 }
  return (
    <>
     <h1>Radhe Radhe</h1>
    <h2>Count is equal to {counter}</h2>
    <button  onClick={addValue}  >Increase Count</button>
    <br/>
    <button onClick={removeValue}>Decrease Count</button>

    </>
  )
}

export default App
