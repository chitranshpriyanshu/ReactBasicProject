

import { useState,useCallback, useEffect,useRef } from 'react'


function App() {
  const [length ,setLength] = useState(8)
    const [numberAllowed , setnumberAllowed] = useState(false)
    const [charAllowed , setcharAllowed] = useState(false)
    const[password, setPassword]=useState("")

const [copied, setCopied] = useState(false);

  const passwordRef=useRef(null)




    const passwordGenerator=useCallback(()=>{
      let pass=""
      let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if(numberAllowed)
      {
        str+="0123456789"
      }
        if(charAllowed)
      {
        str+="!@#$%^&*(){}[]"
      }

      for(let i =0; i<length;i++)
      {
        let char = Math.floor(Math.random()*str.length)
        pass+=str.charAt(char)
      }
      setPassword(pass)




    },[length,numberAllowed,charAllowed,setPassword])

    useEffect(()=>{passwordGenerator()},[length,numberAllowed,charAllowed,passwordGenerator])
const copyPasswordToClipboard = useCallback(() => {
  passwordRef.current?.select();
  window.navigator.clipboard.writeText(password);

  setCopied(true);

  setTimeout(() => {
    setCopied(false);
  }, 1500);
}, [password]);



  return (
    <>
   <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500  bg-gray-800 ">
    <h1 className="text-white text-center my-3">Password Generator</h1>
    
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input type="text"
      value={password}
      className='outline-none bg-white w-full py-1 px-3'
      placeholder='Password'
      ref={passwordRef}
      readOnly/>
      <button
  onClick={copyPasswordToClipboard}
  className={`
    outline-none px-3 py-0.5 shrink-0 text-white rounded
    transition-all duration-300 ease-in-out
    ${copied ? "bg-green-600 scale-105" : "bg-blue-800"}
    active:scale-95
  `}
>
  {copied ? "Copied!" : "Copy"}
</button>

    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input type='range'
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e)=>{setLength(e.target.value)}}
       />
        <label>Length:{length}</label>
      </div>
            <div className='flex items-center gap-x-1'>
              <input type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              
              onChange={()=>{
                setnumberAllowed((prev)=>!prev)
              }}/> Number
              </div>
              <div className='flex items-center gap-x-1'>
              <input type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              
              onChange={()=>{
                setcharAllowed((prev)=>!prev)
              }}/> Character
              </div>


    </div>
    </div>
    </>
  )
}

export default App
