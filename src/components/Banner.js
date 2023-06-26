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

const Banner = () => {
  return <section className='section' id='home'>
    <div className='container mx-auto'>
      <div>
        {/* text  */}
        <div>
          <h1 className='text-3xl'>
            MD. <span>MOHIUDDIN</span>
          </h1>
          <div className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
            <span className='text-white mr-4'>I am a</span>
            <TypeAnimation sequence={[
              ' MERN Stack Developer', 200,
              ' Frontend Developer', 200,
              ' Web Developer', 200,
            ]}
              speed={40}
              className='text-accent'
              wrapper='span'
              repeat={Infinity}
            />

          </div>
          <p>I am a web developer with an astonishing faculty to develop websites that are both functional and aesthetically gratifying. I have a vigorous understanding of web standards and best practices, and I am zealous about engendering websites that users will find facile to utilize and visually appealing.</p>
          <div>
            <button className='btn btn-lg'>Contact me</button>
            <a href="#" className='text-gradient btn-link'>My Portfolio</a>
          </div>
        </div>
        {/* iamge  */}
        <div>
          <img className='rounded-full' src={Image} alt="" />
        </div>
      </div>
    </div>
  </section>;
};

export default Banner;
