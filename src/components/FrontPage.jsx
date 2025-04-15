import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { slideInFromLeft } from '../utils/motion';
import { gifHand } from '../assets';
import RobotCarousel from './RobotCarousel';
import styles from './FrontPage.module.css';

const FrontPage = () => {
  // State to control the visibility of the waving hand GIF
  const [isImage, setIsImage] = useState(false);

  // Show the GIF after 3.5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsImage(true);
    }, 3500);

    return () => clearTimeout(timer); // Cleanup timeout on component unmount
  }, []);

  return (
    <section
      name='frontpage'
      className='relative w-full h-screen mx-auto'
    >
      {/* Main content container */}
      <motion.div
        initial='hidden'
        whileInView='show'
        viewport={{ once: true }}
        variants={slideInFromLeft}
        className='absolute inset-0 sm:top-[70px] md:top-[60px] max-w-7xl mx-auto px-6 flex items-start gap-5'
      >
        {/* Left-side vertical indicator (circle and gradient line) */}
        <div className='sm:mt-3 md:mt-6 flex flex-col justify-center items-center'>
          <div className='w-5 h-5 rounded-full bg-emerald-500' />
          <div className={`w-1 sm:h-40 md:h-60 ${styles.emeraldGradient}`} />
        </div>

        {/* Text & animated elements */}
        <div>
          {/* Name with Typewriter Effect */}
          <h1 className='flex sm:text-[40px] md:text-[80px] text-emerald-200'>
            <Typewriter options={{ strings: "Hi, I'm Abdul Rehman", autoStart: true, cursor: '' }} />

            {/* Waving hand GIF appears after 3.5s */}
            {isImage && (
              <img
                src={gifHand}
                alt='Waving Hand'
                className='sm:max-w-[40px] md:max-w-[60px] absolute sm:top-16 md:top-10 sm:right-24 md:right-72'
              />
            )}
          </h1>

          {/* Rotating titles using Typewriter Effect */}
          <p className='sm:text-[26px] md:text-[30px] text-emerald-50 italic'>
            <Typewriter options={{ strings: 'I am a', autoStart: true, cursor: '' }} />

            {/* Looping list of titles */}
            <Typewriter
              options={{
                strings: ['Software Developer', 'MERN Developer', 'Frontend Developer', 'Backend Developer', 'Tech Enthusiast', 'Computer Scientist'],
                autoStart: true,
                loop: true,
                deleteSpeed: 'natural',
                pauseFor: 1000,
              }}
            />
          </p>
        </div>

        {/* Robot carousel component (likely an animated image slider) */}
        <RobotCarousel />
      </motion.div>

      {/* Scroll-down indicator */}
      <motion.div
        initial='hidden'
        whileInView='show'
        viewport={{ once: true }}
        variants={slideInFromLeft}
        className='absolute w-full flex justify-center items-end sm:bottom-16 md:top-16 md:bottom-10 md:pr-4'
      >
        {/* Clickable anchor link that scrolls to the "About" section */}
        <a href='#about'>
          {/* Outer div: Creates a bordered capsule shape */}
          <div className='p-2 w-[35px] h-[64px] flex justify-center items-start rounded-3xl border-4 border-emerald-500'>
            {/* Animated bouncing dot inside the capsule */}
            <motion.div
              animate={{
                y: [0, 24, 0], // Moves up and down
              }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
              className='mb-1 w-3 h-3 rounded-full bg-emerald-500'
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
};

export default FrontPage;