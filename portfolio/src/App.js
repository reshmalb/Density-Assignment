import logo from './logo.svg';
import './App.css';
import {motion} from 'framer-motion'


import  Header from './Layout/Header'
import Footer from './Layout/Footer';
import Description from './Components/Description';
import AboutMe from './Components/AboutMe';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';




function App() {
  return (
  < div className='App'>
   <Header/>
     <div className='main-container'>
        <Description/>
        <AboutMe />  
        <Page1/>
        <Page2/>
        <Page3/>
        <Footer/>       

      </div>
  </div>
  );
}

export default App;
