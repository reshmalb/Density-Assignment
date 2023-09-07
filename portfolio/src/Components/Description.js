import React,{useEffect,useState} from "react";
import "./Description.css";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import {motion} from 'framer-motion'
import img1 from '../asset/images/page1.png'
import img2 from '../asset/images/page2.png'
import img3 from '../asset/images/page3.png'

const Description = () => {
  const [currentImage,setCurrentImage] = useState(1);


  const images = [
    {
      url: img1,
   animationVariants: {
        hidden: { x: 0, opacity: 1 },
        visible: {
          x: -200, 
          opacity: 0, 
          transition: { duration: 3, ease: "easeInOut" }, 
        },
      },
    },
    {
      
      url: img2,
      animationVariants: {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 1.5 ,type:"spring",stifness:300} },
      },
    },
    {
      url: img3,
      animationVariants: {
        hidden: { opacity: 0, rotate: -180 },
        visible: { opacity: 1, rotate: 0, transition: { delay: 0.5, duration: 1.5 } },
      },
    },
  ];



  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((previmg) => (previmg +1)% images.length);
    }, 5000);

    return () => clearInterval(interval); 
  }, []);




  return (
  
      <motion.div 
         initial={{opacity:0}}
         animate={{opacity:1}}
         transition={{delay:1.5,duration:2}}
      
      className="description-container">
      
        <div className="header">

          <div className="profile-container">
            <div className="image"><PermIdentityIcon className="image-details"/></div>
            <div className="name-container">
                <p>Ahead App Design Concept</p>
            
              <text>Taras Mikulko</text>         
          </div>
          </div>
          <button className="btn-hire">Hire Me</button>
        </div>

        <div className="sub-details">
        <motion.img
            src={images[currentImage].url}
            alt={`Image ${currentImage + 1}`}
            initial="hidden"
            animate="visible"
            variants={images[currentImage].animationVariants}
          />
                
            </div>


      </motion.div>
    
  );
};

export default Description;
