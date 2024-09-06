// import React from "react";
// import bannerImg from "../../assets/antiMoney.jpg";

// const ProjectCard = ({ title, main }) => {
//   return (
//     <div className="p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl">
//       <img className="w-full h-40 md:h-48 object-cover rounded-t-2xl transition-transform transform hover:scale-105 hover:shadow-2xl" src={bannerImg} alt="" />
//       <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
//         {title}
//       </h3>
//       <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>
//       <span className="block">Utilized PHP for data processing and HTML, CSS, and JavaScript for a user-friendly interface, enabling efficient identification of suspicious activities.</span>
//       <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4">
//         {/* Single "Source Code" Button */}
//         <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg  md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
//           Source Code
//         </button>
        
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;
import React from "react";
import bannerImg from "../../assets/antiMoney.jpg";

const ProjectCard = ({ title, main,}) => {
  return (
    <div className="p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl">
      <div className="relative overflow-hidden rounded-t-2xl">
        <img
          className="w-full h-60 md:h-48 object-cover rounded-t-2xl transition-transform transform hover:scale-105 hover:shadow-2xl"
          src={bannerImg}
          alt=""
        />
      </div>
      <div className="p-4 flex flex-col h-full">
        <h3 className="text-xl md:text-2xl font-bold leading-normal mb-2">
          {title}
        </h3>
        <p className="text-sm md:text-md leading-tight mb-4">{main}</p>
        <p className="text-sm md:text-md leading-tight mb-4">
          <span className="block">Technologies:</span>
          <span className="block">Utilized PHP for data processing and HTML, CSS, and JavaScript for a user-friendly interface, enabling efficient identification of suspicious activities.</span>
          
        </p>
        <div className="flex gap-2 md:gap-4">
          {/* Single "Source Code" Button */}
          <button className="text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
            Source Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;