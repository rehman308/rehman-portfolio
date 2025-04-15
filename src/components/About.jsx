import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import { Tilt } from 'react-tilt';
import { services } from '../constants';
import { slideInFromBottom } from '../utils/motion';
import { robot_two_hands_pointing_left, robot_two_hands_pointing_top_left } from '../assets';
import styles from './About.module.css';

//ServiceCard Component - Displays individual service cards with tilt and animation effects.
const ServiceCard = ({ title, icon, animateSmall, animateBig, isSmallScreen }) => (
  <Tilt className='w-32'>
    {/* Apply framer motion animation to the service card */}
    <motion.div
      initial='hidden'
      whileInView='show'
      viewport={{ once: true }}
      variants={slideInFromBottom}
      className={`p-4 w-full bg-emerald-400/40 border-emerald-500 border-[3px] rounded-[15px] ${
        isSmallScreen && animateSmall ? 'sm:animate-heartBeat' : 'animate-jello'
      } ${animateBig ? 'md:animate-heartBeat' : 'animate-jello'}`}
    >
      <div className='flex flex-col place-items-center'>
        {/* Service Icon */}
        <img
          src={icon}
          alt={title}
          className='size-16'
        />

        {/* Service Title */}
        <h3 className='mt-4 text-[18px]'>{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

//About Component - Displays the overview and technologies icons.
const About = () => {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 767px)' });
  const isBigScreen = useMediaQuery({ query: '(min-width: 768px)' });

  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  function handleVideoLoaded() {
    setIsVideoLoaded(true);
  }

  return (
    <section
      name='about'
      className='sm:p-5 lg:p-5 max-w-7xl place-self-center'
    >
      {/* Invisible span for deep linking (Anchor for "About" section) */}
      <span
        className='hash-span'
        id='about'
      >
        &nbsp;
      </span>

      {/* Introduction Header */}
      <motion.div
        initial='hidden'
        whileInView='show'
        viewport={{ once: true }}
        variants={slideInFromBottom}
      >
        <p className='sm:text-[18px] md:text-[24px] text-emerald-500 uppercase tracking-widest'>Introduction</p>
        <h2 className='md:text-[60px] sm:text-[50px] text-emerald-200 tracking-widest border-b-[3px] border-emerald-500'>Overview</h2>
      </motion.div>

      {/* About Description and Video Section */}
      <motion.div
        initial='hidden'
        whileInView='show'
        viewport={{ once: true }}
        variants={slideInFromBottom}
        className='mt-6 flex sm:flex-col md:flex-row'
      >
        {/* Description text */}
        <p
          className={`md:mr-3 p-4 backdrop-blur-[1px] text-[16px] text-emerald-100 md:tracking-widest leading-[30px] text-justify bg-emerald-600 ${
            isBigScreen ? `${styles.bubble} ${styles.bubble1}` : `${styles.bubble} ${styles.bubble2}`
          }`}
        >
          I am a Software Developer, specializing in Web development using the MERN Stack with few months of experience. I am skilled in HTML, CSS,
          JavaScript, Python, Node, Express, REST APIs, Framer Motion and databases like MongoDB/MySQL. I am proficient in version control with Git
          and have experience deploying applications on platforms like Heroku/AWS. I focus on writing clean, efficient code and collaborating
          effectively in team environments. I am eager to grow within a dynamic organization, contributing to impactful software solutions and
          continuously expand my expertise in emerging technologies.
        </p>
        {/* Video animation of robot pointing for big screens */}
        {isBigScreen && (
          <>
            {!isVideoLoaded && (
              <div className='flex items-center text-center'>
                <p>Loading Animation</p>
              </div>
            )}
            <video
              autoPlay
              loop
              muted
              preload='auto'
              onLoadedData={handleVideoLoaded}
              className={`w-[400px] place-self-center border-[2px] border-emerald-500 rounded-2xl transition-opacity duration-300 ${
                isVideoLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <source
                src={robot_two_hands_pointing_left}
                type='video/mp4'
              />
              Your browser does not support the video.
            </video>
          </>
        )}
        {/* Video animation of robot pointing for small screens*/}
        {isSmallScreen && (
          <>
            {!isVideoLoaded && (
              <div className='mt-4 flex justify-center text-center'>
                <p>Loading Animation</p>
              </div>
            )}
            <video
              autoPlay
              loop
              muted
              preload='auto'
              onLoadedData={handleVideoLoaded}
              className={`mt-4 w-[400px] place-self-center border-[2px] border-emerald-500 rounded-2xl transition-opacity duration-300 ${
                isVideoLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <source
                src={robot_two_hands_pointing_left}
                type='video/mp4'
              />
              Your browser does not support the video.
            </video>
          </>
        )}
      </motion.div>

      {/* Technologies Section Header */}
      <motion.div
        initial='hidden'
        whileInView='show'
        viewport={{ once: true }}
        variants={slideInFromBottom}
      ></motion.div>

      {/* Service Cards Display - Loop through the services array to display each service */}
      <div className='mt-10 flex flex-wrap justify-center gap-5'>
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            {...service} // Spreading the service object to pass the individual properties to ServiceCard
            isSmallScreen={isSmallScreen}
          />
        ))}
      </div>
    </section>
  );
};

export default About;