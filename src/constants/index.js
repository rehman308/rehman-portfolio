import {
  // Tech Stack Logos
  bootstrap,
  css,
  express,
  git,
  html,
  javascript,
  linux,
  mongodb,
  motion,
  mui,
  nodejs,
  python,
  reactjs,
  sql,
  tailwind,
  vscode,
  webstorm,
  windows,

  // Project Images
  aniWiki,
  browser,
  ecom,
  eventMng,
  gasLeak,
  hospitalMng,
  investmentCal,
  photoBlog,
  pingPong,
  portfolio,
  priceTier,
  taskKeeper,
  ticTacToe,
  timerGame,
  travelBucketList,
  yelpCamp,
} from '../assets';

// ===================== Navigation Links =====================
// List of navigation links for the website
export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

// ===================== Services / Tech Stack =====================
// Technologies with animation properties for UI effects
export const services = [
  {
    title: 'HTML',
    icon: html,
    animateSmall: true,
    animateBig: true,
  },
  {
    title: 'CSS',
    icon: css,
    animateSmall: false,
    animateBig: false,
  },
  {
    title: 'JS',
    icon: javascript,
    animateSmall: false,
    animateBig: true,
  },
  {
    title: 'Python',
    icon: python,
    animateSmall: true,
    animateBig: false,
  },
  {
    title: 'Node',
    icon: nodejs,
    animateSmall: true,
    animateBig: true,
  },
  {
    title: 'Express',
    icon: express,
    animateSmall: false,
    animateBig: false,
  },
  {
    title: 'React',
    icon: reactjs,
    animateSmall: false,
    animateBig: true,
  },
  {
    title: 'Motion',
    icon: motion,
    animateSmall: true,
    animateBig: false,
  },
  {
    title: 'MongoDB',
    icon: mongodb,
    animateSmall: true,
    animateBig: false,
  },
  {
    title: 'SQL',
    icon: sql,
    animateSmall: false,
    animateBig: true,
  },
  {
    title: 'Tailwind',
    icon: tailwind,
    animateSmall: false,
    animateBig: false,
  },
  {
    title: 'MUI',
    icon: mui,
    animateSmall: true,
    animateBig: true,
  },
  {
    title: 'Bootstrap',
    icon: bootstrap,
    animateSmall: true,
    animateBig: false,
  },
  {
    title: 'Git',
    icon: git,
    animateSmall: false,
    animateBig: true,
  },
  {
    title: 'VSCode',
    icon: vscode,
    animateSmall: false,
    animateBig: false,
  },
  {
    title: 'WebStorm',
    icon: webstorm,
    animateSmall: true,
    animateBig: true,
  },
  {
    title: 'Windows',
    icon: windows,
    animateSmall: true,
    animateBig: true,
  },
  {
    title: 'Linux',
    icon: linux,
    animateSmall: false,
    animateBig: false,
  },
];

