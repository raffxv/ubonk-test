'use client';
import { delay, motion } from 'framer-motion';
import { HomeIcon } from '../components/Icon';
import { Button, Divider, Card, CardBody, CardHeader, Image, CardFooter } from '@nextui-org/react';
import { FaArrowRight } from 'react-icons/fa';
import { BiTargetLock } from "react-icons/bi";
import { IoSwapHorizontal } from "react-icons/io5";

const icons = {
  home:  <HomeIcon size={22}/>,
  arrow: <FaArrowRight  size={16} />,
  target: <BiTargetLock size={22} />

};

const Features = () => {
  return(
    <section className={`lg:px-20 lg:mx-20 lg:mb-20`}> 
      <div className='grid justify-center '>
        <h1 className=" md:flex my-5 font-black gap-4 text-white text-center text-4xl md:text-5xl">
          Welcome to <span className='text-orange-500'>UBONKVerse</span>
        </h1>
      </div>

      <div className='grid lg:grid-cols-2 gap-4 mt-10 lg:mx-20 px-4 lg:px-20 '>
        <Card className='rounded-3xl bg-transparent border-2 lg:h-[400px] border-gray-800 group hover:border-orange-500 backdrop-blur-lg'>
              <motion.div
              whileHover={{ scale: 1.015 }}
              initial="hidden"
              animate={{delay:0.2}}
              whileInView="show"
              className="relative cards1 w-full h-full bg-cover bg-center"
              >
                <CardBody className="z-10 lg:mt-8 mx-2 ">
                  <IoSwapHorizontal className='z-10 text-4xl text-gray-800 group-hover:text-orange-500' />
                  <div className='grid gap-6 mt-4 lg:mt-10'>
                    <h4 className='text-white z-10 text-2xl lg:text-4xl font-extrabold'>UBONK Swap</h4>
                    <h4 className='text-gray-500 group-hover:text-orange-500 lg:max-w-[350px]'>Seamless token swapping, low fees, and endless possibilities on Solana blockchain</h4>
                  </div>
                  <div className='flex pt-10 md:pt-12'>
                    <Button size='md' variant='flat' endContent={icons.arrow} className='border-2 bg-transparent border-gray-800 group-hover:border-orange-400 group-hover:bg-orange-400 text-gray-500 group-hover:text-orange-100'>Coming soon</Button>
                  </div>
                </CardBody>
            </motion.div>
            </Card>

            <Card className='rounded-3xl bg-transparent border-2 lg:h-[400px] border-gray-800 group hover:border-orange-500 backdrop-blur-lg'>
              <motion.div
              whileHover={{ scale: 1.015 }}
              initial="hidden"
              animate={{delay:0.2}}
              whileInView="show"
              className="relative cards2 w-full h-full bg-cover bg-center"
              >
                <CardBody className="z-10 lg:mt-8 mx-2 ">
                  <BiTargetLock className='z-10 text-4xl text-gray-800 group-hover:text-orange-500' />
                  <div className='grid gap-6 mt-4 lg:mt-10'>
                    <h4 className='text-white z-10 text-2xl lg:text-4xl font-extrabold'>UBONK BOTs</h4>
                    <h4 className='text-gray-500 group-hover:text-orange-500 md:text-md lg:max-w-[350px]'>Maximize your trading potential and sniping premiere token fastest</h4>
                  </div>
                  <div className='flex pt-10 md:pt-12'>
                    <Button size='md' variant='flat' endContent={icons.arrow} className='border-2 bg-transparent border-gray-800 group-hover:border-orange-400 group-hover:bg-orange-400 text-gray-500 group-hover:text-orange-100'>Coming Soon</Button>
                  </div>
                </CardBody>
            </motion.div>
            </Card>

      </div>
    </section>
  );
}

export default Features;
