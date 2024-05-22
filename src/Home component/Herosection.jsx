import React from "react";
import Navbar from "./Navbar";
import { motion, useTransform, useScroll, AnimatePresence } from "framer-motion";
import { useRef } from "react";

const Herosection = () => {


  return (
    <div
      style={{
        backgroundImage: "url(homeimg/heroBg.png)",
        backgroundSize: "150% 100% ",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="min-h-[700px]"

    >
      <div className=" container">






        <Navbar  img={"logo/logo.png"} />




        <div className=" pb-[100px] mt-20 grid xl:grid-cols-2 lg:px-44 gap-4 m-auto justify-between items-end">
          <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 100 }} transition={{ duration: 2, type: "spring", stiffness: 250 }} className=" ">
            <div className=" leading-snug text-4xl font-semibold text-white">
              For every student <br />
              every <span className="relative z-40"> <span className=" z-[-1] bg-colorThree/40 rotate-[-2deg] absolute w-[96%] h-[70%]  bottom-0"></span> classroom.  </span> <br />
              Real results.
            </div>

            <div className="mt-8 text-gray-200 text-lg">
              We re a nonprofit with the mission to provide a
              free, world class education for anyone, anywhere.
            </div>

            <motion.div transition={{ duration: 2.5, type: "spring", stiffness: 250 }} initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 100 }} exit={{ x: -100, opacity: 0 }} className="bg-colorThree text-white font-semibold mt-8 rounded-full px-8 py-3 border border-white inline-block text-lg">
              Find Course

            </motion.div>
          </motion.div>

          <div>
            <motion.div transition={{ duration: 3, type: "spring", stiffness: 250 }} initial={{ y: 200, opacity: 0 }} animate={{ y: 0, opacity: 100 }} exit={{ x: -100, opacity: 0 }} >
              <img src="homeimg/herosec.png" className="w-full h-full object-cover floatImg" alt="" />
            </motion.div>
          </div>
        </div>


      </div>

    </div>
  );
};

export default Herosection;

// <div className="w-[70%] grid grid-cols-2 gap-4 m-auto justify-between  items-center border border-red-700">
// <div className=" ">
//   <div className=" leading-snug text-4xl font-semibold text-white">
//     For every student <br />
//     every classroom. <br />
//     Real results.
//   </div>

//   <div className="mt-7 text-gray-200 text-lg">
//     We re a nonprofit with the mission to provide a
//     free, world class education for anyone, anywhere.
//   </div>

//   <div className="">


//   </div>
// </div>

// <div>
//   <div>
//     <img src="homeimg/herosec.png" className="w-full h-full object-cover" alt="" />
//   </div>
// </div>
// </div>