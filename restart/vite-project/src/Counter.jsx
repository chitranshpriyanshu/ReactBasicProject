import { useState } from "react";


export default function Counter()
{
  let [count, setCount] = useState(0);
  
function incCount()
{
  setCount(count+1);
  console.log(count)
}


  return (
    <>
    <p>Count = {count}</p>
    <button onClick={incCount}>Increase Count</button>
    </>
  )
}