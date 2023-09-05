"use client";
import Image from "next/image";

const Card = ({ header, description, url }) => {
  return (
    <div className="relative 2xl:w-1/3 w-full h-96 text-gray-600 rounded-3xl shadow-lg shadow-gray-500 cursor-pointer mb-4">
      <div className="p-12">
        <div className="flex items-center pb-2 mb-4 border-b-2 border-gray-300">
          <h1 className="text-2xl mr-2">{header}</h1>
          <Image src={url} width={30} height={30} alt="country flag" />
        </div>
        <p className="text-lg">{description}</p>
      </div>
    </div>
  );
};

export default Card;
