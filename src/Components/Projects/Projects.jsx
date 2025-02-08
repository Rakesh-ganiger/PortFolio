import React from "react";

import { projects } from "../../data/Projects.js";

// Mapping skill names to icon URLs
const skillsIcons = {
  HTML: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
  CSS: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
  JavaScript:
    "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  "React.js":
    "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  ReactJs: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  NodeJS:
    "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
  "Node.js":
    "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
  ExpressJS:
    "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
  "Express.js":
    "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
  MongoDB: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
  TailwindCSS:
    "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  DaisyUI: "https://avatars.githubusercontent.com/u/67109815?s=200&v=4",
  Firebase:
    "https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg",
  TMDB: "https://upload.wikimedia.org/wikipedia/commons/3/3a/The_Movie_Database_%28TMDb%29_logo.svg",

  Redux: "https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png",
  "Socket.io":
    "https://upload.wikimedia.org/wikipedia/commons/9/96/Socket-io.svg",
};

const container =
  "bg-gradient-to-t from-slate-950 to-slate-900 text-gray-100 py-20 lg:px-10 px-5";
const wrapper = "flex flex-col justify-center items-center gap-6";
const title = "text-3xl lg:text-4xl font-bold text-amber-500";
const subTitle = "lg:text-2xl text-xl text-center";
const projectContainer =
  "flex flex-wrap gap-12 md:grid grid-cols-2 lg:grid-cols-3 grid-rows-auto";
const projectWrapper =
  "bg-gray-950 flex flex-col gap-6 py-10 px-7 rounded-lg border border-cyan-800 duration-500 shadow-md hover:shadow-cyan-500";
const imgWrapper =
  "bg-gradient-to-l from-amber-600 to-lime-600 rounded p-px hover:scale-105 duration-500";
// Set a fixed height for project images; object-cover ensures uniform display.
const projectImgStyle = "rounded h-56 w-full object-cover";
const nameDateWrapper = "flex flex-col gap-1";
const nameStyle = "text-amber-600 lg:text-2xl text-xl font-semibold";
const skillWrapper = "flex flex-wrap gap-2";
// Removed background gradient from skills; now just simple padding.
const skillStyle = "px-2 py-1 text-sm text-gray-950 rounded";
const btnWrapper = "flex justify-between gap-4";
const btnStyle =
  "bg-gradient-to-r from-cyan-500 to-blue-500 shadow hover:shadow-cyan-400 duration-500 rounded-lg text-gray-950 lg:py-3 lg:px-5 px-4 py-2";

function Projects() {
  // Helper function to shorten descriptions
  const getShortDesc = (desc, maxLength = 150) =>
    desc.length > maxLength ? desc.substring(0, maxLength) + "..." : desc;

  return (
    <div id="Projects" name="projects" className={container}>
      <div className={wrapper}>
        <div className={title}>Projects</div>
        <div className={subTitle}>
          Check out some of the projects I have worked on.
        </div>
        <div className={projectContainer}>
          {projects.map((item, index) => (
            <div className={projectWrapper} key={index}>
              <div className={imgWrapper}>
                <img
                  className={projectImgStyle}
                  src={item.img}
                  alt={item.title}
                />
              </div>
              <div className={nameDateWrapper}>
                <div className={nameStyle}>{item.title}</div>
              </div>
              {/* Render skills as icons */}
              <div className={skillWrapper}>
                {item.skills.map((skill, index) => {
                  const iconUrl = skillsIcons[skill] || null;
                  return (
                    <div className={skillStyle} key={index}>
                      {iconUrl ? (
                        <img
                          src={iconUrl}
                          alt={skill}
                          title={skill}
                          className="h-5 w-auto"
                          onError={(e) => {
                            e.target.onerror = null; // Prevent infinite loop if fallback fails
                            e.target.src = fallbackIcon;
                          }}
                        />
                      ) : (
                        skill
                      )}
                    </div>
                  );
                })}
              </div>
              {/* Display a shortened description */}
              <p className="text-sm text-gray-300">
                {getShortDesc(item.desc, 150)}
              </p>
              <div className={btnWrapper}>
                <button className={btnStyle}>
                  <a href={item.live} target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                </button>
                <button className={btnStyle}>
                  <a
                    href={item.code || item.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github Repo
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
