import React from "react";
import Image from "next/image";

function Faq() {
  return (
    <>
    <div id="faq"
         className="w-full max-w-7xl m-auto h-full flex flex-col gap-4 justify-center items-center px-4 lg:px-0 relative">
      <div className="w-full lg:w-[70%] flex flex-col justify-center items-start">
        {/* image */}
        <div className=" flex justify-center items-center sticky">
          <p
            className="font-chunky text-[#FBF7EF] text-[16px] sm:text-[30px] lg:text-[90px] font-bold uppercase pt-[7rem] ">
            faq
          </p>
          <Image
            src="/Assets/faq.svg"
            width={230}
            height={50}
            alt="faq image"
          ></Image>
        </div>
        {/* ------------>question 1 */}
        {faqa.map((ques, index) => {
          return (
            <div
              key={index}
              className="font-chunky flex flex-col justify-center items-start mb-8 lg:mb-12"
            >
              {/* question */}
              <p
                className="text-[chunky] text-[#FBF7EF] text-[12px] sm:text-[20px] lg:text-[36px] uppercase mt-4 lg:mt-0">
                {ques.question}
              </p>
              <div className="w-full border-b-[1px] border-dashed border-[white] mt-1 mb-2 lg:mt-0 lg:mb-0"></div>
              {/* answer */}
              <p className="font-walsheim text-[#FBF7EF] text-[10px] sm:text-[16px] lg:text-[24px] mt-3">
                {ques.answer}
              </p>
            </div>
          );
        })}
      </div>
    </div>
      {/* image */}
      <div className=" mt-8 lg:mt-28 w-[100px] h-[100px] lg:w-[250px] lg:h-[220px] rotate-6 lg:rotate-0 relative -left-2">
        <Image src="/Assets/footer.svg" fill alt="faq image"></Image>
      </div>
    </>
  );
}

const faqa = [
  {
    question: "who can claim eth miners?",
    answer:
      " Only staked miners can be be claimed into ETH miners and once claimed you won’t be able to unstake OG Solana miners until publicETH mint starts.",
  },
  {
    question: "Are there any ETH GAS FEES?",
    answer: <>
      No. To deliver identical miners as airdrop to your ETH wallet we have to go through expensive and tedious process
      of uploading collection to blockchain, minting and sending NFTs as airdrop.
    </>
  },
  {
    question: "What happens with unclaimed miners?",
    answer: <>
      All unclaimed miners will be distributed through regular public ETH mint. Price of the public mint will be around
      $19.80 + gas fees. It will be random mint of remaining unclaimed miners.
    </>
  },
  {
    question: "story of eth clones",
    answer: <>
      ​Thousands of years later Semigod landed on deserted Mars. ​Using genome sequence they created perfect copies of
      our Solana miners so they could dig and find the lost city. The Fungo City.​
    </>
  },
];

export default Faq;
