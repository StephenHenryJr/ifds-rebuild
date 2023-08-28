"use client";

import Image from "next/image";
import Link from "next/link";

import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <div className="w-full p-10 text-xl bg-sky-800 fixed bottom-0">
      <div className="flex justify-between text-white w-9/12 m-auto">
        {footerLinks.map((link) => (
          <div key={link.title}>
            <h1 className="mb-4 tracking-wider underline underline-offset-8">
              {link.title}
            </h1>
            {link.links.map((item) => (
              <li key={item.title} className="my-2 text-base cursor-pointer">
                {item.title}
                {item.src && (
                    <Image src={item.src} width={25} height={25} alt="Social Media Icon"/>
                )}
              </li>
            ))}
          </div>
        ))}
      </div>
      <p className="text-white text-sm w-9/12 m-auto mt-8">
        Copyright © International Financial Data Services Ltd. All rights
        reserved. IFDS and the International Financial Data Services logo IFDS
        logo are registered trademarks of International Financial Data Services
        Limited. 2022
        <br />
        International Financial Data Services (Canada) Limited incorporated in
        Ontario as Corporation Number 1485549 | International Financial Data
        Services (Ireland) Limited is a Private Company Limited by Shares
        registered under Part 2 of the Companies Act 2014. Registered in Ireland
        179786. | International Financial Data Services (Luxembourg) SA. R C S
        Luxembourg B81997
      </p>
    </div>
  );
};

export default Footer;