/* eslint-disable no-unused-vars */
import React from 'react';
import image from '../assets/Untitled-1.jpg'

import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  })
  return <section className='section' id='about' ref={ref}>
    <div className='container mx-auto'>
      <div className='justify-start items-center'>
        <motion.div
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          whileInView={'show'}
          vlewport={{ once: false, amount: 0.7 }}
        >
          <img className='flex-1 bg-contain bg-no-repeat h-[400px] mix-blend-lighten bg-top w-[700px] rounded-2xl ' src={image} alt="" />
        </motion.div>
        <motion.div
          variants={fadeIn('left', 0.3)}
          initial="hidden"
          whileInView={'show'}
          vlewport={{ once: false, amount: 0.7 }}
        >
          <h1>About Me</h1>
          <p>Experience is the name everyone gives to their mistakes.</p>
          <h3>
            <p>My Intro</p>
            Hey, This is Mohiuddin, I am 23 years old.I live in Dhaka in Bangladesh. I completed my 4 years diploma course in computer science & engineering from Comilla Polytechnic Institute in 2021. I am currently learning web development. I am a front-end web developer. I have worked on many of my projects. Every project is different and works front-end, back-end, and design done by me. I request you to see my projects.
          </h3>
        </motion.div>
      </div>
    </div>
  </section>;
};

export default About;
