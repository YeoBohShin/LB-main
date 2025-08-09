import { Routes, Route } from 'react-router-dom';
import NavBar  from './NavBar';
import Home from './Home';
import Services from './Services/Services';
import AboutUs from './AboutUs/AboutUs';
import Events from './Events/Events';
import Branding from './Branding/Branding';
import Contact from './Contact/Contact';
import './App.css';

function App() {

  return (
    <>
    <div className="min-h-screen flex flex-col min-w-screen bg-base-300 text-base-content">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/branding" element={<Branding />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
    </>
  )
}

export default App
