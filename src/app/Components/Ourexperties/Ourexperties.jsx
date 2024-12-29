"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Open_Sans } from "next/font/google";
import localFont from 'next/font/local'
const OpenSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: "600",
});

const myFont = localFont({
    src: '../../../../public/Fonts/TWKEverett-Medium.otf',
    display: 'swap',
  })
const Ourexperties = () => {
  const [openSection, setOpenSection] = useState(2);
  const toggleSection = (sectionIndex) => {
    setOpenSection(openSection === sectionIndex ? null : sectionIndex);
  };
  return (
    <div className="mt-[32px] ml-[90px] mb-[50px]">
      <h2 className={`${myFont.className}   w-[725px] leading-[56px] tracking-[-3px] text-[52px] font-[500]`}>
        Our expertise and passion breathe life into your narratives
      </h2>
      <div className="flex gap-[51px] mt-[64px]">
        <Image
          src="/images/Logo/group.png"
          width={484}
          height={451}
          quality={80}
          loading="eager"
          alt="Picture of People's"
        />
        <div>
          {/* Accordion Section 1 */}
          <div
            className="cursor-pointer border-t-[1px] pb-[24px] w-[725px] pt-[24px]"
            onClick={() => toggleSection(1)}
          >
            <h3 className="text-[24px] text-[#11101080] tracking-[-1px] leading-[28px] font-medium">
              Innovative
            </h3>
            {openSection === 1 && (
              <p className="mt-[20px] text-[18px] text-[#111010CC] leading-[26px] w-[511px]">
                Innovative solutions that bring creativity and value to your
                projects.
              </p>
            )}
          </div>
          {/* Accordion Section 2 */}
          <div
            className="cursor-pointer border-t-[1px] pb-[24px] w-[725px] pt-[24px]"
            onClick={() => toggleSection(2)}
          >
            <h3 className="text-[24px] text-[#EF001C] tracking-[-1px] leading-[28px] font-medium">
              02
            </h3>
            {openSection === 2 && (
              <div className="mt-[32px]">
                <h3 className="mt-[24px] text-[32px] leading-[38px] tracking-[-1px]">
                  Reliable
                </h3>
                <p className="text-[18px] text-[#111010CC] leading-[26px] mt-[20px] w-[511px]">
                  Creation, ensuring your messages resonate worldwide. From
                  concept to distribution, our platform serves as your strategic
                  partner.
                </p>
              </div>
            )}
          </div>
          {/* Accordion Section 3 */}
          <div
            className="cursor-pointer border-t-[1px] pb-[24px] border-b-[1px] w-[725px] pt-[24px]"
            onClick={() => toggleSection(3)}
          >
            <h6 className="text-[24px] text-[#111010CC]">Quality</h6>
            {openSection === 3 && (
              <p className="mt-[20px] text-[18px] text-[#111010CC] leading-[26px] w-[511px]">
                High-quality standards ensuring excellence in every aspect of
                our work.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Ourexperties;