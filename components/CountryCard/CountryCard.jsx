"use client";
import Image from "next/image";

const CountryCard = () => {
  return (
    <div className="relative flex items-center justify-center min-w-[400px] h-[500px] cursor-pointer">
      <img
        src="/card-toronto.png"
        alt="planet-04"
        className="absolute w-full h-full object-cover rounded-[24px]"
      />
      <div className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.6)] rounded-b-[24px]">
        <p className="font-normal text-[14px] leading-[20.16px] text-white uppercase">
          We assist the world's largest financial institutions with
          comprehensive record-keeping and transfer agency solutions.
        </p>
        <div className="flex items-center">
          <h2 className="mr-4 font-semibold sm:text-[32px] text-[24px] text-white">
            IFDS CANADA
          </h2>
          <Image
            src="/canada.png"
            alt="headset"
            className="object-contain"
            width={40}
            height={40}
          />
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
