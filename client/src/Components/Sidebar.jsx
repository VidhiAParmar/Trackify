// import React from 'react';
// import { Link } from 'react-router-dom';

// const Sidebar = () => {
//   const links = [
//     { path: "/home", text: "Dashboard" },
//     { path: "/expenses", text: "Expenses" },
//     { path: "/emi", text: "EMI" },
//     { path: "/report", text: "Report" },
//     { path: "/setting", text: "Setting" }
//   ];
//   return (
//     <div className="bg-[#7B68DB] w-[20%] h-full flex flex-col">
//       {links.map((link, index) => (
//         <div key={index} className="w-[75%] ml-8 mt-8 h-12">
//           <Link
//             to={link.path}
//             className="text-xl font-semibold cursor-pointer pl-10 pb-4 text-white block">
//             {link.text}
//           </Link>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default Sidebar
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
    <div className="bg-[#7B68DB] w-[20%] h-full flex flex-col">
      <div className="hidden md:flex md:flex-col"> {/* Hide the sidebar in mobile view */}
        {links.map((link, index) => (
          <div key={index} className="w-[75%] ml-8 mt-8 h-12">
            <Link
              to={link.path}
              className="text-xl font-semibold cursor-pointer pl-10 pb-4 text-white block">
              {link.text}
            </Link>
          </div>
        ))}
      </div>
      <div className="md:hidden flex justify-end mr-4 mt-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>
      {isOpen && ( /* Render the sidebar when isOpen is true */
        <div className="md:hidden flex flex-col">
          {links.map((link, index) => (
            <div key={index} className="w-full ml-4 mt-4 h-12">
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
