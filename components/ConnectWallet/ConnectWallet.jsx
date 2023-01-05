import React from "react";
import Image from "next/image";
import {useRouter} from "next/router";
import Link from 'next/link';
import LogoDark from '../../public/Logo-Dark.svg'

function ConnectWallet({connectWalletHandler}) {
  const Router = useRouter();

  return (
    <div className="w-full min-h-screen flex flex-col justify-between items-center bg-[#ebe0ce]">
      {/* top header */}
      <div className="w-full h-[90px] flex justify-between items-center px-2 lg:px-6">
        <Link href={'/'}>
          <Image src={LogoDark} alt={'Miners Of Mars'}/>
        </Link>
        <p className="font-chunky uppercase text-center text-[12px] lg:text-[21.8px] text-[#403A30] font-bold">
          2,438 cloned miners
        </p>
      </div>
      {/* ============ */}
      <div className="w-full h-[calc(h-full-90px)] flex flex-col gap-22 lg:flex-row justify-center items-center">
        {/* -------> left text portion */}
        <div
          className="w-[100%] lg:w-[32%] flex flex-col gap-4 md:gap-0 justify-center items-center md:items-start px-4 lg:px-0 ml-0 lg:ml-8 lg:pl-4">
          <p
            className="text-center lg:text-left mx-auto lg:mx-[unset] font-chunky text-[36px] md:text-[50px] lg:text-[70px] leading-[60px] lg:leading-[105px] font-black text-[#34302A] uppercase">
            clone your <br/>
            <span className="text-[75px] lg:text-[135px]">miner</span>{" "}
          </p>
          <p
            className="text-center lg:text-left font-walsheim w-full text-[16px] lg:text-[22px] text-[#34302A] leading-0 lg:leading-6">
            Clone your salana miner to the Ethereum blockchain. Once you connect
            your wallet you will have option to select your miners and create
            claim ticket for ETH mint.
          </p>
          <div className="w-full flex justify-center sm:justify-start items-center mt-8">
            <button
              onClick={connectWalletHandler}
              className="mx-auto lg:mx-[unset] font-walsheim w-full max-w-[330px] bg-[#2478A8] py-2 lg:py-3 text-[22px] lg:text-[34px] text-[white] rounded-lg"
            >
              Connect Wallet
            </button>
          </div>
        </div>
        {/* --------> right image portion */}
        <div className="w-[100%] lg:w-[70%] h-[340px] md:h-[500px] lg:h-[700px] flex justify-end items-end relative ">
          <Image
            src="/Assets/ConnectWallet/connectWallet.png"
            fill
            alt="seo text"
          ></Image>
        </div>
      </div>
    </div>
  );
}

export default ConnectWallet;
