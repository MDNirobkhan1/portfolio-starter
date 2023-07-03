import React from 'react';
import image1 from '../assets/55.jpg'
import image2 from '../assets/Toy-cars.jpg';
import image3 from '../assets/recipi.jpg'

// type animation 
import { TypeAnimation } from 'react-type-animation'
// motion
import { motion } from 'framer-motion';
import { fadeIn } from '../variants'
import { Link } from 'react-scroll';

const Work = () => {
  return <div className='section' id='work'>
    <div className='container mx-auto'>
      <h2 className='text-4xl text-center mb-10'>My Projects</h2>
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <motion.div
          variants={fadeIn('left', 0.3)}
          initial="hidden"
          whileInView={'show'}
          vlewport={{ once: false, amount: 0.7 }}
          className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
          <div>
            <h2 className='h2 loading-tight text-accent'>photogr school</h2>
            <p className='mx-w-sm mb-16'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, quo! Alias, ad nobis consequatur recusandae velit maiores sit, repellendus, odit totam vitae possimus quam facere inventore? Eaque officia totam quae.</p>
            <a className='btn btn-sm'  href="https://summer-camp-10836.firebaseapp.com/" target="_blank" rel="noopener noreferrer">
              View All Project
            </a>

          </div>
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition duration-3'></div>
            <img className='group-hover:scale-125 transition-all duration-500' src={image1} alt="" />
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <h2 className='h2 loading-tight text-accent'>photography school</h2>
              <span className='text-3xl text-white'>Project title</span>
            </div>
            <div>

            </div>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          whileInView={'show'}
          vlewport={{ once: false, amount: 0.7 }}
          className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
          <div>
            <h2 className='h2 loading-tight text-accent'>Toy-cars</h2>
            <p className='mx-w-sm mb-16'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, quo! Alias, ad nobis consequatur recusandae velit maiores sit, repellendus, odit totam vitae possimus quam facere inventore? Eaque officia totam quae.</p>
            <a className='btn btn-sm' href="https://assignment-11-4641e.firebaseapp.com/" target="_blank" rel="noopener noreferrer">
              View All Project
            </a>

          </div>
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition duration-3'></div>
            <img className='group-hover:scale-125 transition-all duration-500' src={image2} alt="" />
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <h2 className='h2 loading-tight text-accent'>Toy-cars</h2>
              <span className='text-3xl text-white'>Project title</span>
            </div>
            <div>

            </div>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn('right', 0.3)}
          initial="hidden"
          whileInView={'show'}
          vlewport={{ once: false, amount: 0.7 }}
          className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
          <div>
            <h2 className='h2 loading-tight text-accent'>Food Recipi</h2>
            <p className='mx-w-sm mb-16'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, quo! Alias, ad nobis consequatur recusandae velit maiores sit, repellendus, odit totam vitae possimus quam facere inventore? Eaque officia totam quae.</p>
            <a className='btn btn-sm' href="https://assignment-10-a3221.firebaseapp.com/" target="_blank" rel="noopener noreferrer">
              View All Project
            </a>

          </div>
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition duration-3'></div>
            <img className='group-hover:scale-125 transition-all duration-500' src={image3} alt="" />
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <h2 className='h2 loading-tight text-accent'>Food Recipi</h2>
              <span className='text-3xl text-white'>Project title</span>
            </div>
            <div>

            </div>
          </div>
        </motion.div>

      </div>
    </div>
  </div>;
};

export default Work;
