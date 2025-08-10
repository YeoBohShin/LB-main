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
      <div className="xl:min-h-screen text-center text-base-content items-center justify-center mx-5 mt-5 xl:mx-0 xl:mt-0">
        <motion.p 
          className="bg-base-200 xl:bg-[rgba(0,0,0,0.5)] text-white text-center text-4xl z-10 p-10 rounded-4xl shadow-lg md:absolute md:left-1/2 md:top-1/3 md:transform md:-translate-x-1/2 md:-translate-y-1/2"
          initial={{ x: "100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 80, damping: 18, duration: 0.6 }}>
          Your Preferred Singapore Limousine Services Provider
        </motion.p>
        <motion.div
          className="w-full xl:p-10 mt-5 xl:mt-0 rounded-4xl shadow-lg"
          initial={{ x: "-100vw", opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 80, damping: 18, duration: 0.6 }}>
          <img
            src="./HomePage.jpg"
            alt="Limo"
            className="w-full h-auto rounded-4xl"
          />
        </motion.div>
      </div>
      <ServicesHomePage />
      <EventsHomePage />
      <BrandingHomePage />
      <AboutUsHomePage />
      <ContactHomePage />
      <Footer />
    </>
  );
}