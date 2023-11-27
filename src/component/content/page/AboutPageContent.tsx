import React from 'react'

import { faqs } from "@/toolkit/data/faqs";

const AboutPageContent = () => {
  return (
    <div className="w-full flex px-[10px] md:px-[100px] lg:px-[200px] pt-[67px] items-center flex-col justify-center">
      <h1 className="text-[20px] sm:text-[48px] leading-[35px] text-blackColor font-darkerGrotesque-bold">
        About Us
      </h1>
      {/* w-[70%] sm:w-[700px] lg:w-[1200px] */}
      <p className="mt-[15px] text-[14px] sm:text-[32px] leading-[28px] sm:leading-[40px] text-[#606060] font-darkerGrotesque-medium font-semibold md:font-darkerGrotesque-semiBold">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetu.
      </p>
      <div className=" w-full flex py-[30px] sm:py-[50px] gap-[30px] items-center flex-col justify-center">
        <p className="tracking-[-0.64px] mt-[15px] text-[16px] sm:text-[32px] leading-[40px] text-blackColor font-darkerGrotesque-semiBold">
          Frequently Asked Questions
        </p>
        <div className="w-full flex flex-col gap-[10px] sm:gap-[20px]">
          {faqs.map((item, i) => (
            <div
              tabIndex={0}
              key={i}
              className="collapse collapse-arrow border bg-white transition-[.4s] border-none"
            >
              <div className="mb-[18px] collapse-title text-[15px] sm:text-[20px] font-darkerGrotesque-bold text-white tracking-[-0.4px] leading-[18px] rounded-[6px] px-[10px] bg-[#18ACE8]">
                {item.question}
              </div>
              <div className="collapse-content pt-[18px] bg-[#4ABF4F] rounded-[10px] text-[12px] sm:text-[16px] font-darkerGrotesque-medium text-white tracking-[-0.32x] leading-[25px] px-[10px]">
                <p style={{ whiteSpace: "pre-line" }}>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPageContent;