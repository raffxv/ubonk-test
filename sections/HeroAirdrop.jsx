'use client';
import { motion } from 'framer-motion';
import styles from '../styles';
import { Button, Image, Card, CardBody, CardFooter, CardHeader, Divider } from '@nextui-org/react';
import { fadeIn, slideIn } from '../utils/motion';
import { HomeIcon, ScanIcon, Scale, ArrowTopRight } from '../components/Icon';
import { FaArrowRight, FaArrowDown  } from 'react-icons/fa';
import { LuDog } from "react-icons/lu";

const icons = {
  home:  <HomeIcon size={22}/>,
  scan:  <ScanIcon size={22}/>,
  scale:  <Scale size={22}/>,
  down: <FaArrowDown size={14}  />,
  arrow: <FaArrowRight  size={16} />,
  dog: <LuDog size={20} />
};

function HeroAirdrop() {
  const scroll = () => {
    window.scrollTo({
      top: 1000,
      behavior: 'smooth' 
    });
  };
  return(
    <section className={`${styles.Hero} px-10 lg:px-20`}>
      
      <div className='flex justify-center items-center'>
        <div className={`${styles.yPadding}`}>
          <motion.div 
           initial="hidden"
           whileInView="show"
           variants={fadeIn('center', 'tween', 0.25, 0.5)}
           className='flex justify-center items-center'>
            <Image src='https://svgur.com/i/14GC.svg' className='h-[50px] lg:h-[80px]' alt=''/>
       
            </motion.div>
            <motion.span 
            initial="hidden"
            whileInView="show"
            variants={fadeIn('up', 'tween', 0.75, 0.5)}
            className={`text-white font-mono max-w-[400px] md:max-w-[700px] text-md md:text-xl my-8 flex justify-center items-center text-center md:px-0`}>   
              we are excited to reward the community with UBONK tokens, making it possible to further participate and benefit from the growth of the Unibonk ecosystem.              </motion.span>
        </div>  
      </div>
      <motion.div 
      initial="hidden"
      whileInView="show"
      variants={fadeIn('up', 'tween', 1.25,0.5)} className='flex justify-center mt-20 lg:py-10 items-center'>
        <Button onClick={scroll} className='bg-transparent text-white hover:text-orange-400 font-semibold' endContent={icons.down}>
          Check eligibility
        </Button>
      </motion.div>
    </section>
    );
}

export default HeroAirdrop;
