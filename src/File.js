import React, { useState } from 'react'
import New from './New'
function File() {
    const [state,setState]=useState("black")
  return (
    <div>
        <button style={{backgroundColor:"blue"}}onClick={()=>setState("blue")}>1</button>
        <button style={{backgroundColor:"red"}}onClick={()=>setState("red")}>2</button>
        <button style={{backgroundColor:"yellow"}}onClick={()=>setState("yellow")}>3</button>
        <button style={{backgroundColor:"green"}}onClick={()=>setState("green")}>4</button>
        <New state={state}/>
    </div>
  )
}

export default File