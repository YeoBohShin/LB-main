import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar  from './NavBar/NavBar';
import Home from './Home';
import Services from './Services/Services';
import AboutUs from './AboutUs/AboutUs';
import Events from './Events/Events';
import Branding from './Branding/Branding';
import Contact from './Contact/Contact';
import Menu from './NavBar/Menu';
import './App.css';

function App() {
  const [is_Open, setIsOpen] =  useState(false);

  const toggleMenu = () => {
    setIsOpen(!is_Open);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  
  const overlayStateClasses = is_Open
    ? "opacity-50"
    : "opacity-0 pointer-events-none";

  return (
    <>
    <div className="min-h-screen flex flex-col min-w-screen bg-primary text-base-content">
      <div
        onClick={closeMenu}
        className={`fixed inset-0 bg-black z-50 transition-opacity duration-300 ease-in-out ${overlayStateClasses}`}
        aria-hidden="true"
      />

      <Menu isOpen={is_Open} onClose={closeMenu} />
      <NavBar setIsOpen={setIsOpen} />
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
