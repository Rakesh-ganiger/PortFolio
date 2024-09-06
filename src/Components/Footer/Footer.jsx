import React, { useRef } from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
const Footer = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_pxghp5k', 'template_i5oyi8g', form.current, {
        publicKey: '91hLOO9wWGwD4dTYi',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert("Email sent !..")
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <>
    <div id="ContactForm" className=" text-white p-8 md:p-16 rounded-lg shadow-md max-w-4xl mx-auto mb-10">
      <h2 className="text-2xl md:text-4xl font-bold text-center pb-6 text-blue-400">Contact me</h2>

      {/* Form Structure */}
      <form className="space-y-4" ref={form} onSubmit={sendEmail}>
        {/* Name Input */}
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="name" >Your Name</label>
          <input 
            type="text" 
            id="name" 
            className="w-full p-3 border border-gray-300 rounded-lg text-white bg-slate-900" 
            placeholder="Enter your name" 
            name="your_name"
          />
        </div>

        {/* Email Input */}
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="email">Your Email</label>
          <input 
            type="email" 
            id="email" 
            className="w-full p-3 border border-gray-300 rounded-lg text-white bg-slate-900" 
            placeholder="Enter your email" 
            name='your-email'
          />
        </div>

        {/* Message Textarea */}
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="message">Your Message</label>
          <textarea 
            id="message" 
            rows="5" 
            className="w-full p-3 border border-gray-300 rounded-lg text-white bg-slate-900" 
            placeholder="Write your message..." 
            name='message'
          />
        </div>

        {/* Submit Button */}
        <div className="text-center pt-4">
          <button 
            type="submit" 
            className="py-3 px-8 text-lg font-semibold rounded-full bg-[#465697] hover:bg-blue-700 transition-all duration-300">
            Submit
          </button>
        </div>
      </form>
    </div>
    <div id="Footer" className='flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center gap-5 '>
      <div>
        <h1 className='text-2xl md:text-6xl font-bold '>Contact</h1>
        <h3 className='text-sm md:text-2xl font-normal'>Feel free to reach out !..</h3>
      </div>
      <ul className='text-sm md:text-xl'>
        {/* Email */}
        <li className='flex gap-2 items-center'>
          <MdOutlineEmail size={20} />
          <a 
            href="mailto:rakeshganiger64@gmail.com" 
            className="hover:underline hover:text-gray-200"
          >
            rakeshganiger64@gmail.com
          </a>
        </li>
        {/* LinkedIn */}
        <li className='flex gap-2 mt-2 items-center'>
          <CiLinkedin size={20} />
          <a 
            href="https://www.linkedin.com/in/rakesh-ganiger-2ba44825b" // replace 'username' with your LinkedIn profile username
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:underline hover:text-gray-200"
          >
            Linkedin.com/username
          </a>
        </li>
        {/* GitHub */}
        <li className='flex gap-2 mt-2 items-center'>
          <FaGithub size={20} />
          <a 
            href="https://github.com/Rakesh-ganiger" // replace 'username' with your GitHub username
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:underline hover:text-gray-200"
          >
            GitHub/username
          </a>
        </li>
      </ul>
    </div>
    


    </>
  );
}

export default Footer;




// import React from 'react'
// import {MdOutlineEmail } from "react-icons/md";
// import {CiLinkedin} from "react-icons/ci";
// import { FaGithub } from 'react-icons/fa';

// const Footer = () => {
//   return (
//     <div id="Footer" className='flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center gap-5 '>
//         <div>
//             <h1 className='text-2xl md:text-6xl font-bold'> Contact</h1>
//             <h3 className='text-sm md:text-2xl font-normal'> Feel free to reach out !..</h3>
//         </div>
//         <ul className='text-sm md:text-xl'>
//             <li className='flex gap-1 items-center'><MdOutlineEmail size={20}/>rakeshganiger64@gmail.com</li>
//             <li className='flex gap-1 mt-2 items-center'><CiLinkedin size={20}/>Linkedin.com/username</li>
//             <li className='flex gap-1 mt-2 items-center'><FaGithub size={20}/>GitHub/username</li>
//         </ul>
//     </div>
//   ) 
// }

// export default Footer



// import React from 'react';
// import { MdOutlineEmail } from "react-icons/md";
// import { CiLinkedin } from "react-icons/ci";
// import { FaGithub } from 'react-icons/fa';

// const Footer = () => {
//   return (
    // <div id="Footer" className='flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center gap-5 '>
    //   <div>
    //     <h1 className='text-2xl md:text-6xl font-bold'>Contact</h1>
    //     <h3 className='text-sm md:text-2xl font-normal'>Feel free to reach out!..</h3>
    //   </div>
    //   <ul className='text-sm md:text-xl'>
    //     {/* Email */}
    //     <li className='flex gap-2 items-center'>
    //       <MdOutlineEmail size={20} />
    //       <a 
    //         href="mailto:rakeshganiger64@gmail.com" 
    //         className="hover:underline hover:text-gray-200"
    //       >
    //         rakeshganiger64@gmail.com
    //       </a>
    //     </li>
    //     {/* LinkedIn */}
    //     <li className='flex gap-2 mt-2 items-center'>
    //       <CiLinkedin size={20} />
    //       <a 
    //         href="https://www.linkedin.com/in/rakesh-ganiger-2ba44825b" // replace 'username' with your LinkedIn profile username
    //         target="_blank" 
    //         rel="noopener noreferrer" 
    //         className="hover:underline hover:text-gray-200"
    //       >
    //         Linkedin.com/username
    //       </a>
    //     </li>
    //     {/* GitHub */}
    //     <li className='flex gap-2 mt-2 items-center'>
    //       <FaGithub size={20} />
    //       <a 
    //         href="https://github.com/Rakesh-ganiger" // replace 'username' with your GitHub username
    //         target="_blank" 
    //         rel="noopener noreferrer" 
    //         className="hover:underline hover:text-gray-200"
    //       >
    //         GitHub/username
    //       </a>
    //     </li>
    //   </ul>
    // </div>
//   );
// };

// export default Footer;
