import React from 'react'
import { motion } from "framer-motion";

const Supporter = () => {

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
        <div className="mt-24">
            <motion.div className="text-center text-4xl font-semibold">
                <motion.span className=" relative w-[40%]">
                    {" "}
                    Key{" "}
                    <motion.span
                        initial={{ width: "10%" }}
                        whileInView={{ width: "95%" }}
                        transition={{ duration: 0.6 }}
                        className="absolute top-5 bg-colorOne/30 w-full h-[60%] left-0 z-[-1]"
                    ></motion.span>{" "}
                </motion.span>{" "}
                Supporters
            </motion.div>

            <motion.div
                variants={fadeUp}
                viewport={{ once: true }}
                initial="hidden"
                whileInView="show"
                className="container  grid-cols-2 grid md:grid-cols-4 justify-items-center items-center gap-9  mt-12"
            >
                <motion.div variants={fadeUp}>
                    <img src="homeimg/sone.png" className="w-44" alt="" />
                </motion.div>
                <motion.div variants={fadeUp}>
                    <img src="homeimg/stwo.png" className="w-44" alt="" />
                </motion.div>

                <motion.div variants={fadeUp}>
                    <img src="homeimg/sthree.png" className="w-44" alt="" />
                </motion.div>

                <motion.div variants={fadeUp}>
                    <img src="homeimg/sfour.png" className="w-44" alt="" />
                </motion.div>
            </motion.div>

        </div>
    )
}

export default Supporter