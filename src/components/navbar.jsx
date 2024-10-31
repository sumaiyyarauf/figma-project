// import { useRef, useEffect } from 'react';
import React from 'react';
import Logo from '../assets/logo.png';
import { Link } from "react-router-dom";
// import gsap from 'gsap';

const Navbar = () => {
  // const logoRef = useRef(null);

  // // useEffect to trigger GSAP animation after the component mounts
  // useEffect(() => {
  //   gsap.from(logoRef.current, {
  //     y: 100,
  //     x:100,  // Moves the logo from above
  //     opacity: 100, // Starts with opacity 0
  //     duration: 3, // Animation duration
  //     ease: "power3.out", // Easing function
  //   });
  // }, []); // Empty dependency array ensures this runs once on mount

  return (
    <header
      style={{ position: "sticky", top: 0 }}
      className='flex justify-between relative items-center text-white w-full z-10 h-[80px] px-[40px] bg-[#141414B2] opacity-70'
    >
      <div>
        <Link to={"/"}>
        <img 
          src={Logo} 
          alt="Logo" 
          // ref={logoRef} // Ref for the GSAP animation
          className='h-full ml-8' 
        />
        </Link>
      </div>
      <nav>
        <ul className='flex gap-[20px]'>
          <li>
              <Link  className="max-sm:text-[24px]" to={"/about"}>
                About
              </Link>
          </li>

          <li>
              <Link  className="max-sm:text-[24px]" to={"/section"}>
                Services
              </Link>
          </li>

          <li>
              <Link  className="max-sm:text-[24px]" to={"/service"}>
                Aircraft Guide
              </Link>
          </li>

          <li>
              <Link  className="max-sm:text-[24px]" to={"/flying"}>
                Reviews
              </Link>
          </li>
        
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;