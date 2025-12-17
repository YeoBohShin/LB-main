import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ContactHomePage() {
  return (
    <div className="w-full flex justify-center xl:min-h-screen xl:items-center">
      <div className="relative w-full max-w-7xl mx-5 xl:mx-auto flex flex-col xl:flex-row">
        <motion.div
            className="bg-base-200 z-10 p-8 rounded-4xl w-full shadow-lg relative flex flex-col justify-center items-center xl:mt-0 xl:absolute xl:top-3/8 xl:right-1/7 xl:w-1/4 text-center mb-5 xl:mb-0"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: "spring", stiffness: 50, damping: 20, duration: 0.8 }}
        >
            <h2 className="text-3xl mb-4">Get in Touch</h2>
            <p className="mb-5">
              We're here to elevate your travel experience with our premium limousine
              services.
            </p>
            <Link to="/contact" className="btn btn-primary">Contact Us</Link>
        </motion.div>
        <motion.div
        className="w-full xl:max-w-4xl xl:m-10 xl:my-0"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: "spring", stiffness: 50, damping: 20, duration: 0.8 }}
        >
          <img
            src="./ContactUs.jpeg"
            alt="Contact Us"
            className="rounded-4xl w-full"
          />
          </motion.div>
      </div>
    </div>
  );
}