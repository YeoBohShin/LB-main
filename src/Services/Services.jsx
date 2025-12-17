import { useEffect } from "react";
import Footer from "../Footer";

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen items-center">
      <div className="flex flex-col xl:flex-row p-10 xl:m-10 justify-between max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-center xl:w-1/2">
          <h1 className="text-5xl text-base-100 font-bold">Our Services</h1>
          <div className="mt-10 mb-5 bg-base-200 p-10 rounded-4xl shadow-lg text-center">
            <h1 className="text-4xl mb-5">Events Fleet Management</h1>
            <p className="text-lg">
              The team has a wealth of holistic project fleet management experiences from fleet sourcing and negotiation, 
              chauffeurs recruitment, to the in-project fleet detailing and chauffeur deployments, we offer an unmatched transport solutions to organisers.
            </p>
          </div>
          <img 
            src="./RightCar.jpg"
            alt="Events Fleet Management"
            className="w-full xl:max-w-4xl rounded-4xl shadow-lg xl:mb-10 xl:mt-15"
          />
          <div className="w-full mt-5 xl:mt-20 mb-5 bg-base-200 p-10 rounded-4xl shadow-lg text-center hidden xl:block">
            <h1 className="text-3xl xl:text-4xl mb-5">Airport Transfers</h1>
            <p className="text-lg">
              Take advantage of our luxury fleet for your next trip to or from the airport. 
              Limo Butler provides airport meet and greet services in which our drivers will meet 
              you after the baggage claim area with a name sign and carry your luggage for you.
              Our professional team of chauffeurs carefully monitor all flight arrivals and are always 
              on time and well informed.
            </p>
          </div>
          <div className="mt-5 xl:mt-20 mb-5 bg-base-200 p-10 rounded-4xl shadow-lg text-center xl:w-145 xl:hidden">
            <h1 className="text-4xl mb-5">Corporate Transportation</h1>
            <p className="text-lg">
              Limo Butler Pte Ltd understands the special needs of our clients. Safety is 
              our first priority for our corporate clients. We maintain close contact 
              with our chauffeurs at all times so regardless of any travel changes or special 
              needs they are always ready. Our goal is to transport our passengers to and from their 
              meetings in the most efficient, timely, comfortable and safe way possible.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img 
            src="./WideViewCar.jpeg" 
            alt="Services" 
            className="w-full xl:max-w-md rounded-4xl shadow-lg"
          />
          <div className="mt-5 xl:mt-20 mb-5 bg-base-200 p-10 rounded-4xl shadow-lg text-center xl:w-145 hidden xl:block">
            <h1 className="text-4xl mb-5">Corporate Transportation</h1>
            <p className="text-lg">
              Limo Butler Pte Ltd understands the special needs of our clients. Safety is 
              our first priority for our corporate clients. We maintain close contact 
              with our chauffeurs at all times so regardless of any travel changes or special 
              needs they are always ready. Our goal is to transport our passengers to and from their 
              meetings in the most efficient, timely, comfortable and safe way possible.
            </p>
          </div>
          <div className="w-full mt-5 xl:mt-20 mb-5 bg-base-200 p-10 rounded-4xl shadow-lg text-center xl:hidden">
            <h1 className="text-3xl xl:text-4xl mb-5">Airport Transfers</h1>
            <p className="text-lg">
              Take advantage of our luxury fleet for your next trip to or from the airport. 
              Limo Butler provides airport meet and greet services in which our drivers will meet 
              you after the baggage claim area with a name sign and carry your luggage for you.
              Our professional team of chauffeurs carefully monitor all flight arrivals and are always 
              on time and well informed.
            </p>
          </div>
          <img 
            src="./Singapore_Airlines-A380.jpg" 
            alt="Airport Transfers"
            className="w-full xl:max-w-xl rounded-4xl shadow-lg xl:mt-10"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}