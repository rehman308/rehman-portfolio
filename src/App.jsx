import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { BrowserRouter } from 'react-router-dom';
import { FrontPage, About, Contact, CustomCursor, Experience, Footer, Navbar, ProgressBar, Works } from './components';

const App = () => {
  const [progress, setProgress] = useState(0);
  const isBigScreen = useMediaQuery({ query: '(min-width: 768px)' });

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progressPercentage = (scrollTop / scrollHeight) * 100;
      setProgress(progressPercentage);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  let browserRouter = (
    <>
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <div>
          {isBigScreen ?
            <CustomCursor />
          : null}
          <ProgressBar progress={progress} />
          <Navbar />
          <FrontPage />
          <About />
          <Experience />
          <Works />
          <Contact />
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
  return browserRouter;
};

export default App;