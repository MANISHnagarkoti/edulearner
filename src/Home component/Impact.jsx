import { motion } from 'framer-motion'
import React from 'react'

const Impact = () => {
    return (
        <div className='bg-gray-100 py-20 relative'>

            <div className='container '>
                <div className='lg:px-44'>

                    <div>Meet the people</div>
                    <motion.div viewport={{ once: true }} transition={{ duration: 2.5, type: "spring", stiffness: 250 }} initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 100 }} exit={{ x: -100, opacity: 0 }} className='text-4xl font-bold'>WE IMPACT</motion.div>

                </div>



                <div className='grid grid-cols-1 lg:grid-cols-2 gap-24 mt-12 xl:px-44'>

                    <div>
                        <img src="homeimg/impactone.png" alt="" />
                        <div>
                            <div className='text-center text-2xl font-bold mt-6'>Lavya – A Mother</div>
                            <div className='text-center p-4 italic'>
                                “If the students continue to be taught this way at the school, I am sure my daughter will achieve what she wants in life”

                            </div>
                        </div>
                    </div>


                    <div>
                        <img src="homeimg/impacttwo.png" alt="" />
                        <div className='mt-6'>
                            <div className='text-center text-2xl font-bold'>Akshat – A Student</div>
                            <div className='text-center  p-4 italic'>
                                “I believe if I study well, I can achieve any goal, become successful, and make my parents proud.”
                            </div>
                        </div>
                    </div>



                </div>



            </div>


            <div className=' absolute bottom-[-20px]  flex justify-center w-full'>

                <div className="bg-white text-black font-semibold mt-8 rounded-full px-12 py-2 border border-colorOne inline-block text-lg">
                    Explore More
                </div>
            </div>
        </div>
    )
}

export default Impact