import React, { useState } from "react";
import "./Header.css";
import { motion } from "framer-motion";
import { grey } from "@mui/material/colors";
import CloseIcon from '@mui/icons-material/Close';
import ReorderIcon from '@mui/icons-material/Reorder';
const Header = () => {
  const [isClicked, setIsClicked] = useState(false);
  const listVariants={
    hidden:{
      opacity:0,

    },
    visible:{
      opacity:1,
       fontSize: 20,
              color: "#808080",
             
      transition:{
        type: "spring", 
        stiffness: 300
      }
    },
    hover:{
      scale: 1.3,
      color:"#00131a",
      originX:0,
      textShadow: "0px 0px 8px rgb(255,255,255",
      transition:{
        duration:0.2,
        yoyo: 10
      }


    }
  }
const buttonVariants={
  hidden:{opacity: 0 },
  visible:{opacity: 1, x: 40, y: -5 },
  hover:{
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255",
    boxShadow: "0px 0px 8px rgb(255,255,255",
    transition:{
      yoyo: Infinity,
    }
  }

}
  return (
    <motion.div
      initial={{ y: -250 }}
      animate={{ y: -5 }}
      transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
      className="header-container mobile"
    >
      <div id="mobile"  onClick={()=>setIsClicked((prev)=> !prev)} >
       {isClicked === true ? (<CloseIcon/>):(<ReorderIcon/>)}
    
      </div>
      <div className="logo-container">
        <motion.h4
             whileHover={{
              scale: 1.3,
              color:"#00131a",
              originX:0,
              textShadow: "0px 0px 8px rgb(255,255,255",

            }}
          animate={{ opacity: 1, fontSize: 50, color: "#808080", x: 50, y: -8 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 10 }}
        >
          Dribble
        </motion.h4>
      </div>


     


      <nav className=  { isClicked===true? "mobile-container":"nav-container"}>
        

        <ul className="nav-items">
          <motion.li
          variants={listVariants}
            initial="hiddeb=n"
            animate="visible"
            whileHover="hover"
          
          >
            {" "}
            Find Talent
          </motion.li>
          <motion.li
         variants={listVariants}
         initial="hiddeb=n"
         animate="visible"
            whileHover="hover"
          >
            For Designers
          </motion.li>
          <motion.li
              variants={listVariants}
              initial="hiddeb=n"
              animate="visible"
              whileHover="hover"
           
          >
            {" "}
            Insipiration
          </motion.li>
          <motion.li
              variants={listVariants}
              initial="hiddeb=n"
              animate="visible"
              whileHover="hover"
          >
            Learn Design
          </motion.li>
          <motion.li
               variants={listVariants}
               initial="hiddeb=n"
               animate="visible"
               whileHover="hover"
         
          >
            {" "}
            Go Pro
          </motion.li>
          <motion.li
             variants={listVariants}
             initial="hiddeb=n"
             animate="visible"
             whileHover="hover"
          
          >
            Log in
          </motion.li>
        </ul>
      </nav>
      <nav className="nav-container-right">
        <ul className="nav-items-right">
        
          <motion.button
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
            className="btn-signup"
          >
            Sign Up
          </motion.button>
        </ul>
      </nav>
      
    </motion.div>
  );
};

export default Header;
