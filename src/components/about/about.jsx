import React from 'react'
import image from "../../assets/about.png";

const About = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-between items-center h-auto lg:h-[624px] bg-white rounded-[13px] p-6 lg:p-16'>
      <div className='lg:w-1/2'>
        <h1 
          className='text-[32px] lg:text-[64px] leading-[38px] lg:leading-[68px] mt-[20px] lg:mt-[80px] font-italiana'
          style={{ fontFamily: "Italiana" }}
        >
          Welcome To Altitude Charter
        </h1>
        
        <img 
          src={image} 
          className=' h-[430px] rounded-[20px] lg:rounded-[35px] mt-6 lg:mt-16' 
          alt="about image" 
        />
      </div>


      <p 
        className=' mt-16 lg:mt-8 pt-[20%] lg:ml-16 lg:w-1/2 leading-[24px] lg:leading-[28px] font-jura'
        style={{ fontFamily: "Jura" }}
      >
        Altitude Charter offers 37 years of charter experience. We have procured everything from 6-passenger turboprops to 300-passenger jumbo jets and everything in between. We not only know the best operators in the industry but also several of the individual aircraft.
      </p>
    </div>
  )
}

export default About
