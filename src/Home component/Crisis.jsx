import React, { useRef } from 'react'
import { motion, useTransform, useScroll, AnimatePresence } from "framer-motion";


const Crisis = () => {

    
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ["0 1", "1.33 1"]
    });

    const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  

    return (
        <div className='mt-24 container'>

            <div className='text-center text-3xl font-bold'>There is a crisis in Indian Education</div>

            <motion.div style={{scale}} className='flex justify-center mt-12' ref={targetRef}>

                <img src="homeimg/crisis.png" className='w-[300px]' alt="" />

            </motion.div>

            <div className='m-auto max-w-[600px] text-center mt-6'>
            Evidence has shown repeatedly that children, specifically those going to public schools, are not learning. Efforts to fix this have largely been in silos - curricular changes, teacher training, student assessments, etc. Few interventions have created any impact at scale.

            </div>

        </div>
    )
}

export default Crisis