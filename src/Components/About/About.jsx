// import React from "react";
// // import img from "../../assets/2b50e03e-4947-47b3-8449-95a9aa9f5ecd.jpg";
// import img from "../../assets/98e7e008-90e0-4dc5-86d7-30224efeeec9.jpg";
// import { IoArrowForward } from "react-icons/io5";

// const About = () => {
//   return (
//     <div
//       id="About"
//       className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl  mx-0 md:mx-20 bg-opacity-30 rounded-lg p-10"
//     >
//       <div>
//         <h2 className="text-2xl md:text-4xl text-white font-bold inline-block pb-2  transition-all duration-300 hover:text-blue-400">
//           About
//         </h2>
//         <br />

//         <div className="md:flex flex-wrap flex-col md:flex-row gap-6 items-center">
//           {/* <img className="md:h-60 rounded-full border-4 shadow-lg transition-all duration-300 hover:scale-105 border-blue-500" src={img} alt="" /> */}

//           <ul>
//             <div className="flex gap-2 py-4">
//               <IoArrowForward size={30} className="mt-1" />
//               <span className="w-96">
//                 <h1 className="text-xl md:text-2xl font-semibold leading-normal">
//                   Front End Developer
//                 </h1>
//                 <p className="text-sm md:text-md leading-tight ">
//                   Passionate about creating responsive and visually appealing
//                   user interfaces using React, HTML5, CSS3, and JavaScript.
//                   Skilled in developing dynamic web applications with modern
//                   frontend tools like Tailwind CSS. Committed to improving user
//                   experience through optimized, scalable, and interactive
//                   designs.
//                 </p>
//               </span>
//             </div>

//             <div className="flex gap-2 py-4">
//               <IoArrowForward size={30} className="mt-1" />
//               <span className="w-96">
//                 <h1 className="text-xl md:text-2xl font-semibold leading-normal">
//                   Java Developer
//                 </h1>
//                 <p className="text-sm md:text-md leading-tight ">
//                   Strong foundation in Java programming, with experience in
//                   building robust backend systems. Familiar with OOP principles,
//                   data structures, and algorithms. Eager to contribute to
//                   backend development tasks, ensuring efficient application
//                   performance and smooth integration with frontend components.
//                 </p>
//               </span>
//             </div>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

import React from "react";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="About"
      className="text-white flex flex-col items-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-10"
    >
      {/* About Header */}
      <h2 className="text-3xl md:text-5xl font-bold pb-4 text-center transition-all duration-300 hover:text-blue-400">
        About
      </h2>

      {/* Content Section */}
      <div className="flex flex-col gap-6 text-center md:text-left max-w-4xl">
        {/* Web Developer Section */}
        <div className="flex items-start gap-4">
          <IoArrowForward size={30} className="mt-1 text-blue-400" />
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold leading-normal">
              Web Developer
            </h1>
            <p className="text-sm md:text-lg leading-tight text-gray-300">
              Passionate about crafting responsive and visually dynamic user
              interfaces using modern technologies like
              <span className="text-blue-400 font-semibold">
                {" "}
                React, Tailwind CSS, and JavaScript
              </span>
              . Experienced in building full-stack applications with
              <span className="text-blue-400 font-semibold">
                {" "}
                Node.js and Express.js
              </span>
              , ensuring seamless API integration and efficient backend
              processing. Proficient in optimizing performance, implementing
              state management with{" "}
              <span className="text-blue-400 font-semibold">Redux</span>, and
              enhancing application scalability through component-driven
              architecture and microservices.
            </p>
          </div>
        </div>

        {/* Java Developer Section */}
        <div className="flex items-start gap-4">
          <IoArrowForward size={30} className="mt-1 text-blue-400" />
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold leading-normal">
              Java Developer
            </h1>
            <p className="text-sm md:text-lg leading-tight text-gray-300">
              Proficient in{" "}
              <span className="text-blue-400 font-semibold">Java</span> and
              object-oriented design. Strong foundation in{" "}
              <span className="text-blue-400 font-semibold">
                data structures, algorithms, and software architecture
              </span>
              . Focused on building high-performance, scalable applications with
              seamless frontend integration, leveraging design patterns and
              efficient memory management.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
