import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";
import {toast} from 'react-hot-toast';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
    .post("https://bookstore-website-7p7s.onrender.com/user/login", userInfo)
    .then((res) => {
      console.log(res.data);
      if (res.data) {
        toast.success("Loggedin Successfully");
        document.getElementById("my_modal_3").close();
        setTimeout(() => {
          window.location.reload();
          localStorage.setItem("Users", JSON.stringify(res.data.user));
        }, 1000);
      }
    })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
          setTimeout(() => {}, 2000);
        }
      });
  }
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-none btn-ghost absolute right-2 top-2  text-white"
              onClick={()=>
                document.getElementById("my_model_3").close()
              }
            >
              ✕
            </Link>
            <h3 className="font-bold text-xl mb-2 mt-4 bg-pink-500 rounded py-5 text-black text-center justify-between">
              LogIn!
            </h3>
            {/* login div */}
            <div className="mt-8 ml-2">
              {/* email div */}
              <div className=" px-4">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="enter your email"
                  className="w-80 px-3 py-3 border rounded outline-none "
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && <span class="text-sm text-red-500">This field is required</span>}
              </div>
              <br />
              {/* password div */}
              <div className="mb-4 px-4 ">
                <span>Password</span>
                <br />
                <input
                  type="password"
                  placeholder="enter your password"
                  className="w-80 px-3 py-3 border rounded outline-none"
                  {...register("password", { required: true })}
                />
                <br />
                {errors.password && <span class="text-sm text-red-500">This field is required</span>}
              </div>
              {/* button */}
              <div className="flex justify-between mt-4">
                <button
                  className="bg-pink-500 btn border text-white px-4 py-1 hover:bg-pink-600"
                >
                  Login
                </button>
                <p>
                  Not Registered ?{" "}
                  <Link to="/signup" className="text-pink-600 cursor-pointer">
                    Sign Up
                  </Link>{" "}
                </p>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
