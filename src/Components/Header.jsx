import React, { useContext } from 'react'
import myContext from "../context/myContext"


function Header() {
  const context = useContext(myContext);
  const { toggleMode, mode } = context;
  const user = JSON.parse(localStorage.getItem('user'))
  console.log(user);

  return (
    <div className='w-full h-16 bg-[#7B68DB] flex justify-between'>
      <h1 className='w-full h-16 bg-[#7B68DB] text-white font-extrabold pt-2 text-3xl pl-4'>Trackify</h1>
      <div className='flex mr-6'>
        <h2 className='mr-4 mt-4 font-semibold text-xl text-white'>Username</h2>
        <div className='bg-white rounded-[50%] w-8 h-8 mt-4 font-bold text-center p-2 pb-2'>U</div>
      </div>
    </div>
  )
}

export default Header
