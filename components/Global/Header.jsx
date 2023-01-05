import React, {useState} from "react";
import Link from "next/link";
import {Spin as Hamburger} from "hamburger-react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import Image from 'next/image'
import Logo from '../../public/Logo.svg'

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
      <div
        className="w-full font-walsheim text-[#FBF7EF] h-[90px] flex justify-between items-center px-4 lg:px-6 bg-[#403a30] ">
        <Link href={'/'}>
          <Image src={Logo}/>
        </Link>

        <div className="hidden justify-center items-center gap-8 md:flex ">
          <Link href="/">
            <p className="font-walsheim font-bold text-[#FBF7EF] text-[20px] font-semibold">
              Setup ETH Wallet
            </p>
          </Link>
          <Link href="#faq">
            <p className="font-walsheim text-[#FBF7EF] text-[19.8px]  font-semibold">
              FAQ
            </p>
          </Link>
          <button className=" text-[#FBF7EF] bg-[#34302A] text-[18px] px-3 py-2 rounded-lg">
            Disconnect ..84GX
          </button>
        </div>
        <div className="md:hidden block">
          <Hamburger
            color="white"
            rounded
            size={24}
            toggled={isOpen}
            toggle={setIsOpen}
          />
        </div>
      </div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        className="drawer"
        style={{width: "80%", height: "100vh", background: "#403a30"}}
      >
        <div className="w-full flex flex-col justify-center items-start p-4 py-8 gap-10 text-[white]">
          <p className="font-[chunky] text-[#FBF7EF] text-[24px] font-semibold">
            Miners of mars
          </p>
          <Link
            href="/"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <p className="font-[walsheimBold] text-[#FBF7EF] text-[16px]  font-normal mt-12">
              Setup ETH Wallet
            </p>
          </Link>
          <Link
            href="#faq"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <p className="font-[walsheimBold] text-[#FBF7EF] text-[16px]  font-normal">
              FAQ
            </p>
          </Link>
          <button
            onClick={() => {
              setIsOpen(false);
            }}
            className="font-[walsheimBold] text-[#FBF7EF] bg-[#34302A] text-[14px] md:text-[16px] px-3 py-2 rounded-lg"
          >
            Disconnect ..84GX
          </button>
        </div>
      </Drawer>
    </>
  );
}

export default Header;
