"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
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

const SideLink = () => {
  const { handleSideBar } = useStateContext();
  const [openLinks, setOpenLinks] = useState({});

  const toggleLink = (linkTitle) => {
    setOpenLinks((prevOpenLinks) => ({
      ...prevOpenLinks,
      [linkTitle]: !prevOpenLinks[linkTitle],
    }));
  };

  return (
    <div>
      <motion.nav initial={false} className="menu mt-8">
        {navigationLinks.map((link) => (
          <div key={link.title} className="group my-4">
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={() => toggleLink(link.title)}
              className="flex items-center justify-between"
            >
              <h1 className="text-white mr-4 cursor-pointer">{link.title}</h1>
              {link.links && (
                <BiSolidDownArrow color="white" className="cursor-pointer" />
              )}
            </motion.button>
            {link.links && (
              <motion.ul
                animate={openLinks[link.title] ? "open" : "closed"}
                variants={{
                  open: {
                    clipPath: "inset(0% 0% 0% 0% round 10px)",
                    transition: {
                      type: "spring",
                      bounce: 0,
                      duration: 0.7,
                      delayChildren: 0.3,
                      staggerChildren: 0.05,
                    },
                  },
                  closed: {
                    clipPath: "inset(10% 50% 90% 50% round 10px)",
                    transition: {
                      type: "spring",
                      bounce: 0,
                      duration: 0.3,
                    },
                  },
                }}
                className={`p-2 rounded bg-white mt-4 ${
                  openLinks[link.title] ? "block" : "hidden"
                }`} // Use CSS display property
              >
                {link.links.map((item) => (
                  <motion.li
                    variants={itemVariants}
                    key={item.title}
                    className="p-2 text-sky-800 text-md cursor-pointer rounded hover:bg-sky-800 hover:text-white transition-all ease-in-out"
                  >
                    {item.title}
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </div>
        ))}
      </motion.nav>
    </div>
  );
};

export default SideLink;
