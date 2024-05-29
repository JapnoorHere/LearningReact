import React ,{useState} from 'react'

export default function App() {
    const [count,setCount] = useState(0);

    const funInc = ()=>{
        setCount(count+1);
    }

    const funDec = ()=>{
        setCount(count-1);
    }

  return (
    <div>
        <p>{count}</p>
        <button onClick={funInc}>+</button>
        <button onClick={funDec}>-</button>
    </div>
  )
}
