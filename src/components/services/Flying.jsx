import React from 'react';
import image1 from "../../assets/Rectangle 9.png";
import image2 from "../../assets/flying-4400116_1280 1 (1).png";
import image3 from "../../assets/Rectangle 37.png"

const Flying = () => {
  return (
    <div className="bg-white rounded-[20px] ">
      <div className="flex w-full justify-center">
        <h1 className="text-[54px] text-center mt-4 leading-[64px]">
          Flying with Altitude
        </h1>
      </div>


      <div className="flex justify-between  ">
       
        <div>
          <div className='h-[115px] w-[313px]'>
            <h2 className="text-2xl font-bold mt-2" style={{ fontFamily: 'Italiana' }}>
               Seamless Flexibility
            </h2>
            <p className="mt-4 text-sm leading-[19.22px] ">
               We accommodate and execute last-minute changes effortlessly, ensuring a smooth experience.
            </p>
          </div>
          <div className='h-[115px] w-[313px]'>
            <h2 className="text-2xl font-bold mt-2" style={{ fontFamily: 'Italiana' }}>
            Exclusive Benefits
            </h2>
            <p className="mt-4 text-sm leading-[19.22px] ">
            Receive a $500 credit towards ground transportation or catering with your first flight.
            </p>
          </div>
        </div>

        
        <div className="relative w-[700px] h-[300px] "> 
          <img src={image1} className="w-full h-[449.5px] " alt="Background" />
           <div className='flex-col justify-center mt-[10%] ml-[20%] h-[537px] absolute inset-0 w-full '>
            <img src={image3} className=" w-[250px] " alt="" />
            <img src={image2} className=" w-[250px] rounded-b-[50px]" alt="Overlay" />
           </div>
        </div>

        <div className='flex flex-col'>
          <div className='h-[115px] w-[313px]'>
            <h2 className="text-2xl font-bold mt-2" style={{ fontFamily: 'Italiana' }}>
               Rapid and Reliable
            </h2>
            <p className="mt-4 text-sm leading-[19.22px] ">
               Get quotes in 2 hours, 24/7 availability, and book a flight in as little as 2 hours with expert international charter guidance.
            </p>
          </div>
          <div className='h-[115px] w-[313px]'>
            <h2 className="text-2xl font-bold mt-2" style={{ fontFamily: 'Italiana' }}>
               Personalized Service
            </h2>
            <p className="mt-4 text-sm leading-[19.22px] ">
            
               Enjoy one-on-one concierge-level care, speaking with a live consultant each time you call and working with the same expert for every booking.
            </p>
          </div>
        </div>
      </div>
      <div className='mt-[200px] flex justify-center items-center'>
          <div className='h-[115px] w-[313px] '>
            <h2 className="text-2xl font-bold mt-2" style={{ fontFamily: 'Italiana' }}>
                Decades of Expertise
            </h2>
            <p className="mt-4 text-sm leading-[19.22px] ">
           
                Over 37 years of private charter experience, setting the standard in personalized service.
            </p>
          </div>
      </div>
    </div>
  );
};

export default Flying;
