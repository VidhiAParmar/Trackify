// import React,{useState} from 'react'
// import front from "../assets/front.png"
// import {Link, useNavigate} from "react-router-dom"
// //#E8C8C9
// import {auth} from "../firebase/FirebaseConfig"
// import {toast} from "react-toastify"
// import { signInWithEmailAndPassword } from 'firebase/auth';

// function Login() {
//   const navigate = useNavigate();
  
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const login = async () => {
//     console.log('login called')
//     setLoading(true);
//       try {
        
//         toast.success('Signin Successfully', {
//           position: "top-right",
//           autoClose: 2000,
//           hideProgressBar: true,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "colored",
//         });
//         navigate('/');
//         setLoading(false);
//       } catch (error) {
//         toast.error('Sigin Failed', {
//           position: "top-right",
//           autoClose: 5000,
//           hideProgressBar: true,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "colored",
//         });
//         setLoading(false);
//       }
//   }
//   return (
//     <div className='w-[100vw] h-[100vh] bg-white flex'>
//       <img className='w-[80vw] h-full' src={front} alt='image'/>
//       <div className='w-full h-full flex flex-col'>
//             <h1 className='w-full h-16 bg-[#7B68DB] text-center align-middle text-white font-extrabold pt-2 text-3xl font-family: "Lemon", serif; '>Trackify</h1>
//             <div className='flex w-full h-full justify-center items-center'>
//                 <form>
//                     <h1 className='text-2xl text-center font-bold'>LOGIN</h1>
//                     <div className='w-full h-full rounded-lg'>
//                         <input
//                            placeholder='Email'  
//                             name='email'
//                            value={email}
//                           onChange={(e) => setEmail(e.target.value) } 
//                           type='email' 
//                           className='bg-[#cbcad1] rounded-lg mt-4 w-56  h-8 pl-3'/><br/>
//                         <input 
//                           type='password' 
//                           placeholder='Password' 
//                           name='password'
//                           onChange={(e) => setPassword(e.target.value)}
//                           className='bg-[#cbcad1] rounded-lg mt-4 pl-3 w-56 h-8'/><br/>
//                         <a className='text-[#9f93da] text-xs hover:bg-gray-400 rounded-lg mr-2'>forgote password</a>
//                         <Link className='text-[#9f93da] text-xs hover:bg-gray-400 rounded-lg ml-2' to={'/signup'}>Signup</Link><br/>
//                         <button className='h-8 w-56 mt-4 text-white font-bold bg-[#7B68DB] rounded-lg align-middle text-center' onClick={login} >Login</button>
//                     </div>
                    
//                 </form>
//             </div>
//       </div>
//     </div>
//   )
// }

// export default Login
import React from 'react'

const Login = () => {
  return (
    <div>Login</div>
  )
}

export default Login