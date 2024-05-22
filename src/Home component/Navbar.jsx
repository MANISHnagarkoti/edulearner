import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'



const Navbar = ({ img }) => {


    const [show, setShow] = useState(false)


    const fadeUp = {
        hidden: {
            opacity: 0,
            x: -100,
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                // delay:0.05,

                duration: 0.1,

            },
        },
    };



    return (
        <nav className=' flex items-center justify-between relative'>
            <div className='flex items-center gap-12'>

                <Link to={"/"}>   <img src={img} className='w-24' alt="" /> </Link>

                <ul className='text-white gap-9 hidden xl:flex'>

                    <Link to={"/"}> <li>Home</li></Link>
                    <Link to={"/about-us"}>   <li>About Us</li></Link>
                    <li>Testimonal</li>
                    <li>Blogs</li>
                    <li>Contact</li>
                </ul>
            </div>


            <div className='items-center gap-12 hidden xl:flex'>
                <div className='flex items-center border-2 gap-4 border-gray-400 p-4 py-2  rounded-full'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </div>

                    <input type="text" placeholder='Search' className='w-full' name="" id="" />

                </div>


                <div className="bg-colorThree text-white font-semibold  rounded-full px-8 py-2 border border-white inline-block text-lg">
                    Login

                </div>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white block  xl:hidden" onClick={() => setShow(true)}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>



            {


                show &&

                <motion.div variants={fadeUp} initial="hidden" animate="show" exit="hidden" className='fixed h-screen  bg-colorThree top-0 left-0 w-[300px] z-[100] p-4 block xl:hidden'>


                    <div className='flex justify-end '>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white cursor-pointer" onClick={() => setShow(false)}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>

                    </div>


                    <div className=' gap-12 mt-9'>
                        <div className='flex items-center border-2 gap-4 border-gray-400 p-4 py-2  rounded-full'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                            </div>

                            <input type="text" placeholder='Search' className='w-full' name="" id="" />

                        </div>

                        <ul className='text-white gap-9  text-2xl space-y-4 mt-9'>

                            <Link to={"/"}> <li>Home</li></Link>
                            <Link to={"/about-us"}>   <li className='mt-4'>About Us</li></Link>
                            <li>Testimonal</li>
                            <li>Blogs</li>
                            <li>Contact</li>
                        </ul>



                    </div>


                </motion.div>

            }




        </nav>
    )
}

export default Navbar