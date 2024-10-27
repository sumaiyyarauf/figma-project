import './App.css';
import About from './components/about/about';
import Home from './components/home/hero';
import Navbar from './components/navbar';
import Service from './components/services/hero';
import Section from './components/services/section';
import Practice from './components/services/practice';
import Flying from './components/services/Flying';
import Footer from './components/footer';


function App() {
  return (
    <div className="bg-black">
      <Navbar/>
      <Home/>
      <About/>
      <Service/>
      <Section/>
      <Practice />
      <Flying/>
      <Footer/>
  
      
   
    </div>
  );
}

export default App;
