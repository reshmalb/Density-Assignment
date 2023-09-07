import React from 'react'
import './Page1.css'
import {motion} from 'framer-motion'

const Page1 = () => {
  return (
  <motion.div 
  initial={{opacity:0,scale:0,x:500}}
  whileInView={{opacity:1,scale:1,x:0}}
  transition ={{duration:0.6,delay:0.3}}
  
  
  className="sub-details-container-page1">
    <div className="sub-details-header-page1">
        <ul className="ul-container-page1">
            <li className="sub-li-page1">Emotions</li>
            <li className="sub-li-page1">Manifesto</li>
            <li className="sub-li-page1">Self-awareness Test</li>
            <li className="sub-li-page1">Work With us</li>

        </ul>
        
        <button className="btn-download">Download App</button>
        </div>
      <div className="sub-details-content-page1">
        <div className='content-details'>
        <h6>Ahead App</h6>
        <h1>
          Master your Life
          <p> Mastering emotions</p>
        </h1>

        </div>
      
                   
    </div>
     </motion.div>
  )
}

export default Page1