import { useState } from "react";

export function LudoBoard()
{
  let [moves,setMoves]=useState({blue:0,red:0,yellow:0,green:0});
  let [arr,setArr] = useState(["noOpn"])
  function updateBlue()
  {
    setMoves((prevMoves)=>{
      return {...prevMoves,blue:prevMoves.blue+1};
    })
    setArr((prevArr)=>{
      return[...prevArr,"blueClicked"];
    })
    
  }
    function updateYellow()
  {
    setMoves((prevMoves)=>{
      return {...prevMoves,yellow:prevMoves.yellow+1};
    })
    
  }
     function updateRed()
  {
    setMoves((prevMoves)=>{
      return {...prevMoves,red:prevMoves.red+1};
    })
    
  }
       function updateGreen()
  {
    setMoves((prevMoves)=>{
      return {...prevMoves,green:prevMoves.green+1};
    })
    
  }
  return(
    <>
      <div>
        <p>Blue Count={moves.blue}</p>
        <button style={{backgroundColor:"blue"}} onClick={updateBlue}>Increase Count</button>
        {arr}
      </div>
      <div>
        <p>Yellow Count={moves.yellow}</p>
        <button style={{backgroundColor:"yellow"}} onClick={updateYellow}>Increase Count</button>
      </div><div>
        <p>Red Count={moves.red}</p>
        <button style={{backgroundColor:"red"}} onClick={updateRed}>Increase Count</button>
      </div><div>
        <p>Green Count={moves.green}</p>
        <button style={{backgroundColor:"green"}} onClick={updateGreen} >Increase Count</button>
      </div>
    </>
  )
}