// import React,{useState, useContext} from 'react'
// import front from "../assets/front.png"
// import {Link, useNavigate} from "react-router-dom"
// import {auth, fireDB} from "../firebase/FirebaseConfig";
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import myContext from '../context/myContext';
// import {toast} from 'react-toastify';
// import { Timestamp, addDoc, collection } from 'firebase/firestore';
// import Loader from './Loader';
// //#E8C8C9

// function Signup() {
  
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   // const [bdate, setBdate] = useState("");
//   const navigate = useNavigate();
//   const context = useContext(myContext);
//   const { loading, setLoading } = context;

//   const signup = async () => {
//     setLoading(true)
//     if (name === "" || email==="" || password==="" ){
//       return console.log("all field require")
//   }
//   try {
     
//     toast.success("Signup Succesfully")
//     navigate("/")
//     setName("");
//     setEmail("");
//     setPassword("");
//     setLoading(false)
//   } catch (error) {
//       console.log(error)
//       setLoading(false)
//   }
//   }
//   return (
//     <div className='w-[100vw] h-[100vh] bg-white flex'>
//       {loading && <Loader/>}
//       <img className='w-[80vw] h-full' src={front} alt='image'/>
//       <div className='w-full h-full flex flex-col'>
//             <h1 className='w-full h-16 bg-[#7B68DB] text-center align-middle text-white font-extrabold pt-2 text-3xl font-family: "Lemon", serif; '>Trackify</h1>
//             <div className='flex w-full h-full justify-center items-center'>
//                 <form>
//                     <h1 className='text-2xl text-center font-bold'>Signup</h1>
//                     <div className='w-full h-full rounded-lg'>
//                         <input 
//                            value={name}
//                            onChange={(e) => setName(e.target.value)}
//                            name='name'
//                            placeholder='Name' 
//                            type='text' 
//                            className='bg-[#cbcad1] rounded-lg mt-4 w-56  h-8 pl-3'/><br/>
//                         {/* <input 
//                           value={bdate}
//                           onChange={(e) => setBdate(e.target.value)}
//                           name='bdate'
//                           placeholder='Birthdate' 
//                           type='date' 
//   className='bg-[#cbcad1] rounded-lg mt-4 w-56  h-8 pl-3'/><br/> */}
//                         <input  
//                           value={email}
//                           onChange={(e) => setEmail(e.target.value)}
//                           name='email'
//                           placeholder='Email' 
//                           type='email' 
//                           className='bg-[#cbcad1] rounded-lg mt-4 w-56  h-8 pl-3'/><br/>
//                         <input 
//                           value={password}
//                           onChange={(e) => setPassword(e.target.value)}
//                           name='password'
//                           type='password' 
//                           placeholder='Password' 
//                           className='bg-[#cbcad1] rounded-lg mt-4 pl-3 w-56 h-8'/><br/>
//                         <h2 className='text-xs font-light mt-3'>Have an account <Link className='text-[#9f93da] text-xs hover:bg-gray-300 rounded-lg ml-2' to={'/login'}>Login</Link></h2>
//                         <button onClick={signup} className='h-8 w-56 mt-4 text-white font-bold bg-[#7B68DB] rounded-lg align-middle text-center' >Signup</button>
//                     </div>
                    
//                 </form>
//             </div>
//       </div>
//     </div>
//   )
// }

// export default Signup
import React from 'react'

const Signup = () => {
  return (
    <div>Signup</div>
  )
}

export default Signup