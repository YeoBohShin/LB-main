import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function BrandingHomePage() {
  return (
    <div className="flex flex-col xl:flex-row items-center xl:min-h-screen">
      <motion.div
        className="flex flex-col items-center justify-center text-center p-8 xl:w-1/2 xl:absolute"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ type: "spring", stiffness: 50, damping: 20, duration: 0.8 }}
        >
        <h1>Welcome to the Branding Home Page</h1>
        <Link to="/branding" className="btn btn-info">Go to Branding</Link>
      </motion.div>
      <motion.img
        src="/PanPacific.jpg"
        alt="Branding"
        className="w-full rounded-4xl max-w-4xl xl:m-10"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ type: "spring", stiffness: 50, damping: 20, duration: 0.8 }}
      />
    </div>
  );
}