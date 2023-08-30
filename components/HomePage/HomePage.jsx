"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { BsFillArrowRightSquareFill } from "react-icons/bs";

const HomePage = () => {
  return (
    <div>
      <div className="h-[600px] w-full relative">
        <Image
          src="/homepage.webp"
          layout="fill"
          objectFit="cover"
          alt="Man Looking outside office window"
        />
        <div className="absolute text-white / left-48 top-56">
          <h1 className="text-5xl font-bold tracking-wider">
            Global Perspective
          </h1>
          <h2 className="text-2xl my-5">LOCAL KNOWLEDGE</h2>
          <div className="flex items-center">
            <span className="text-xl mr-2">Learn More</span>
            <BsFillArrowRightSquareFill size={20} />
          </div>
        </div>
      </div>
      {/* <motion.div
        className="w-96 h-48 bg-blue-100 mx-auto mt-4 rounded / flex justify-center items-center"
        initial={{ x:-100, opacity: 0 }}
        whileInView={{ x:0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        
      </motion.div> */}
    </div>
  );
};

export default HomePage;
0;
