import React from "react";
import { Link, useLocation, useNavigate} from "react-router-dom";
import { useForm } from "react-hook-form";
import Login from "./Login";
import axios from "axios";
import {toast} from 'react-hot-toast';

function SignUp() {
  const location = useLocation();
  const navigate=useNavigate();
  const from = location.state?.from?.pathname || "/"
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("https://bookstore-website-7p7s.onrender.com/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success('Login Successfully');
          navigate(from,{replace:true});
        }
        localStorage.setItem("Users",JSON.stringify(res.data.user))
      })
      .catch((err) => {
   if(err.response)
    {
      console.log(err);
      toast.error("Error:"+ err.response.data.message);
    }
      });
  };
  return (
    <>
      <div className="flex h-screen items-center justify-center ">
        <div className="w-[500px] ">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-none btn-ghost absolute right-2 top-2  text-white"
              >
                {" "}
                ✕
              </Link>
              <h3 className="font-bold text-xl mb-2 mt-4 bg-pink-500 rounded py-5 text-black text-center justify-between">
                SignUp!
              </h3>
              {/* signup div */}
              <div className="mt-8 ml-2">
                {/* name div */}
                <div className=" px-4 py-2">
                  <span>Name</span>
                  <br />
                  <input
                    type="text"
                    placeholder="enter your full name"
                    className="w-80 px-3 py-3 border rounded outline-none "
                    {...register("fullname", { required: true })}
                  />
                  <br />
                  {errors.fullname && (
                    <span class="text-sm text-red-500">
                      This field is required
                    </span>
                  )}
                </div>
                {/* email div */}
                <div className=" px-4 py-2">
                  <span>Email</span>
                  <br />
                  <input
                    type="email"
                    placeholder="enter your email"
                    className="w-80 px-3 py-3 border rounded outline-none "
                    {...register("email", { required: true })}
                  />
                  <br />
                  {errors.email && (
                    <span class="text-sm text-red-500">
                      This field is required
                    </span>
                  )}
                </div>
                {/* password div */}
                <div className=" px-4 py-2">
                  <span>Password</span>
                  <br />
                  <input
                    type="password"
                    placeholder="enter your password"
                    className="w-80 px-3 py-3 border rounded outline-none"
                    {...register("password", { required: true })}
                  />
                  <br />
                  {errors.password && (
                    <span class="text-sm text-red-500">
                      This field is required
                    </span>
                  )}
                </div>
                {/* button */}
                <div className="flex justify-between mt-6">
                  <button className="bg-pink-400 btn border hover:bg-pink-600">
                    Signup
                  </button>
                  <p>
                    Have account?{" "}
                    {/* <span className='text-pink-600'> <a href="/"> LogIn</a></span> */}
                    <button
                      className="cursor-pointer mx-2  btn border"
                      onClick={() =>
                        document.getElementById("my_modal_3").showModal()
                      }
                    >
                      Login
                    </button>{" "}
                    <Login />
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
