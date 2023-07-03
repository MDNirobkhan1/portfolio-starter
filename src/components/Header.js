/* eslint-disable jsx-a11y/anchor-has-content */
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

        <a className='btn btn-sm' href="https://drive.google.com/uc?id=1tibh6T0TItsaOdKaoO-oz3Yc338jjuT4&export=download" referrerPolicy='no-referrer' target='_blank' download rel="noreferrer">Resume</a>
      </div>
    </div>
  </header>;
};

export default Header;
