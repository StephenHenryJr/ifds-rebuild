'use client'
import { useState } from "react";
import { motion } from "framer-motion";
import { navigationLinks } from "@/constants";

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const NavLink = () => {
  const [openLinks, setOpenLinks] = useState({});

  const toggleLink = (linkTitle) => {
    setOpenLinks((prevOpenLinks) => ({
      ...prevOpenLinks,
      [linkTitle]: !prevOpenLinks[linkTitle],
    }));
  };

  return (
    <nav className="menu 2xl:flex hidden h-full">
      {navigationLinks.map((link) => (
        <div
          className="group text-white cursor-pointer px-6 h-full flex flex-col justify-center relative"
          key={link.title}
        >
          <button
            onClick={() => toggleLink(link.title)}
            className="flex-col flex items-center"
          >
            <div className="group-hover:bg-white w-2 h-2 rounded-full mb-2" />
            {link.title}
          </button>
          {link.links && (
            <motion.ul
              initial={false}
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
              className="bg-sky-800 w-max p-2 mt-1 absolute top-full left-0  z-40"
            >
              {link.links.map((item) => (
                <motion.li
                  key={item.title}
                  className="p-2 text-md rounded hover:bg-white hover:text-sky-800"
                  variants={itemVariants}
                >
                  {item.title}
                </motion.li>
              ))}
            </motion.ul>
          )}
        </div>
      ))}
    </nav>
  );
};

export default NavLink;
