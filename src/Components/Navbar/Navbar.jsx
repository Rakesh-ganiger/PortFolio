// import { RiCloseLine, RiMenu2Line } from '@remixicon/react';
// import { useState } from 'react';

// const Navbar = () => {
//     const [menuOpen, setMenuOpen] = useState(false);
    
//     return (
//         <div className="flex flex-wrap justify-between md:items-center bg-gray-950 bg-opacity-20 text-white px-10 pt-6 md:px-20 relative">
//             <span className='text-xl font-bold tracking-wide md:mt-0 '>
//                 Portfolio
//             </span>
//             <ul className={`mx-24 py-2 mt-3 font-sans md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6 transition-all duration-300 ${menuOpen ? "block" : "hidden"} md:block`}>
           
//                 <a href="#About">
//                     <li className='text-xl transition-all duration-300 p-1 md:p-0 '>
//                         About 
//                     </li>
//                 </a>
//                 <a href="#Experience">
//                     <li className='text-xl transition-all duration-300 p-1 md:p-0 '>
//                         Skills
//                     </li>
//                 </a>
//                 <a href="#Projects">
//                     <li className='text-xl transition-all duration-300 p-1 md:p-0 '>
//                         Projects
//                     </li>
//                 </a>
//                 <a href="#ContactForm">
//                     <li className='text-xl transition-all duration-300 p-1 md:p-0 '>
//                         Contact
//                     </li>
//                 </a>
//                 <a href="#Footer">
//                     <li className='text-xl transition-all duration-300 p-1 md:p-0 '>
//                         Footer
//                     </li>
//                 </a>
//             </ul>
//             <div className="md:hidden absolute right-10 top-6">
//                 {menuOpen ? (
//                     <RiCloseLine 
//                         size={30} 
//                         className='transition-all duration-300' 
//                         onClick={() => setMenuOpen(false)} 
//                     />
//                 ) : (
//                     <RiMenu2Line 
//                         size={30} 
//                         className='transition-all duration-300' 
//                         onClick={() => setMenuOpen(true)} 
//                     />
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Navbar;


import { RiCloseLine, RiMenu2Line } from '@remixicon/react';
import { useState } from 'react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="flex justify-between items-center bg-slat-800 bg-opacity-20 text-white px-10 pt-6 md:px-20 relative font-sans">
            {/* Logo or Title */}
            <span className='text-xl tracking-wide font-sans'>
                Rakesh
            </span>

            {/* Navbar Links */}
            <ul className={`mx-24 py-2 mt-3 font-sans md:mt-0 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6 transition-all duration-300 ${menuOpen ? "block" : "hidden"} md:block`}>
                <a href="#About">
                    <li className='text-xl transition-all duration-300 p-1 md:p-0 font-sans'>
                        About
                    </li>
                </a>
                <a href="#Skills">
                    <li className='text-xl transition-all duration-300 p-1 md:p-0'>
                        Skills
                    </li>
                </a>
                <a href="#Projects">
                    <li className='text-xl transition-all duration-300 p-1 md:p-0'>
                        Projects
                    </li>
                </a>
                <a href="#ContactForm">
                    <li className='text-xl transition-all duration-300 p-1 md:p-0'>
                        Contact
                    </li>
                </a>
                <a href="#Footer">
                    <li className='text-xl transition-all duration-300 p-1 md:p-0'>
                        Footer
                    </li>
                </a>
            </ul>

            {/* Mobile Menu Icon */}
            <div className="md:hidden absolute right-10 top-6">
                {menuOpen ? (
                    <RiCloseLine
                        size={30}
                        className='transition-all duration-300'
                        onClick={() => setMenuOpen(false)}
                    />
                ) : (
                    <RiMenu2Line
                        size={30}
                        className='transition-all duration-300'
                        onClick={() => setMenuOpen(true)}
                    />
                )}
            </div>
        </div>
    );
};

export default Navbar;
