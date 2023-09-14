"use client";
import "./Navbar.scss";

import Image from "next/image";


import { Sidebar, NavLink } from "@/components";

import { BsSearch } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";

import { useStateContext } from "@/contexts/ContextProvider";

const Navbar = () => {
  const { viewSidebar, handleSideBar } = useStateContext();

  return (
    <div id="nav" className="fixed w-full bg-sky-800 px-36 h-24 / flex 2xl:justify-between justify-center items-center z-40">
      {/* MENU ICON */}
      <div className="absolute left-10 2xl:hidden">
        <BiMenu
          className="text-white cursor-pointer"
          size={35}
          onClick={handleSideBar}
        />
      </div>

      {/* LOGO  */}
      <div className="relative min-w-[300px] h-[50px]  cursor-pointer">
        <Image src="/ifds-logo.webp" width={300} height={300} layout="responsive" alt="IFDS Logo" className="absolute w-full h-full object-cover"/>
      </div>

      {/* LINKS */}
      <div>
        <NavLink />
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
      <div className="hover:text-gray-300 text-white cursor-pointer absolute right-8 top-2 hidden 2xl:block">
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
