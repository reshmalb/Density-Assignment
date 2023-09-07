import React,{useState} from 'react'
import './Header.css'
import {motion} from 'framer-motion'
import { grey } from '@mui/material/colors'

const Header = () => {
    const [isClicked,setIsClicked]=useState(false)
    const [isNavBarClicked,setNavBarClicked]=useState(true)

  return (
    <motion.div 
    initial={{y:-250}}
    animate={{y:-5}}
    className='header-container'>
        <div className='logo-container'>
         <motion.h4 animate={{fontSize:50,color: '#808080',x:50,y:-8}}> Dribble</motion.h4> 
        </div>
        <nav className='nav-container'>
             <ul className='nav-items'>
                <motion.li animate={{fontSize:20,color: '#808080', x:50,y:-5}}> Find Talent</motion.li>
                <motion.li animate={{fontSize:20,color: '#808080', x:50,y:-5}}>For Designers</motion.li>
                <motion.li animate={{fontSize:20,color: '#808080', x:50,y:-5}}> Insipiration</motion.li>
                <motion.li animate={{fontSize:20,color: '#808080', x:50,y:-5}}>Learn Design</motion.li>
                <motion.li animate={{fontSize:20,color: '#808080', x:50,y:-5}}> Go Pro</motion.li>
             
            </ul>
        </nav>
        <nav className='nav-container'>
        <ul className='nav-items-right'>
        <motion.li animate={{fontSize:20,color: '#808080', x:50,y:-5}}>Log in</motion.li>
                <motion.button animate={{backgroundColor:'#808080',x:40,y:-5}}className='btn-signup'>Sign Up</motion.button>

            </ul>
        </nav>
        <div id="mobile" onClick={()=>setIsClicked((prev)=> !prev)}>
             <i id="bar" className={isClicked===true ? "fa fa-times": "fa fa-bars"} >

             </i>
             </div>
    </motion.div>
  )
}

export default Header