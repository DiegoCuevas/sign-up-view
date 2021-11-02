import React, { useState } from "react";
import Message from "./Message.js";
import Banner from "./banner.js";
import circle from "../assets/img/logos/circle.svg";
import mail from "../assets/img/logos/form/mail.svg";
import key from "../assets/img/logos/form/key.svg";
import check from "../assets/img/logos/form/check.svg";
import selectLogo from "../assets/img/logos/form/select_logo.svg";

const options = ["google", "google1", "google2"];
function Register() {
  const [selectValue, setSelectValue] = useState("");
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
              <div className="relative w-full h-10 mb-6 flex border border-solid rounded-lg">
                <input
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Email"
                  className="peer px-4 h-full w-full rounded-lg placeholder-transparent focus:outline-none"
                />

                <label
                  for="email"
                  className="px-4 mb-1 absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-400 peer-focus:text-sm"
                >
                  Email
                </label>
                <span className="flex items-center mx-4">
                  <button
                    type="submit"
                    className=" focus:outline-none focus:shadow-outline"
                  >
                    <img src={mail} alt=""></img>
                  </button>
                </span>
              </div>
              <div className="relative w-full h-10 mb-6 flex border border-solid rounded-lg">
                <input
                  id="password"
                  type="password"
                  name="password"
                  className="peer px-4 h-full w-full rounded-lg placeholder-transparent focus:outline-none"
                  placeholder="Password"
                />
                <label
                  for="password"
                  className="px-4 mb-1 absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-400 peer-focus:text-sm"
                >
                  Password
                </label>
                <span className="flex items-center mx-4">
                  <button
                    type="submit"
                    className=" focus:outline-none focus:shadow-outline"
                  >
                    <img src={key} alt=""></img>
                  </button>
                </span>
              </div>
              <div className="relative w-full h-10 mb-6 flex border border-solid rounded-lg">
                <input
                  id="ConfirmPassword"
                  type="password"
                  name="ConfirmPassword"
                  className="peer px-4 h-full w-full rounded-lg placeholder-transparent focus:outline-none"
                  placeholder="Confirm Password"
                />
                <label
                  for="ConfirmPassword"
                  className="px-4 mb-1 absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-400 peer-focus:text-sm"
                >
                  Confirm Password
                </label>
                <span className="flex items-center mx-4">
                  <button
                    type="submit"
                    className=" focus:outline-none focus:shadow-outline"
                  >
                    <img src={check} alt=""></img>
                  </button>
                </span>
              </div>

              <div className="w-full h-10 mb-6 flex">
                <div class="relative w-full">
                  <div class="relative w-full h-10 flex items-center border border-solid rounded-lg">
                    <input
                      value={selectValue}
                      name="select"
                      id="select"
                      type="text"
                      className="peer px-4 h-full w-full rounded-lg placeholder-transparent focus:outline-none text-gray-500 appearance-none outline-none"
                      placeholder="How did you hear about us?"
                    />
                    <label
                      for="show_more"
                      className="cursor-pointer outline-none focus:outline-none px-4 mb-1 absolute left-0 -top-3.5 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-400 peer-focus:text-sm"
                    >
                      How did you hear about us?
                    </label>
                    <label
                      for="show_more"
                      className="items-center ml-6 cursor-pointer outline-none focus:outline-none  transition-all w-10"
                    >
                      <img src={selectLogo} alt="" />
                    </label>
                  </div>

                  <input
                    type="checkbox"
                    name="show_more"
                    id="show_more"
                    class="hidden peer"
                  />
                  <div class="absolute rounded shadow bg-white overflow-hidden hidden peer-checked:flex flex-col w-full border border-gray-200">
                    {options.map((element) => {
                      return (
                        <div
                          class="cursor-pointer group"
                          onClick={() => setSelectValue(element)}
                        >
                          <div class="block p-2 border-transparent text-gray-400 group-hover:bg-gray-100">
                            {element}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="h-10 w-full mb-4 flex justify-center">
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
