"use client";

import Image from "next/image";
import Link from "next/link";

import { BsSearch } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";

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
        <AiFillCloseCircle className="text-white cursor-pointer" size={20} />
      </div>

      {/* LINKS */}
      <div className="mt-8">
        {navigationLinks.map((link) => (
          <div key={link.title} className="group my-4">
            <h1 className="text-white">{link.title}</h1>
        {link.links && (
            <div className="bg-white p-2 my-2 rounded / hidden group-hover:block">
            {link.links.map((item) => (
              <li key={item} className="my-1 hover:text-gray-300">
                Test
              </li>
            ))}
          </div>
        )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Sidebar;
