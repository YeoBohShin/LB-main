import { useEffect } from "react";
import Carousel from "./Carousel";
import Footer from "../Footer";

export default function Events() {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div className="flex flex-col items-center justify-top min-h-screen top-0 text-center text-base-content">
      <h1 className="text-[48px] font-bold m-4 text-base-100">Events</h1>
      <p className="text-justify text-base-100 max-w-[800px] m-5">Over the years, Limo Butler Pte Ltd has had the honour of providing premium limousine services for some of Singapore’s most prominent international events. From financial summits and global exhibitions to world-class sporting events and cultural festivals, our dedication to reliability, professionalism, and luxury transport has made us a trusted partner for high-profile occasions.</p>
      <div className="flex flex-col xl:flex-row items-center justify-center mt-4">
        <img 
          src="./AirShow.jpg"
          alt="Air Show"
          className="h-50 m-10 rounded-4xl"
        />
        <p className="text-lg bg-base-200 z-10 p-10 rounded-4xl shadow-lg max-w-[600px] m-5">
          Every two years, high-level government and military delegations, as well as senior corporate executives around the world attend the Singapore Airshow to forge partnerships and seal deals in this region. As one of the world's most influential airshows, this is the place to be for leading aerospace companies and budding players eager to make their mark in the international aerospace and defence market!
        </p>
      </div>
      <div className="flex flex-col xl:flex-row-reverse items-center justify-center">
        <img
          src="./IMDEX.jpg"
          alt="IMDEX"
          className="h-50 m-10 rounded-4xl"
          initial={{ x: "100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 80, damping: 18, duration: 0.6 }}
        />
        <p className="text-lg bg-base-200 z-10 p-10 rounded-4xl shadow-lg max-w-[600px] m-5">
          IMDEX Asia offers exhibitors unrivalled access to the fast-growing regional market, attracting an elite audience of decision-makers, buyers and officials from navies, agencies and maritime companies worldwide.
        </p>
      </div>
      <Carousel />
      <Footer />
    </div>
  );
}