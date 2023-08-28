"use client";

import Image from "next/image";
import Link from "next/link";
import './Sidebar.scss'

import { BsSearch } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
import { BiSolidDownArrow } from "react-icons/bi";


import { navigationLinks } from "@/constants";
import { useStateContext } from "@/contexts/ContextProvider";

const Sidebar = () => {

  const { handleSideBar, dropdownStates, handleDropdown } = useStateContext();
  ;

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
        <AiFillCloseCircle className="text-white cursor-pointer" size={25} onClick={handleSideBar}/>
      </div>

      {/* LINKS */}
      <div className="mt-8">
        {navigationLinks.map((link) => (
          <div key={link.title} className="group my-4">
            <div className="flex items-center justify-between" onClick={() => handleDropdown(link.title)}>
              <h1 className="text-white mr-4 cursor-pointer">{link.title}</h1>
              {link.links && <BiSolidDownArrow color="white" className="cursor-pointer"/>}
            </div>
            {link.links && dropdownStates[link.title]  && (
              <div className="p-2 rounded / ">
                {link.links.map((item) => (
                  <li key={item} className="p-2 text-white text-sm cursor-pointer rounded / hover:bg-white hover:text-sky-800 transition-all ease-in-out">
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

      {/* CLIENT LOGIN */}
      <div className="hover:text-gray-300 text-white cursor-pointer absolute left-4 bottom-2">
          <a href="https://ifdsgroup.service-now.com/IFDS_Portal/">Client Login</a>
      </div>

    </div>
  );
};
export default Sidebar;
