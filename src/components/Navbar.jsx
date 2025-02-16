import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { close, menu } from "../assets";
import { navLinks } from "../constants";
import { navAnimation, slideInFromTop } from "../utils/motion";

const Navbar = () => {
    const [active, setActive] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 15) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleResume = () => {
        window.open("./resume_portfolio.pdf");
    };

    const handleLinkClick = (title) => {
        setActive(title);
        setIsMenuOpen(false);
    };

    return (
        <nav
            className={`py-3 px-4 sm:px-8 w-full flex items-center fixed top-0 z-20 shadow-lg transition-all duration-300 ${
                isScrolled ? "backdrop-blur-md bg-emerald-800/70" : ""
            }`}>
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <Link
                    to="/"
                    className="flex items-center gap-2"
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}>
                    <motion.p
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={navAnimation(0)}
                        className="text-emerald-100 text-[20px] tracking-widest cursor-pointer">
                        Abdul Rehman Portfolio
                    </motion.p>
                </Link>

                <ul className="hidden md:flex items-center gap-6">
                    {navLinks.map((link, index) => (
                        <motion.li
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            variants={navAnimation(index * 0.5)}
                            key={link.id}
                            className={`${
                                active === link.title
                                    ? "text-white"
                                    : "text-emerald-100"
                            } hover:text-white text-[18px] font-medium cursor-pointer`}
                            onClick={() => handleLinkClick(link.title)}>
                            <a href={`#${link.id}`}>{link.title}</a>
                        </motion.li>
                    ))}

                    <motion.li
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={navAnimation(3 * 0.5)}
                        className="text-emerald-100 hover:text-white text-[18px] font-medium cursor-pointer"
                        onClick={toggleResume}>
                        <button>Resume</button>
                    </motion.li>
                </ul>

                <div className="flex md:hidden items-center">
                    <img
                        src={isMenuOpen ? close : menu}
                        alt="menu"
                        className="w-[28px] h-[18px] object-contain cursor-pointer"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    />

                    {isMenuOpen && (
                        <motion.div
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            variants={slideInFromTop}
                            className="absolute top-16 right-4 bg-emerald-900 p-4 border-[2px] border-emerald-500 rounded-lg">
                            <ul className="flex flex-col gap-4">
                                {navLinks.map((link) => (
                                    <li
                                        key={link.id}
                                        className={`${
                                            active === link.title
                                                ? "text-white"
                                                : "text-emerald-100"
                                        } hover:text-white text-[18px] font-medium cursor-pointer`}
                                        onClick={() =>
                                            handleLinkClick(link.title)
                                        }>
                                        <a href={`#${link.id}`}>{link.title}</a>
                                    </li>
                                ))}

                                <li
                                    className="text-emerald-100 hover:text-white text-[18px] font-medium cursor-pointer"
                                    onClick={toggleResume}>
                                    <button>Resume</button>
                                </li>
                            </ul>
                        </motion.div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
