import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards'
function App() {
  

  return (
    <>
      <h1 className='bg-green-400 '>Radhe Radhe</h1>
      <Cards username="Priyanshu" about ="Kya Ha"/> <Cards/>

      
    </>
  )
}

export default App
