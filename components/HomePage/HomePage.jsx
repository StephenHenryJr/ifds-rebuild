"use client";

import "./HomePage.scss";
import { Statistics, Card, CountryCard } from "..";

import Image from "next/image";
import { motion } from "framer-motion";

import { BsFillArrowRightSquareFill } from "react-icons/bs";

const HomePage = () => {
  return (
    <div>
      {/* HERO IMAGE */}
      <div className="h-content">
        <div className="w-full relative p-12 mt-24 / flex flex-col items-center justify-between / lg:flex-row 2xl:px-64 xl:mt-0">
          <div className="text-sky-800 xl:w-1/2 mb-12">
            <h1 className="text-6xl font-bold tracking-wider">
              Unlocking Financial Potential Worldwide
            </h1>
            <h2 className="text-4xl my-5">
              Your Trusted Partner for Global Financial Solutions
            </h2>
            <div className="flex items-center cursor-pointer">
              <span className="text-xl mr-2 ">Explore Our Expertise</span>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <BsFillArrowRightSquareFill size={25} />
              </motion.div>
            </div>
          </div>
          <div
            className="hero image w-1/2 flex justify-center"
            style={{ maxWidth: "100%", width: "500px" }}
          >
            <Image
              src="/hero-head.png"
              width={500}
              height={500}
              layout="responsive"
              alt="Man Looking outside office window"
            />
          </div>
        </div>

        <motion.div
          className="w-full h-fit p-12 m-4 uppercase / flex justify-between / 2xl:px-64 lg:m-0"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Statistics number="1,700+" stat="Staff and partners worldwide" />
          <Statistics number="25%" stat="Staff has 10+ year tenure" />
          <Statistics number="18.3M" stat="Active Fund Accounts" />
        </motion.div>
      </div>

      {/* CONTENT */}
      <div className="2xl:px-64 p-12">
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
        className="2xl:px-64 px-12 pb-12  / xl:flex justify-between  gap-4"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <CountryCard
          country="IFDS CANADA"
          description="We assist the world's largest financial institutions with
          comprehensive record-keeping and transfer agency solutions"
          imageURL="/card-toronto.png"
          flag="/canada.png"
        />
        <CountryCard
          country="IFDS IRELAND"
          description="We help asset managers, platform providers and insurance companies maximize their business performance."
          imageURL="/card-ireland.png"
          flag="/ireland.png"
        />
        <CountryCard
          country="IFDS LUXEMBOURG"
          description=" We provide distribution support and administrative capabilities to fund managers across Europe and beyond."
          imageURL="/card-luxembourg.png"
          flag="/luxembourg.png"
        />
      </motion.div>
    </div>
  );
};

export default HomePage;
0;
