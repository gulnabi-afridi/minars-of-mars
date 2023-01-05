import React, { useState } from "react";
import Image from "next/image";

const MinerCard = ({ imgSrc }) => {
  const [isPicked, setIsPicked] = useState(false);

  const togglePicked = () => {
    setIsPicked(!isPicked);
  };

  return (
    <div
      className="relative cursor-pointer rounded-3xl bg-[#34302A] p-3.5"
      onClick={togglePicked}
    >
      <div className="relative cursor-pointer rounded-2xl">
        <Image
          src={imgSrc}
          width={290}
          height={350}
          className="cover rounded-3xl "
          alt="seo text here"
        ></Image>
        {/* ==============0verly on mine */}
        {isPicked && (
          <div className="absolute font-walsheim top-0 left-0 flex flex-col gap-2 justify-center items-center w-full h-full pickMineOverly rounded-2xl">
            <div className="flex justify-center items-center gap-1">
              <div className="w-[35px] h-[35px] relative">
                <Image src="/Assets/picked.svg" fill alt="picked image"></Image>
              </div>
              <p className="text-[28px] text-[#ffc74e] font-semibold">Picked</p>
            </div>
            <p className="text-[#ABA79E] text-[24px] font-semibold">
              Miner #288
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MinerCard;
