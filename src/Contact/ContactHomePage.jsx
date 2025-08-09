import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ContactHomePage() {
  return (
    <div className="relative flex flex-col m-5 xl:flex-row-reverse xl:min-h-screen xl:m-10 xl:ml-0 items-center">
      <motion.div
        className="relative w-full max-w-5xl xl:m-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ type: "spring", stiffness: 50, damping: 20, duration: 0.8 }}
      >
        <img
          src="/Handshake.png"
          alt="Contact Us"
          className="rounded-4xl w-full"
        />
        </motion.div>
        <motion.div
          className="relative bg-base-200 text-center z-10 p-10 rounded-4xl shadow-lg xl:left-30 xl:w-1/4 mt-5 xl:mt-0"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: "spring", stiffness: 50, damping: 20, duration: 0.8 }}
        >
          <h2 className="text-3xl mb-4">Get in Touch</h2>
          <p>
            We're here to elevate your travel experience with our premium limousine
            services.
          </p>
          <p className="mt-3 mb-2">
            Feel free to contact us anytime with your inquiries or booking requests.
          </p>
          <Link to="/contact" className="btn btn-info mt-3">Contact Us</Link>
      </motion.div>
    </div>
  );
}