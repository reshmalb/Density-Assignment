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
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';
import Page6 from './pages/Page6';
import Page7 from './pages/Page7';



function App() {



 
  

  return (
    <div className="App">
      <Header />
      <div className="main-container">
          <Description />
          <AboutMe />
          <Page1 />
          
          <Page4/>
          <Page2 />
          <Page5/>
          <Page3 />
          <Page6/>
          <Page7/>
        <Footer />
      </div>
    </div>
  );
}

export default App;
