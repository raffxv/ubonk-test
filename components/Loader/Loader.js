'use-client'
import { motion } from 'framer-motion';
import {CircularProgress} from "@nextui-org/react";
import React from 'react';
import { useState, useEffect } from 'react';

const Loader = () => {
  return (
    <>
    <div className='h-screen w-screen  bg-gradient-to-tr from-[#eb4034] via-[#c26d1d] to-[#eb4034] flex justify-center items-center'>
      <BarLoader />
      </div>
    </>
  );
};

const variants = {
  initial: {
    scaleY: 1,
    opacity: 0,
  },
  animate: {
    scaleY: 1,
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 1,
      ease: "circIn",
    },
  },
};

const textVariant = {
  initial: {
    scaleY: 1,
    opacity: 0,
  },
  animate: {
    scaleY: 1,
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 1,
      ease: "circIn",
    },
  },
};


const BarLoader = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => (v >= 100 ? 0 : v + 10));
    }, 400);

    return () => clearInterval(interval);
  }, []);


  return (
    <motion.div
      transition={{
        staggerChildren: 0.25,
      }}
    
      initial="initial"
      animate="animate"
      className="gap-1 md:gap-4 justify-center items-center text-center"
    >
      <motion.img   variants={variants}  src='mascot.svg' alt='' className='w-[150px] h-[150px] md:w-[400px] md:h-[400px]'/>
        <div  className='flex justify-center'>
         <h4 className='text-2xl text-white'>
         <motion.span variants={textVariant}>
        l
        </motion.span>
        <motion.span variants={textVariant}>
        o
        </motion.span>
        <motion.span variants={textVariant}>
        a
        </motion.span>
        <motion.span variants={textVariant}>
        d
        </motion.span>
        <motion.span variants={textVariant}>
        i
        </motion.span>
        <motion.span variants={textVariant}>
        n
        </motion.span>
        <motion.span variants={textVariant}>
        g
        </motion.span>
      
        <motion.span variants={textVariant}>
        .
        </motion.span>
        <motion.span variants={textVariant}>
        .
        </motion.span>
        <motion.span variants={textVariant}>
        .
        </motion.span>
         
         </h4>    
      </div>
    </motion.div>
  );
};

export default Loader;