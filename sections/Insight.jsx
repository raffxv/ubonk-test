'use client';
import styles from '../styles';
import { RxCornerTopRight, RxCornerBottomRight } from 'react-icons/rx';
import { motion } from 'framer-motion';
import { HomeIcon } from '../components/Icon';
import { fadeIn } from '../utils/motion';
import { RiFileCopy2Fill  } from 'react-icons/ri';
import { Button, Divider, Link, Card, CardBody, CardHeader, Image, CardFooter } from '@nextui-org/react';
import { FaArrowRight } from 'react-icons/fa';

const icons = {
  home:  <HomeIcon size={22}/>,
  arrow: <FaArrowRight  size={16} />
};

const Insight = () => {
    return( 
    <section className={`lg:px-20 lg:mx-20 my-20 lg:my-0 lg:py-20 hidden lg:block justify-center items-center`}> 
      <h4 className='text-5xl text-white font-extrabold px-20 mx-20 mt-20'> Explore UNIBONK!</h4>
      <div className="px-2 lg:px-20 lg:mx-20 grid lg:grid-cols-3 gap-2 lg:gap-10 mt-20">
        <div className='lg:col-span-2'>
          <Card className="border-2 border-gray-800 hover:border-orange-500 h-[475px] rounded-3xl lg:rounded-3xl">
            <div className='flex flex-1 mx-4 lg:mx-10'>
              <div className='grid z-10 justify-start items-start'>
                <span className='lg:mt-10' />
                <div className='grid z-10 justify-start items-end py-4'>
                  <h4 className="text-white/80 font-bold text-xs lg:text-3xl z-10 lg:my-6">UBONK AIRDROP</h4>
                  <h4 className="text-white font-extrabold text-xl lg:text-6xl z-10">NOW LIVE</h4>
                </div>
       
                  <Link href='/'>
                <Button variant='flat' color='warning' radius='md' size='md' className='bg-orange-500 hover:bg-orange-400 text-orange-800/75 hover:text-orange-100 font-semibold' endContent={<FaArrowRight />}>
                  More details 
                </Button>
                </Link>
          
              </div>  
            </div>
            <motion.img
              whileHover={{scale:1.02}}
              initial="hidden"
              whileInView="show"
              alt="Card background"
              className="z-0 w-full h-full object-cover absolute "
              src="insight2.png"
            />
          </Card>
        </div>

        <div className='grid gap-2'>
        <Card className="h-[150px] border-2 border-orange-300 hover:border-orange-500">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">PRESALE</p>
              <h4 className="text-white font-medium text-large">UBONK Presale Announcement</h4>
            </CardHeader>
            <motion.img
              whileHover={{scale:1.05}}
              initial="hidden"
              whileInView="show"
              alt="Card background"
              className="z-0 w-full h-full object-cover absolute"
              src="card1.png"
            />
            <CardBody>
            </CardBody>
            <CardFooter>
            <Link href='https://medium.com/@unibonk/ubonk-presale-an-5960090cc1ec' target='_blank'> 
              <Button variant='flat' radius='sm' size='sm' endContent={<FaArrowRight />} className='bg-orange-500 hover:bg-orange-400 text-orange-800/75 hover:text-orange-100 font-semibold'>
                  More details 
              </Button>
             </Link>
            </CardFooter>
          </Card>
          <Card className="h-[150px] border-2 border-[#6363D8] hover:border-orange-500">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">COLLECTION</p>
              <h4 className="text-white font-medium text-large">Launch UBONK-NFTs</h4>
            </CardHeader>
            <motion.img
              whileHover={{scale:1.05}}
              initial="hidden"
              whileInView="show"
              alt="Card background"
              className="z-0 w-full h-full object-cover absolute"
              src="insight3.png"
            />
            <CardBody>
            </CardBody>
            <CardFooter>
              <Button variant='flat' radius='sm' size='sm' endContent={<FaArrowRight />} className='bg-orange-500 hover:bg-orange-400 text-orange-800/75 hover:text-orange-100 font-semibold'>
                Coming Soon 
              </Button>
            </CardFooter>
          </Card>

          <Card className="h-[150px] border-2 border-gray-800 hover:border-orange-500">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">UBONK Coin</p>
              <h4 className="text-white font-medium text-large">UBONK COIN Mainnet</h4>
            </CardHeader>
            <motion.img
              whileHover={{scale:1.05}}
              initial="hidden"
              whileInView="show"
              alt="Card background"
              className="z-0 w-full h-full object-cover absolute"
              src="insight4.png"
            />
            <CardBody>
            </CardBody>
            <CardFooter>
              <Link href='https://docs.unibonk.meme/ubonk-coin' target='_blank'>
              <Button variant='flat' radius='sm' size='sm' endContent={<FaArrowRight />} className='bg-orange-500 hover:bg-orange-400 text-orange-800/75 hover:text-orange-100 font-semibold'>
                More details
              </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Insight;
