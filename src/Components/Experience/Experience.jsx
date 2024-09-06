// import React from 'react';
// import {FaCss3,FaFigma,FaHtml5,FaJs,FaReact,FaGit,FaJava,FaGithub } from "react-icons/fa"
// import { SiMongodb, SiTailwindcss, SiMysql,} from 'react-icons/si';


// const Experience = () => {
//   return (
//     <div id="Experience" className='p-10 md:p-24 '>
//         <h1 className='text-2xl md:text-4xl  text-white font-bold '>Skills</h1>
        
//         <div className='flex flex-wrap items-center justify-around'>
//             <div className='flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10'>
//             <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
//                 <FaHtml5 color="#E34F26" size={80}/>
//             </span>
//             <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
//                 <FaCss3 color="#1572b6" size={80}/>
//             </span>
//             <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
//                 <FaFigma color="#F24E1E" size={80}/>
//             </span>
//             <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
//                 <FaJs color="#F7DF1E" size={80}/>
//             </span>
//             <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
//                 <FaReact color="#61DAFB" size={80}/>
//             </span>
//             <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
//                 <SiMongodb color="#47A248" size={80}/>
//             </span>
//             <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
//                 <FaGit color="#F05032" size={80}/>
//             </span><span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
//                 <SiTailwindcss color="#06B6D4 " size={80}/>
//             </span>
//             <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
//                 <SiMysql color="#61DAFB" size={80}/>
//             </span>
//             <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
//                 <FaGithub color="#181717" size={80}/>
//             </span>
//             <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
//                 <FaJava color="#007396" size={80}/>
//             </span>

//             </div>
            
//         </div>

//     </div>
//   )
// }

// export default Experience;





import React from 'react';
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact, FaGit, FaJava, FaGithub } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiMysql } from 'react-icons/si';

const skills = [
  { icon: <FaHtml5 color="#E34F26" size={80} />, name: "HTML5" },
  { icon: <FaCss3 color="#1572b6" size={80} />, name: "CSS3" },
  { icon: <FaFigma color="#F24E1E" size={80} />, name: "Figma" },
  { icon: <FaJs color="#F7DF1E" size={80} />, name: "JavaScript" },
  { icon: <FaReact color="#61DAFB" size={80} />, name: "React" },
  { icon: <SiMongodb color="#47A248" size={80} />, name: "MongoDB" },
  { icon: <FaGit color="#F05032" size={80} />, name: "Git" },
  { icon: <SiTailwindcss color="#06B6D4" size={80} />, name: "Tailwind CSS" },
  { icon: <SiMysql color="#00758F" size={80} />, name: "MySQL" },
  { icon: <FaGithub color="#181717" size={80} />, name: "GitHub" },
  { icon: <FaJava color="#007396" size={80} />, name: "Java" },
];

