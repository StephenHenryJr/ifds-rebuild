"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { BsSearch } from "react-icons/bs";

import { navigationLinks } from "@/constants";

const Navbar = () => {
  return (
    <div className="bg-sky-800 px-32 h-24 flex justify-around items-center">
      
      {/* LOGO  */}
      <Link href={"/"}>
        <Image src="/ifds-logo.webp" width={300} height={300} alt="IFDS Logo" />
      </Link>

      {/* LINKS */}
      <div className="2xl:flex hidden h-full">
        {navigationLinks.map((link) => (
          <div className="group relative text-white cursor-pointer px-6 h-full flex flex-col items-center justify-center" key={link.title}>
            <div className="group-hover:bg-white w-2 h-2 rounded-full mb-2" />
            {link.title}

            {link.links && (
              <div className="group-hover:block hidden bg-sky-800 absolute w-max top-[91px] p-4 border-t-4 rounded-b-md">
                {link.links.map((item) => (
                  <li key={item} className="my-1">
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
    </div>
  );
};

export default Navbar;
