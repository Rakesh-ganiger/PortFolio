import React from "react";
import TextChange from "../TextChange"; // Assuming TextChange component is in your project
import avatarImg from "../../assets/2b50e03e-4947-47b3-8449-95a9aa9f5ecd.jpg"; // Assuming you have an avatar image

const Home = () => {
  return (
    <div
      id="Home"
      className="flex flex-col md:flex-row w-full h-screen justify-center items-center p-10 bg-slate-900 text-white"
    >
      {/* Left Column: Text and Resume Button */}
      <div className="flex flex-col md:flex-row items-center md:items-start w-full h-screen p-10 md:p-20 md:mt-[20%]">
        {/* Text Section */}
        <div className="flex flex-col items-center md:items-start md:w-1/2 space-y-4 text-center md:text-left md:ml-4">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight md:-ml-[10%]">
            <TextChange />
          </h1>
          <p className="text-lg md:text-xl mt-4 px-2 md:px-2 md:mt-1 md:-ml-[11%]">
            Recently graduated student seeking opportunities as a Frontend or
            Java Developer. With solid skills in front-end technologies, Java,
            and a strong problem-solving mindset, I'm eager to contribute to
            impactful projects and grow in a dynamic team.
          </p>
          <a href="#Projects">
            <button className="mt-3 py-3 px-8 text-lg font-sans rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white transition duration-300 md:-ml-14">
              My Projects...!!
            </button>
          </a>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0 md:mr-8">
          <img
            className="rounded-full border-4  shadow-lg border-cyan-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 hover:border-cyan-500 animate-pulse md:w-1/2"
            src={avatarImg}
            alt="Avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
