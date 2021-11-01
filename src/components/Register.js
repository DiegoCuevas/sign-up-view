import React from "react";
import Message from "./Message.js";
import Banner from "./banner.js";
import circle from "../assets/img/logos/circle.svg"

function Register() {
   
  return (
    <div className="w-full min-h-screen bg-blue-img bg-50% bg-no-repeat ">
      <div className="w-full h-11/12 grid grid-cols-3 items-center">
        <Message />
        <div className="mt-10 flex flex-row bg-white w-full lg:h-card h-full justify-center items-center rounded-2xl shadow-card lg:w-card">
          <div className="flex flex-col">
            <div className="flex items-center justify-center pt-5 pb-6">
              <h1 className="text-center font-semibold text-2xl font-Karla">
                Start your 30 days <br /> free trial{" "}
              </h1>
            </div>
            <div className="lg:w-input h-3/4 w-full flex flex-col">
              <div className="h-input w-full mb-4 flex flex-col justify-center ">
                <input
                  placeholder="email"
                  className="h-full rounded-lg border border-solid"
                  type="email"
                  name="email"
                  id="email"
                />
              </div>
              <div className="h-input w-full mb-4 flex flex-col justify-center ">
                <input
                  placeholder="Password"
                  className="h-full rounded-lg border border-solid"
                  type="password"
                  name="password"
                />
              </div>
              <div className="h-input w-full mb-4 flex flex-col justify-center ">
                <input
                  placeholder="Confirm password"
                  className="h-full rounded-lg border border-solid"
                  type="password"
                  name="password"
                />
              </div>
              <div className="h-input w-full mb-4 flex flex-col justify-center ">
                <select className="h-full border border-solid">
                  <option value="">Google</option>
                  <option value="">Google</option>
                  <option value="">Google</option>
                </select>
              </div>
              <div className="h-input w-full mb-4 flex justify-center">
                <button
                  className="w-full h-full bg-ligth-blue text-white rounded-md"
                  type="submit"
                >
                  Create account
                </button>
              </div>
              <div className="mb-4 w-full">
                <p className="font-Karla font-extralight text-xs">
                  By clicking Sign Up, you agree to our{" "}
                  <span className="text-blue-500">Terms of Service</span>
                  <br /> and our{" "}
                  <span className="text-blue-500">Privacy Policy.</span>
                </p>
              </div>
              <div className="w-full mb-3 flex items-center justify-center">
                <hr className="w-1/2 border-1 border-gray-300" />
                <p className="mx-2 text-sm text-gray-400">or</p>
                <hr className="w-1/2 border-1 border-gray-300" />
              </div>
            </div>
            <div className="w-full flex py-6 justify-center items-center">
              <p className="text-center">
                Already have an account?{" "}
                <span className="text-blue-400 text-sm">Log in </span>
              </p>
            </div>
          </div>
        </div>
        <div className="lg:mt-10 w-full mt-2 flex justify-end items-end">
          <img src={circle} className="lg:w-2/3 w-1/2" alt="" />
        </div>
      </div>
      <Banner />
    </div>
  );
}

export default Register;
