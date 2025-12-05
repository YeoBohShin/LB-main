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
      <h1 className="hidden text-7xl font-bold xl:absolute xl:block xl:top-7/9">Branding</h1>
      <div className="flex flex-row-reverse items-center justify-center xl:justify-start flex-wrap xl:flex-nowrap xl:m-5 gap-10">
        <div className="text-center m-10 xl:my-0">
          <h1 className="text-4xl font-semibold text-center mb-5">Mark your Brand</h1>
          <p className="text-lg max-w-3xl leading-relaxed text-left">
            We blend sophistication with service, offering premium transport experiences 
            that go beyond getting from point to point. 
            Share your design with us, we'll handle the print and installation. 
            Whether it's one car or a full fleet, we'll ensure your brand stands out on the road.
          </p>
          </div>
          <img
          src="./LeftCar.jpg"
          alt="Limo Branding"
          className="h-auto w-full xl:max-w-2xl xl:rounded-4xl xl:shadow-lg"
        />
      </div>
      <Footer />
    </div>
  );
}