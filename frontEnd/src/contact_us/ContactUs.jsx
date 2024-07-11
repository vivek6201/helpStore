
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import React from 'react'
import Contactus from '../components/Contactus'

function ContactUs() {
  return (
    <>
    <Navbar></Navbar>
    <div className='min-h-screen'>
    <Contactus></Contactus>
    </div>
    <Footer></Footer>
    </>
  )
}

export default ContactUs