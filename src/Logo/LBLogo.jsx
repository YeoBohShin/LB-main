import { useEffect, useState } from 'react';

export default function LBLogo() {
    const [isDark, setIsDark] = useState(
        window.matchMedia('(prefers-color-scheme: dark)').matches
    );

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handler = (e) => setIsDark(e.matches);
        mediaQuery.addEventListener('change', handler);
        return () => mediaQuery.removeEventListener('change', handler);
    }, []);

    return (
        <img
            src={isDark ? './LBFullLogoDark.png' : './LBFullLogo.png'}
            alt="Limo Banner"
            className="w-full h-auto max-h-[80px] m-3"
        />
    );
}