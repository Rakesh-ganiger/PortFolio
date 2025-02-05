// import TextChange from "../TextChange";
//  import avatarImg from "../../assets/2b50e03e-4947-47b3-8449-95a9aa9f5ecd.jpg";

// const Home = () => {
//   const resume = "https://drive.google.com/file/d/1Dhuv-bEFCOUqmoHrMBlFYZsqMmutn1YS/view?usp=sharing";
//   return (
//     <div id="Home" className="text-white flex flex-col md:flex-row w-full h-screen justify-between items-center  p-10 md:p-10 m-auto">
      // <div className="md:w-2/4 md:pt-6 flex flex-col items-center md:items-start space-y-4">
      //   <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter text-center md:text-left md:p-[5%]">
      //     <TextChange />
      //   </h1>
      //   <p className="text-sm md:text-lg flex tracking-tight mt-2 text-center md:text-left md:px-[6%] md:-my-4">
      //     Recently graduated student seeking opportunities as a Frontend or Java Developer. With solid skills in front-end technologies, Java, and a strong problem-solving mindset, I'm eager to contribute to impactful projects and grow in a dynamic team.
      //   </p>
      //   <a href={resume} download="Rakesh_Resume.pdf">
      //     <button className="mt-3 -mb-30 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] md:m-6">
      //       Resume
      //     </button>
      //   </a>
      // </div>
//       <div className="w-full md:w-2/4 flex justify-center items-center h-auto">
//         <img 
//           className="md:h-80 rounded-full border-4 shadow-lg border-cyan-500
//                      transition-all duration-300 hover:scale-105 hover:shadow-2xl 
//                      hover:shadow-blue-500/50 hover:border-cyan-500 
//                      animate-pulse data-aos=fade-up-left data-aos-duration=1000 -mt-9 md:-mt-10"
//           src={avatarImg} 
//           alt="Avatar" 
//         /> 
//       </div>
//     </div>
//   );
// };

// export default Home;


import React from 'react';
import TextChange from "../TextChange"; // Assuming TextChange component is in your project
import avatarImg from "../../assets/2b50e03e-4947-47b3-8449-95a9aa9f5ecd.jpg"; // Assuming you have an avatar image

const Home = () => {
  const resume = "https://drive.google.com/file/d/1Dhuv-bEFCOUqmoHrMBlFYZsqMmutn1YS/view?usp=sharing";
  
  return (
    <div id="Home" className="flex flex-col md:flex-row w-full h-screen justify-center items-center p-10 bg-slate-900 text-white">
      {/* Left Column: Text and Resume Button */}
      <div className="flex flex-col md:flex-row items-center md:items-start w-full h-screen p-10 md:p-20 md:mt-[20%]">
  {/* Text Section */}
  <div className="flex flex-col items-center md:items-start md:w-1/2 space-y-4 text-center md:text-left md:ml-4">
    <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight md:-ml-[10%]">
      <TextChange />
    </h1>
    <p className="text-lg md:text-xl mt-4 px-2 md:px-2 md:mt-0 md:-ml-[10%]">
      Recently graduated student seeking opportunities as a Frontend or Java Developer. With solid skills in front-end technologies, Java, and a strong problem-solving mindset, I'm eager to contribute to impactful projects and grow in a dynamic team.
    </p>
    <a href={resume} target="_blank" rel="noopener noreferrer">
      <button className="mt-6 py-3 px-8 text-lg font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 transition duration-300 md:-ml-[25%]">
        Download Resume
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
