"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const CountryCard = ({ country, description, imageURL, flag }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.99 }}
      className="relative mb-12 flex items-center justify-center xl:w-[450px] h-[400px] rounded-[24px] cursor-pointer shadow-gray-900 shadow-lg "
    >
      <Image
        src={imageURL}
        alt="toronto"
        layout="fill"
        className="absolute w-full h-full object-cover rounded-[24px]"
      />
      <div className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.6)] rounded-b-[24px]">
        <p className="font-normal text-[16px] leading-[20.16px] text-white uppercase">
          {description}
        </p>
        <div className="flex items-center">
          <Image
            src={flag}
            alt="headset"
            className="object-contain mr-4"
            width={40}
            height={40}
          />
          <h2 className="font-semibold sm:text-[32px] text-[24px] text-white">
            {country}
          </h2>
        </div>
      </div>
    </motion.div>
  );
};

export default CountryCard;
