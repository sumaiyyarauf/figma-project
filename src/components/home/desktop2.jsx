import React from 'react';
import image from "../../assets/thank you.png";
import logo from "../../assets/logo2.png";
import { Link } from 'react-router-dom';

const Desktop = () => {
  return (
    <div className='h-[100vh] flex justify-center items-center bg-white'>
      <div className='relative'>
        <img src={image} className='w-[597px] h-[325px] border-[1px] p-2 rounded-[20px]' alt="Thank you background" />
        
        <div className='absolute inset-0 flex flex-col items-center justify-center text-center text-black'>
          <img src={logo} className='w-[100px] mb-4' alt="Logo" />
          <h1 className='text-[70px] font-bold' style={{ fontFamily: "Italiana" }}>
            Thank you!
          </h1>
          <p className='text-[20px]' style={{ fontFamily: "Jura" }}>
            We look forward to speaking with you soon
          </p>
          <Link to={"/"}>
          <p className='text-[12px] mt-3' style={{ fontFamily: "Jura" }}>
            Back to home
          </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Desktop;
