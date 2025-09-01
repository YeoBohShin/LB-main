import { useEffect } from "react";
import Footer from "../Footer";

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-row p-10 m-10 justify-between">
        <div className="flex flex-col items-center w-1/2">
          <h1 className="text-4xl mb-5 text-base-100">Our Services</h1>
          <ul className="list-disc list-inside text-base-100">
            <li>Events Fleet Management</li>
            <li>Corporate Transportation</li>
            <li>Airport Transfers</li>
          </ul>
          <div className="mt-20 mb-5 bg-base-200 p-10 rounded-4xl shadow-lg w-145 text-center">
            <h1 className="text-4xl mb-5">Events Fleet Management</h1>
            <p className="text-lg">
              The team has a wealth of holistic project fleet management experiences from fleet sourcing and negotiation, 
              chauffeurs recruitment, to the in-project fleet detailing and chauffeur deployments, we offer an unmatched transport solutions to organisers.
            </p>
          </div>
          <img 
            src="./RightCar.jpg"
            alt="Events Fleet Management"
            className="h-120 rounded-4xl shadow-lg mb-10 mt-15"
          />
          <div className="mt-20 mb-5 bg-base-200 p-10 rounded-4xl shadow-lg w-145 text-center">
            <h1 className="text-4xl mb-5">Airport Transfers</h1>
            <p className="text-lg">
              Take advantage of our luxury fleet for your next trip to or from the airport. 
              Limo Butler provides airport meet and greet services in which our drivers will meet 
              you after the baggage claim area with a name sign and carry your luggage for you.
              Our professional team of chauffeurs carefully monitor all flight arrivals and are always 
              on time and well informed.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img 
            src="./WideViewCar.jpg" 
            alt="Services" 
            className="h-150 rounded-4xl shadow-lg"
          />
          <div className="mt-20 mb-5 bg-base-200 p-10 rounded-4xl shadow-lg w-145 text-center">
            <h1 className="text-4xl mb-5">Corporate Transportation</h1>
            <p className="text-lg">
              Limo Butler Pte Ltd understands and welcomes the special needs of business travellers. 
              Safety is our first priority for our corporate clients.
              Patient and experienced chauffeurs, highly valued for their professional skills and 
              attention to passenger needs are ready to serve you. We maintain close contact with our 
              chauffeurs at all times so regardless of any travel changes or special needs they are 
              always ready.
              We know how important it is to provide business travellers with a reliable chauffeur. 
              Each of our chauffeur is professional, knowledgeable, discreet, and very familiar with 
              the particular needs of the business traveller. Our goal is to transport our passengers 
              to and from their meetings in the most efficient, timely, comfortable and safe way possible.
            </p>
          </div>
          <img 
            src="./Singapore_Airlines-A380.jpg" 
            alt="Airport Transfers"
            className="h-100 rounded-4xl shadow-lg mt-10 mb-15"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}