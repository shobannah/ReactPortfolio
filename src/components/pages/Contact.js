import React from 'react';
import { useState } from 'react';



export default function Contact() {

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }


  return (
    <div className={'m-5'}>
      <h1>Contact Page</h1>
      <form onSubmit={handleSubmit}
      className='text-center'>
      <label className='p-2'>Enter your email address:
      <input className='p-2'
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
      <label className='p-2'>Enter your message:
        <input className='p-2' 
          type="text" 
          name="message" 
          value={inputs.message || ""} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" />
    </form>
    </div>
  );
}

