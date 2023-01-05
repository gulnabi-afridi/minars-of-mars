import React from "react";
import Link from "next/link";
import MinerCard from "../MinerCard/MinerCard";

function Welcome() {

  // ----------------> array of mine images
  const pickImage = [
    {
      image: "/Assets/pickMinner/pickMiner1.svg",
    },
    {
      image: "/Assets/pickMinner/pickMiner2.svg",
    },
    {
      image: "/Assets/pickMinner/pickMiner3.svg",
    },
    {
      image: "/Assets/pickMinner/pickMiner4.svg",
    },
    {
      image: "/Assets/pickMinner/pickMiner5.svg",
    },
    {
      image: "/Assets/pickMinner/pickMiner9.svg",
    },
    {
      image: "/Assets/pickMinner/pickMiner7.svg",
    },
    {
      image: "/Assets/pickMinner/pickMiner8.svg",
    },
  ];

  // ====================================================================
  return (
    <div
      className="w-full max-w-7xl m-auto h-full flex flex-col gap-4 justify-center items-center px-4 lg:px-6 py-12 lg:py-10">
      <div className="w-full flex flex-col gap-4 lg:gap-0 justify-center items-center">
        <p
          className="!font-chunky uppercase text-[18px] sm:text-[22px] md:text-[58px] text-center font-black text-[#E5DED1]">
          welcome ...84gx
        </p>
        <p
          className="font-walsheim text-[#E5DED1] text-[12px] sm:text-[16px] md:text-[24px] font-normal text-center">
          We will send all cloned miner(s) to your{" "}
          <a
            href="#"
            className="text-[#e1b556] underline"
          >
            ETH Walllet.
          </a>{" "}
          Select
          <br/> your miners and create claim ticket for the ETH mint{" "}
        </p>
      </div>
      {/* --------->Pick minners */}
      <div className="w-full flex justify-between items-center border-b-[1px] border-dashed border-[white] py-4">
        <p className="font-walsheim text-[12px] sm:text-[16px] md:text-[24px] text-[#FBF7EF] font-normal ">
          Pick Miners(8)
        </p>
        <button
          // onClick={PickAllMineHandle}
          className="capitalize font-walsheim text-[#FBF7EF] text-[10px] sm:text-[12px] md:text-[14px]"
        >
          pick all
        </button>
      </div>
      {/* --------->Pick minner images grid */}
      <div className="w-full grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 gap-y-4">
        {pickImage.map((mine, index) => {
          return (
            <MinerCard
              imgSrc={mine.image}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Welcome;
