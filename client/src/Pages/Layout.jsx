import React from 'react'
import Sidebar from "../Components/Sidebar";


function Layout({children}) {
  return (
    <div>
      <div className='flex w-[100%] h-[100vh] border-white m-1'>
        <Sidebar/>
        {children}
      </div>

    </div>
  )
}

export default Layout
