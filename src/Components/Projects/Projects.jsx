import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectCard1 from "./ProjectCard1";
import ProjectCard2 from "./ProjectCard2";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24  text-white ">
     <h1 className="text-2xl md:text-4xl text-white font-bold inline-block pb-2 border-b-4 border-transparent transition-all duration-300 hover:text-blue-400">
  Projects
</h1>

      <div className="py-12 px-8  flex justify-center flex-wrap gap-5">
        <ProjectCard
          title="Anti Money Laundering"
          main="Developed an Anti-Money Laundering (AML) system using Benford's Law to detect anomalies in bank account transactions."
        />
        <ProjectCard1
          title="Desktop Quiz Application"
          main="Developed a desktop quiz application using Java Swing to provide users with an interactive and engaging platform for quizzes and assessments."
        />
        <ProjectCard2
          title="Mern-Chat Application"
          main="Developed a real-time chat application using the MERN stack integrated with Socket.IO for instant messaging. The app supports room-based chats, user authentication with JWT, and stores messages in MongoDB."
        />
      </div>
    </div>
  );
};

export default Projects;





