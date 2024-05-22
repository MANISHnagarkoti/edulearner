import { motion } from "framer-motion";
import React from "react";

const Platform = () => {
  return (
    <>
      <div className="container mt-32">
        <div className="grid  grid-cols-1 xl:grid-cols-2 lg:px-44">
          <div>
            <motion.div className=" text-4xl font-bold text-colorOne">
              Know About{" "}
              <div>
                {" "}
                Learner’s learning{" "}
                <motion.span className=" relative w-[40%]">
                  {" "}
                  Platform.{" "}
                  <motion.span
                    initial={{ width: "10%" }}
                    whileInView={{ width: "95%" }}
                    transition={{ duration: 0.6 }}
                    className="absolute top-4 bg-colorOne/30 w-full h-[60%] left-0 z-[-1]"
                  ></motion.span>
                </motion.span>
              </div>
            </motion.div>

            <div className="mt-6">
              Across the globe, 617 million children are missing basic math and
              reading skills. We’re a nonprofit delivering the education they
              need, and we need your help. You can change the course of a
              child’s.
            </div>

            <div className="grid grid-cols-3 gap-16 mt-6">
              <div className="text-blue-800 ">
                <div className="bg-blue-300/30 text-center py-4 rounded-xl text-xl font-bold">
                  4 + M
                </div>
                <div className="text-center text-xs font-semibold mt-2">
                  Student’s Learning
                </div>
              </div>
              <div className="text-red-800 ">
                <div className="bg-red-300/30 text-center py-4 rounded-xl text-xl font-bold">
                  75K+
                </div>
                <div className="text-center text-xs font-semibold mt-2">
                  Active Courses
                </div>
              </div>
              <div className="text-green-800 ">
                <div className="bg-green-300/30 text-center py-4 rounded-xl text-xl font-bold">
                  250+
                </div>
                <div className="text-center text-xs font-semibold mt-2">
                  Free Courses
                </div>
              </div>
            </div>

            <div className="bg-colorOne text-white font-semibold mt-16 rounded-full px-12 py-2 border border-colorOne inline-block text-lg">
              Know More
            </div>
          </div>

          <div>
            <img src="homeimg/platfrom.png" alt="" />
          </div>
        </div>
      </div>

      <img src="homeimg/lineone.png" className="w-full mt-24 py-6" alt="" />
    </>
  );
};

export default Platform;
