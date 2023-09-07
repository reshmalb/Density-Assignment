import React from 'react'
import './AboutMe.css'
import {motion} from 'framer-motion'

const AboutMe = () => {
  return (
    <motion.div initial={{x:'-100vw'}} animate={{x:0}}className='aboutme-container'>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>   
      
      <p> Hey all,</p>  
      <br></br>
      <br></br>

      <p> I've decided to make a redesign and animation for the Ahead app. Please review and happy to read your feedback!

<br></br>
<br></br>
Design — Figma
<br></br>
<br></br>

Illustrations — Adobe Illustrator
<br></br>
<br></br>

Animation — Adobe After Effects
<br></br>
<br></br>
</p>
        
  </motion.div>
  )
}

export default AboutMe