import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function EventsHomePage() {
  return (
    <div className="flex flex-col items-center justify-center xl:min-h-screen text-white mx-5 xl:mx-0">
      <motion.div className="text-center p-10 xl:absolute top-18/7 z-10 xl:text-base-100 bg-base-200 xl:bg-transparent rounded-4xl shadow-lg xl:shadow-none"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ type: "spring", stiffness: 50, damping: 20, duration: 0.8 }}
      >
        <h1 className="text-5xl mb-3">Events</h1>
        <p className="w-[375px] text-lg">
          Check out past events that Limo Butler Pte Ltd has been a part of, showcasing our premium limousine services at some of Singapore's most prominent international events.
        </p>
        <Link to="/events" className="btn xl:btn-neutral mt-3 btn-primary">
          View Events
        </Link>
      </motion.div>
      <motion.div
        className="w-full rounded-4xl shadow-lg mt-5 xl:mt-0 max-w-5xl"
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
  );
}