// import React, { useContext } from 'react'
// import Layout from "../Components/Layout";
// import myContext from '../context/myContext';
// import { BsFillCloudSunFill } from 'react-icons/bs'
// import { FiSun } from 'react-icons/fi';

// function Settings() {
//   const context = useContext(myContext);

//   const {mode, toggleMode} = context;
//   console.log(mode)
//   return (
//     <Layout>
//     <div>
//       <h2 className='ml-4 text-black font-semibold text-base' style={{color: mode === 'dark' ? 'white' : ''}}>Change Theme: 
//         <button
//           className="bg-gray-800 text-white rounded-full p-2 focus:outline-none transition-all duration-300 ease-in-out ml-4 mt-12"
//           onClick={toggleMode}
//         >
//           {mode === 'light' ? (
//             <FiSun size={30} />
//           ) : (
//             <BsFillCloudSunFill size={30} />
//           )}
//         </button>
//       </h2>
//       <h2 className='ml-4 mt-7 text-black font-semibold text-base cursor-pointer' style={{color: mode === 'dark' ? 'white' : ''}}>Delete History</h2>
//       <h2 className='ml-4 mt-7 text-black font-semibold text-base cursor-pointer' style={{color: mode === 'dark' ? 'white' : ''}}>Change Password</h2>
//       <h2 className='ml-4 mt-7 text-black font-semibold text-base cursor-pointer' style={{color: mode === 'dark' ? 'white' : ''}}>Logout</h2>
//       <h2 className='ml-4 mt-7 text-black font-semibold text-base cursor-pointer' style={{color: mode === 'dark' ? 'white' : ''}}>Get Help</h2>
//     </div>

//   </Layout>
//   )
// }

// export default Settings
import React from 'react'

const Settings = () => {
  return (
    <div>Settings</div>
  )
}

export default Settings