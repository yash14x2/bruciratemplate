"use client";
import React from "react";
import Image from "next/image";
import { Open_Sans } from "next/font/google";
const OpenSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: "600",
});
const Global = () => {
  return (
    <div className="mt-[128px] ml-[90px] text-left">
      <div
        className={`flex text-[#EF001C] font-[600] tracking-[2px] gap-[12px] items-center ${OpenSans.className}`}
      >
        <span className="w-[54px] h-[1px] bg-[#EF001C]"></span>
        <h2>WE ARE GLOBAL</h2>
      </div>
      <div className="mt-[30px] flex items-center">
        <div className="w-[217px]">
          <h3 className=" text-[86px] tracking-[-1px]">
            60
            <span className=" text-[#EF001C] text-[80px]">+</span>
          </h3>
          <p className="text-[24px] leading-[28px]">
            brands <br />
            partnered with
          </p>
        </div>
        <span className="h-[25px] bg-[#111010CC] w-[2px] mr-[63px] ml-[63px]"></span>
        <div className="w-[217px]">
          <h3 className=" text-[86px] tracking-[-1px]">
            60
            <span className="text-[#EF001C] text-[80px]">+</span>
          </h3>
          <p className="text-[24px] leading-[28px]">
            brands <br />
            partnered with
          </p>
        </div>
        <span className="h-[25px] bg-[#111010CC] w-[2px] mr-[63px] ml-[63px]"></span>
        <div className="w-[217px]">
          <h3 className=" text-[86px] tracking-[-1px]">
            60
            <span className="text-[#EF001C] text-[80px]">+</span>
          </h3>
          <p className="text-[24px] leading-[28px]">
            brands <br />
            partnered with
          </p>
        </div>
        <span className="h-[25px] bg-[#111010CC] w-[1.5px] mr-[63px] ml-[63px]"></span>
        <div className="w-[217px]">
          <h3 className=" text-[86px] tracking-[-1px]">
            60
            <span className="text-[#EF001C] text-[80px]">+</span>
          </h3>
          <p className="text-[24px] leading-[28px]">
            brands <br />
            partnered with
          </p>
        </div>
      </div>
    </div>
  );
};
export default Global;






