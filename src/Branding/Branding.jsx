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
        className="rounded-4xl shadow-lg m-8 w-3/4 h-auto"
      />
      <p className="text-lg m-8 max-w-3xl leading-relaxed text-left">
        At Limo Butler Pte Ltd, our brand is built on the belief that luxury should be effortless, service should be seamless, and every journey should be memorable.
        From our impeccably maintained fleet to our well-trained chauffeurs, every detail reflects our commitment to excellence.

        We are more than a limousine service — we are a symbol of sophistication, trust, and reliability, proudly serving clients who expect the very best.
      </p>
      <Footer />
    </div>
  );
}