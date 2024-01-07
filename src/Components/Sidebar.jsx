import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import myContext from "../context/myContext";



function Sidebar() {
  const context = useContext(myContext);
  const {mode} = context;
  return (
    <div className='bg-[#7B68DB] w-[20%] h-full flex flex-col  '>
      <div className='w-[75%] hover:bg-[#E8C8C9] rounded-md ml-8 mt-8 h-12'>
        <Link to={'/'} className="text-xl font-semibold cursor-pointer pl-10 pb-4 text-white " style={{ color: mode === 'dark' ? 'white' : '', }}>
          Dashboard
        </Link>
      </div>
      <div className='w-[75%] hover:bg-[#E8C8C9] rounded-md ml-8  mt-8 h-12'>
        <Link to={'/expenses'} className="text-xl font-semibold cursor-pointer pl-10 pb-4 text-white " style={{ color: mode === 'dark' ? 'white' : '', }}>
          Expenses
        </Link>
      </div>
      <div className='w-[75%] hover:bg-[#E8C8C9] rounded-md ml-8  mt-8 h-12'>
        <Link to={'/emi'} className="text-xl font-semibold cursor-pointer pl-10 pb-4 text-white " style={{ color: mode === 'dark' ? 'white' : '', }}>
          EMI
        </Link>
      </div>
      <div className='w-[75%] hover:bg-[#E8C8C9] rounded-md ml-8  mt-8 h-12'>
        <Link to={'/report'} className="text-xl font-semibold cursor-pointer pl-10 pb-4 text-white " style={{ color: mode === 'dark' ? 'white' : '', }}>
          Report
        </Link>
      </div>
      <div className='w-[75%] hover:bg-[#E8C8C9] rounded-md ml-8  mt-8 h-12'>
        <Link to={'/setting'} className="text-xl font-semibold cursor-pointer pl-10 pb-4 text-white " style={{ color: mode === 'dark' ? 'white' : '', }}>
          Setting
        </Link>
      </div>
    </div>
  )
}

export default Sidebar
