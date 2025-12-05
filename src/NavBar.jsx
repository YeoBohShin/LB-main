import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from './NavBar/MenuIcon';
import LBLogo from './Logo/LBLogo';

export default function NavBar({ setIsOpen }) {
    const [visible, setVisible] = useState(true);
    const lastScrollY = useRef(window.scrollY);

    useEffect(() => {
            const handleScroll = () => {
                // If scrolling down, hide the navbar; if scrolling up, show it
                if (window.scrollY > lastScrollY.current && window.scrollY > 80) {
                    setVisible(false);
                } else {
                    setVisible(true);
                }

                lastScrollY.current = window.scrollY;
            };

            window.addEventListener("scroll", handleScroll);
            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }, []);

    return (
        <nav className={`sticky top-0 w-full flex flex-row justify-between items-center gap-25 transition-transform duration-300 z-40 ${
            visible ? "translate-y-0" : "-translate-y-full"
          } shadow-lg bg-secondary`}>
            <Link to="/"><LBLogo /></Link>
            <ul className="flex text-lg font-semibold justify-between items-center w-200 h-26 hidden md:flex">
                <li className="h-full flex items-center justify-center w-1/4 text-primary hover:text-info border-b-2 border-transparent hover:border-info text-center">
                    <Link to="/">Home</Link>
                </li>
                <li className="h-full flex items-center justify-center w-1/4 text-primary hover:text-info border-b-2 border-transparent hover:border-info text-center">
                    <Link to="/events">Events</Link>
                </li>
                <li className="h-full flex items-center justify-center w-1/4 text-primary hover:text-info border-b-2 border-transparent hover:border-info text-center">
                    <Link to="/services">Services</Link>
                </li>
                <li className="h-full flex items-center justify-center w-1/4 text-primary hover:text-info border-b-2 border-transparent hover:border-info text-center">
                    <Link to="/branding">Branding</Link>
                </li>
                <li className="h-full flex items-center justify-center w-1/4 text-primary hover:text-info border-b-2 border-transparent hover:border-info text-center">
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
            <MenuIcon setIsOpen={setIsOpen} />
        </nav>
    );
}