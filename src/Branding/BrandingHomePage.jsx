import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function BrandingHomePage() {
  return (
    <div className="flex flex-col xl:flex-row-reverse items-center xl:min-h-screen mb-5 xl:mb-0 mx-5 xl:mx-0">
      <motion.div
        className="flex flex-col items-center justify-center text-center p-8 xl:absolute xl:top-24/5 xl:left-1/7 xl:w-1/4 bg-base-200 rounded-4xl shadow-lg z-10 mb-5 xl:mb-0"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ type: "spring", stiffness: 50, damping: 20, duration: 0.8 }}
        >
        <h1 className="text-4xl font-bold mb-4">Branding</h1>
        <p className="mb-3">
          Want your logo rolling around town? Here at Limo Butler Pte Ltd, we can make it happen.
        </p>
        <Link to="/branding" className="btn btn-primary">Find out more</Link>
      </motion.div>
      <motion.img
        src="./PanPacific.jpg"
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