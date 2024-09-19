import React from 'react'
import { FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { MdPerson } from "react-icons/md";
const page = () => {
  return (
    <div className=' items-center justify-center flex  gap-4 w-full  px-20 text-center min-h-screen bg-slate-300'    style={{
      // background: 'linear-gradient(109.6deg, rgb(36, 45, 57) 11.2%, rgb(16, 37, 60) 51.2%, rgb(0, 0, 0) 98.6%)'
      backgroundColor: 'rgb(20, 20, 27)'
    }}>
      <div className='bg-slate-300 text-black rounded-2xl shadow-2xl flex flex-1 w-2/3 max-w-4xl '>
      <div className='w-3/5  p-5  text-white rounded-tl-2xl rounded-bl-2xl py-36 px-12'
         style={{ background: ' rgb(44, 46, 52)' }}
      >
      <h2 className='text-3xl font-bold mb-1'>Welcome Back!</h2>
      <div className='border-2 w-28 border-white inline-block mb-5'></div>
      <p className='mb-10'>Please Login with your personal Information </p>
      
      <a href='/login' className='border-2 border-white rounded-full px-12 py-2 font-semibold hover:bg-white hover:text-gray-700'>Sign In</a>
      </div>
      <div className='w-3/5 p-5'>
      <div className='py-10'>
      <h2 className='text-3xl font-bold  text-gray-700 mb-2'>Create Account </h2>
      <div className='border-2 w-28 border-gray-700 inline-block mb-2'></div>
      <div className='flex flex-col items-center mt-10 mb-5'>
        <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'><MdPerson  className='text-gray-400 mr-2' />
        <input type='name' name='name' placeholder='Name'  className='bg-gray-100 outline-none text-sm flex-1'/>
        </div>
        <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'><FaRegEnvelope  className='text-gray-400 mr-2' />
        <input type='email' name='email' placeholder='Email'  className='bg-gray-100 outline-none text-sm flex-1'/>
        </div>
        <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'><MdLockOutline  className='text-gray-400 mr-2' />
        <input type='password' name='password' placeholder='Password'  className='bg-gray-100 outline-none text-sm flex-1'/>
        </div> 
       </div>
       {/* <div className='w-64 flex mb-8 justify-between mx-20 '>
         <label className='flex items-center text-xs'>
          <input type='checkbox' name='remember' className='mr-1'/>Rememeber me </label>
         <a href='#' className='text-xs'>Forgot Password?</a>
       </div> */}
       <a href='#' className='border-2 border-white rounded-full px-12 py-2 font-semibold  text-white hover:bg-white bg-gray-700  hover:text-slate-800'>Sign Up</a>

      </div>
      </div>
      
      </div>
    </div>
  )
}

export default page