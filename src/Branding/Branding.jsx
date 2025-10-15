import { useEffect } from "react";
import Footer from "../Footer";

export default function Branding() {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div className="flex flex-col items-center justify-top min-h-screen top-0 text-center text-base-100">
      <img
        src="./LimoStaff.jpg"
        alt="Limo Staff"
        className="h-auto"
      />
      <h1 className="text-7xl font-bold m-8 absolute top-7/9">Our Brand</h1>
      <div className="flex flex-row items-center justify-center xl:justify-start flex-wrap xl:flex-nowrap m-5 xl:mx-20 xl:my-10 gap-10">
        <img
          src="./LeftCar.jpg"
          alt="Limo Branding"
          className="h-auto w-full max-w-2xl rounded-4xl shadow-lg"
        />
        <div className="text-center">
          <h1 className="text-4xl font-semibold m-8 text-center">Mark your Brand</h1>
          <p className="text-lg m-8 max-w-3xl leading-relaxed text-left">
            At Limo Butler Pte Ltd, we go beyond premium transportation by turning our 
            fleet into a moving showcase for your brand. Whether it's a corporate event, 
            product launch, or high-profile campaign, we provide customised branding 
            options that allow your logo and message to be displayed on our 
            vehicles. This leaves a lasting impression as your brand travels in style.
          </p>
          </div>
      </div>
      <Footer />
    </div>
  );
}