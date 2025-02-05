import DevTinder from "../assets/DevTinder.jpg";
import MernChat from "../assets/MernChat.png"
import netflix from "../assets/netflix.png"
import antiMoney from "../assets/antiMoney.jpg"
import portfolio from "../assets/portfolio.png"

export const projects = [
  {
    id: 0,
    img: DevTinder,
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "ReactJs",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
      "TailwindCSS",
      "DaisyUI"
    ],
    title: "DevTinder",
    desc: "DEV - TINDER is a matchmaking platform designed to connect developers based on their skills, interests, and project goals. It features a secure authentication system to ensure user privacy and incorporates advanced search filters for finding matches based on tech stack and preferences. The platform offers a seamless and responsive user experience, making collaboration and networking among developers more efficient and engaging.",
    live: "https://wanderer-hp0k.onrender.com/listings/",
    code: "https://github.com/Rakesh-ganiger/devTinder_web",
  },
  {
    id: 1,
    img: netflix,
    skills: ["React.js", "JavaScript", "CSS", "TailwindCSS", "Firebase", "TMDB","Redux" ],
    title: "NetflixGPT",
    desc: "NetflixGPT is an AI-powered movie search platform that integrates TMDB for smart recommendations and real-time data retrieval. It features multilingual support, Firebase hosting, and a responsive UI for a seamless user experience. With intuitive navigation, it ensures effortless movie discovery while providing personalized suggestions based on user preferences. The platform continuously evolves, offering dynamic updates and an engaging interface for movie lovers around the world..",
    live: "https://password-generator-five-theta.vercel.app/",
    code: "https://github.com/Rakesh-ganiger/netflix-gpt",
  },
  {
    id: 2,
    img: MernChat,
    skills: ["React.js", "TailwindCSS","Node.js","Express.js","Socket.io","MongoDB"],
    title: "Mern-Chat-Application",
    desc: "The Real-Time MERN Chat Application is a full-stack messaging platform built using MongoDB, Express, React, and Node.js. It enables seamless real-time communication with WebSocket integration, ensuring instant message delivery. The application features secure authentication, a responsive UI, and dynamic chat rooms for an engaging user experience. With efficient database management and scalable architecture, it supports smooth interactions.",
    live: "https://weather-report-sandy-iota.vercel.app/",
    github: "https://github.com/Rakesh-ganiger/chat-application",
  },

  {
    id: 3,
    img: antiMoney,
    skills: ["HTML", "CSS","JavaScript","React.js","TailwindCSS"],
    title: "User Management Dashboard",
    desc: "The User Management Dashboard is a React-based application that allows administrators to efficiently manage users. It enables adding new users, editing existing user details, and deleting users with a seamless and responsive interface. The dashboard features real-time updates, intuitive UI, and secure data handling, making user management effortless and efficient..",
    live: "https://usermanagementdashboardassignment.netlify.app/",
    github: "https://github.com/Rakesh-ganiger/User_Management_Dashboard",
  },

  {
    id: 4,
    img: portfolio,
    skills: ["HTML", "CSS", "JavaScript","React.js","TailwindCSS"],
    title: "React-Portfolio",
    desc: "The Portfolio is a React-based web application showcasing projects, skills, and achievements in a visually appealing and interactive way. It enables easy customization, responsive design, and seamless navigation. The portfolio highlights professional experience, personal projects, and contact information, making it an effective tool for personal branding and job opportunities.",
    live: "https://moonlit-mermaid-f60502.netlify.app",
    github: "https://github.com/Rakesh-ganiger/PortFolio",
  },
];
