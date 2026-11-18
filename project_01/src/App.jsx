import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Layout from './Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Layout/>
    </>
  )
}

export default App
