import React, { useState } from 'react'
import datas from './datas.json'
function Data() {
    const [nData,setnData] = useState(datas)
    console.log(datas);
    
    const removeEle = (eleId)=>{
      setnData(nData.filter(ele => ele.id !==eleId))
    }
    const updateEle = (eleId)=>{
      setnData(nData.map((ele)=>{
        if(ele.id === eleId){
          return{name : "newName"}
        }
        else{
          return ele;
        }
      }))
    }

    return (
    <div>
      <ul>
          {
            nData.map((ele)=>
              (
                <li key={ele.id}>
                {ele.name}
                <button onClick={()=>removeEle(ele.id)}>Remove</button>
                <button onClick={()=>updateEle(ele.id)}>Update</button>
              </li>
              )
            )
          }
      </ul>
      <button onClick={()=>setnData([])}>Clear All</button>
    </div>
  )
}

export default Data
