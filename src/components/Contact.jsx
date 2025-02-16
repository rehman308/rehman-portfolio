import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import emailjs from "@emailjs/browser";
import { robot_waving_hi } from "../assets";
import styles from "./RobotCarousel.module.css";

import { EarthCanvas, StarsCanvas } from "../assets/canvas";
import {
    slideInFromLeft,
    slideInFromBottom,
    slideInFromRight,
} from "../utils/motion";

const InputField = ({ label, value, onChange, placeholder, name, type }) => (
    <label className="flex flex-col w-full">
        <span className="mb-1 ml-2 text-emerald-100">{label}</span>
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="py-2 px-2 w-full bg-emerald-900 placeholder:text-emerald-600 text-emerald-200 rounded-lg border-2 border-emerald-500 outline-none"
        />
    </label>
);

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [loading, setLoading] = useState(false);
    const [emailError, setEmailError] = useState("");
    const [nameError, setNameError] = useState("");
    const [messageError, setMessageError] = useState("");
    const [confirmation, setConfirmation] = useState("");
    const isBigScreen = useMediaQuery({ query: "(min-width: 768px)" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const validateEmail = (email) => {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return regex.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setNameError("");
        setEmailError("");
        setMessageError("");
        setConfirmation("");

        if (!form.name.trim()) {
            setNameError("Name is required.");
            return;
        }

        if (!validateEmail(form.email)) {
            setEmailError("Please enter a valid email address.");
            return;
        }

        if (!form.message.trim()) {
            setMessageError("Message is required.");
            return;
        }

        setLoading(true);

        emailjs
            .send(
                "service_dzpx7ae",
                "template_n851a7o",
                {
                    from_name: form.name,
                    to_name: "Abdul Rehman",
                    from_email: form.email,
                    to_email: "rehman308@gmail.com",
                    message: form.message,
                },
                "gPV6iMWUYcoMt7yQ4"
            )
            .then(() => {
                setLoading(false);
                setConfirmation(
                    "Thank you! I will get back to you as soon as possible."
                );
                setForm({ name: "", email: "", message: "" });
            })
            .catch((error) => {
                setLoading(false);
                console.error(error);
                setConfirmation("Something went wrong. Please try again 😐.");
            });
    };

    return (
        <section
            name="contact"
            className="p-5 max-w-7xl mx-auto relative z-0 overflow-hidden">
            <div>
                <StarsCanvas />
            </div>
            <span className="hash-span" id="contact">
                &nbsp;
            </span>
            <div className="flex flex-col">
                {/*Section Name*/}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={slideInFromBottom}>
                    <p className="sm:text-[18px] md:text-[24px] text-emerald-500 uppercase tracking-widest">
                        Get in touch
                    </p>
                    <h2 className="md:text-[60px] sm:text-[50px] text-emerald-200 tracking-widest border-b-[3px] border-emerald-500">
                        Contact Me
                    </h2>
                </motion.div>

                {/*Form*/}
                <div className="flex sm:flex-col-reverse md:flex-row items-center">
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={slideInFromLeft}
                        className="md:ml-6 p-6 md:w-7/12 bg-emerald-600 rounded-2xl border-2 border-emerald-500">
                        <form
                            ref={formRef}
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-6">
                            <InputField
                                label="Your Name"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Insert Your name here..."
                                type="text"
                            />
                            {nameError && (
                                <span className="md:ml-2 text-red-600 tracking-widest">
                                    {nameError}
                                </span>
                            )}

                            <InputField
                                label="Email Address"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="What's your email address?"
                                type="email"
                            />
                            {emailError && (
                                <span className="md:ml-2 text-red-600 tracking-widest">
                                    {emailError}
                                </span>
                            )}

                            <InputField
                                label="Your Message"
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="What you want to say...?"
                                type="text"
                            />
                            {messageError && (
                                <span className="md:ml-2 text-red-600 tracking-widest">
                                    {messageError}
                                </span>
                            )}

                            <button
                                type="submit"
                                className="py-3 px-6 sm:w-fit w-full bg-emerald-700 hover:bg-emerald-900 rounded-xl text-emerald-200 border-2 border-emerald-500">
                                {loading ? "Sending..." : "Send"}
                            </button>
                            {confirmation && (
                                <p className="text-green-300">{confirmation}</p>
                            )}
                        </form>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={slideInFromRight}
                        className="md:pl-10 w-[450px] h-[450px] md:w-[500px] md:h-[500px]">
                        <EarthCanvas />
                    </motion.div>
                </div>
                <motion.div className="sm:mt-10 md:mt-0 md:pr-16 md:w-full md:flex md:justify-center md:items-end">
                    {/* Speech bubble containing the robot's message */}
                    <div
                        className={`sm:ml-4 sm:p-3 md:bottom-[130px] md:p-4 sm:text-lg md:text-lg text-center bg-emerald-600 ${
                            isBigScreen
                                ? `${styles.bubble} ${styles.bubble1}`
                                : `${styles.bubble} ${styles.bubble2}`
                        }`}>
                        Don't forget to leave a message. Bye 👋
                    </div>

                    {/* Robot video animation */}
                    <video
                        autoPlay
                        loop
                        muted
                        className="sm:mt-4 md:mt-0 sm:w-[450px] sm:h-[250px] md:w-[500px] md:h-[300px] object-cover sm:rounded-[15px] md:rounded-[150px] border-[2px] border-emerald-500">
                        <source src={robot_waving_hi} type="video/mp4" />
                        Your browser does not support the video.
                    </video>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
