'use client';
import styles from '../styles';
import { motion } from 'framer-motion';
import { HomeIcon } from '../components/Icon';
import { fadeIn } from '../utils/motion';
import { Button, Link, Card, CardBody, CardHeader, Image, CardFooter } from '@nextui-org/react';
import { FaArrowRight } from 'react-icons/fa';

const icons = {
  home:  <HomeIcon size={22}/>,
  arrow: <FaArrowRight  size={16} />

};
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

import { ServiceData } from "../constants";
import { data } from 'autoprefixer';

const ActiveSlider = () => {
  return (
    <div className="flex items-center justify-center bg-gray-900 my-20 lg:mb-20">
      <Swiper
        loop={true}
        breakpoints={{
          340: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 1,
            spaceBetween: 15,

          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[95%] lg:max-w-[80%]"
      >
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title}>
            <div className='px-1 block lg:hidden'>
            <Card className="h-[200px] md:h-[300px] border-orange-500 border-2 rounded-2xl lg:rounded-3xl ">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">{item.title}</p>
              <h4 className="text-white font-medium text-large">{item.content}</h4>
            </CardHeader>
            <motion.img
              whileHover={{scale:1.05}}
              initial="hidden"
              whileInView="show"
              alt="Card background"
              className="z-0 w-full h-full object-cover absolute"
              src={item.image}
            />
             <CardBody>
            </CardBody>
            <Link href={item.to} target='_blank'>

                <CardFooter className=''>
            <Button variant='flat' radius='sm' size='sm' className='bg-orange-500 hover:bg-orange-400 text-orange-800/75 hover:text-orange-100 font-semibold' endContent={<FaArrowRight />}>
                  More Details 
                  </Button>
            
            </CardFooter>
            </Link>
          </Card>
          </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ActiveSlider;