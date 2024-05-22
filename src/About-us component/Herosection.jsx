import React from 'react'
import Navbar from "../Home component/Navbar"
import { motion } from 'framer-motion'
motion

const Herosection = () => {
    return (

        <div>
            <div

                style={{
                    backgroundImage: "url(homeimg/learnbg.png)",
                    backgroundSize: "cover",
                    // backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
                className='[500px] mt-[-1px]'
            >

                <div className='container h-full'>

                    <Navbar img={"logo/logoTwo.png"} />

                    <div className='grid xl:grid-cols-2  lg:px-44 items-center h-full gap-9 py-12'>

                        <div className='text-white'>

                            <motion.div className="  font-bold text-white text-6xl">
                                <motion.span className=" relative w-[100%] z-40">
                                    {" "}
                                    About{" "}
                                    <motion.span
                                        initial={{ width: "10%" }}
                                        whileInView={{ width: "85%" }}
                                        transition={{ duration: 0.6 }}
                                        className="absolute top-6 z-[-1] bg-colorOne/40 w-[90%] h-[60%] left-0 rotate-[-9deg]"
                                    ></motion.span>
                                </motion.span>


                                us
                            </motion.div>
                        </div>

                        <div >

                            <img src="about img/herosecbg.png" className='w-[100%]' alt="" />
                        </div>

                    </div>
                </div>




            </div>



            <div className='text-center text-4xl font-bold mt-9 space-y-3'>
                <div>Explore your learning</div>
                <div>area and gather</div>
                <div>
                    <motion.span className=" relative w-[100%] z-40">
                        {" "}
                        knowledge{" "}
                        <motion.span
                            initial={{ width: "10%" }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 0.6 }}
                            className="absolute top-3 z-[-1] bg-colorOne/40 w-[90%] h-[60%] left-0 rotate-[-2deg]"
                        ></motion.span>
                    </motion.span>
                </div>
            </div>


            
            <img src="homeimg/lineone.png" className='w-full mt-24 py-6' alt="" />
        </div>


    )
}

export default Herosection
