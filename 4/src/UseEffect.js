import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [clicked,setClicked] = useState("");
    const [clicked1,setClicked1] = useState("");
    
    useEffect(()=>{
        alert("We r in use state");
    },[clicked])
  return (
    <div>
        <button onClick={()=>{setClicked("Subscribe")}}>Subscribe</button>  
        <br/>
        <hr/>
        <button onClick={()=>{setClicked("To")}}>To</button>
        <br/>
        <hr/>
        <button onClick={()=>{setClicked1("Droid Bytes")}}>Droid Bytes</button>   
        <h1>{clicked}</h1> 
        <h1>{clicked1}</h1>
    </div>
  )
}

export default UseEffect
