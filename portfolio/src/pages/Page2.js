import React from 'react'
import './Page2.css'
import {motion} from 'framer-motion'

const Page2 = () => {
  return (
    <motion.div 
    initial={{opacity:0,scale:0,x:-500}}
    whileInView={{opacity:1,scale:1,x:0}}
    transition ={{duration:0.6,delay:0.8,type:"tween"}}
    
    className="sub-details-content-page2">
      <div className='content-page2'>
        <h6>Built out of frustration</h6>
        <h1>
          Meet the ahead app
        </h1>
      </div>
      <div className='content-right-page2'>
        <p>
          <br>
          </br>
          A personalized pocket coach that provides bite-size, science-driven
          tools to boost emotional intelligence.
          <br></br>
          <br></br>

          Think of as a pocket cheerleader towards a better more fullfilling.
        </p>

      </div>

    </motion.div>
  )
}

export default Page2