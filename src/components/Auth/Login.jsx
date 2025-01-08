import React from 'react'
import { useState } from 'react'

const Login = () => {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
    e.preventDefault()
    console.log('Form submitted');

    console.log('Email:', email);
    console.log('Password:',password);
    
    

    setEmail('');
    setPassword('');
        
    }
  return (
    <div className='flex justify-center items-center w-screen h-screen'>
      <div className='border-2 border-emerald-600 p-20 rounded-xl'>
        <form 
            onSubmit={(e)=> {
                submitHandler(e)
            }}
            className='flex flex-col p-4 items-center justify-center'>
            <input 
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value)
              console.log('Email changed');
              
            }}
            required className='border-2 border-emerald-600 rounded-full py-3 px-4 text-xl outline-none bg-transparent  placeholder:text-Grey' type="email" placeholder='Enter your email'
            />
            <input 
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value)
              console.log('Password changed');
            }}
            required className='border-2 border-emerald-600 rounded-full py-3 px-4 text-xl outline-none bg-transparent mt-3 placeholder:text-Grey' type="password" placeholder='Enter your password'
            />
            <button className='border-none outline-none hover:bg-emerald-900 font-semibold w-full bg-emerald-600 rounded-3xl py-2 px-8 mt-5 text-xl text-white'>Log in</button>
        </form>
      </div>
    </div>
  )
}

export default Login
