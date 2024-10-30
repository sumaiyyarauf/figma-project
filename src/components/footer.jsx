import React from 'react'
import logo from "../assets/logo.png"
import phone from "../assets/phone.png"
import email from "../assets/email.png"
import location from "../assets/location.png"

const Footer = () => {
  return (
   <footer>
    <div className='flex justify-between text-white pt-16 pl-16'>
        <div className='flex flex-col items-center'>
            <img src={logo} className='' alt="" />

            <h1 className='text-[24px] mt-2'
            style={{fontFamily: "Italiana",
            }}>
              ALTITUDE
              <br />
              CHARTER
            </h1>
        </div>
        <div>
            <h2 className='text-[23px]'
              style={{fontFamily: "Jura",
              }}>
                Useful Links
            </h2>
            <h6 className='text-[15px] leading-[18.75px] mt-[20px]'
               style={{fontFamily: "Jura",
               }}>
                Home
            </h6>
            <h6 className='text-[15px] leading-[18.75px] mt-[20px]'
               style={{fontFamily: "Jura",
               }}>
               About Us
            </h6>
            <h6 className='text-[15px] leading-[18.75px] mt-[20px]'
               style={{fontFamily: "Jura",
               }}>
               Pricing
            </h6>
            <h6 className='text-[15px] leading-[18.75px] mt-[20px]'
               style={{fontFamily: "Jura",
               }}>
                Testimonial
            </h6>
            <h6 className='text-[15px] leading-[18.75px] mt-[20px]'
               style={{fontFamily: "Jura",
               }}>
                Book a Flight
            </h6>
        </div>


        <div className=''>
            <h2 className='text-[23px]'
              style={{fontFamily: "Jura",
              }}>
               Reach Us Now
            </h2>
            <div className='flex gap-[6%] mt-[10px]'>
                <img src={phone} alt="" />
                <p>631 223 8839</p>
            </div>
            <div className='flex gap-[6%] mt-[10px]'>
                <img src={email} alt="" />
                <p>contact@altitudecharter.com</p>
            </div>

            <div className='mt-[40px]'>
               <h2 className='text-[23px]'
                  style={{fontFamily: "Jura",
                  }}>
                   United States
               </h2>
               <div className='flex gap-[6%] mt-[10px] w-[198px] '>
                <img src={location} className='w-[30px] h-[40px]' alt="" />
                <p>Altitude Charter LLC 300 Wheeler Rd. Suite 202 Hauppauge NY11788</p>
            </div>
            </div>
        </div>
    </div>


    <div>
        <div className='text-white'>
            <h1>Follow Us On:</h1>
        </div>
    </div>

   </footer>
  )
}

export default Footer