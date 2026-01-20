import { motion } from "framer-motion";
import { useEffect } from "react";
import ServicesHomePage from "./Services/ServicesHomePage";
import EventsHomePage from "./Events/EventsHomePage";
import AboutUsHomePage from "./AboutUs/AboutUsHomePage";
import BrandingHomePage from "./Branding/BrandingHomePage";
import ContactHomePage from "./Contact/ContactHomePage";
import Footer from "./Footer";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="xl:min-h-screen text-center text-base-content items-center justify-center m-5 xl:m-0">
        <motion.p 
          className="text-primary text-center text-5xl z-10 p-10 xl:absolute xl:left-1/2 xl:top-1/3 xl:transform xl:-translate-x-1/2 xl:-translate-y-1/2 mb-5 xl:mb-0 bg-base-200 xl:bg-transparent rounded-4xl shadow-lg xl:shadow-none xl:text-secondary"
          initial={{ x: "100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 80, damping: 18, duration: 0.6 }}>
          Your Preferred Singapore Limousine Service Provider
        </motion.p>
        <img
          src="./Homepage.jpeg"
          alt="Limo"
          className="w-full h-full rounded-4xl xl:rounded-none"
        />
      </div>
      <AboutUsHomePage />
      <ServicesHomePage />
      <BrandingHomePage />
      <EventsHomePage />
      <ContactHomePage />
      <Footer />
    </>
  );
}