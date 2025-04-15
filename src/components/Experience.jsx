import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import { slideInFromBottom } from '../utils/motion';
import { useState } from 'react';
import { robot_two_hands_down } from '../assets/index.js';
import { experiences } from '../constants/index.js';

// ExperienceCard Component - Displays individual experience details
function ExperienceCard({ experience, isSmallScreen }) {
  return (
    <motion.div
      initial='hidden'
      whileInView='show'
      viewport={{ once: true }}
      variants={slideInFromBottom}
      className='my-3 sm:px-2 sm:py-6 md:p-6 flex sm:flex-col md:flex-row bg-emerald-600 border-[2px] border-emerald-300 rounded-[15px]'
    >
      {isSmallScreen ?
        <img
          src={experience.image}
          alt='Experience'
          className='mt-3 border-4 border-emerald-300 rounded-md animate-bounce-low'
        />
      : null}

      {/* Experience Details */}
      <div className='mr-4 md:border-r-2 border-emerald-300'>
        {/* Experience Title */}
        <p className='sm:mt-2 md:mt-0 sm:text-2xl md:text-4xl tracking-wider text-emerald-200 underline decoration-emerald-200 decoration-wavy sm:underline-offset-[7px] md:underline-offset-[11px]'>
          {experience.title}
        </p>

        {/* Technologies used */}
        <p className='my-4 font-mono text-emerald-100 italic text-xl'>{experience.tech}</p>

        {/* List of tasks/points */}
        <ul className='mt-4 mb-6 md:pr-5 text-emerald-200 md:text-justify'>
          {experience.points.map((point, index) => (
            <li
              key={index}
              className='my-2'
            >
              {point}
            </li>
          ))}
        </ul>

        {/* Link to GitHub for the project */}
        {/*<a*/}
        {/*    href={experience.link}*/}
        {/*    className="p-2 md:text-xl text-emerald-100 bg-emerald-700 border border-emerald-300 rounded-md hover:bg-emerald-900 transition duration-200">*/}
        {/*    Checkout on Github*/}
        {/*</a>*/}
      </div>

      {/* Experience Image */}
      {/*Only show image in flex row if screen is big*/}
      {!isSmallScreen && (
        <img
          src={experience.image}
          alt='Experience'
          className='md:max-w-[500px] md:max-h-[500px] border-4 border-emerald-300 rounded-md animate-bounce-low hover:saturate-200'
        />
      )}
    </motion.div>
  );
}

// Experience Component - Displays all experiences cards
const Experience = () => {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 768px)' });
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  function handleVideoLoaded() {
    setIsVideoLoaded(true);
  }

  return (
    <motion.section
      name='experiences'
      className='sm:p-5 lg:p-5 max-w-7xl relative z-0 place-self-center'
    >
      {/* Invisible span used for deep linking */}
      <span
        className='hash-span'
        id='work'
      >
        &nbsp;
      </span>

      {/* Header Section - Introduction to Experience */}
      <motion.div
        initial='hidden'
        whileInView='show'
        viewport={{ once: true }}
        variants={slideInFromBottom}
      >
        <p className='sm:text-[18px] md:text-[24px] text-emerald-500 uppercase tracking-widest'>What I have done so far</p>

        <h2 className='md:text-[60px] sm:text-[50px] text-emerald-200 tracking-widest border-b-[3px] border-emerald-500'>Experience</h2>

        {
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
              className={`mt-4 w-[400px] place-self-center border-[2px] border-emerald-500 rounded-2xl ${
                isVideoLoaded ? 'opacity-100' : ' opacity-0'
              }`}
            >
              <source
                src={robot_two_hands_down}
                type=' video/mp4'
              />
              Your browser does not support the video.
            </video>
          </>
        }
      </motion.div>

      {/* Loop through each experience and display the ExperienceCard */}
      <div className=' flex flex-col'>
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={`experience-${index}`}
            experience={experience}
            isSmallScreen={isSmallScreen}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;