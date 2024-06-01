import React, { createContext } from 'react'
import B from './B'
const GreetContext = createContext();
const A = () => {
    const greet = "Hello"
    const greet2 = "Hello2"
  return (
    <div>

        <GreetContext.Provider value={{greet,greet2}}>
            <B/>
        </GreetContext.Provider>
    </div>
  )
}
export {GreetContext}
export default A
