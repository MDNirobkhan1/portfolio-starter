import React from 'react';
import image1 from '../assets/55.jpg'
import image2 from '../assets/Toy-cars.jpg';
import image3 from '../assets/recipi.jpg'
import image4 from '../assets/shopping cart.PNG'

// type animation 

// motion
import { motion } from 'framer-motion';
import { fadeIn } from '../variants'


const Work = () => {
  return <div className='section' id='work'>
    <div className='container mx-auto'>
      <h2 className='text-4xl text-center mb-10'>My Projects</h2>
      <div className='flex lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-x-10'>
        <motion.div
          variants={fadeIn('left', 0.3)}
          initial="hidden"
          whileInView={'show'}
          vlewport={{ once: false, amount: 0.7 }}
          className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
          <div>
            <h2 className='h2 loading-tight text-accent'>Shopping Cart</h2>
            <a className='btn btn-sm'  href="https://ecommerce-website-kappa-lime.vercel.app/" target="_blank" rel="noopener noreferrer">
              View All Project
            </a>

          </div>
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition duration-3'></div>
            <img className='group-hover:scale-125 transition-all duration-500' src={image4} alt="" />
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <h2 className='h2 loading-tight text-accent'>Shopping Cart</h2>
              <span className='text-3xl text-white'>Project title</span>
            </div>
            <div>

            </div>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn('left', 0.3)}
          initial="hidden"
          whileInView={'show'}
          vlewport={{ once: false, amount: 0.7 }}
          className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
          <div>
            <h2 className='h2 loading-tight text-accent'>photogr school</h2>
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
