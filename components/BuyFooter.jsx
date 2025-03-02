'use client'
import React from "react";
import styles from "../styles";
import { Button, Divider, Link } from "@nextui-org/react";
import { BsDiscord, BsTwitterX } from "react-icons/bs";
import { BiLogoTelegram } from "react-icons/bi";
function Footer() {
	return (
	<>
	<footer className={`${styles.footer} bg-gray-900 overflow-hidden`}>
		<Divider className="mb-2 bg-white/10 " />
		
			<div className="flex justify-between my-2 items-center">
			<p className=' flex  gap-1 items-center text-gray-400 text-[10px]'><span className="md:flex hidden">Building by</span> ©UNIBONK 2024  </p>

			<div className="flex gap-4 items-center text-white ">
			<Link href='https://docs.unibonk.meme' target='_blank'>
            <p className=' text-gray-400 text-[10px]'>	Whitepaper</p>
			</Link>
				<Link href='https://discord.gg/rgTsdr5mV4' target='_blank'>
				<BsDiscord size={16} className="text-gray-400" />
				</Link>
				<Link href='https://twitter.com/unibonk' target='_blank'>
			<BsTwitterX size={14} className="text-gray-400" />
				</Link>
				<Link href='https://t.me/unibonk' target='_blank'>
				<BiLogoTelegram size={16} className="text-gray-400"/>
				</Link>
          		</div>  
			</div>
		
	</footer>
		</>
	);
}

export default Footer;