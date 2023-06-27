/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import logo from '../assets/pic.jpg'

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
        <button className='btn btn-sm'>MY RESUME</button>
      </div>
    </div>
  </header>;
};

export default Header;
