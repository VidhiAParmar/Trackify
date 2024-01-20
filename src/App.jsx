// import React from 'react'
// import {BrowserRouter as Router , Route, Routes} from "react-router-dom";
// import {Home, Setting, EMI, Expenses, Report} from "./Pages/index";
// import MyState from './context/MyState';
// import Login from './Components/Login';
// import Signup from "./Components/Signup";
// function App() {
//   return (
//    <MyState>
//     <Router>
//       <Routes>
//         <Route path='/' element={<Home/>}/>
//         <Route path='/login' element={<Login/>}/>
//         <Route path='/signup' element={<Signup/>}/>
//         <Route path='/emi' element={<EMI/>}/>
//         <Route path='/expenses' element={<Expenses/>}/>
//         <Route path='/report' element={<Report/>}/>
//         <Route path='/setting' element={<Setting/>}/>
//       </Routes>
//    </Router>
//    </MyState>
//   )
// }

// export default App
import React from "react";
import Navbar from "./Components/Navbar";
import UserAuthForm from "./Pages/UserAuthForm";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="login" element={<UserAuthForm type="login" />} />
          <Route path="register" element={<UserAuthForm type="register" />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
