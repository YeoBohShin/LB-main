import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ServicesHomePage() {
  return (
    <div className="w-full flex justify-center xl:min-h-screen xl:items-center">
      <div className="relative w-full max-w-7xl m-5 xl:mx-auto">
        <motion.div
          className="bg-base-200 z-10 p-10 rounded-4xl shadow-lg flex flex-col text-center items-center
                     w-full xl:absolute xl:top-1/2 xl:top-1/3 xl:right-30 xl:w-1/3"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: "spring", stiffness: 50, damping: 20, duration: 0.8 }}
          >
          <h1 className="text-4xl mb-5">Our Services</h1>
          <p className="text-lg mb-5">
            We offer a range of premium limousine services tailored to your needs.
          </p>
          <Link to="/services" className="btn btn-primary">
            View Services
          </Link>
        </motion.div>
        <motion.div
          className="w-full xl:max-w-4xl mt-5 xl:mt-0"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: "spring", stiffness: 50, damping: 20, duration: 0.8 }}
          >
          <div className="w-full rounded-4xl xl:m-15">
            <img
              src="./CircleParkedCar.jpg"
              alt="Events"
              className="w-full h-full object-cover rounded-4xl"
              />
          </div>
        </motion.div>
      </div>
    </div>
  );
}