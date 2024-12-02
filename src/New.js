import React from 'react'

function New({state}) {
    console.log("first",state)
  return (
    <div style={{display:"flex",flexDirection:"row",justifyContent:"center", alignItems:"center"}}>
        <div style={{borderRadius:"50%", backgroundColor:state,height:"100px",width:"100px",}}></div>
    </div>
  )
}

export default New