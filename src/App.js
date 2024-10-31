import './App.css';
import About from './components/about/about';
import HomePage from './components/homePage';
import Navbar from './components/navbar';
import Service from './components/services/hero';
import Section from './components/services/section';
// import Practice from './components/services/practice';
import Flying from './components/services/Flying';
import Footer from './components/footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="bg-black">
      {/* <Navbar/>
      <Home/>
      <About/>
      <Service/>
      <Section/> */}
      {/* <Practice /> */}
      {/* <Flying/>
      <Footer/> */}
       



      
    <BrowserRouter>
       <Navbar/> 
       <Routes>
           <Route 
             path='/'
             element={<HomePage/>}
           />
           <Route 
             path='/about'
             element={<About/>}
           />
           <Route 
             path='/service'
             element={<Service/>}
           />
            <Route 
             path='/section'
             element={<Section/>}
           />
           <Route 
             path='/flying'
             element={<Flying/>}
           />
        
       </Routes>
       
       <Footer />
    </BrowserRouter>
   
    </div>
  );
}

export default App;
