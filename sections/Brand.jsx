'use client'
import React, { useState, useEffect } from 'react';
import styles from '../styles';
import Image from 'next/image';

const Brand = () => {
  return (
    <section className={`mb-10 my-10`}>
      <div className={`${styles.xPadding}`}>
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <ul x-ref="logos" className="flex items-center justify-center md:justify-start [&_li]:mx-4 md:[&_li]:mx-10 [&_img]:max-w-none animate-infinite-scroll">
            <li>
              <img src="./brands/nft1.png" alt="nft1" className='w-[250px] h-[250px] md:w-[300px] md:h-[300px] object-contain rounded-2xl'/>
            </li>
            <li>
              <img src="./brands/nft2.png" alt="nft2" className='w-[250px] h-[250px] md:w-[300px] md:h-[300px] md:w-[300px] md:h-[300px] object-contain rounded-2xl'/>
            </li>
            <li>
             <img src="./brands/nft3.png" alt="nft3" className='w-[250px] h-[250px] md:w-[300px] md:h-[300px]md:w-[300px] md:h-[300px] object-contain rounded-2xl'/>
            </li>
            <li>
             <img src="./brands/nft4.png" alt="nft4" className='w-[250px] h-[250px] md:w-[300px] md:h-[300px] object-contain rounded-2xl'/>
            </li>
            <li>
              <img src="./brands/nft1.png" alt="nft1" className='w-[250px] h-[250px] md:w-[300px] md:h-[300px] object-contain rounded-2xl'/>
            </li>
            <li>
              <img src="./brands/nft2.png" alt="nft2" className='w-[250px] h-[250px] md:w-[300px] md:h-[300px] md:w-[300px] md:h-[300px] object-contain rounded-2xl'/>
            </li>
            <li>
              <img src="./brands/nft3.png" alt="nft3" className='w-[250px] h-[250px] md:w-[300px] md:h-[300px]md:w-[300px] md:h-[300px] object-contain rounded-2xl'/>
            </li>
            <li>
              <img src="./brands/nft4.png" alt="nft4" className='w-[250px] h-[250px] md:w-[300px] md:h-[300px] object-contain rounded-2xl'/>
            </li>
          </ul>  
          <ul x-ref="logos" className="flex items-center justify-center md:justify-start [&_li]:mx-4 md:[&_li]:mx-10 [&_img]:max-w-none animate-infinite-scroll">
            <li>
              <img src="./brands/nft1.png" alt="nft1" className='w-[250px] h-[250px] md:w-[300px] md:h-[300px] object-contain rounded-2xl'/>
            </li>
            <li>
              <img src="./brands/nft2.png" alt="nft2" className='w-[250px] h-[250px] md:w-[300px] md:h-[300px] md:w-[300px] md:h-[300px] object-contain rounded-2xl'/>
            </li>
            <li>
             <img src="./brands/nft3.png" alt="nft3" className='w-[250px] h-[250px] md:w-[300px] md:h-[300px]md:w-[300px] md:h-[300px] object-contain rounded-2xl'/>
            </li>
            <li>
             <img src="./brands/nft4.png" alt="nft4" className='w-[250px] h-[250px] md:w-[300px] md:h-[300px] object-contain rounded-2xl'/>
            </li>
            <li>
              <img src="./brands/nft1.png" alt="nft1" className='w-[250px] h-[250px] md:w-[300px] md:h-[300px] object-contain rounded-2xl'/>
            </li>
            <li>
              <img src="./brands/nft2.png" alt="nft2" className='w-[250px] h-[250px] md:w-[300px] md:h-[300px] md:w-[300px] md:h-[300px] object-contain rounded-2xl'/>
            </li>
            <li>
              <img src="./brands/nft3.png" alt="nft3" className='w-[250px] h-[250px] md:w-[300px] md:h-[300px]md:w-[300px] md:h-[300px] object-contain rounded-2xl'/>
            </li>
            <li>
              <img src="./brands/nft4.png" alt="nft4" className='w-[250px] h-[250px] md:w-[300px] md:h-[300px] object-contain rounded-2xl'/>
            </li>
          </ul>     
        </div>
      </div>
    </section>
  );
};

export default Brand;
