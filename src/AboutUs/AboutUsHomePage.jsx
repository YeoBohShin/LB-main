import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function AboutUsHomePage() {
  return (
    <div className="flex flex-col items-center top-0 text-center mx-5 xl:mx-0 xl:min-h-screen xl:flex-row">
        <motion.div
            className="flex flex-col items-center justify-center p-8 text-base-content bg-base-200 rounded-4xl shadow-lg xl:absolute xl:top-14/3 xl:right-1/15 xl:w-1/3 z-10" 
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: "spring", stiffness: 50, damping: 20, duration: 0.8 }}
        >
            <h1 className="text-4xl font-bold mb-8">About Us</h1>
            <p className="mb-4">
                Limo Butler Pte Ltd has been providing premium limousine services in Singapore since 2010. Learn more about our journey and commitment to excellence.
            </p>
            <Link to="/about" className="btn btn-info mt-4">
                Learn More
            </Link>
        </motion.div>
        <motion.div
            className="w-full max-w-5xl xl:m-10 hidden xl:block"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: "spring", stiffness: 50, damping: 20, duration: 0.8 }}
        >
            <img
                src="/CircleParkedCar.jpg"
                alt="About Us"
                className="w-full h-auto rounded-4xl shadow-lg"
            />
        </motion.div>
    </div>
  );
}