import React from "react";
import avatarImg from "../../assets/rakesh-png.png"; // Ensure correct image path

const Home = () => {
  return (
    <div
      id="Home"
      className="flex flex-col md:flex-row w-full min-h-screen justify-center items-center px-6 md:px-10 bg-slate-900 text-white pt-24 md:pt-32"
    >
      {/* Left Column: Text and Resume Button */}
      <div className="flex flex-col md:flex-row items-center md:items-start w-full p-6 md:p-10">
        {/* Text Section */}
        <div className="flex flex-col items-center md:items-start md:w-1/2 space-y-4 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
            Hi, I'm Rakesh Ganiger
          </h1>
          <p className="text-lg md:text-xl mt-4 px-2 md:px-0">
            Recently graduated student seeking opportunities as a Frontend or
            Java Developer. With solid skills in front-end technologies, Java,
            and a strong problem-solving mindset, I'm eager to contribute to
            impactful projects and grow in a dynamic team.
          </p>
          <a href="#Projects">
            <button className="mt-3 py-3 px-8 text-lg font-sans rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white transition duration-300">
              My Projects...!!
            </button>
          </a>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-5/12 flex justify-center md:justify-end items-center mt-8 md:mt-0">
          <img
            className="rounded-full border-4 shadow-lg border-cyan-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 w-3/4 md:w-1/3 lg:w-1/2 xl:w-1/3"
            src={avatarImg}
            alt="Avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
