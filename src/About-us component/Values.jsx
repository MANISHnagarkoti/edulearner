import React from 'react'
import { motion } from 'framer-motion'

const Values = () => {


    const fadeUp = {
        hidden: {
            opacity: 0,
            y: 100,
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                // delay:0.05,
                staggerChildren: 0.3,
                duration: 0.1,
                type: "spring",
                stiffness: 60,
            },
        },
    };


    return (
        <div className='container'>

            <div className='text-center text-6xl mt-32 font-bold'>Learner’s Value!</div>


            <motion.div

                variants={fadeUp}
                viewport={{ once: true }}
                initial="hidden"
                whileInView="show"

                className='mt-24 grid-cols-1 grid lg:grid-cols-2 gap-16 xl:px-44 '>



                <motion.div variants={fadeUp} className=' rounded-3xl flex flex-col items-center p-6 space-y-6' style={{ background: "#B9D8F7" }} >
                    <div className='text-center font-semibold text-2xl'>Build Together</div>

                    <img src="about img/valueone.png" className='w-[300px]' alt="" />


                    <div className='text-center '>
                        Bringing stakeholders together and mobilizing the right resources, to co-create solutions, including learning from and building on the successes and failures of others.
                    </div>
                </motion.div>


                <motion.div variants={fadeUp} className=' rounded-3xl flex flex-col items-center p-6 space-y-6' style={{ background: "#E7DCDB" }} >
                    <div className='text-center font-semibold text-2xl'>Rise Above</div>

                    <img src="about img/valuetwo.png" className='w-[300px]' alt="" />


                    <div className='text-center '>
                        Demonstrating resilience, motivation to succeed, and flexibility to deliver on committed outcomes, regardless of challenges that may arise.
                    </div>
                </motion.div>


                <motion.div variants={fadeUp} className=' rounded-3xl flex flex-col items-center p-6 space-y-6' style={{ background: "#F8CDD7" }} >
                    <div className='text-center font-semibold text-2xl'>Take Charge</div>

                    <img src="about img/valuethree.png" className='w-[300px]' alt="" />


                    <div className='text-center '>
                        Assuming complete accountability of tasks by defining the way forward, owning the processes, and acting with integrity and commitment to the organization’s goals.                    </div>
                </motion.div>


                <motion.div variants={fadeUp} className=' rounded-3xl flex flex-col items-center p-6 space-y-6' style={{ background: "#EDDBC3" }} >
                    <div className='text-center font-semibold text-2xl'>Chase Perfection</div>

                    <img src="about img/valuefour.png" className='w-[300px]' alt="" />


                    <div className='text-center '>
                        Rooting ourselves in a rigorous approach and constant pursuit of mastery; realizing that the key to imbibing excellence lies in a focus on quality.                    </div>
                </motion.div>




            </motion.div>



        </div>
    )
}

export default Values
