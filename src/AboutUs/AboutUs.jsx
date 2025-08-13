import { useEffect } from "react";
import Footer from "../Footer.jsx";

export default function AboutUs() {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <>
    <div className="flex flex-col items-center min-h-screen top-0 text-center text-base-100">
      <h1 className="text-4xl font-bold m-8">About Us</h1>
      <div className="max-w-2xl text-left">
        <p className="mb-4">
          Limo Butler Pte Ltd, formerly known as Xin Events Pte Ltd, was established three years ago with a vision to become Singapore's leading provider of premium chauffeured transport services. We specialize in serving corporate clients, major events, and large-scale projects where transportation logistics are critical.</p>
        <p className="mb-4">
          Our strength lies in our ability to manage complex fleet operations and chauffeur deployments for high-profile events. With a dedicated operations team experienced in sourcing vehicles, recruiting and training chauffeurs, and overseeing on-ground coordination, we provide seamless, end-to-end transport solutions tailored to every event's needs.</p>
        <p className="mb-4">
          Despite being a relatively new startup, Limo Butler has quickly gained traction by successfully supporting major projects involving traffic control, ushering, and VIP transportation. This success is backed by a complete management team with a track record of delivering large-scale logistics with ease and confidence.</p>
        <p className="mb-4">
          We are committed to uplifting industry standards through professional chauffeur training — an area often overlooked by traditional service providers. Our chauffeurs receive ongoing field coaching to ensure they meet the expectations of both organizers and VIP guests.</p>
        <p className="mb-4">
          In addition, Limo Butler adopts rigorous Health, Safety & Environment practices aligned with standards of top-tier oil & gas companies. This ensures the safety and peace of mind of every guest who travels with us.</p>
        <p className="mb-4">
          Looking ahead, Limo Butler aims to evolve into a consultancy partner, offering fleet management and logistics planning to support event organizers with strategic, resource-efficient transport solutions.
        </p>
      </div>
    </div>
    <Footer />
    </>
  );
}