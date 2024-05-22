import React from "react";
import { motion } from "framer-motion";

const Trust = () => {
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
                    Trusted{" "}
                    <motion.span
                        initial={{ width: "10%" }}
                        whileInView={{ width: "95%" }}
                        transition={{ duration: 0.6 }}
                        className="absolute top-5 bg-colorOne/30 w-full h-[60%] left-0 z-[-1]"
                    ></motion.span>{" "}
                </motion.span>{" "}
                By Awesome Partners
            </motion.div>

            <motion.div
                variants={fadeUp}
                viewport={{ once: true }}
                initial="hidden"
                whileInView="show"
                className="container  grid-cols-2 grid md:grid-cols-4 justify-center items-center gap-9  mt-12"
            >
                <motion.div variants={fadeUp}>
                    <img src="homeimg/trustone.png" className="w-44" alt="" />
                </motion.div>
                <motion.div variants={fadeUp}>
                    <img src="homeimg/trusttwo.png" className="w-44" alt="" />
                </motion.div>

                <motion.div variants={fadeUp}>
                    <img src="homeimg/trustthree.png" className="w-44" alt="" />
                </motion.div>

                <motion.div variants={fadeUp}>
                    <img src="homeimg/trustfour.png" className="w-44" alt="" />
                </motion.div>
            </motion.div>


        </div>
    );
};

export default Trust;
