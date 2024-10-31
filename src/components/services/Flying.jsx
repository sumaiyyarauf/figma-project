import React from 'react';
import image1 from "../../assets/flying.jpg";

const Flying = () => {
  return (
    <div className="bg-white rounded-[20px] p-4 md:p-10">
      <div className="flex w-full justify-center">
        <h1 className="text-[36px] md:text-[54px] text-center mt-4 leading-[44px] md:leading-[64px]"
        style={{ fontFamily: 'Italiana' }}>
          Flying with Altitude
        </h1>
      </div>

      <div className="flex flex-col md:flex-row justify-between  mt-8 md:mt-12">
       
        <div className='flex flex-col items-end md:mr-4 space-y-10 md:space-y-16'>
          <div className='text-right md:text-left w-full max-w-[280px] mt-[20%] '>
            <h2 className="text-xl md:text-2xl font-bold text-end " style={{ fontFamily: 'Italiana' }}>
              Seamless Flexibility
            </h2>
            <p className="mt-2 md:mt-4 text-sm leading-[19.22px] text-end ">
              We accommodate and execute last-minute changes effortlessly, ensuring a smooth experience.
            </p>
          </div>
          <div className='text-right md:text-left w-full max-w-[280px] pt-[60%] '>
            <h2 className="text-xl md:text-2xl font-bold text-end" style={{ fontFamily: 'Italiana' }}>
              Exclusive Benefits
            </h2>
            <p className="mt-2 md:mt-4 text-sm leading-[19.22px] text-end">
              Receive a $500 credit towards ground transportation or catering with your first flight.
            </p>
          </div>
        </div>

      
        <div className="relative w-full md:w-[780px] h-auto mt-10 md:mt-0">
          <img src={image1} className="w-full h-auto max-h-[549.5px] rounded-[15%]" alt="Background" />
        </div>

       
        <div className='flex flex-col items-start md:items-start md:ml-4 space-y-10 md:space-y-16 mt-10 md:mt-0'>
          <div className='text-left w-full max-w-[280px] mt-[20%]'>
            <h2 className="text-xl md:text-2xl font-bold" style={{ fontFamily: 'Italiana' }}>
              Rapid and Reliable
            </h2>
            <p className="mt-2 md:mt-4 text-sm leading-[19.22px]">
              Get quotes in 2 hours, 24/7 availability, and book a flight in as little as 2 hours with expert international charter guidance.
            </p>
          </div>
          <div className='text-left w-full max-w-[280px] pt-[50%]'>
            <h2 className="text-xl md:text-2xl font-bold " style={{ fontFamily: 'Italiana' }}>
              Personalized Service
            </h2>
            <p className="mt-2 md:mt-4 text-sm leading-[19.22px]">
              Enjoy one-on-one concierge-level care, speaking with a live consultant each time you call and working with the same expert for every booking.
            </p>
          </div>
        </div>
      </div>

    
      <div className='mt-4  flex justify-center items-center'>
        <div className='text-center w-full max-w-[280px]'>
          <h2 className="text-xl md:text-2xl font-bold" style={{ fontFamily: 'Italiana' }}>
            Decades of Expertise
          </h2>
          <p className="mt-2 md:mt-4 text-sm leading-[19.22px]">
            Over 37 years of private charter experience, setting the standard in personalized service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Flying;
