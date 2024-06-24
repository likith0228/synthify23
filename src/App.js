import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Signup from "./Signup";
import { IoSkullOutline } from "react-icons/io5";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {" "}
              <div className="landing-page w-screen  h-screen">
                <header className="header">
                  <div className="logo flex gap-[1vw] items-center">
                    <IoSkullOutline className="h-full pb-[1.2vw]" />
                    <div className="text-[2vw] pb-[1.3vw]">Synthify</div>
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
                </header>
                <main className="main-content font-['FoundersGrotesk'] tracking-wide ">
                  <h1 className="text-[5vw]">
                    THE BEST AI TOOL FOR <br />
                    FOR PHOTO MUSIC VIDEO AND CODE GEN
                  </h1>
                  <p className="text-[3vw] text-zinc-400">
                    Create content using AI 10x faster
                  </p>
                  <div className="start-generating bg-[#A8FF35F5] font-bold rounded-3xl px-[2vw] py-[1vw] mt-[2vw] text-[1.8vw] text-black">
                    <span className="glow rounded-3xl"></span>
                    Start Generating For Free
                  </div>
                </main>
              </div>
            </>
          }
        />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
