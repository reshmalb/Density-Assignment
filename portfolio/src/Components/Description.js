import React from "react";
import "./Description.css";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import {motion} from 'framer-motion'
const Description = () => {
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
            <div className="sub-details-container">
                <div className="sub-details-header">
                    <ul className="ul-container">
                        <li className="sub-li">Emotions</li>
                        <li className="sub-li">Manifesto</li>
                        <li className="sub-li">Self-awareness Test</li>
                        <li className="sub-li">Work With us</li>

                    </ul>
                    
                    <button className="btn-download">Download App</button>

                </div>
                <div className="sub-details-content">
                   content
                </div>

            </div>

        </div>

      </motion.div>
    
  );
};

export default Description;
