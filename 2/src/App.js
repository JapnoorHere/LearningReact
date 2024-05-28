import React,{ useState } from 'react'



export default function App() {
    const[count,setCount] = useState(0);

    const handleClickIncr = ()=>{
        setCount(count+1);
    }
    
    const handleClickDecr = ()=>{
        setCount(count-1);
    }
    return (
    <div>
        <p>{count}</p>

        <button onClick={handleClickIncr}>+</button>
        <button onClick={handleClickDecr}>-</button>
    </div>
  )
}
