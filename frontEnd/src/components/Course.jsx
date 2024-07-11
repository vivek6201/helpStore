import React, { useEffect, useState } from 'react'
import Cards from './Cards'
// import list from '../../public/list.json'
import axios from "axios"
import {Link} from 'react-router-dom'


function Course() {
  const [book,setBook]=useState([])
  useEffect(()=>{
    const getBook=async()=>{
      try {
      const res=  await axios.get("https://bookstore-website-7p7s.onrender.com/book");
      console.log(res.data)
      setBook(res.data)
      } catch (error) {
        console.log(error)
      }
    };
    getBook();
  },[])
  return (
    <>
<div>
     <div className='max-w-screen-2xl container mx-auto
       md:px-20 px-4 ' >
    <div className='mt-28 items-center justify-center text-center'>
      <h1 className='text-2xl md:text-4xl py-6 '>
        We're delighted to have you {" "} <span className='text-pink-500'>Here! :)</span>
      </h1>
      <p className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio illum reiciendis veritatis repellendus nulla, modi facilis ullam distinctio quis nam quam quidem asperiores illo id. Cumque rerum deleniti dolorem quis veritatis quisquam optio, unde nesciunt accusantium et provident enim possimus quaerat consequuntur dolorum libero odio mollitia, perferendis quos earum in.
      </p>
      <Link to="/">
      <button className='bg-pink-500 px-5 py-2 mt-4 rounded hover:bg-pink-600 duration-300'>Back</button>
      </Link>
    </div>
    <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
      {
        book.map((item)=>(
          <Cards key={item.id} item={item}/>
        ))
      }
    </div>
   </div>
</div>
    </>
  )
}

export default Course