import { useState } from 'react'
import generateRandom from './helper'
import './App.css'

function App() {
  const [random, setRandom] = useState(generateRandom(3))

  return (
    
      <>
      <div>
        <h1>Lottery Ticket</h1>
      <div className='ticket'>
      <span>{random[0]}</span>
      <span>{random[1]}</span><span>{random[2]}</span>
      </div>
      </div>
      </>
  )
}

export default App
