import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className='w-full h-16 bg-[#7B68DB]'>
        <h1 className='text-center text-white font-extrabold pt-2 text-3xl pl-4'>Trackify</h1>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
