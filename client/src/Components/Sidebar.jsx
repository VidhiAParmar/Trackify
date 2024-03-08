import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { path: "/home", text: "Dashboard" },
    { path: "/expenses", text: "Expenses" },
    { path: "/emi", text: "EMI" },
    { path: "/report", text: "Report" },
    { path: "/setting", text: "Setting" }
  ];

  return (
    <div className="md:bg-[#7B68DB] w-[12%] h-[20%] md:h-[calc(100vh-64px)] flex flex-col">
      <div className="hidden md:flex md:flex-col"> {/* Hide the sidebar in mobile view */}
        {links.map((link, index) => (
          <div key={index} className="w-[75%] h-12">
            <Link
              to={link.path}
              className="text-xl font-semibold cursor-pointer pl-10 pb-4 text-white block">
              {link.text}
            </Link>
          </div>
        ))}
      </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex justify-center bg-[#7B68DB] text-white focus:outline-none w-10 "
        >
          {isOpen ? <GiHamburgerMenu  className='w-8 h-8'/> : <GiHamburgerMenu className='w-8 h-8' />}
        </button>
      
      {isOpen && ( /* Render the sidebar when isOpen is true */
        <div className="md:hidden flex flex-col  w-40 bg-[#7B68DB]">
          {links.map((link, index) => (
            <div key={index} className="w-full h-12">
              <Link
                to={link.path}
                className="text-xl font-semibold cursor-pointer pl-4 pb-2 text-white block">
                {link.text}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
