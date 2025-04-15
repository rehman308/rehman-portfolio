import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import styles from './RobotCarousel.module.css';

import {
  robot_blank,
  robot_in,
  robot_out,
  robot_peaking,
  robot_rotating,
  robot_standing,
  robot_tada,
  robot_two_hands_down,
  robot_two_hands_pointing_bottom_left,
} from '../assets';

// Array of video objects with corresponding messages
const videos = [
  { src: robot_in, message: 'Hi 👋' },
  { src: robot_tada, message: 'Welcome, Prospective Employer 👨‍💼' },
  { src: robot_two_hands_down, message: "Why don't you scroll down ? 🤨" },
  { src: robot_two_hands_pointing_bottom_left, message: "I promise, there's more cool stuff below 😤" },
  { src: robot_rotating, message: 'I spin when I’m nervous… and you’re making me VERY nervous 😣😵‍💫' },
  { src: robot_standing, message: "OK, let's stare at each other 😐" },
  { src: robot_out, message: 'FINE YOU WIN, Bye Weirdo 😶‍🌫️' },
  { src: robot_peaking, message: 'You are still here ? 🤯 I have a girlfriend OK 🙅' },
  { src: robot_standing, message: 'Fine, send me a message. I will talk to you 🥲' },
  { src: robot_blank, message: 'Closed for today 😴' },
];

const RobotCarousel = () => {
  // Detect screen size for responsive adjustments
  const isBigScreen = useMediaQuery({ query: '(min-width: 768px)' });

  // State to manage the current video index
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Automatically change video every 5 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className='sm:pr-6 md:pr-16 absolute sm:top-56 md:bottom-10 md:w-full md:flex sm:justify-end md:justify-end md:items-end'>
      {/* Speech bubble containing the robot's message */}
      <div
        className={`sm:ml-4 sm:p-4 md:bottom-[130px] md:p-4 sm:text-lg md:text-lg text-center bg-emerald-600 ${isBigScreen ? `${styles.bubble} ${styles.bubble1}` : `${styles.bubble} ${styles.bubble2}`}`}
      >
        {videos[currentIndex].message}
      </div>

      {/* Robot video animation */}
      <video
        key={videos[currentIndex].src} // Ensure video resets on source change
        autoPlay
        loop
        muted
        className='mt-4 sm:w-[450px] sm:h-[250px] md:w-[500px] md:h-[300px] object-cover sm:rounded-[15px] md:rounded-[150px] border-[2px] border-emerald-500'
      >
        <source
          src={videos[currentIndex].src}
          type='video/mp4'
        />
        Your browser does not support the video.
      </video>
    </div>
  );
};

export default RobotCarousel;