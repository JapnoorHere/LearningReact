import React, { useState } from 'react'

export default function Form() {
    // const [name,setName] = useState("")
    const[formData,setFormData] = useState({
        name : "",
        email : "",
        password : ""
    })

    const handleInput = (e)=>{
        const {name,value} = e.target;
        console.log(name);
        console.log(value);
        setFormData({...formData,
            [name] : value
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name='name' value={formData.name} onChange={handleInput}/><br/>
        <input type="text" name='email' value={formData.email} onChange={handleInput}/><br/>
        <input type="text" name='password' value={formData.password} onChange={handleInput}/><br/>    
        {formData.name}
        {formData.email}
        {formData.password}
      </form>
    </div>
  )
}
