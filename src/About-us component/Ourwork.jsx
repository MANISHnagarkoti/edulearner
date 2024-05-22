import { motion } from 'framer-motion'
import React from 'react'

const Ourwork = () => {
    return (
        <div className='container'>

            <div className='text-4xl font-bold mt-9'>
                Our Work!
            </div>

            <div className='rounded-2xl border-2 border-colorThree grid lg:flex gap-9 mt-8 items-center p-6'>
                <div className='lg:w-[30%]'>
                    <img src="about img/workone.png " className='rounded-2xl' alt="" />
                </div>

                <div className='lg:w-[70%] space-y-6'>
                    <div className='text-2xl font-bold'>System Transformation Initiative Under SATH</div>

                    <div>In Different Cities, Learners also works alongside the Boston Consulting Group (BCG) State team for the education reform work  project impacting all Elementary and Secondary schools in the state. This will involve conducting diagnostic studies, designing reform and implementation strategy, ensuring excellence and delivery, designing robust M&E measures through a high level of system accountability.</div>

                    <div className='inline-block px-6 py-3  bg-colorOne text-white rounded-xl'>
                        Explore More
                    </div>


                </div>

            </div>


            <div className='rounded-2xl border-2 border-colorThree grid lg:flex gap-9 mt-8 items-center p-6'>
                <div className='lg:w-[30%]'>
                    <img src="about img/worktwo.png " className='rounded-2xl' alt="" />
                </div>

                <div className='lg:w-[70%] space-y-6'>
                    <div className='text-2xl font-bold'>Project Assistance Unit (PAU) with Directorate of
                        Education</div>

                    <div>Laerners is supporting the Program Assistance Unit of the Directorate of Education, Government. This unit works closely with different Branches and Education Officials along with the partners to research, develop, and review the reform process in Delhi. The unit works on projects ranging from parent engagement, teacher training, infrastructure, curriculum development, and governance.</div>

                    <div className='inline-block px-6 py-3  bg-colorOne text-white rounded-xl'>
                        Explore More
                    </div>

                </div>

            </div>



            <div className='lg:px-44 mt-24'>
                <div className='text-4xl font-bold mt-9 space-y-3'>
                    <div>Our Mission</div>
                    <div>

                        &
                        {" "}
                        <motion.span className=" relative  z-40">
                            {" "}
                            Vision !{" "}
                            <motion.span
                                initial={{ width: "10%" }}
                                whileInView={{ width: "90%" }}
                                transition={{ duration: 0.6 }}
                                className="absolute top-3 z-[-1] bg-colorOne/20 w-[90%] h-[60%] left-0 rotate-[-2deg]"
                            ></motion.span>
                        </motion.span>
                    </div>
                </div>

                <div className='font-medium mt-9'>Learner's vision is to ensure that every child in India has equitable access to quality education.</div>

                <div className='mt-9 space-y-6'>
                    <div>The Education Alliance, as Network for Quality Education Foundation, is a non-profit organization, established in 2014, with the aim of building an ecosystem where governments can strategically partner with mission-aligned organizations to overhaul the public education system and create a deep impact in the child’s learning.</div>

                    <div>Towards this, we support state education departments by deploying highly qualified teams that work with state and non-state actors to co-create solutions to help improve the quality of education in government schools.</div>

                </div>

            </div>

        </div>
    )
}

export default Ourwork
