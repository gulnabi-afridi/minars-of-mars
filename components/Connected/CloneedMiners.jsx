import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

function CloneedMiners() {
  const Router = useRouter();

  return (
    <div className="w-full max-w-7xl h-full m-auto flex flex-col gap-4 justify-center items-center px-2 lg:px-6 py-3">
      <div className="w-full font-walsheim flex flex-col justify-center items-center">
        {/* --------->Cloned minners */}
        <div className="w-full flex justify-between items-center border-b-[1px] border-dashed border-[white] pb-1">
          <p className="font-walsheim text-[12px] sm:text-[18px] lg:text-[24px] text-[white] font-normal ">
            Cloned Miners(7)
          </p>
          <button  className="capitalize text-[white] text-[10px] sm:text-[12px] lg:text-[14px]">
            pick all
          </button>
        </div>
        {/* ----------->Cloned minners image */}
        <div className="w-full grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-2 py-3">
          {clonedMinners.map((image, index) => {
            return (
              <div
                key={index}
                className="w-full h-[100px] lg:h-[150px] relative"
              >
                <Image
                  src={image}
                  fill
                  className="cover"
                  alt="seo text here"
                ></Image>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const clonedMinners = [
  "/Assets/clonedMinner/clonedMiner1.svg",
  "/Assets/clonedMinner/clonedMiner2.svg",
  "/Assets/clonedMinner/clonedMiner3.svg",
  "/Assets/clonedMinner/clonedMiner4.svg",
  "/Assets/clonedMinner/clonedMiner5.svg",
  "/Assets/clonedMinner/clonedMiner6.svg",
  "/Assets/clonedMinner/clonedMiner7.svg",
];
export default CloneedMiners;
