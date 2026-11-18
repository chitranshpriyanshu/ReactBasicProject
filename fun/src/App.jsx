import { useState } from 'react'
import { ColourSelector } from './ColourSelector'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[bgg, setbg]=useState(false)

  return (
    <>
    <body className='bg-amber-700'>
      <div className='flex  justify-between '>
        <div className={`h-40 w-35 ${bgg?ColourSelector():"bg-red-600"}`} onClick={()=>setTimeout(()=>{setbg(pivot=>!pivot)},1000)}></div>
                <div className='h-40 w-35 bg-blue-500'></div>

        <div className='h-40 w-35 bg-amber-400'></div>

      
    </div>
    </body>
    
    </>
  )
}

export default App
