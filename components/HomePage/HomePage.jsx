"use client";

import "./HomePage.scss";
import { Statistics, CountryCard, InsightCard } from "..";

import Image from "next/image";
import { motion } from "framer-motion";
import { BsFillArrowRightSquareFill } from "react-icons/bs";

const container = {
  visible: {
    opacity: 1,
    transition: { delayChildren: 0.1, staggerChildren: 0.3 },
  },
  hidden: { opacity: 0 },
};

const insight = {
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, x: -100 },
};

const country = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, y: 100 },
};

const HomePage = () => {
  return (
    <div>
      {/* HERO */}
      <div id="hero" className="relative min-h-screen flex flex-col justify-center">
        <div className="w-full relative px-12 sm:px-24 2xl:px-64 mt-48 lg:mt-36 / flex flex-col lg:flex-row items-center justify-between">
          <div className="text-sky-800 lg:w-1/2 mb-12">
            <h1 className="text-6xl font-bold tracking-wider">
              Unlocking Financial Potential Worldwide
            </h1>
            <h2 className="text-4xl my-5 text-gray-400">
              Your Trusted Partner for Global Financial Solutions
            </h2>
            <div className="flex items-center cursor-pointer">
              <span className="text-2xl mr-2 ">Explore Our Expertise</span>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <BsFillArrowRightSquareFill size={25} />
              </motion.div>
            </div>
          </div>
          <div
            className="image w-1/2 flex justify-center"
            style={{ maxWidth: "100%", width: "500px" }}
          >
            <Image
              src="/hero-head.png"
              width={500}
              height={500}
              layout="responsive"
              alt="AI robotic women's head"
            />
          </div>
        </div>

        <motion.div
          className="w-full h-fit px-12 sm:px-24 2xl:px-64 mt-12 uppercase / flex justify-between"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Statistics number="1,700+" stat="Staff & partners worldwide" />
          <Statistics number="25%" stat="10+ year tenured staff" />
          <Statistics number="18.3M" stat="Active Accounts" />
        </motion.div>
      </div>

      {/* Innovative Approach to Service Excellence */}
      <div className="px-12 sm:px-24 2xl:px-64 py-12">
        <h1 className="text-5xl font-bold text-sky-800 border-b-2 pb-2 mb-12">
          Innovative Approach to Service Excellence
        </h1>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
          className="flex flex-col gap-[30px]"
        >
          <motion.div variants={insight}>
            <InsightCard
              title="Global Perspective"
              subtitle="We offer a global perspective with local expertise. Our solutions are designed to transcend borders while addressing the unique needs of each local market."
              imgUrl="/global.png"
            />
          </motion.div>
          <motion.div variants={insight}>
            <InsightCard
              title="Client Centred Service"
              subtitle="Your satisfaction is our mission. We're dedicated to understanding and meeting your unique needs, providing personalized service that exceeds expectations."
              imgUrl="/customerservice.png"
            />
          </motion.div>
          <motion.div variants={insight}>
            <InsightCard
              title="Continuous Research & Development"
              subtitle="Innovation never stops. Our commitment to continuous research and development ensures that we're always at the forefront of industry advancements, delivering cutting-edge solutions that drive your success."
              imgUrl="/research.png"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* CONTENT */}
      <div className="px-12 sm:px-24 2xl:px-64 py-12">
        <h1 className="text-5xl font-bold text-sky-800 border-b-2 pb-2 mb-12">
          Trusted by the world’s largest financial institutions
        </h1>
        <p className="text-lg text-gray-500">
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

      {/* Country Cards */}
      <motion.div
        className="px-12 sm:px-24 2xl:px-64 my-12  / xl:flex justify-between gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={container}
      >
        <motion.div variants={country}>
          <CountryCard
            country="IFDS CANADA"
            description="We assist the world's largest financial institutions with
          comprehensive record-keeping and transfer agency solutions"
            imageURL="/card-toronto.png"
            flag="/canada.png"
          />
        </motion.div>
        <motion.div variants={country}>
          <CountryCard
            country="IFDS IRELAND"
            description="We help asset managers, platform providers and insurance companies maximize their business performance."
            imageURL="/card-ireland.png"
            flag="/ireland.png"
          />
        </motion.div>
        <motion.div variants={country}>
          <CountryCard
            country="IFDS LUXEMBOURG"
            description=" We provide distribution support and administrative capabilities to fund managers across Europe and beyond."
            imageURL="/card-luxembourg.png"
            flag="/luxembourg.png"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HomePage;
0;
