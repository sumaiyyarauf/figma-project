import React from 'react';
import image1 from "../../assets/Vector 1.png";
import image2 from "../../assets/Vector 2.png";
import image3 from '../../assets/service1.png';
import image4 from '../../assets/service2.png';

const Section = () => {
  return (
    <main className='px-4 md:mx-14 pb-[4%]'>
      <div className='flex flex-col md:flex-row justify-between mt-10 md:mt-20 mb-[-2%]'>
        <div>
          <h1
            className="leading-[48px] md:leading-[68px] text-[36px] md:text-[64px] text-white"
            style={{ fontFamily: 'Italiana' }}
          >
            Our Services
          </h1>
        </div>

        <div className="mt-4 md:mt-2 md:pr-2 mr-[-5%] flex justify-center md:block">
          <button className="border-[0.5px] text-white rounded-[20px] px-4 py-2 text-sm">
            Know More
          </button>
        </div>
      </div>

      <div className='flex flex-col md:flex-row justify-between '>
        <div className="relative flex justify-center md:block">
          <img src={image1} className='absolute  top-0 left-0' alt="" />
          <img src={image3} className='relative w-[300px] h-[360px] md:w-[370px] md:h-[450px] mt-15 md:mt-[33%] p-3 rounded-[20%]' alt="" />
        </div>

        <div className="mt-10 md:mt-0 md:ml-4 pt-[5%] md:w-[300.96px] flex flex-col items-center md:items-start">
          <div className='mt-10 md:mt-[110px] text-center md:text-left '>
            <h6 className="text-xs md:text-sm font-semibold uppercase text-[#F5F5F580]">
              Concierge Services
            </h6>
            <h2 className="text-xl md:text-2xl font-bold text-[#F5F5F5] mt-2" style={{ fontFamily: 'Italiana' }}>
              Ground Transportation
            </h2>
            <p className="mt-4 text-xs md:text-sm leading-[19.22px] text-[#F5F5F580] opacity-60">
              Altitude charter is happy to arrange door-to-door ground transportation at cost for any of our clients.
            </p>
          </div>

          <div className='mt-10 md:mt-[110px] text-center md:text-left'>
            <h6 className="text-xs md:text-sm font-semibold uppercase text-[#F5F5F580]">
              Concierge Services
            </h6>
            <h2 className="text-xl md:text-2xl font-bold text-[#F5F5F5] mt-2" style={{ fontFamily: 'Italiana' }}>
              Catering with Care
            </h2>
            <p className="mt-4 text-xs md:text-sm leading-[19.22px] text-[#F5F5F580] opacity-60">
              Altitude charter is happy to arrange any type of catering requested at cost for any of our clients. This includes catering from specific restaurants whenever possible.
            </p>
          </div>
        </div>

        <div className="relative flex justify-center md:block mt-10 md:mt-0">
          <img src={image2} className='absolute  top-0 right-0' alt="" />
          <img src={image4} className='relative w-[250px] h-[300px] md:w-[300px] md:h-[360px] mt-20 md:mt-[130%] p-3 rounded-[25%]' alt="" />
        </div>
      </div>
    </main>
  );
};

export default Section;
