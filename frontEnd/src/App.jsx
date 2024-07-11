import React from 'react'
import Home from './home/Home'
import { Navigate, Route, Routes } from "react-router-dom"
import Courses from './courses/Courses';
import SignUp from './components/SignUp'
import Login from './components/Login';
import ContactUs from './contact_us/ContactUs';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider';

function App() {
  const [authUser,setAuthUser]=useAuth()
  console.log(authUser);
  return (
      <>
     {/* <div className='dark:bg-slate-900 dark:text-white'> */}
     <Routes>
        <Route path="/"element={<Home/>}/>
        <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
        <Route path="/signup"element={<SignUp/>}/>
        <Route path="/login"element={<Login/>}/>
        <Route path="/contactus"element={<ContactUs/>}/>
      </Routes>
      <Toaster />
     {/* </div> */}
      </>
  );
}

export default App
