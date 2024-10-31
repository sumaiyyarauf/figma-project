import React from 'react'

import About from '../components/about/about';
import Home from '../components/home/hero';
import Service from '../components/services/hero';
import Section from '../components/services/section';
import Flying from '../components/services/Flying';





const HomePage = () => {
  return (
    <div>
       
      <Home/>
      <About/>
      <Service/>
      <Section/>
      <Flying/>
     
    

    </div>
  )
}

export default HomePage