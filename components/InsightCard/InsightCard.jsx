"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { BsArrowUpRightSquare } from "react-icons/bs";

const InsightCard = ({ imgUrl, title, subtitle }) => (
  <motion.div
    className="flex md:flex-row flex-col gap-4"
  >
    <img
      src={imgUrl}
      alt="insight images"
      className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover shadow-lg shadow-gray-600"
    />
    <div className="w-full flex justify-between items-center">
      <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
        <h4 className="font-normal lg:text-[42px] text-[26px] text-sky-800">
          {title}
        </h4>
        <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-gray-500">
          {subtitle}
        </p>
      </div>

      <motion.div whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.99 }} className="lg:flex hidden items-center justify-center">
        <BsArrowUpRightSquare size={250} className="w-[40%] h-[40%] object-contain cursor-pointer text-sky-800" />
      </motion.div>
    </div>
  </motion.div>
);

export default InsightCard;
