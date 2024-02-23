import React from "react";
import Navbar from "./Components/Navbar";
import UserAuthForm from "./Pages/UserAuthForm";
import { Routes, Route } from "react-router-dom";
import Home from  "./Pages/Home";
import EMI from "./Pages/EMI";
import Expenses from './Pages/Expenses';
import Report from "./Pages/Report";
import Settings from "./Pages/Settings";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="login" element={<UserAuthForm type="login" />} />
          <Route path="register" element={<UserAuthForm type="register" />} />
          <Route path="home" element={<Home/>}/>
          <Route path="emi" element={<EMI/>}/>
        <Route path='/expenses' element={<Expenses/>}/>
        <Route path='/report' element={<Report/>}/>
        <Route path='/setting' element={<Settings/>}/>
        </Route>
      </Routes>
    </>
  );
};

export default App;
