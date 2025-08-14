import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ServicesHomePage() {
  return (
    <div className="flex flex-col xl:flex-row xl:min-h-screen text-center mx-5 items-center justify-start text-primary mb-5 xl:mb-0">
      <motion.div
        className="bg-base-200 z-10 p-10 rounded-4xl shadow-lg relative flex flex-col justify-center items-center mt-5 xl:mt-0 xl:absolute xl:top-5/2 xl:right-1/7 max-w-md"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ type: "spring", stiffness: 50, damping: 20, duration: 0.8 }}
      >
        <h1 className="text-4xl mb-5">Our Services</h1>
        <p className="text-lg mb-10">
          We offer a range of premium limousine services tailored to your needs.
        </p>
        <Link to="/services" className="btn btn-info mb-5">
          View All Services
        </Link>
      </motion.div>
      <motion.div
        className="w-full max-w-4xl mt-5 xl:mt-0"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ type: "spring", stiffness: 50, damping: 20, duration: 0.8 }}
      >
        <div className="w-full rounded-4xl xl:m-15">
          <img
            src="./LeftCar.jpg"
            alt="Events"
            className="w-full h-full object-cover rounded-4xl"
          />
        </div>
      </motion.div>
    </div>
  );
}