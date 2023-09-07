// App.js
import React,{useState,useEffect} from 'react';
import './App.css';
import { motion } from 'framer-motion';

import Header from './Layout/Header';
import Footer from './Layout/Footer';
import Description from './Components/Description';
import AboutMe from './Components/AboutMe';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Reveal from './animations/Reveal';

function App() {


  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);






  const descriptionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };
  
  const aboutMeVariants = {
    hidden: { opacity: 0, x: '-100vw' },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };
  
  const page1Variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  };
  
  const page2Variants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };
  
  const page3Variants = {
    hidden: { opacity: 0, rotate: -180 },
    visible: { opacity: 1, rotate: 0, transition: { duration: 1 } },
  };
  

  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <Reveal animationVariants={descriptionVariants}>
          <Description />
        </Reveal>
        <Reveal animationVariants={aboutMeVariants}>
          <AboutMe />
        </Reveal>
        <Reveal animationVariants={page1Variants}>
          <Page1 />
        </Reveal>
        <Reveal animationVariants={page2Variants}>
          <Page2 />
        </Reveal>
        <Reveal animationVariants={page3Variants}>
          <Page3 />
        </Reveal>
        <Footer />
      </div>
    </div>
  );
}

export default App;
