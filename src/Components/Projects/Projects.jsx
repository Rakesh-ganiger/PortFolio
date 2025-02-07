// import ProjectCard from "./ProjectCard";
// import ProjectCard1 from "./ProjectCard1";
// import ProjectCard2 from "./ProjectCard2";

// const Projects = () => {
//   return (
//     <div id="Projects" className="p-10 md:p-24  text-white ">
//      <h1 className="text-2xl md:text-4xl font-bold inline-block pb-2 border-b-4 border-transparent transition-all duration-300 text-yellow-200">
//   Projects
// </h1>

//       <div className="py-12 px-8  flex justify-center flex-wrap gap-5">
//         <ProjectCard
//           title="Anti Money Laundering"
//           main="Developed an Anti-Money Laundering (AML) system using Benford's Law to detect anomalies in bank account transactions."
//         />
//         <ProjectCard1
//           title="Desktop Quiz Application"
//           main="Developed a desktop quiz application using Java Swing to provide users with an interactive and engaging platform for quizzes and assessments."
//         />
//         <ProjectCard2
//           title="Mern-Chat Application"
//           main="Developed a real-time chat application using the MERN stack integrated with Socket.IO for instant messaging. The app supports room-based chats, user authentication with JWT, and stores messages in MongoDB."
//         />
//       </div>
//     </div>
//   );
// };

// export default Projects;

import { projects } from "../../data/Projects.js";

const container =
  "bg-gradient-to-t from-slate-950 to-slate-900 text-gray-100 py-20 lg:px-10 px-5";
const wrapper = "flex flex-col justify-center items-center gap-6";
const title = "text-3xl lg:text-4xl font-bold text-amber-500";
const subTitle = "lg:text-2xl text-xl text-center";
const projectContainer =
  "flex flex-wrap gap-12 md:grid grid-cols-2 lg:grid-cols-3 grid-rows-auto";
const projectWrapper =
  "bg-gray-950 flex flex-col gap-6 py-10 px-7 rounded-lg border border-cyan-800  duration-500 shadow-md hover:shadow-cyan-500";
const imgWrapper =
  "bg-gradient-to-l from-amber-600 to-lime-600 rounded p-px hover:scale-105 duration-500";
const projectImgStyle = "rounded";
const nameDateWrapper = "flex flex-col gap-1";
const nameStyle = "text-amber-600 lg:text-2xl text-xl font-semibold";
const dateStyle = "text-gray-400 text-sm";
const skillWrapper = "flex flex-wrap gap-2";
const skillStyle =
  "px-3 py-1 text-sm text-gray-950 bg-gradient-to-l from-amber-600 to-lime-600 rounded-full";
const btnWrapper = "flex justify-between gap-4";
const btnSytle =
  "bg-gradient-to-r from-cyan-500 to-blue-500 shadow hover:shadow-cyan-400 duration-500 rounded-lg text-gray-950 lg:py-3 lg:px-5 px-4 py-2";

function Projects() {
  return (
    <div id="Projects" name="projects" className={container}>
      <div className={wrapper}>
        <div className={title}>Projects</div>
        <div className={subTitle}>
          check out some of the projects i have worked on.{" "}
        </div>
        <div className={projectContainer}>
          {projects.map((item, index) => {
            return (
              <div className={projectWrapper} key={index}>
                <div className={imgWrapper}>
                  <img className={projectImgStyle} src={item.img} alt="" />
                </div>
                <div className={skillWrapper}>
                  {item.skills.map((skill, index) => (
                    <div className={skillStyle} key={index}>
                      {" "}
                      {skill}{" "}
                    </div>
                  ))}
                </div>
                <div className={nameDateWrapper}>
                  <div className={nameStyle}>{item.title} </div>
                  <div className={dateStyle}>{item.date} </div>
                </div>
                <div className=""> {item.desc} </div>
                <div className={btnWrapper}>
                  <button className={btnSytle}>
                    {" "}
                    <a href={item.live} target="_blank">
                      Live Demo{" "}
                    </a>
                  </button>
                  <button className={btnSytle}>
                    {" "}
                    <a href={item.code} target="_blank">
                      Github Repo
                    </a>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
