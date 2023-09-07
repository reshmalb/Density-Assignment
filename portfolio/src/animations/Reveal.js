import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Reveal = ({ children, animationVariants }) => {
  const ref = useRef(null);
  const controls = useAnimation();
  const [inView, refInView] = useInView(ref);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <div ref={ref} className="reveal-container" >
      <motion.div
        initial="hidden"
        animate={controls}
        variants={animationVariants} 
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
