import React from 'react';
import image1 from '../../assets/service1.png';

const Section = () => {
  return (
    <div className="text-white mt-16 mx-20">
      <div className="flex justify-between items-center">
        <h1
          className="leading-[68px] text-[64px] pb-[10%] pl-2 border-b border-dotted rounded-bl-[55px]"
          style={{ fontFamily: 'Italiana' }}
        >
          Our Services
        </h1>
        <button className="border-[0.5px] rounded-[20px] px-4 py-2 text-sm">
          Know More
        </button>
      </div>
      <div className="flex gap-[15px] ">
        <div className="pb-3 w-[380px] pr-2 border-r border-t border-dotted rounded-r-[55px]">
          <img
            src={image1}
            className="mt-3 w-[380px] h-[440px] rounded-[55px]"
            alt="Service Description"
          />
        </div>
        <div className="ml-4 pt-[5%] w-[300.96px]">
          <h6 className="text-sm font-semibold uppercase text-[#F5F5F580]">
            Concierge Services
          </h6>
          <h2 className="text-2xl font-bold mt-2"
          style={{ fontFamily: 'Italiana' }}>
            Ground Transportation
          </h2>
          <p className="mt-4 text-sm leading-[19.22px] text-[#F5F5F580] opacity-60">
            Altitude charter is happy to arrange door-to-door ground transportation at cost for any of our clients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section;
