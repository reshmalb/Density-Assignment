import React from 'react'
import './Page3.css'
import {motion} from 'framer-motion'


const Page3 = () => {
  return (
    <motion.div 
    initial={{opacity:0,scale:0,x:500}}
    whileInView={{opacity:1,scale:1,x:0}}
    transition ={{duration:1,delay:0.8}} className="sub-details-content-page3">

      <div className='content-page3'>
        <h1>Work With Us</h1>
        <div className='content1'>
          <h5>About</h5>
          <p>
            At ahead our goal is to make sel-improved fun and lasting. We know there's
            a way how to make it work. And that's what aHead is all about.
          </p>
          <h5>Product!</h5>
          <p>
            Sure, you could spend ages regarding books or sitting on how to become a better spouse,
            parent, or manager-like we did...
          </p>

        </div>

      </div>
    
</motion.div>
  )
}

export default Page3