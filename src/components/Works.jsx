import { motion } from "framer-motion";
import React from "react";
import { Tilt } from "react-tilt";
import { projects } from "../constants";
import { slideInFromBottom } from "../utils/motion";

//ProjectCard Component - Displays individual project cards with tilt and animation effects.
const ProjectCard = ({ name, description, tags, image, link }) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={slideInFromBottom}>
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className="md:w-[390px] h-[480px] bg-emerald-600 border-[2px] border-emerald-300 rounded-[15px] flex flex-col">
                <div className="relative w-full h-[230px]">
                    <img
                        src={image}
                        alt={`project ${name} image`}
                        className="pt-[1px] w-full h-full object-cover rounded-t-[15px] hover:saturate-200"
                    />
                </div>
                <div className="mt-2 ml-2">
                    <h3 className="text-emerald-200 text-[24px] underline decoration-emerald-200 decoration-wavy underline-offset-[8px]">
                        {name}
                    </h3>
                    <p className="mt-4 text-emerald-300">{description}</p>
                </div>
                <div className="mt-2 ml-2 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <p
                            key={tag.name}
                            className={`text-[14px] ${tag.color}`}>
                            #{tag.name}
                        </p>
                    ))}
                </div>
                <div className="mt-auto mb-4 ml-2">
                    <a
                        href={link}
                        className="p-2 text-xl text-emerald-100 bg-emerald-700 border border-emerald-300 rounded-md hover:bg-emerald-900 transition duration-200">
                        Github
                    </a>
                </div>
            </Tilt>
        </motion.div>
    );
};

//Works Component - Displays a list of projects with animation and structure.
const Works = () => {
    return (
        <section name="works" className="sm:p-5 lg:p-5 max-w-7xl relative z-0 place-self-center">
            {/* Invisible span for deep linking */}
            <span className="hash-span" id="projects">
                &nbsp;
            </span>

            {/* Heading and Section Intro */}
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={slideInFromBottom}>
                <p className="sm:text-[18px] md:text-[24px] text-emerald-500 uppercase tracking-widest">
                    NOTABLE
                </p>
                <h2 className="md:text-[60px] sm:text-[50px] text-emerald-200 tracking-widest border-b-[3px] border-emerald-500">
                    Projects
                </h2>
            </motion.div>

            {/* Project Cards */}
            <div className="mt-10 flex flex-wrap gap-5 place-content-center">
                {projects.map((project, index) => (
                    <ProjectCard key={`project-${index}`} {...project} />
                ))}
            </div>
        </section>
    );
};

export default Works;
