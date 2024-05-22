import React from 'react'
import { motion } from "framer-motion";

const Works = () => {
    return (
        <>
            <div className='container mt-32'>
                <motion.div className="text-center text-6xl font-semibold">
                    <motion.span className=" relative w-[40%]">

                        Why
                        <motion.span
                            initial={{ width: "10%" }}
                            whileInView={{ width: "95%" }}
                            transition={{ duration: 0.6 }}
                            className="absolute top-5 bg-colorOne/30 w-full h-[60%] left-0 z-[-1]"
                        ></motion.span>
                    </motion.span>{" "}
                    Learner Works!
                </motion.div>


                <div className='grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-24 mt-20'>
                    <div>
                        <img src="homeimg/workone.png" alt="" />
                        <div>
                            <div className='text-center text-xl font-bold'>Personalized learning</div>
                            <div className='text-center text-sm mt-4 p-4'>
                                Students practice at their own pace, first filling in gaps in their understanding and then accelerating their learning.

                            </div>
                        </div>
                    </div>

                    <div>
                        <img src="homeimg/worktwo.png" alt="" />
                        <div>
                            <div className='text-center text-xl font-bold'>Trusted content</div>
                            <div className='text-center text-sm mt-4 p-4'>
                                Created by experts, Learner’s library of trusted, standards-aligned practice and lessons covers math K-12 through early college, grammar, science, history, and more.

                            </div>
                        </div>
                    </div>


                    <div>
                        <img src="homeimg/workthree.png" alt="" />
                        <div>
                            <div className='text-center text-xl font-bold'>Tools to empower teachers</div>
                            <div className='text-center text-sm mt-4 p-4'>
                                With Learner, teachers can identify gaps in their students’ understanding, tailor instruction, and meet the needs of every student.
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <img src="homeimg/lineone.png" className='w-full mt-24 py-6' alt="" />

        </>

    )
}

export default Works