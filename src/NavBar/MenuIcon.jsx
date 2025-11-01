export default function MenuIcon({ setIsOpen }) {
    const handleClick = () => {
        setIsOpen(prev => !prev);
    };

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-primary hover:text-info cursor-pointer mr-5 md:hidden"
            onClick={handleClick}
        >
            <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
   </svg>
    );
}