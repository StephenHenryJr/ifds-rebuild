"use client";

import Image from "next/image";
import Link from "next/link";
import './Sidebar.scss'

import { BsSearch } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
import { BiSolidDownArrow } from "react-icons/bi";


import { navigationLinks } from "@/constants";

const Sidebar = () => {
  return (
    <div className="bg-sky-800 w-96 h-screen p-4 / fixed top-0 left-0">
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
        <AiFillCloseCircle className="text-white cursor-pointer" size={25} />
      </div>

      {/* LINKS */}
      <div className="mt-8">
        {navigationLinks.map((link) => (
          <div key={link.title} className="group my-4">
            <div className="flex items-center justify-between">
              <h1 className="text-white mr-4">{link.title}</h1>
              {link.links && <BiSolidDownArrow color="white" />}
            </div>
            {link.links && (
              <div className="dropdown p-2 my-2 rounded / hidden group-hover:block">
                {link.links.map((item) => (
                  <li key={item} className="my-1 text-white text-sm cursor-pointer">
                    {item.title}
                  </li>
                ))}
              </div>
            )}
          </div>
        ))}
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

    </div>
  );
};
export default Sidebar;
