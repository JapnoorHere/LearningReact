import React from 'react'
import './MobileList.css'
export default function MobileList(props) {
  const {img,name,price}= props
  return (
    <div className='main'>
        
        <img src= {img}/>
        <div className='inside'>
        <h2>{name}</h2>
        <p>{price}</p>
        <button>Add to cart</button>
        </div>
    </div>
  )
}
