import { useState } from "react"

export default function Like()
{
  let [un,setun] = useState(0);


  let likeIt =()=>{
    setun(!un);
  }
return (
  <>
  {un?"Liked":"Not Liked"}
<button onClick={likeIt}>Click</button>
</>
)
}