// ===================== Work Experience =====================
// List of projects and work experience
export const experiences = [
  {
    title: 'Yelp Camp Clone',
    tech: 'Node | Express | MongoDB | Passport | Bootstrap',
    image: yelpCamp,
    points: [
      '➤ Developed a full-stack web app with user authentication, authorization, and CRUD features.',
      '➤ Integrated Google Maps, Cloudinary for photo uploads, and responsive design with Bootstrap.',
      '➤ Applied authentication using Passport and enhanced security with Helmet.',
      '➤ Leveraged Node.js, Express.js, MongoDB, and EJS for efficient back-end and front-end workflows.',
    ],
    link: 'https://github.com/rehman308/yelp-camp',
  },
  {
    title: 'AniWiki (Animal Encyclopedia)',
    tech: 'Node | Express | React | MUI | Mongo',
    image: aniWiki,
    points: [
      '➤ A responsive web application built with user-friendly mobile experience in mind.',
      '➤ Built using latest version of Node.js, Express.js, React (with Vite), MongoDB and Material-UI.',
      '➤ The application allows users to manage a catalog of animals, fishes, and insects by adding, updating, deleting, and viewing details about each item.',
      '➤ The backend is powered by a RESTful API with data stored in MongoDB.',
    ],
    link: 'https://github.com/rehman308/aniwiki',
  },
  {
    title: 'E-Commerce Website Clone',
    tech: 'Node | Express | React | Mongo | Passport | Tailwind',
    image: ecom,
    points: [
      '➤ Built with MongoDB, Express.js for backend API handling, React.js for a dynamic and interactive frontend, and Node.js to run the server',
      '➤ Implemented user authentication using Passport.js for secure logins, including admin roles for product management and user access control.',
      '➤ Allows users to browse through various fashion categories, with advanced filtering options based on size, price range, and ratings',
      '➤ Features a fully functional shopping cart, where users can add, remove, and update items.',
    ],
    link: 'https://github.com/rehman308',
  },
  {
    title: 'Personal Portfolio',
    tech: 'React | Tailwind | Framer Motion',
    image: portfolio,
    points: [
      '➤ Built with React.js for a dynamic and interactive frontend, Tailwind CSS for a sleek and responsive UI, and Framer Motion for smooth animations and transitions.',
      '➤ Implemented Scroll-based animations using Framer Motion.',
      '➤ Designed a fully responsive layout with Tailwind, ensuring an optimal viewing experience across all devices.',
    ],
    link: 'https://github.com/rehman308',
  },
];

