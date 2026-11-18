import { useState,useCallback, useEffect } from 'react'


function App() {
    
    const [length,setLength]= useState(8)
    const[charAllowed,setcharAllowed]=useState(false)
    const[numberAllowed,setnumberAllowed]=useState(false)
    const [password,setPassword]=useState("")

    const passwordGenerator=useCallback(()=>{

        let pass=""
        let str ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

        if(numberAllowed)
        {
          str+="1234567890"
        }
        if(charAllowed)
        {
          str+="~!@#$%^&*()+_"

        }

        for(let i =0; i<length;i++)
        {
          let idx = Math.floor(Math.random()*str.length)
          pass+= str.charAt(idx);

        }
                  setPassword(pass)

        

    },[length,numberAllowed,charAllowed])

    useEffect(()=>{passwordGenerator()},[length,charAllowed,numberAllowed,passwordGenerator])



    




  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500  bg-gray-800'>
      <h1 className='"text-white text-center my-3'>Password Generator</h1>

    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input type="text"
      placeholder='Password'
      value={password}
      readOnly
className='outline-none bg-white w-full py-1 px-3'/>
<button className='outline-none bg-blue-800 text-white px-3 py-0.5 shrink-0 '>Copy</button>
    </div>
    <div className='flex text-sm gap-x-2'>
      <div  className='flex items-center gap-x-1'>
        <input type="range" 
        
        min={4}
        max={50}
        
       className='cursor-pointer'

        onChange={(e)=>{setLength(e.target.value)}}

        />
                <label>Length:{length}</label>

      </div>
      
      <div className='flex items-center gap-x-1'>
       <input type="checkbox" 
       defaultChecked={numberAllowed}
       onChange={()=>{setnumberAllowed((prev)=>!prev)}}
       

        />
        Number
        
      </div>

      <div className='flex items-center gap-x-1'>
        <input type="checkbox" 
        defaultChecked={charAllowed}
        onChange={()=>{setcharAllowed((prev)=>!prev)}}
        />
      </div>



    </div>


    </div>
    </>
  )
}

export default App

