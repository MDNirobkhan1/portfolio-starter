/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import logo from '../assets/pic.jpg'
import { Link } from 'react-scroll';

const Header = () => {
  return <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        <div>
          <a href="#" className='text-3xl flex'>
            <img className='w-[60px] h-[60px] rounded-full' src={logo} alt="" />
            <span className='ml-4 text-4xl text-gradient'> PORTFOLIO</span>
          </a>
        </div>
       <Link to="https://drive.google.com/file/d/1tibh6T0TItsaOdKaoO-oz3Yc338jjuT4/view?usp=sharing" > <button  className='btn btn-sm'>MY RESUME</button></Link>
      </div>
    </div>
  </header>;
};

export default Header;
