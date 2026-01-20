import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function EventsHomePage() {
  return (
    <div className="w-full flex justify-center xl:min-h-screen xl:items-center">
      <div className="relative w-full max-w-7xl mx-5 xl:mx-auto flex flex-col xl:flex-row-reverse">
      <motion.div 
        className="flex flex-col items-center text-center p-10 w-full xl:absolute xl:top-2/7 xl:w-3/8 bg-base-200 rounded-4xl shadow-lg z-10 mb-5 xl:mb-0 xl:left-10"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ type: "spring", stiffness: 50, damping: 20, duration: 0.8 }}
        >
        <h1 className="text-4xl mb-3">Events</h1>
        <p className="text-lg text-center xl:w-[375px]">
          Check out past events that Limo Butler Pte Ltd has been a part of, showcasing our premium limousine services at some of Singapore's most prominent international events.
        </p>
        <Link to="/events" className="btn mt-3 btn-primary">
          View Events
        </Link>
      </motion.div>
      <motion.div
        className="w-full rounded-4xl shadow-lg max-w-5xl"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ type: "spring", stiffness: 50, damping: 20, duration: 0.8 }}
        >
      <img
        src="./ParkedCar.jpg"
        alt="Services"
        className="w-full h-auto rounded-4xl shadow-lg"
        />
      </motion.div>
        </div>
    </div>
  );
}