'use client'
import styles from "../styles";
import { BsDiscord, BsTwitter } from 'react-icons/bs'
import { MdOutlineArrowOutward } from 'react-icons/md';
import { Link } from '@nextui-org/react'
import { FaTelegramPlane, FaMedium } from 'react-icons/fa';

const communityLinks = [
    {
      title: "Telegram",
      description:" Join us on Telegram today and be at the forefront of all things UNIBONK!",
      to:"https://t.me/unibonk",
      icon:"telegram"
      
    },
    {
        title: "Twitter",
        description:"Follow us to engage with fellow UNIBONK! and be part of the conversation.",
        to:"https://twitter.com/unibonk",
        icon:"twitter"
        
      },
      {
        title: "Discord",
        description:" Gain access to exclusive channels, voice chats, and a supportive community ready to welcome you with open arms.",
        to:"https://discord.gg/rgTsdr5mV4",
        icon:"discord"
        
      },
   
  ]

const icons = {
    discord: <BsDiscord className='text-white text-[32px] lg:text-[40px]' />,
    twitter: <BsTwitter className='text-white text-[32px] lg:text-[40px]'/>,
    telegram: <FaTelegramPlane className='text-white text-[32px] lg:text-[40px]' />,
    arrow : <MdOutlineArrowOutward className='text-white' size={18}/>,
}

const Community = () => {
  return (
    <section className={`${styles.Upadding} lg:mx-20 lg:px-20`}>
      <div className={`${styles.xPadding}  mx-4 md:px-4  `}>
        <div className="grid md:flex md:justify-center lg:justify-around items-center">    
            <div className="text-start">
              <span className='text-white/50  md:text-[16px] font-black'>
                  UNIBONK COMMUNITY
              </span>
              <h1 className="font-black text-3xl lg:text-5xl text-white mt-2 md:mt-4 md:max-w-[350px] lg:max-w-[600px]">
                Meet our community across the world.</h1>
              <p className={`text-white/50 flex my-4 md:max-w-[560px]`}>
              Join the fast-growing UNIBONK community and connect with innovators around the world to build the best era of memes in the future.
              </p>         
            </div>

            <div className="grid justify-center items-center">
            {communityLinks.map((data, index) => (       
             <div key={index} className="flex justify-start items-start gap-6 py-6 lg:py-8">
             
                <span className="items-center mt-4">                
                    {icons[data.icon]}
                </span>
                <Link href={data.to} target="_blank"> 
                <div className="justify-center items-center grid gap-2 max-w-[340px]">
                    <div className="flex gap-1">  
                    <h4 className="flex items-center gap-1 text-xl text-white font-bold"> {data.title}</h4>
                    <span className=""> {icons.arrow}</span>
                    </div>
                    <span className={`text-white/50 font-normal`}>{data.description}</span>
                </div>
                </Link>
             </div>

            ))}
          </div>
        </div>   
      </div>
    </section>
  );
};

export default Community;
