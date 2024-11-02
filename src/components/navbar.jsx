import React from 'react';
import Logo from '../assets/logo.png';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header
      style={{ position: "sticky", top: 0 }}
      className="flex justify-between items-center text-white w-full z-10 h-[75px] px-8 bg-[#141414B2] opacity-70"
    >
      <div>
        <Link to="/">
          <img 
            src={Logo} 
            alt="Logo" 
            className="h-[60px] ml-4 sm:ml-8" 
          />
        </Link>
      </div>
      <nav>
        <ul className="hidden sm:flex gap-6 md:gap-8 lg:gap-10">
          <li>
            <Link className="text-lg md:text-base lg:text-xl" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="text-lg md:text-base lg:text-xl" to="/section">
              Services
            </Link>
          </li>
          <li>
            <Link className="text-lg md:text-base lg:text-xl" to="/service">
              Aircraft Guide
            </Link>
          </li>
          <li>
            <Link className="text-lg md:text-base lg:text-xl" to="/flying">
              Reviews
            </Link>
          </li>
        </ul>
        
        <div className="sm:hidden">
          <button className="text-white text-xl focus:outline-none">
            ☰
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
