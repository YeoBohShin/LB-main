import { useEffect } from "react";
import Footer from "../Footer";

export default function Branding() {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div className="flex flex-col items-center justify-top min-h-screen top-0 text-center text-base-100">
      <div className="relative">
        <img src="./LimoStaff.jpg" alt="Limo Staff" className="h-auto"/>
        <h1 className="hidden text-7xl font-bold xl:absolute xl:block xl:top-7/9 xl:left-3/7">Branding</h1>
      </div>
      <div className="flex flex-row-reverse items-center justify-center xl:justify-start flex-wrap xl:flex-nowrap xl:m-5 xl:gap-10">
        <img
          src="./BrandingRightCar.jpeg"
          alt="Limo Branding"
          className="h-auto w-full xl:max-w-lg xl:rounded-4xl xl:shadow-lg hidden xl:block"
        />
        <div className="text-center m-10 xl:m-0">
          <h1 className="text-4xl font-semibold text-center my-5">Mark your Brand</h1>
          <p className="text-lg max-w-3xl text-center">
            We blend sophistication with service, offering premium transport experiences 
            that go beyond getting from point to point. Elevate your brand's visibility with our bespoke limousine branding solutions.
          </p>
          <p className="text-lg max-w-3xl text-center">
            Share your design with us, we'll handle the print and installation. 
            Whether it's one car or a full fleet, we'll ensure your brand stands out on the road.
          </p>
        </div>
        <img
          src="./LeftCar.jpg"
          alt="Limo Branding"
          className="h-auto w-full xl:max-w-lg xl:rounded-4xl xl:shadow-lg"
        />
        <img
          src="./BrandingRightCar.jpeg"
          alt="Limo Branding"
          className="h-auto w-full xl:max-w-lg xl:rounded-4xl xl:shadow-lg xl:hidden"
        />
      </div>
      <Footer />
    </div>
  );
}