import React from 'react';
import front from "../assets/front.png";
import { Link } from 'react-router-dom';

const UserAuthForm = ({ type }) => {
  if (type === 'login') {
  return (
    <div className='bg-white flex flex-col md:flex-row'>
      <img className='w-full md:w-[40vw] h-[40vh] md:h-[100vh]' src={front} alt='image' />
      <div className='flex w-full h-full justify-center items-center'>
        <form className='md:w-1/2 text-center mt-[10%]'>
          <h1 className='text-3xl text-center font-bold'>LOGIN</h1>
          <div className='w-full h-full rounded-lg'>
            <input
              placeholder='Email'
              name='email'
              type='email'
              className='bg-[#e7e6e9] rounded-lg mt-4 w-full md:w-56 h-10 pl-3' /><br />
            <input
              type='password'
              placeholder='Password'
              name='password'
              className='bg-[#e7e6e9] rounded-lg mt-4 w-full md:w-56 h-10 pl-3' /><br />
            <a className='text-[#9f93da] text-xs hover:bg-gray-200 rounded-lg mr-2'>forgot password</a>
            <Link className='text-[#9f93da] text-xs hover:bg-gray-200 rounded-lg ml-2' to={'/register'}>Signup</Link><br />
            <button className='h-10 w-full md:w-56 mt-4 text-white font-bold bg-[#7B68DB] rounded-lg align-middle text-center'>Login</button>
          </div>
        </form>
      </div>
    </div>
  )
  }
  else if (type === 'register'){
    return (
      <div className='bg-white flex flex-col md:flex-row'>
      <img className='w-full md:w-[40vw] h-[40vh] md:h-[100vh]' src={front} alt='image' />
      <div className='flex w-full h-full justify-center items-center'>
        <form className='md:w-1/2 text-center mt-[10%]'>
          <h1 className='text-3xl text-center font-bold'>REGISTER</h1>
          <div className='w-full h-full rounded-lg'>
          <input
              placeholder='Name'
              name='text'
              type='text'
              className='bg-[#e7e6e9] rounded-lg mt-4 w-full md:w-56 h-10 pl-3' /><br />
            <input
              placeholder='Email'
              name='email'
              type='email'
              className='bg-[#e7e6e9] rounded-lg mt-4 w-full md:w-56 h-10 pl-3' /><br />
            <input
              type='password'
              placeholder='Password'
              name='password'
              className='bg-[#e7e6e9] rounded-lg mt-4 w-full md:w-56 h-10 pl-3' /><br />
            <a className='text-[#9f93da] text-xs hover:bg-gray-200 rounded-lg mr-2'>forgot password</a>
            <Link className='text-[#9f93da] text-xs hover:bg-gray-200 rounded-lg ml-2' to={'/login'}>Login</Link><br />
            <button className='h-10 w-full md:w-56 mt-4 text-white font-bold bg-[#7B68DB] rounded-lg align-middle text-center'>Register</button>
          </div>
        </form>
      </div>
    </div>
    )
  }
}

export default UserAuthForm;
