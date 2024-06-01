import React, { useContext } from 'react'
import { GreetContext } from './A'
const C = () => {
    const useCont = useContext(GreetContext);
  return (
    // <GreetContext.Consumer>
    //     {
    //         (value)=>{
    //             return <h1>Hello : {value}</h1>
    //         }
    //     }
    // </GreetContext.Consumer>
    <div>
        <h1>Greet : {useCont.greet} {useCont.greet2}</h1>
    </div>
  )
}

export default C
