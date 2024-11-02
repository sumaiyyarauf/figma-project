import React from 'react';
import logo from "../assets/logo.png";
import phone from "../assets/phone.png";
import email from "../assets/email.png";
import location from "../assets/location.png";
import facebook from "../assets/flogo1.png";
import google from "../assets/flogo2.png";
import twiter from "../assets/flogo3.png";
import youtube from "../assets/flogo4.png";
import image1 from "../assets/footer1.png";
import image2 from "../assets/footer2.png";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
     
      <div className="flex flex-col md:flex-row justify-between text-center md:text-left py-16 px-8 md:px-16">
        
     
        <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
          <img src={logo} className="w-24 md:w-32" alt="Logo" />
          <h1 className="text-2xl mt-2 font-italiana">
            ALTITUDE<br />CHARTER
          </h1>
        </div>

        <div className="mb-8 md:mb-0">
          <div>
            <h2 className='text-[23px]'
              style={{fontFamily: "Jura",
              }}>
                Useful Links
            </h2>

             <Link to={"/"}>
                 <h6 className='text-[15px] leading-[18.75px] mt-[20px]'
                    style={{fontFamily: "Jura" }}>
                    Home
                 </h6>
             </Link>

             <Link to={"/about"}>
                 <h6 className='text-[15px] leading-[18.75px] mt-[20px]'
                    style={{fontFamily: "Jura" }}>
                    About Us
                 </h6>
             </Link>

             <Link to={""}>
                 <h6 className='text-[15px] leading-[18.75px] mt-[20px]'
                    style={{fontFamily: "Jura" }}>
                    Pricing
                 </h6>
             </Link>

             <Link to={""}>
                 <h6 className='text-[15px] leading-[18.75px] mt-[20px]'
                    style={{fontFamily: "Jura" }}>
                    Testimonial
                 </h6>
             </Link>

             <Link to={""}>
                 <h6 className='text-[15px] leading-[18.75px] mt-[20px]'
                    style={{fontFamily: "Jura" }}>
                    Book a Flight
                 </h6>
             </Link>

        </div>

        </div>

        <div className="mb-8 md:mb-0">
          <h2 className="text-xl font-jura">Reach Us Now</h2>
          <div className="flex items-center gap-2 mt-4">
            <img src={phone} alt="Phone icon" className="w-6 h-6" />
            <p className="text-sm">631 223 8839</p>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <img src={email} alt="Email icon" className="w-6 h-6" />
            <p className="text-sm">contact@altitudecharter.com</p>
          </div>
          <div className="mt-6">
            <h2 className="text-xl font-jura">United States</h2>
            <div className="flex items-start gap-2 mt-2 w-full">
              <img src={location} className="w-8 h-10" alt="Location icon" />
              <p className="text-sm max-w-xs">Altitude Charter LLC, 300 Wheeler Rd, Suite 202, Hauppauge, NY 11788</p>
            </div>
          </div>
        </div>
      </div>

      <section className="flex flex-col md:flex-row justify-between items-center px-8 md:px-16 pb-4 ">
        <div className="text-center md:text-left mb-8 md:mb-0">
        <h1 className='text-[23px]'
            style={{fontFamily: "Jura",}}>
              Follow Us On:
        </h1>
            <div className='flex gap-1 pt-3 '>
                <img src={facebook} alt="" />
                <img src={google} alt="" />
                <img src={twiter} alt="" />
                <img src={youtube} alt="" />
            </div>
        </div>
        
        <h2 className="text-xl font-jura pr-[18%]">Sponsored By</h2>
        
        <div className="flex gap-4 mt-4 md:mt-0">
          <img src={image1} className="w-20 md:w-28 h-auto" alt="Sponsor 1" />
          <img src={image2} className="w-20 md:w-28 h-auto" alt="Sponsor 2" />
        </div>
      </section>

      <div className="border-t  py-4 px-8 md:px-16 text-sm">
        <p>© 2024 Altitude Charter | All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
