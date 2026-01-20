import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function BrandingHomePage() {
  return (
    <div className="w-full flex justify-center xl:min-h-screen xl:items-center">
      <div className="relative w-full max-w-7xl m-5 xl:mx-auto">
        <motion.div
          className="bg-base-200 z-10 p-10 rounded-4xl shadow-lg flex flex-col text-center items-center
                      w-full xl:absolute xl:top-1/2 xl:top-1/3 xl:right-30 xl:w-1/3 mb-5 xl:mb-0"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: "spring", stiffness: 50, damping: 20, duration: 0.8 }}
          >
          <h1 className="text-4xl mb-4">Branding</h1>
          <p>
            Want your logo rolling around town?
          </p>
          <p className="mb-5">
            Limo Butler Pte Ltd can make it happen.
          </p>
          <Link to="/branding" className="btn btn-primary">Find out more</Link>
        </motion.div>
        <motion.img
          src="./Branding.jpeg"
          alt="Branding"
          className="w-full rounded-4xl xl:max-w-4xl xl:m-10"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: "spring", stiffness: 50, damping: 20, duration: 0.8 }}
        />
      </div>
    </div>
  );
}