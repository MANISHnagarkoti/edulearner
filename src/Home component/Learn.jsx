import { motion } from 'framer-motion'
import React from 'react'


const Learn = () => {
    return (
        <div

            style={{
                backgroundImage: "url(homeimg/learnbg.png)",
                backgroundSize: "cover",
                // backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
            className='h-[700px] mt-24'
        >
            <div className='container h-full'>

                <div className='grid lg:grid-cols-2  xl:px-44 items-center h-full gap-9 py-9'>

                    <div className='text-white'>
                        <div>LEARNERS AND STUDENTS</div>
                        <motion.div className=" text-4xl font-bold text-white">

                            <div>
                                You can{" "}
                                <motion.span className=" relative w-[100%] z-40">
                                    {" "}
                                    Learn{" "}
                                    <motion.span
                                        initial={{ width: "10%" }}
                                        whileInView={{ width: "95%" }}
                                        transition={{ duration: 0.6 }}
                                        className="absolute top-3 z-[-1] bg-colorOne/40 w-full h-[60%] left-0 rotate-[-2deg]"
                                    ></motion.span>
                                </motion.span></div>
                            <div>anything!.</div>
                        </motion.div>

                        <div className="mt-6">
                            Build a deep, solid understanding in math, science, grammar, history, and more.
                        </div>



                        <div className="bg-colorOne text-white font-semibold mt-16 rounded-full px-12 py-2 border border-colorOne inline-block text-lg">
                            Learner’s Start Here
                        </div>
                    </div>

                    <div >

                        <img src="homeimg/learnone.png" className=' w-[60%]  lg:w-[70%]' alt="" />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Learn
