
// import React from "react";
// import avatarImg from "../../assets/98e7e008-90e0-4dc5-86d7-30224efeeec9.jpg";
// import TextChange from "../TextChange";
// import resume from "../../assets/Rakesh_107.pdf";

// const Home = () => {
//   return (
//     <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
//       <div className="md:w-2/4 md:pt-10">
//         <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
//           <TextChange />
//         </h1>
//         <p className="text-sm md:text-lg flex tracking-tight mt-2">Recently graduated student seeking opportunities as a Frontend or Java Developer. With solid skills in front-end technologies, Java, and a strong problem-solving mindset, I'm eager to contribute to impactful projects and grow in a dynamic team."
//         </p>
//         <a 
//           href={resume} // Provide the correct path to your resume file
//           download // This attribute will trigger the download
//         >
//       <button className="mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
//         Resume
//       </button>
//       </a>

//       </div>
//       <div>
//         <img className="md:h-80 rounded-full  border-4 shadow-lg border-blue-500 
//                     transition-all duration-300 hover:scale-105 hover:shadow-2xl 
//                     hover:shadow-blue-400/50 hover:border-blue-400 
//                     animate-pulse" src={avatarImg} alt="" />
//       </div>
//     </div>
//   );
// };

// export default Home;


import React from "react";
// import avatarImg from "../../assets/98e7e008-90e0-4dc5-86d7-30224efeeec9.jpg";
import TextChange from "../TextChange";
import resume from "../../assets/Rakesh_107.pdf";
import avatarImg from "../../assets/2b50e03e-4947-47b3-8449-95a9aa9f5ecd.jpg";

const Home = () => {
  return (
    <div className="text-white flex flex-col md:flex-row w-full h-screen justify-between items-center p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 flex flex-col items-center md:items-start">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter text-center md:text-left">
          <TextChange />
        </h1>
        <p className="text-sm md:text-lg flex tracking-tight mt-2 text-center md:text-left">
          Recently graduated student seeking opportunities as a Frontend or Java Developer. With solid skills in front-end technologies, Java, and a strong problem-solving mindset, I'm eager to contribute to impactful projects and grow in a dynamic team.
        </p>
        <a 
          href={resume} 
          download 
        >
          <button className="mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
            Resume
          </button>
        </a>
      </div>
      <div className="w-full md:w-2/4 flex justify-center items-center mt-5  md:mt-0">
        <img 
          className="w-120 max-w-xs md:max-w-md md:h-80 rounded-full border-4 shadow-lg border-blue-500 
                     transition-all duration-300 hover:scale-105 hover:shadow-2xl 
                     hover:shadow-blue-400/50 hover:border-blue-400 
                     object-cover md:ml:0" 
          src={avatarImg} 
          alt="Avatar" 
        />
      </div>
    </div>
  );
};

export default Home;