const Experience = () => {
  return (
    <div id="Experience" className='p-10 md:p-24'>
      <h1 className='text-2xl md:text-4xl text-white font-bold mb-8 hover:text-blue-400'>Skills</h1>
      <div className='flex flex-wrap  items-center justify-center gap-8'>
        {skills.map((skill, index) => (
          <div
            key={index}
            className='flex flex-col items-center p-4 bg-zinc-950 rounded-2xl shadow-lg transition-transform transform  hover:scale-125 hover:rotate-3 hover:rotate-y-180 hover:shadow-2xl hover:shadow-indigo-500 duration-500 perspective-100'
          >
            <span className='p-3 flex items-center justify-center'>
              {skill.icon}
            </span>
            <p className='mt-2 text-white font-bold text-center'>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;











// import React from 'react';
// import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact, FaGit, FaJava, FaGithub } from "react-icons/fa";
// import { SiMongodb, SiTailwindcss, SiMysql } from 'react-icons/si';

// const Experience = () => {
//   return (
//     <div id="Experience" className='p-10 md:p-24'>
//       <h1 className="text-2xl md:text-4xl text-white font-bold inline-block pb-2 border-b-4 border-transparent hover:border-yellow-500 transition-all duration-300 hover:text-blue-400">
//           Skills 
//       </h1>
//       <div className='flex flex-wrap justify-center gap-8'>
//         <div className='flex flex-wrap justify-center gap-8 p-10'>
//           {/* Skill Icon with Name */}
//           <div className="skill-item flex flex-col items-center">
//             <span className="skill-icon p-3 bg-zinc-950 flex items-center justify-center rounded-2xl shadow-lg transition-transform transform hover:scale-125 hover:rotate-3 hover:rotate-y-180 hover:shadow-2xl hover:shadow-indigo-500 duration-500 perspective-1000">
//               <FaHtml5 color="#E34F26" size={100} />
//             </span>
//             <p className="skill-name mt-4 text-white font-bold text-center transition hover:text-indigo-500">HTML5</p>
//           </div>

//           <div className="skill-item flex flex-col items-center">
//             <span className="skill-icon p-3 bg-zinc-950 flex items-center justify-center rounded-2xl shadow-lg transition-transform transform hover:scale-125 hover:rotate-3 hover:rotate-y-180 hover:shadow-2xl hover:shadow-indigo-500 duration-500 perspective-1000">
//               <FaCss3 color="#1572b6" size={100} />
//             </span>
//             <p className="skill-name mt-4 text-white font-bold text-center transition hover:text-indigo-500">CSS3</p>
//           </div>

//           <div className="skill-item flex flex-col items-center">
//             <span className="skill-icon p-3 bg-zinc-950 flex items-center justify-center rounded-2xl shadow-lg transition-transform transform hover:scale-125 hover:rotate-3 hover:rotate-y-180 hover:shadow-2xl hover:shadow-indigo-500 duration-500 perspective-1000">
//               <FaFigma color="#F24E1E" size={100} />
//             </span>
//             <p className="skill-name mt-4 text-white font-bold text-center transition hover:text-indigo-500">Figma</p>
//           </div>

//           <div className="skill-item flex flex-col items-center">
//             <span className="skill-icon p-3 bg-zinc-950 flex items-center justify-center rounded-2xl shadow-lg transition-transform transform hover:scale-125 hover:rotate-3 hover:rotate-y-180 hover:shadow-2xl hover:shadow-indigo-500 duration-500 perspective-1000">
//               <FaJs color="#F7DF1E" size={100} />
//             </span>
//             <p className="skill-name mt-4 text-white font-bold text-center transition hover:text-indigo-500">JavaScript</p>
//           </div>

//           <div className="skill-item flex flex-col items-center">
//             <span className="skill-icon p-3 bg-zinc-950 flex items-center justify-center rounded-2xl shadow-lg transition-transform transform hover:scale-125 hover:rotate-3 hover:rotate-y-180 hover:shadow-2xl hover:shadow-indigo-500 duration-500 perspective-1000">
//               <FaReact color="#61DAFB" size={100} />
//             </span>
//             <p className="skill-name mt-4 text-white font-bold text-center transition hover:text-indigo-500">React</p>
//           </div>

//           <div className="skill-item flex flex-col items-center">
//             <span className="skill-icon p-3 bg-zinc-950 flex items-center justify-center rounded-2xl shadow-lg transition-transform transform hover:scale-125 hover:rotate-3 hover:rotate-y-180 hover:shadow-2xl hover:shadow-indigo-500 duration-500 perspective-1000">
//               <SiMongodb color="#47A248" size={100} />
//             </span>
//             <p className="skill-name mt-4 text-white font-bold text-center transition hover:text-indigo-500">MongoDB</p>
//           </div>

//           <div className="skill-item flex flex-col items-center">
//             <span className="skill-icon p-3 bg-zinc-950 flex items-center justify-center rounded-2xl shadow-lg transition-transform transform hover:scale-125 hover:rotate-3 hover:rotate-y-180 hover:shadow-2xl hover:shadow-indigo-500 duration-500 perspective-1000">
//               <FaGit color="#F05032" size={100} />
//             </span>
//             <p className="skill-name mt-4 text-white font-bold text-center transition hover:text-indigo-500">Git</p>
//           </div>

//           <div className="skill-item flex flex-col items-center">
//             <span className="skill-icon p-3 bg-zinc-950 flex items-center justify-center rounded-2xl shadow-lg transition-transform transform hover:scale-125 hover:rotate-3 hover:rotate-y-180 hover:shadow-2xl hover:shadow-indigo-500 duration-500 perspective-1000">
//               <SiTailwindcss color="#06B6D4" size={100} />
//             </span>
//             <p className="skill-name mt-4 text-white font-bold text-center transition hover:text-indigo-500">Tailwind CSS</p>
//           </div>

//           <div className="skill-item flex flex-col items-center">
//             <span className="skill-icon p-3 bg-zinc-950 flex items-center justify-center rounded-2xl shadow-lg transition-transform transform hover:scale-125 hover:rotate-3 hover:rotate-y-180 hover:shadow-2xl hover:shadow-indigo-500 duration-500 perspective-1000">
//               <SiMysql color="#00758F" size={100} />
//             </span>
//             <p className="skill-name mt-4 text-white font-bold text-center transition hover:text-indigo-500">MySQL</p>
//           </div>

//           <div className="skill-item flex flex-col items-center">
//             <span className="skill-icon p-3 bg-zinc-950 flex items-center justify-center rounded-2xl shadow-lg transition-transform transform hover:scale-125 hover:rotate-3 hover:rotate-y-180 hover:shadow-2xl hover:shadow-indigo-500 duration-500 perspective-1000">
//               <FaGithub color="#181717" size={100} />
//             </span>
//             <p className="skill-name mt-4 text-white font-bold text-center transition hover:text-indigo-500">GitHub</p>
//           </div>

//           <div className="skill-item flex flex-col items-center">
//             <span className="skill-icon p-3 bg-zinc-950 flex items-center justify-center rounded-2xl shadow-lg transition-transform transform hover:scale-125 hover:rotate-3 hover:rotate-y-180 hover:shadow-2xl hover:shadow-indigo-500 duration-500 perspective-1000">
//               <FaJava color="#007396" size={100} />
//             </span>
//             <p className="skill-name mt-4 text-white font-bold text-center transition hover:text-indigo-500">Java</p>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Experience;
