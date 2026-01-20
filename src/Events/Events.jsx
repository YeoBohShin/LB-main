import { useEffect } from "react";
import Carousel from "./Carousel";
import Footer from "../Footer";

export default function Events() {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-top min-h-screen top-0 text-center text-base-content">
        <h1 className="text-[48px] font-bold m-4 text-base-100">Events</h1>
        <p className="text-justify text-base-100 max-w-[800px] m-5">Over the years, Limo Butler Pte Ltd has had the honour of providing premium limousine services for some of Singapore’s most prominent international events. From financial summits and global exhibitions to world-class sporting events and cultural festivals, our dedication to reliability, professionalism, and luxury transport has made us a trusted partner for high-profile occasions.</p>
        <Carousel />
      </div>
      <Footer />
      </>
  );
}