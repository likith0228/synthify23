import React, { useState } from "react";
import { IoSkullOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Signup = () => {
  const [state, setState] = useState("login");

  return (
    <>
      <header className="header bg-zinc-950">
        <div className="logo flex gap-[1vw] items-center">
          <IoSkullOutline className="h-full pb-[1.2vw]" />
          <div className="text-[2vw] pb-[1.3vw]">
            <Link to="/">Synthify</Link>
          </div>
        </div>
        <nav>
          <ul className="flex justify-around w-[30vw]">
            <li>
              <a href="#main">Main</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <button className="get-started bg-zinc-300 rounded-3xl">
          <Link to="/signup" className=" text-black font-bold">
            Get Started
          </Link>
        </button>
      </header>{" "}
      <div className="bg-zinc-950 min-h-[80vh] flex justify-center items-center">
        <div className="bg-gradient-to-br from-zinc-900 to-zinc-700 p-8 rounded shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold mb-4">{state}</h1>
          <div className="mb-4 text-black">
            {state === "signup" && (
              <input
                className="w-full border rounded py-2 px-3 mb-2"
                type="text"
                placeholder="Your Name"
                name="name"
                required
              />
            )}
            <input
              className="w-full border rounded py-2 px-3 mb-2"
              type="email"
              placeholder="Your Email"
              name="email"
              required
            />
            <input
              className="w-full border rounded py-2 px-3 mb-2"
              type="password"
              placeholder="Password"
              name="password"
              required
            />
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
            Continue
          </button>
          {state === "signup" ? (
            <p className="mt-4 text-sm">
              Already have an account?
              <span
                className="text-blue-500 cursor-pointer ml-1"
                onClick={() => setState("login")}
              >
                Login
              </span>
            </p>
          ) : (
            <p className="mt-4 text-sm">
              Create an Account?
              <span
                className="text-blue-500 cursor-pointer ml-1"
                onClick={() => setState("signup")}
              >
                Click here
              </span>
            </p>
          )}
          {state === "signup" && (
            <div className="mt-4">
              <input type="checkbox" id="agree" className="mr-2" />
              <label htmlFor="agree" className="text-sm">
                By continuing, I agree to the terms of use & privacy policy
              </label>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Signup;
