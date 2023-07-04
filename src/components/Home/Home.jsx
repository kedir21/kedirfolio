import React, { useState, useEffect } from "react";
import "./Home.css"; // Import the CSS file for styling

const LandingPage = () => {
  const [subtitle, setSubtitle] = useState("Frontend Developer");

  useEffect(() => {
    const subtitleOptions = [
      "Front-end Developer",
      "Full stack Developer",
      "Creative Thinker",
      "Problem Solver"
    ];

    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * subtitleOptions.length);
      setSubtitle(subtitleOptions[randomIndex]);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="landing-page w-full md:ml-9" id="home">
      <div className="">
        <h1 className=" text-8xl">Kedir <span className="span1">Nasir</span></h1>
        <h2 className="text-3xl"> {subtitle}</h2>
        <br />
        <a className="text-white-500 border border-blue-500 hover:bg-[#213555] hover:text-white active:bg-[#213555] font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" href="./FullStackDeveloperResume.pdf"  target="_blank">
         Download Resume
        </a>
      </div>
    </div>
  );
};

export default LandingPage;