// ===================== Projects =====================
// Additional projects with descriptions
export const projects = [
  {
    name: 'Tic Tac Toe',
    description: 'A Tic-Tac-Toe game built with React with realtime log for tracking moves',
    tags: [
      {
        name: 'HTML',
        color: 'bg-[#F16529]',
      },
      {
        name: 'CSS',
        color: 'bg-[#2965F1]',
      },
      {
        name: 'JS',
        color: 'bg-[#F7DF1E] text-black',
      },
      {
        name: 'React',
        color: 'bg-[#00bbf9]',
      },
    ],
    image: ticTacToe,
    link: 'https://github.com/rehman308/react-tic-tac-toe',
  },
  {
    name: 'Countdown Game',
    description: 'A timer countdown challenge game made with react',
    tags: [
      {
        name: 'HTML',
        color: 'bg-[#F16529]',
      },
      {
        name: 'CSS',
        color: 'bg-[#2965F1]',
      },
      {
        name: 'JS',
        color: 'bg-[#F7DF1E] text-black',
      },
      {
        name: 'React',
        color: 'bg-[#00bbf9]',
      },
    ],
    image: timerGame,
    link: 'https://github.com/rehman308/timer-game',
  },
  {
    name: 'Travel Bucket List',
    description: 'A full stack React app to create your travel bucket list',
    tags: [
      {
        name: 'HTML',
        color: 'bg-[#F16529]',
      },
      {
        name: 'CSS',
        color: 'bg-[#2965F1]',
      },
      {
        name: 'JS',
        color: 'bg-[#F7DF1E] text-black',
      },
      {
        name: 'React',
        color: 'bg-[#00bbf9]',
      },
      {
        name: 'Node',
        color: 'bg-[#588157]',
      },
    ],
    image: travelBucketList,
    link: 'https://github.com/rehman308/travel-bucket-list',
  },
  {
    name: 'Project Task Keeper',
    description: 'A React-based project task manager that allows users to create, manage, and track tasks of projects',
    tags: [
      {
        name: 'HTML',
        color: 'bg-[#F16529]',
      },
      {
        name: 'CSS',
        color: 'bg-[#2965F1]',
      },
      {
        name: 'JS',
        color: 'bg-[#F7DF1E] text-black',
      },
      {
        name: 'React',
        color: 'bg-[#00bbf9]',
      },
      {
        name: 'Tailwind',
        color: 'bg-[#1ebcbb]',
      },
    ],
    image: taskKeeper,
    link: 'https://github.com/rehman308/task-keeper',
  },
  {
    name: 'Investment Calculator',
    description: 'An investment calculator built with React. It allows users to calculate their investment',
    tags: [
      {
        name: 'HTML',
        color: 'bg-[#F16529]',
      },
      {
        name: 'CSS',
        color: 'bg-[#2965F1]',
      },
      {
        name: 'JS',
        color: 'bg-[#F7DF1E] text-black',
      },
      {
        name: 'Tailwind',
        color: 'bg-[#1ebcbb]',
      },
    ],
    image: investmentCal,
    link: 'https://github.com/rehman308/investment-calc',
  },
  {
    name: 'Picture Blog',
    description:
      'A responsive photo blog built with HTML, CSS, and Font Awesome for icons, showcasing categories, featured images, and stylish transitions',
    tags: [
      {
        name: 'HTML',
        color: 'bg-[#F16529]',
      },
      {
        name: 'CSS',
        color: 'bg-[#2965F1]',
      },
      {
        name: 'JS',
        color: 'bg-[#F7DF1E] text-black',
      },
    ],
    image: photoBlog,
    link: 'https://github.com/rehman308/photo-blog-responsive-animation',
  },
  {
    name: 'Event Managment System',
    description: 'A Java-based event management system',
    tags: [
      {
        name: 'JAVA',
        color: 'bg-[#EA2D2E]',
      },
      {
        name: 'GUI',
        color: 'bg-[#9C27B0]',
      },
    ],
    image: eventMng,
    link: 'https://github.com/rehman308/event-managment-system',
  },

  {
    name: 'Hospital Management System',
    description: 'a Hospital System implemented using C++, SQL and Windows Forms for GUI',
    tags: [
      {
        name: 'C++',
        color: 'bg-[#00599C]',
      },
      {
        name: 'SQL',
        color: 'bg-[#E48E00]',
      },
      {
        name: 'GUI',
        color: 'bg-[#9C27B0]',
      },
    ],
    image: hospitalMng,
    link: 'https://github.com/rehman308/hospital-managment-system',
  },
  {
    name: 'Web Browser',
    description: 'Web browser written using Python with Qt Framework with multimedia support',
    tags: [
      {
        name: 'Python',
        color: 'bg-[#3776AB]',
      },
      {
        name: 'Qt',
        color: 'bg-[#41CD52] text-black',
      },
    ],
    image: browser,
    link: 'https://github.com/rehman308/web-browser',
  },
  {
    name: 'Price Tier Page',
    description: 'A simple and visually appealing Price List webpage to showcase different tiers of a service along with their features and pricing',
    tags: [
      {
        name: 'HTML',
        color: 'bg-[#F16529]',
      },
      {
        name: 'CSS',
        color: 'bg-[#2965F1]',
      },
      {
        name: 'JS',
        color: 'bg-[#F7DF1E] text-black',
      },
    ],
    image: priceTier,
    link: 'https://github.com/rehman308/price-tier',
  },
  {
    name: 'Ping Pong',
    description: 'A classic Pong game implemented in assembly language for the x8086 processor',
    tags: [
      {
        name: 'Assembly',
        color: 'bg-[#5C6BC0]',
      },
      {
        name: 'Console',
        color: 'bg-[#4CAF50]',
      },
    ],
    image: pingPong,
    link: 'https://github.com/rehman308/ping-pong-assembly',
  },
  {
    name: 'Gas Leak Detector',
    description:
      'Developed a gas leak and fire hazard detection system using MQ-2 sensor, 555 timer, and thermistor to trigger alarms and LEDs for early warnings',
    tags: [
      {
        name: 'Hardware',
        color: 'bg-[#FF5722]',
      },
    ],
    image: gasLeak,
    link: 'https://github.com/rehman308/gas-leak-detector',
  },
];
