import React from 'react'
import { Link } from "react-router-dom";

const Contactus = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a5e099f9-0df6-413e-86f5-e7fb82c44a86");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      console.log('Success',data);
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <>
            {/* contact div */}
            <div className="mt-28 ml-60 modal-box ">
            <h3 className=" rounded py-5 text-white  text-center justify-between  text-2xl bold">
              Contact Us
            </h3>
            <form onSubmit={onSubmit}>
              {/* name div */}
              <label  className="px-3 ">Your Name</label>
              <br/>
            <input type="text" name="name" id=""placeholder='Enter Your Name' required className="w-80 px-3 py-3 border rounded outline-none "/>
            <br />

              {/* <div className=" px-4 ">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="enter your name" required
                  className="w-80 px-3 py-3 border rounded outline-none "/>
               </div> */}
               <br />
                {/* email div */}
                <label  className=" px-4  ">Your Email</label>
              <br/>
            <input type="email" name="email" id=""placeholder='Enter Your email' required className="w-80 px-3 py-3 border rounded outline-none "/>
            <br />
              {/* <div className=" px-4">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  name="email"
                  placeholder="enter your email"required
                  className="w-80 px-3 py-3 border rounded outline-none "
                />
              </div> */}
              <br />
              {/* message div */}
              <label  className=" px-4  ">Your message </label>
              <input type="text" name="message" id=""placeholder='Enter Your message' required className="w-80 px-3 py-3 border rounded outline-none "/>
              {/* <div className="mb-4 px-4 ">
                <span>Message</span>
                <br />
                <input
                  type="text"
                  name="message"
                  placeholder="enter your Message"required
                  className="w-80 px-3 py-3 border rounded outline-none"
                />
              </div> */}
              {/* button */}
              <button className="flex  mt-6 justify-start bg-pink-500 btn border text-white px-4 py-1 hover:bg-pink-600 "type='submit'>
                  Submit
              </button>
              </form>
              <span>{result}</span>
            </div>
    </>
  )
}

export default Contactus
