"use client";
import "./Navbar.scss";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Sidebar } from "@/components";

import { BsSearch } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";

import { navigationLinks } from "@/constants";
import { useStateContext } from "@/contexts/ContextProvider";

const Navbar = () => {
  const { viewSidebar, handleSideBar } = useStateContext();

  return (
    <div className="bg-sky-800 px-64 h-24 / flex 2xl:justify-between justify-center items-center">
      {/* MENU ICON */}
      <div className="absolute left-10 2xl:hidden">
        <BiMenu
          className="text-white cursor-pointer"
          size={35}
          onClick={handleSideBar}
        />
      </div>

      {/* LOGO  */}
      <Link href={"/"}>
        <Image src="/ifds-logo.webp" width={300} height={300} layout="responsive" alt="IFDS Logo" />
      </Link>

      {/* LINKS */}
      <div className="2xl:flex hidden h-full">
        {navigationLinks.map((link) => (
          <div
            className="group text-white  cursor-pointer px-6 h-full flex flex-col justify-center relative"
            key={link.title}
          >
            <div className="flex-col flex items-center">
              <div className="group-hover:bg-white w-2 h-2 rounded-full mb-2" />
              {link.title}
            </div>
            {link.links && (
              <div className="group-hover:block hidden bg-sky-800 w-max p-2 rounded-b-md / absolute top-full left-0 / border-t-4 border-transparent group-hover:border-white transition-all duration-300 z-40">
                {link.links.map((item) => (
                  <li
                    key={item}
                    className="p-2 text-md rounded / hover:bg-white hover:text-sky-800"
                  >
                    {item.title}
                  </li>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* SEARCH FORM    */}
      <div className="2xl:flex hidden items-center bg-white p-2 rounded">
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
      <div className="hover:text-gray-300 text-white cursor-pointer absolute right-8 top-2">
        <a href="https://ifdsgroup.service-now.com/IFDS_Portal/">
          Client Login
        </a>
      </div>

      {/* SIDE BAR */}
      {viewSidebar && <Sidebar />}
    </div>
  );
};

export default Navbar;
