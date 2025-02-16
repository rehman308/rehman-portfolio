import React from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { iconEmail, iconGithub, iconLinkedin } from "../assets/index.js";
import {
    footerAnimation,
    navAnimation,
} from "../utils/motion";

const Footer = () => {
    const styles = {
        icon: "w-5 h-5",
        text: "text-emerald-100 hover:text-white text-[18px] font-medium",
    };

    const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });

    return (
        <motion.footer name="footer" className="py-3 px-4 sm:px-8 w-full flex sm:flex-col md:flex-row gap-4 justify-center shadow-lg backdrop-blur-md bg-emerald-800">
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={isSmallScreen ? footerAnimation : navAnimation(0)}
                className="flex gap-2">
                <img src={iconEmail} alt="email icon" className={styles.icon} />
                <a href="mailto:rehman308@gmail.com" className={styles.text}>
                    rehman308@gmail.com
                </a>
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={isSmallScreen ? footerAnimation : navAnimation(0.5)}
                className="flex gap-2">
                <img
                    src={iconGithub}
                    alt="email icon"
                    className={styles.icon}
                />
                <a href="https://github.com/rehman308" className={styles.text}>
                    Github
                </a>
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={isSmallScreen ? footerAnimation : navAnimation(0.7)}
                className="flex gap-2">
                <img
                    src={iconLinkedin}
                    alt="email icon"
                    className={styles.icon}
                />
                <a
                    href="https://www.linkedin.com/in/abdul-rahman-yaqoob-092470202/"
                    className={styles.text}>
                    LinkedIn
                </a>
            </motion.div>
        </motion.footer>
    );
};

export default Footer;