"use client";

import "./HomePage.scss";

import Image from "next/image";
import { motion } from "framer-motion";

import { BsFillArrowRightSquareFill } from "react-icons/bs";

const HomePage = () => {
  return (
    <div>
      {/* HERO IMAGE */}
      <div className="h-[600px] w-full relative">
        <Image
          src="/homepage.webp"
          layout="fill"
          objectFit="cover"
          alt="Man Looking outside office window"
        />
        <div className="absolute text-white / 2xl:left-48 left-12 top-56">
          <h1 className="text-5xl font-bold tracking-wider">
            Global Perspective
          </h1>
          <h2 className="text-2xl my-5">LOCAL KNOWLEDGE</h2>
          <div className="flex items-center cursor-pointer">
            <span className="text-xl mr-2 ">Learn More</span>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <BsFillArrowRightSquareFill size={20} />
            </motion.div>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="2xl:px-48 p-12">
        <h1 className="text-4xl text-sky-800 border-b-2 pb-2 mb-4">
          Trusted by the world’s largest financial institutions
        </h1>
        <p className="text-lg">
          With its global headquarters in Toronto, Canada, and offices in
          Ireland and Luxembourg, International Financial Data Services (IFDS)
          is a world-leading provider of outsourcing and technology solutions to
          the financial services industry. IFDS services over 240 financial
          organizations around the world, providing solutions to a wide range of
          global asset managers, wealth managers, banks, and insurance
          companies. With over 1,700 employees and partners located throughout
          Canada, Europe, and Asia-Pacific, the IFDS enterprise supports more
          than 18.5 million accounts with AUA of approximately CAD $4.3
          trillion.
          <br />
          <br />
          IFDS Canada, Ireland, and Luxembourg are 50/50 joint ventures between
          Boston-based State Street Corporation, one of the world’s leading
          providers of financial services to institutional investors, and
          Connecticut-based SS&C Technologies, a global provider of investment
          and financial software-enabled services and software for the global
          financial services and healthcare industries.
        </p>
      </div>

      {/* SLIDING DIV'S */}
      <motion.div
        className="2xl:px-48 px-12 pb-12 flex justify-between gap-4"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="w-1/3 h-64 bg-gray-50 text-gray-600 rounded p-12 shadow-lg shadow-gray-500 cursor-pointer">
          <div className="flex items-center pb-2 mb-4 border-b-2 border-gray-300">
            <h1 className="text-2xl mr-2">IFDS CANADA</h1>
            <Image
              src="/canada.png"
              width={30}
              height={30}
              alt="country flag"
            />
          </div>
          <p className="text-lg">
            We support the world’s largest financial institutions with our full
            range of record keeping and transfer agency solutions.
          </p>
        </div>
        <div className="w-1/3 h-64 bg-gray-50 text-gray-600 rounded p-12 shadow-lg shadow-gray-500 cursor-pointer">
          <div className="flex items-center pb-2 mb-4 border-b-2 border-gray-300">
            <h1 className="text-2xl mr-2">IFDS IRELAND</h1>
            <Image
              src="/ireland.png"
              width={30}
              height={30}
              alt="country flag"
            />
          </div>
          <p className="text-lg">
            We help asset managers, platform providers and insurance companies
            maximise their business performance.
          </p>
        </div>
        <div className="w-1/3 h-64 bg-gray-50 text-gray-600 rounded p-12 shadow-lg shadow-gray-500 cursor-pointer">
          <div className="flex items-center pb-2 mb-4 border-b-2 border-gray-300">
            <h1 className="text-2xl mr-2">IFDS LUXEMBOURG</h1>
            <Image
              src="/luxembourg.png"
              width={30}
              height={30}
              alt="country flag"
            />
          </div>
          <p className="text-lg">
            We provide distribution support and administrative capabilities to
            fund managers across Europe and beyond.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default HomePage;
0;
