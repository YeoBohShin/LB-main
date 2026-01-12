import { Link } from "react-router-dom";

export default function Menu({ isOpen, onClose }) {
    const baseClasses =
    "fixed top-0 right-0 w-80 max-w-[80vw] h-full bg-secondary shadow-xl z-50";
  
  const transitionClasses =
    "transform transition-transform duration-300 ease-in-out";
  
  const stateClasses = isOpen ? "translate-x-0" : "translate-x-full";

  return (
    <div className={`${baseClasses} ${transitionClasses} ${stateClasses}`}>
      <div className="flex justify-between items-center mb-6 border-b-2 border-gray-700">
        <h2 className="text-4xl text-white p-8 pl-4">Menu</h2>
      </div>
      <nav>
        <ul className="space-y-2 flex flex-col text-lg font-semibold justify-between">
          <li className="h-full flex p-4 text-primary hover:text-info border-b-2 border-transparent hover:border-info">
                    <Link to="/" onClick={onClose}>Home</Link>
                </li>
                <li className="h-full flex p-4 text-primary hover:text-info border-b-2 border-transparent hover:border-info">
                    <Link to="/services" onClick={onClose}>Services</Link>
                </li>
                <li className="h-full flex p-4 text-primary hover:text-info border-b-2 border-transparent hover:border-info">
                    <Link to="/branding" onClick={onClose}>Branding</Link>
                </li>
                <li className="h-full flex p-4 text-primary hover:text-info border-b-2 border-transparent hover:border-info">
                    <Link to="/events" onClick={onClose}>Events</Link>
                </li>
                <li className="h-full flex p-4 text-primary hover:text-info border-b-2 border-transparent hover:border-info">
                    <Link to="/contact" onClick={onClose}>Contact</Link>
                </li> 
        </ul>
      </nav>
    </div>
    );
}