/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable no-unused-vars */
import React from 'react';
// image 
import Image from '../assets/NIROB.jpg'
// type animation 
import { TypeAnimation } from 'react-type-animation'
// motion
import { motion } from 'framer-motion';
// variants 
import { fadeIn } from '../variants'
import { Link } from 'react-router-dom';

const Banner = () => {
  return <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
        {/* text  */}
        <div className='flex-1 text-center font-secondary lg:text-left mt-8'>
          <motion.h1
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView={'show'}
            vlewport={{ once: false, amount: 0.7 }}
            className='text-[40px] font-bold leading-[0,8] lg:text-[50px] sm:text-[50px]  mb-8'>
            MD. <span>MOHIUDDIN</span>
          </motion.h1>
          <motion.div
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            whileInView={'show'}
            vlewport={{ once: false, amount: 0.7 }}
            className='mb-6 text-[36px] lg:text-[20px] font-secondary font-semibold uppercase leading-[1]'>
            <span className='text-white mr-4'>I am a</span>
            <TypeAnimation sequence={[
              ' MERN Stack Developer',200,
              ' Frontend Developer',200,
              ' Web Developer',200,
            ]}
              speed={30}
              className='text-accent'
              wrapper='span'
              repeat={Infinity}
              
            />

          </motion.div>
          <motion.p
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView={'show'}
            vlewport={{ once: false, amount: 0.7 }}
            className='mb-8 max-w-lg mx-auto lg:mx-0'>I am a web developer with an astonishing faculty to develop websites that are both functional and aesthetically gratifying. I have a vigorous understanding of web standards and best practices, and I am zealous about engendering websites that users will find facile to utilize and visually appealing.</motion.p>
          <motion.div
            variants={fadeIn('up', 0.7)}
            initial="hidden"
            whileInView={'show'}
            vlewport={{ once: false, amount: 0.7 }}
            className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
           <button className='btn btn-lg'>Contact me</button>
           
          </motion.div>
        </div>
        {/* iamge  */}
        <motion.div
          variants={fadeIn('down', 0.5)}
          initial="hidden"
          whileInView={'show'}
          className='hidden lg:flex flex-1 max-w-[320px] lg:-mx-w-[482px]'>
          <img className='rounded-full ' src={Image} alt="" />
        </motion.div>
      </div>
    </div>
  </section>;
};

export default Banner;
