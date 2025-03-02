'use client';
import React, { useState } from "react";
import {
  Button, Popover, PopoverTrigger, PopoverContent, Image
} from "@nextui-org/react";
import { ChevronDown } from "./Icon.jsx";
import Link from "next/link";
import { useRouter } from 'next/router';
import { RiMenuFill } from 'react-icons/ri'
import { BsDiscord, BsTwitterX , } from "react-icons/bs";
import { BiLogoTelegram } from "react-icons/bi";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";


export default function BuyNavbar() {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => {
    setActiveLink(link);
    router.push(link);
  };

  const icons = {
    chevron: <ChevronDown fill="currentColor " size={12} />,
  };
  
  return (
    <section className='w-full lg:px-20 z-10'>
      <div className="flex justify-between mx-4 md:mx-6 lg:mx-20 lg:px-20  py-4">
        <div className="flex items-center justify-between ">
          <Link href='/'>
            <div className=" flex  justify-center items-center ">
              <Image src='https://svgur.com/i/14Hw.svg' alt=''  className="w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] rounded-full object-contain"/>
              <h4 className="font-extrabold text-white lg:text-2xl">UNIBONK</h4>
            </div>
          </Link>
        </div>
        <div className="flex justify-start items-center gap-4">
           <div className="z-10">
           <WalletMultiButton style={{background:'#d17f2c', borderRadius:'10px'}} />
           </div>
        </div>
      </div>
    </section>
  );
}
