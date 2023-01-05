import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <div className={`z-10 fixed bottom-0 left-0 w-full`}>
      <div className="relative z-8 w-full min-h-[74px] flex flex-col gap-6 md:gap-0 lg:flex-row justify-between items-center text-[#E5DED1] bg-[#34302A] px-6 py-10 lg:py-0 mt-24">
        <p className="text-[#FBF7EF] font-chunky text-[16px] lg:text-[24px] font-semibold uppercase">
          Miners selected
        </p>
        <div className=" font-walsheim flex flex-col lg:flex-row justify-center items-center gap-6 md:gap-8">
          <p className="text-[12px] lg:text-[20px] text-[#ABA79E]">
            0.73 SOL/Miner
          </p>
          <button className="font-walsheim bg-[#2478A8] text-[#E5DED1] px-7 py-2 text-[14px] lg:text-[18px]  rounded-lg">
            Clone (1) miners
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
