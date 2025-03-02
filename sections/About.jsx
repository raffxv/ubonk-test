'use-client'
import styles from "../styles";
import { motion } from 'framer-motion';
import { IoMdCheckmarkCircleOutline  } from 'react-icons/io';
import { fadeIn } from "../utils/motion";
import { Image, Link } from "@nextui-org/react";

const icons = {
  check:  <IoMdCheckmarkCircleOutline size={22} className='text-green-500'/>,
};

const About = () => {
  return (
      <div className={`${styles.xPadding} md:mx-8 lg:mx-20 lg:px-20 md:mt-20 lg:mt-0`}>
        <div className="grid lg:px-20 lg:mx-20 md:flex lg:justify-around lg:gap-10 items-center lg:py-20">
        <div className="flex justify-center items-center md:hidden my-10  ">
          <motion.img 
           initial="hidden"
           whileInView="show"
           variants={fadeIn('up', 'tween', 0.25, 0.75)}
           src='ubonk-3d.png' alt='' className=' w-[350px] h-[300px]  md:w-[300px] md:h-[300px] object-contain' />
          </div>
          <div className="lg:my-20 ">
          <h1 className="font-black text-white px-6 md:px-0 text-3xl md:pt-20 lg:text-5xl">
            <span className="text-orange-500">$UBONK</span> ON SOLANA 
          </h1>
            <p className="text-gray-500 md:max-w-[350px] lg:max-w-[550px] text-lg my-4 px-6 md:px-0"> 
            UBONK is a meme coin on Solana blockchain. Created by an experience teams on Web3 to infuse joy into the crypto space.
            </p>
           <div className="grid lg:grid-cols-2 gap-2 lg:gap-10 mt-8 px-4 md:px-0 text-xl font-bold">
           <h4 className="flex items-center gap-1 text-white ">
           <motion.span
             initial="hidden"
             whileInView="show"
           variants={fadeIn('center', 'tween', 0.25, 1)}
           >
            {icons.check} 
           </motion.span> 
              REVOKED AUTHORY
              </h4>
           <h4 className="flex items-center gap-1 text-white">
           <motion.span
             initial="hidden"
             whileInView="show"
           variants={fadeIn('center', 'tween', 0.5, 1.25)}
           >
            {icons.check} 
           </motion.span> 
            NO TEAM TOKENS
            </h4>
         
            </div> 
            <div className="grid lg:grid-cols-2 gap-2 lg:gap-10 px-4 md:px-0 md:mt-8 text-xl font-bold">
           <h4 className="flex items-center gap-1 text-white ">
           <motion.span
             initial="hidden"
             whileInView="show"
           variants={fadeIn('center', 'tween', 0.25, 1)}
           >
            {icons.check} 
           </motion.span> 
              LIQUIDITY BURNED
              </h4>
           <h4 className="flex items-center gap-1 text-white">
           <motion.span
             initial="hidden"
             whileInView="show"
           variants={fadeIn('center', 'tween', 0.5, 1.25)}
           >
            {icons.check} 
           </motion.span> 
            0% TAX
            </h4>
       
       
            </div>
            
            <div className="my-10 md:text-start text-center">
                                                                                                                           
              <h4 className="text-white">
                Contract : <span className="font-mono font-bold text-sm md:text-lg text-green-400 "> 8QcA6zp6QNV7mifrJgaSztPw2hzM4tu8VxtUmKKTMjq5 </span>
              </h4>
                                        
                 <div className="flex justify-center items-center md:justify-start mt-4 gap-3">
                   
                     <Link href='https://solscan.io/token/8QcA6zp6QNV7mifrJgaSztPw2hzM4tu8VxtUmKKTMjq5' target='_blank'>                                  
                      <Image src='https://public-api.solscan.io/logo.png' alt='' className="w-[20px] h-[20px] rounded-full"/>
                    </Link>
              
                    <Link href='https://birdeye.so/token/8QcA6zp6QNV7mifrJgaSztPw2hzM4tu8VxtUmKKTMjq5?chain=solana' target='_blank'>
                      <Image src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAjVBMVEVHcEz/ZRb/Zxb/eBL/dRP/vwP/ig7/tgX/jg3/jgz/zgD/eBL/gRD/wQT/rQf/tAb/ZBf/Yxf/Yhf/zgD/vAT/ygH/mAz/qAj/////bhT/mQb/dhH/aBX/sAP/kgX//Pf/dwD/hQb/nwL/qQL/uwT/yZ3/tVL/59f/oS3/uXj/ygD/iDD/olX/9Or/26t9B5teAAAAGHRSTlMAdQ2cPvBMQUD8SOvIBIDegqYpiTHSbNrH1elhAAAAvUlEQVQ4jd2PVxaCMBAA6U3BrktCKh3E+x/PgO/5Q8IBmN+Z3U0sa8c4tn3d8l5eFMXF7IM8n4uzcR5jvCQGH/HxV7iO3osRWo7xwTQvxBug59gz+DgWvFYrDAsiSmNRT8D4Ue8RolRdMAWhlKroVNAKV+ubDqmiAahFoPFlA6yXsmfAaKzxhDQMFlhHo7WvCCHlRyVTjdBT4yv/pAqFlHL9gLDy75aVZnPzyjT3B1/37T/J8Nj06S3Z9DvgC7vEE0aY2FgUAAAAAElFTkSuQmCC' alt='' className="w-[21px] h-[21px] rounded-full"/>
                    </Link>
              
                    <Link href=''>
                      <Image src='https://static.coingecko.com/s/thumbnail-d5a7c1de76b4bc1332e48227dc1d1582c2c92721b5552aae76664eecb68345c9.png' alt='' className="w-[20px] h-[20px] rounded-full"/>
                    </Link>
                    <Link href=''>
                      <Image src='https://seeklogo.com/images/C/coinmarketcap-logo-064D167A0E-seeklogo.com.png' alt='' className="w-[20px] h-[20px] rounded-full"/>
                    </Link>
                    </div>
            
            </div>
          </div>

          <motion.div
           initial="hidden"
           whileInView="show"
           variants={fadeIn('up', 'tween', 0.25, 1)}
           >
            <img src='ubonk-3d.png' alt='' className='hidden md:flex lg:w-[500px] lg:h-[500px] object-contain' />
          </motion.div>
        </div>   
      </div>
  );
};

export default About;
