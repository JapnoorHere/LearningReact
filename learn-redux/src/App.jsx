import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement,increment,multiply } from './redux/counter/counterSlice';
function App() {
  
const count = useSelector(state=> state.counter.value);
const dispatch = useDispatch();
  return (
    <>
      <div>
        <button onClick={()=>dispatch(decrement())}>-</button>
        {count}
        <button onClick={()=>dispatch(increment())}>+</button>
        <button onClick={()=>dispatch(multiply(4))}>*</button>
      </div>
    </>
  )
}

export default App
