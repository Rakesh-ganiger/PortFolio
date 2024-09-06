// import { RiCloseLine, RiMenu2Line } from '@remixicon/react';
// import React, { useState } from 'react';

// const Navbar = () => {
//     const [menu,openMenu]=useState(false);
//     const [showMenu,setShowmenu]=useState(true);
//   return (
//     <div className="flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20 ">
//         <span className='text-xl font-bold tracking-wide hover:border-b-2  hover:border-yellow-500'>Portfolio</span>
//         <ul className={`${menu ? "black":"hidden"}  mx-24 py-2 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6 hover:border-b-2 hover:border-yellow-400`} >
//             <a href="#About">
//             <li className='text-xl transition-all duration-300 p-1 md:p-0 hover:border-b-2 hover:border-yellow-500'>
//                 About 
//             </li>
//             </a>
//             <a href="#Experience">
//             <li className='text-xl transition-all duration-300 p-1 md:p-0 hover:border-b-2 hover:border-yellow-500'>
//                 Skills
//             </li>
//             </a>
//             <a href="#Projects">
//             <li className='text-xl transition-all duration-300 p-1 md:p-0 hover:border-b-2 hover:border-yellow-500'>
//                 Projects
//             </li>
//             </a>
//             <a href="#ContactForm">
//             <li className='text-xl transition-all duration-300 p-1 md:p-0 hover:border-b-2 hover:border-yellow-500'>
//             Contact
//             </li>
//             </a>
//         </ul>{
//             showMenu ? (
//                 <RiMenu2Line size={30} 
//                 className='md:hidden absolute right-10 top-6 transition-all duration-300' onClick={()=>{
//                     openMenu(!menu);
//                     setShowmenu(!showMenu);
//                 }
//             }/>
//             ):(
//                 <RiCloseLine size={30} 
//                 className='md:hidden absolute right-10 top-6 transition-all duration-300'/>
//             )
           
//         }
//     </div>
//   )
// }

// export default Navbar;


import { RiCloseLine, RiMenu2Line } from '@remixicon/react';
import React, { useState } from 'react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    
    return (
        <div className="flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20 relative">
            <span className='text-xl font-bold tracking-wide '>
                Portfolio
            </span>
            <ul className={`mx-24 py-2 mt-3 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6 transition-all duration-300 ${menuOpen ? "block" : "hidden"} md:block`}>
                <a href="#About">
                    <li className='text-xl transition-all duration-300 p-1 md:p-0 '>
                        About 
                    </li>
                </a>
                <a href="#Experience">
                    <li className='text-xl transition-all duration-300 p-1 md:p-0 '>
                        Skills
                    </li>
                </a>
                <a href="#Projects">
                    <li className='text-xl transition-all duration-300 p-1 md:p-0 '>
                        Projects
                    </li>
                </a>
                <a href="#ContactForm">
                    <li className='text-xl transition-all duration-300 p-1 md:p-0 '>
                        Contact
                    </li>
                </a>
            </ul>
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
