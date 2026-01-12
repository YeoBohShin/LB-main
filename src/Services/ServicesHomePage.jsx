import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ServicesHomePage() {
  return (
    <div className="w-full flex justify-center xl:min-h-screen xl:items-center">
      <div className="relative w-full max-w-7xl mx-5 xl:mx-auto flex flex-col xl:flex-row-reverse">
        <motion.div
          className="flex flex-col items-center text-center p-10 w-full xl:absolute xl:top-2/7 xl:w-1/4 bg-base-200 rounded-4xl shadow-lg z-10 mb-5 xl:mb-0 xl:left-50"
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
          className="w-full xl:max-w-4xl"
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