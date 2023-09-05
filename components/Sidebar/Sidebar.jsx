"use client";

import "./Sidebar.scss";
import { SideLink } from "..";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
import { BiSolidDownArrow } from "react-icons/bi";
import { navigationLinks } from "@/constants";
import { useStateContext } from "@/contexts/ContextProvider";

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const Sidebar = () => {
  const { handleSideBar } = useStateContext();
  const [openLinks, setOpenLinks] = useState({});

  const toggleLink = (linkTitle) => {
    setOpenLinks((prevOpenLinks) => ({
      ...prevOpenLinks,
      [linkTitle]: !prevOpenLinks[linkTitle],
    }));
  };

  return (
    <div className="bg-sky-800 w-96 h-screen p-4 z-40 fixed top-0 left-0">
      {/* LOGO  AND CLOSE BUTTON */}
      <div className="flex justify-between ">
        <Link href={"/"}>
          <Image
            src="/ifds-logo.webp"
            width={200}
            height={200}
            alt="IFDS Logo"
          />
        </Link>
        <AiFillCloseCircle
          className="text-white cursor-pointer"
          size={25}
          onClick={handleSideBar}
        />
      </div>

      {/* LINKS */}
      <div>
        <SideLink />
      </div>

      {/* SEARCH FORM    */}
      <div className="flex mt-6 items-center bg-white p-2 rounded">
        <BsSearch className="mr-2" />
        <form action="">
          <input
            className="focus:outline-none"
            type="text"
            placeholder="Search"
          />
        </form>
      </div>

      {/* CLIENT LOGIN */}
      <div className="hover:text-gray-300 text-white cursor-pointer absolute left-4 bottom-8">
        <a href="https://ifdsgroup.service-now.com/IFDS_Portal/">
          Client Login
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
