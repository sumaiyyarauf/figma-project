import React, { useState } from 'react';
import image from '../../assets/home.png';
import { Link } from "react-router-dom";

const Home = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [phone, setPhone] = useState('');
  const [departureAirport, setDepartureAirport] = useState('');
  const [arrivalAirport, setArrivalAirport] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [time, setTime] = useState('');
  const [passengers, setPassengers] = useState('');
  const [planeType, setPlaneType] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email) {
      setError('Please fill in all fields.');
      return;
    }

    setError('');
    console.log('Form submitted:', { name, email, phone, companyName, departureAirport, arrivalAirport, departureDate, time, passengers, planeType });

    setName('');
    setEmail('');
    setCompanyName('');
    setPhone('');
    setDepartureAirport('');
    setArrivalAirport('');
    setDepartureDate('');
    setTime('');
    setPassengers('');
    setPlaneType('');
  };

  return (
    <div className='flex flex-col lg:flex-row  absolute justify-between relative top-0 bg-black text-white mt-[-7%]'>
      <div className='relative'>
        <img src={image} className='w-[689px] h-[639px]' alt="Luxury charter flight experience" />

        <div className='absolute top-0 left-0 w-full h-full flex flex-col pt-[20%] pl-[10%] text-white'>
          <div  style={{fontFamily: "Italiana",
               }}>
              <h1 className='text-5xl font-normal'>ALTITUDE</h1>
              <h1 className='text-5xl font-normal'>CHARTER</h1>
          </div>
          <p className='text-lg mt-4'
           style={{fontFamily: "Jura",
           }}>Uncompromising Luxury, Unforgettable Journeys.</p>
           <Link to={"/desktop"}>
            <button className='mt-6 px-6 py-2 bg-[#FFFFFF] w-[228px] hover:bg-black hover:text-white border text-[#07060B] rounded-lg'>Request a Flight</button>
           </Link>
          
        </div>
      </div>

      <div className="max-w-md mx-auto  p-4 border: 0.83px border-[#FFFFFF26] m-20 rounded-lg shadow-lg bg-[#0F0F0F]">
        <div className='flex justify-between gap-[5px]'>
          <button className='hover:bg-white hover:text-black p-1 px-3 rounded-[9.01px] border-white border-[1px] '
          style={{fontFamily: "Jura",
          }}>
            One Trip</button>
          <button className='hover:bg-white hover:text-black p-1 px-3 rounded-[9.01px] border-white border-[1px] '>Round Trip</button>
          <button className='hover:bg-white hover:text-black p-1 px-3 rounded-[9.01px] border-white border-[1px] '>Multi Leg</button>
        </div>

        {error && <p className="text-red-500 mb-2">{error}</p>}
        <form onSubmit={handleSubmit}>
        <div className='w-[367px] h-[460px] '>
        <section className='mt-2 border-b border-[#E4E4E4]'>
              <div className='flex gap-4'>
              <div className="mb-4">
                 <label htmlFor="name" className="block mb-1">Name</label>
                 <input
                    type="text"
                    id="name"
                    value={name}
                    placeholder='Full Name'
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-1 rounded-[9.01px] bg-[#656363] text-white"
                    required
                 />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-1">Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    placeholder='dubai@gmail.com'
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-1 rounded-[9.01px] bg-[#656363] text-white"
                    required
                />
              </div>
              </div>

             <div className='flex gap-4'>
                <div className="mb-4">
                   <label htmlFor="companyName" className="block mb-1">Company Name</label>
                   <input
                       type="text"
                       id="companyName"
                       value={companyName}
                       placeholder='Weavenn'
                       onChange={(e) => setCompanyName(e.target.value)}
                       className="w-full p-1 rounded-[9.01px] bg-[#656363] text-white"
                       required
                   />
                </div>
                <div className="mb-4">
                   <label htmlFor="phone" className="block mb-1">Phone Number</label>
                   <input
                       type="tel" 
                       id="phone"
                       value={phone}
                       placeholder='556 880 5569'
                       onChange={(e) => setPhone(e.target.value)}
                       className="w-full p-1 rounded-[9.01px] bg-[#656363] text-white"
                       required
                   />
                </div>
             </div>
           </section>
           <br className='border-[1px] border-white' />

           <section>
            <div className='flex gap-4'>
               <div className="mb-4">
                   <label htmlFor="departureAirport" className="block mb-1">Departure Airport</label>
                   <input
                       type="text"
                       id="departureAirport"
                       value={departureAirport}
                       placeholder='New York Airport'
                       onChange={(e) => setDepartureAirport(e.target.value)}
                       className="w-full p-1 rounded-[9.01px] bg-[#656363] text-white"
                       required
                   />
               </div>

               <div className="mb-4">
                   <label htmlFor="arrivalAirport" className="block mb-1">Arrival Airport</label>
                   <input
                       type="text"
                       id="arrivalAirport"
                       value={arrivalAirport}
                       placeholder='Dubai UAE Airport'
                       onChange={(e) => setArrivalAirport(e.target.value)}
                       className="w-full p-1 rounded-[9.01px] bg-[#656363] text-white"
                       required
                   />
               </div>
            </div>
            <div className='flex gap-4'>
               <div className="mb-4">
                   <label htmlFor="departureDate" className="block mb-1">Departure Date</label>
                   <input
                       type="text"
                       id="departureDate"
                       value={departureDate}
                       placeholder='12/08/2024'
                       onChange={(e) => setDepartureDate(e.target.value)}
                       className="w-full p-1 rounded-[9.01px] bg-[#656363] text-white"
                       required
                   />
               </div>
               <div className="mb-4">
                   <label htmlFor="time" className="block mb-1">Time</label>
                   <input
                       type="text"
                       id="time"
                       value={time}
                       placeholder='10 : 30 AM'
                       onChange={(e) => setTime(e.target.value)}
                       className="w-full p-1 rounded-[9.01px] bg-[#656363] text-white"
                       required
                   />
               </div>
            </div>
            <div className='flex gap-4'>
               <div className="mb-4">
                   <label htmlFor="passengers" className="block mb-1">Passengers</label>
                   <input
                       type="text"
                       id="passengers"
                       value={passengers}
                       placeholder='03'
                       onChange={(e) => setPassengers(e.target.value)}
                       className="w-full p-1 rounded-[9.01px] bg-[#656363] text-white"
                       required
                   />
               </div>
               <div className="mb-4">
               <label htmlFor="planeType" className="block mb-1">Plane Type</label>
            <select
                  id="planeType"
                  value={planeType}
                  onChange={(e) => setPlaneType(e.target.value)}
                  className="w-[180px] p-1 px-2 rounded-lg bg-[#656363] text-white"
                  required
            >
            <option  value="Turbo prop">Turbo prop</option>
            <option value="Jet">Jet</option>
            <option value="Helicopter">Helicopter</option>
            </select>
                </div>
            </div>

           </section>

           <button
            type="submit"
            className="w-full p-1 bg-[#FFFFFF] text-black rounded-[9.01px] hover:bg-black hover:text-white border-[1px]"
            >
               Book your Flight
          </button>
        </div>
      
        </form>
      </div>
    </div>
  );
}

export default Home;
