import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function EventsHomePage() {
  return (
    <div className="flex flex-col xl:flex-row xl:min-h-screen text-center mx-5 items-center justify-start text-white">
      <motion.div
        className="text-base-content bg-base-200 z-10 p-10 rounded-4xl shadow-lg relative flex flex-col justify-center items-center mt-5 xl:mt-0 xl:absolute xl:top-10/4 xl:right-1/7 max-w-md"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ type: "spring", stiffness: 50, damping: 20, duration: 0.8 }}
      >
        <h1 className="text-3xl mb-3">Events</h1>
        <p>
          Check out past events that Limo Butler Pte Ltd has been a part of, showcasing our premium limousine services at some of Singapore's most prominent international events.
        </p>
        <Link to="/events" className="btn btn-info mt-3">
          View Events
        </Link>
      </motion.div>
      <motion.div
        className="w-full max-w-3xl mt-5 xl:mt-0"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ type: "spring", stiffness: 50, damping: 20, duration: 0.8 }}
      >
        <div className="w-full rounded-4xl max-w-4xl xl:m-15">
          <img
            src="/LeftCar.jpg"
            alt="Events"
            className="w-full h-full object-cover rounded-4xl"
          />
        </div>
      </motion.div>
    </div>
  );
}