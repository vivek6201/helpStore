import React from 'react'

function Cards({item}) {
  return (
    
    <>
    <div className='mt-2 my-3 p-3 '>
    <div className="card w-93 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
  <figure>
    <img src={item.image} alt="Book" /></figure>
  <div className="card-body">
    <h2 className="card-title">
     {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline p-3">Rs.{item.price}</div> 
      <div className="badge badge-outline hover:bg-pink-500 hover:text-white duration-200 cursor-pointer p-3 ">Buy Now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards