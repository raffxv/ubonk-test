'use client';
import { motion } from 'framer-motion';
import styles from '../styles';
import { Button, Link} from '@nextui-org/react';
import { fadeIn, slideIn } from '../utils/motion';
import { FaArrowRight, FaArrowDown  } from 'react-icons/fa';
import { PiDogFill } from "react-icons/pi";
import { LuDog } from 'react-icons/lu';
const icons = {
  down: <FaArrowDown size={14}  />,
  arrow: <FaArrowRight  size={16} />,
};



function Hero() {
  const scroll = () => {
    window.scrollTo({
      top: 1000,
      behavior: 'smooth' 
    });
  };
  return(
    <section className={`${styles.Hero} px-2 lg:px-20`}>
      
      <div className='flex justify-center items-center'>
        <div className={`${styles.yPadding}`}>
          <div className='flex justify-center items-center'>
            <motion.span 
              initial="hidden"
              whileInView="show"
              variants={slideIn('left', 'tween', 0.25, 0.5)}
              className="text-4xl lg:text-6xl  font-extrabold text-white text-center mt-20 md:max-w-[760px]">
                Discover the Meme Ecosystem on Solana
            </motion.span> 
            </div>
            <motion.span 
            initial="hidden"
            whileInView="show"
            variants={fadeIn('up', 'tween', 0.75, 0.5)}
            className={`text-gray-100/50 text-[16px] lg:text-xl my-8 flex justify-center items-center text-center md:px-0`}>   
          </motion.span>
          <div className=' justify-center gap-4 my-20 flex md:hidden'>
            <Link href='/ubonk' target='_blank'>
              <Button radius='md' size='md' className='bg-orange-500 hover:bg-orange-400 text-orange-800/75 hover:text-orange-100 font-semibold' endContent={icons.arrow}>BUY PRESALE</Button>
            </Link>
            <Link href='hts://docs.unibonk.meme/ubonk-coin/tokenomics' target='_blank'>
              <Button variant='ghost' size='md' radius='md' color='bg-orange-500'  className='bg-transparent hover:bg-orange-500 border-orange-500 text-orange-100 hover:text-orange-100 font-semibold' endContent={icons.arrow}>Tokenomics</Button>
            </Link>
          </div>
          <div className=' justify-center gap-4 my-20 hidden md:flex'>
            <Link href='/ubonk' target='_blank'>
            <Button radius='md' size='lg' 
            className='bg-orange-500 hover:text-orange-100 hover:bg-orange-400 text-orange-800/75
            font-semibold' endContent={<LuDog size={24}/>}>BUY PRESALE</Button>
            </Link>
            <Link href='https://docs.unibonk.meme/ubonk-coin/tokenomics' target='_blank'>
            <Button variant='ghost' radius='md' color='bg-orange-500' size='lg' 
            className='bg-transparent hover:bg-orange-500 border-orange-500 text-orange-100 hover:text-orange-100 font-semibold' endContent={icons.arrow}>Tokenomics</Button>
            </Link>

          </div>
        </div>  
      </div>
      <div className='hidden lg:flex justify-center mt-20 lg:py-10 items-center'>
        <Button onClick={scroll} className='bg-transparent text-white hover:text-orange-400 font-semibold' endContent={icons.down}>
          Scroll Down
        </Button>
      </div>
    </section>
    );
}

export default Hero;
