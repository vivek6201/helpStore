import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Course from '../components/Course'

function Courses() {
  return (
    <>
    <Navbar></Navbar>
    <div className='min-h-screen'>
    <Course></Course>
    </div>
    <Footer></Footer>
    </>
  )
}

export default Courses