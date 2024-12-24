// import React from 'react'
// import { assets } from '../assets/assets'

// const Footer = () => {
//   return (
//     <div className='flex items-center justify-between gap-4 py-3 mt-20'>
//         <img width={150} src={assets.logo} alt="" />
//         <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>Copyright @GreatStack.dev | All right reserved.</p>
//         <div className='flex gap-2.5'>
//             <img width={35} src={assets.facebook_icon} alt="" />
//             <img width={35} src={assets.twitter_icon} alt="" />
//             <img width={35} src={assets.instagram_icon} alt="" />
//         </div>
//     </div>
//   )
// }

// export default Footer

import React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-8 mt-20 bg-white text-[#364F6B]">
      {/* Text Logo */}
      {/* <h1 className="text-3xl font-semibold text-blue-600">imagiNation</h1> */}
      <Logo />

      {/* Copyright Text */}
      <p className="flex-1 border-t border-gray-500  md:border-l md:border-t-0 md:pl-4 text-sm text-gray-700 mt-6 md:mt-0 md:ml-4">
        Copyright @Anmol Sah | All rights reserved.
      </p>

      {/* Social Media Icons */}
      <div className="flex gap-6 mt-6 md:mt-0">
        <a
          href="https://www.linkedin.com/in/anmol-sah-551083238/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors duration-300 hover:text-blue-600"
        >
          <i className="fab fa-linkedin-in text-2xl"></i>
        </a>
        <a
          href="https://github.com/anmolsah"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors duration-300 hover:text-gray-600"
        >
          <i className="fab fa-github text-2xl"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
