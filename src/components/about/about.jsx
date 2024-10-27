import React from 'react'
import image from "../../assets/about.png";

const About = () => {
  return (
    <div className='flex justify-between items-center h-[624px] bg-white rounded-[13px]'>
           <div className='p-16'>
                <h1 className='w-[474px] h-[136px] mt-[80px] text-[64px] leading-[68px] '
                 style={{fontFamily: "Italiana",
                 }}>
                 Welcome To Altitude Charter
              </h1>
              <img src={image} className='h-[430px] rounded-[35px] mt-16 ' alt="about image" />
           </div>

            <p className='h-[116px] w-[424px] pt-[20%] m-16 '
             style={{fontFamily: "Jura",
             }}>
              Altitude charter offers 37 years of charter experience. We have procured everything from 6-passenger turboprops to 300-passenger jumbo jets and everything in between. We not only know the best operators in the industry but also several of the individual aircraft.
           </p>
      
    </div>
  )
}

export default About
