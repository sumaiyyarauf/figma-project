import React from 'react'
import image1 from "../../assets/Vector.png"
import image2 from "../../assets/Vector (4).png"
import image3 from "../../assets/Vector (2).png"
import image4 from "../../assets/Vector (3).png"

const Service = () => {
  return (
    <div>
        <div className='pl-[60%] text-white mr-[5%] '>
            <h1 className='text-[#F5F5F5] text-[64px] leading-[68px] py-16 ' style={{fontFamily: "Italiana",
               }}>We Listen and Learn</h1>
            <div style={{fontFamily: "Poppins",
               }}>
               <p>
                 Once you fly with us, we’ll meticulously document your preferences, including aircraft size and type, as well as any food allergies your family may have for catering. 
               </p>
               <p className='pt-8'>
                 This personalized approach ensures that each subsequent booking is seamless and effortlessly tailored to your needs.
              </p>
            </div>
        </div>
        <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row w-full justify-center gap-[8%] mt-16">
    <div className="flex flex-col items-center">
        <img src={image1} className="p-4 h-[136px] w-[113.77px] border rounded-[22.49px]" alt="" />
        <p className="text-[#F5F5F5] mt-5">ARG/US Safety Rated Aircraft</p>
    </div>
    <div className="flex flex-col items-center">
        <img src={image2} className="p-4 h-[136px] w-[113.77px] border rounded-[22.49px]" alt="" />
        <p className="text-[#F5F5F5] mt-5">Full Transparency</p>
    </div>
    <div className="flex flex-col items-center">
        <img src={image3} className="p-4 h-[136px] w-[113.77px] border rounded-[22.49px]" alt="" />
        <p className="text-[#F5F5F5] mt-5">24/7 Availability</p>
    </div>
    <div className="flex flex-col items-center">
        <img src={image4} className="p-4 h-[136px] w-[113.77px] border rounded-[22.49px]" alt="" />
        <p className="text-[#F5F5F5] mt-5">Concierge Services</p>
    </div>
</div>


    </div>
  )
}

export default Service;