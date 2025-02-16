import { useEffect, useState } from "react";

const ProgressBar = ({ progress }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 15);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return isScrolled ? (
        <div className="w-full fixed top-0 left-0 bg-emerald-200 h-1 z-50">
            <div
                className="h-full bg-emerald-700 transition-[width] duration-500 ease-in-out"
                style={{ width: `${progress}%` }}></div>
        </div>
    ) : null;
};

export default ProgressBar;
