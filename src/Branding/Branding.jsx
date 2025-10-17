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
            Want your logo rolling around town? Here at Limo Butler Pte Ltd, we can make it happen.
            Share your design with us — we'll handle the print and installation. 
            Whether it's one car or a full fleet, we'll ensure your brand stands out on the road.
          </p>
          </div>
      </div>
      <Footer />
    </div>
  );
}