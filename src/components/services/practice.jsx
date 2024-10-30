import React from 'react';
import image1 from '../../assets/service1.png';
import image2 from '../../assets/service2.png';

const Practice = () => {
  return (
    <div className="flex justify-between mt-20">
   
      <div className='p-10'>
        <div>
          <h1
            className="leading-[68px] text-[64px] text-white pb-[10%] pl-2 "
            style={{ fontFamily: 'Italiana' }}
          >
            Our Services
            <div className="w-72 h-24  border-b border-dotted border-white rounded-bl-full ml-[2%]" />
          </h1>
        
        </div>
        <div>
      
          <div className="pb-3 w-[380px] pr-2 ">
          <div className="w-20 h-72 ml-[80%]  rounded-tr-full" style={{marginTop:"-10.5%",borderRight:"1px solid white"}} />
            <img
              src={image1}
              className="mt-[-50%] w-[380px] h-[440px] mr-4 rounded-[20%]"
              alt="Service Description"
            />
          </div>
        </div>
        <div className='pl-2 border-l border-t border-dotted h-[250px] rounded-tl-[55px] ml-4'>

        </div>
      </div>

    
      <div className="ml-4 pt-[5%] w-[300.96px]">
         <div className='mt-[110px]'>
            <h6 className="text-sm font-semibold uppercase text-[#F5F5F580]">
               Concierge Services
            </h6>
            <h2 className="text-2xl font-bold text-[#F5F5F5] mt-2" style={{ fontFamily: 'Italiana' }}>
                Ground Transportation
            </h2>
            <p className="mt-4 text-sm leading-[19.22px] text-[#F5F5F580] opacity-60">
                Altitude charter is happy to arrange door-to-door ground transportation at cost for any of our clients.
            </p>
         </div>
         <div className='mt-[110px]'>
            <h6 className="text-sm font-semibold uppercase text-[#F5F5F580]">
                 Concierge Services
            </h6>
            <h2 className="text-2xl font-bold text-[#F5F5F5] mt-2" style={{ fontFamily: 'Italiana' }}>
                 Catering with Care
            </h2>
            <p className="mt-4 text-sm leading-[19.22px] text-[#F5F5F580] opacity-60">
            Altitude charter is happy to arrange any type of catering requested at cost for any of our clients. This includes catering from specific restaurants whenever possible. 
            </p>
         </div>
      </div>

     
    <div className='h-[988px]'>
        <div className="mt-2 h-[300px] pr-2 border-r mr-[150px] border-b border-dotted rounded-r-[55px]">
          <button className="border-[0.5px] ml-[150px] text-white rounded-[20px] px-4 py-2 text-sm">
            Know More
          </button>
        </div>
        <div>
          <div className="pb-3 w-[380px] h-[500.22px] pl-2 border-l border-t border-dotted rounded-tl-[55px]">
            <img
              src={image2}
              className="mt-3 w-[310px] h-[380px] rounded-[55px]"
              alt="Service Description"
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Practice;
