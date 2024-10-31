import './App.css';
import About from './components/about/about';
import HomePage from './components/homePage';
import Navbar from './components/navbar';
import Service from './components/services/hero';
import Section from './components/services/section';
import Flying from './components/services/Flying';
import Footer from './components/footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Desktop from './components/home/desktop2';


function App() {
  return (
    <div className="bg-black">
      
    <BrowserRouter>
       <Navbar/> 
       <Desktop/>
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
