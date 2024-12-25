/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../assets/pic.jpg";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center sm:gap-3">
          <div>
            <a href="#" className="text-3xl flex">
              <img
                className="w-[60px] h-[60px] rounded-full"
                src={logo}
                alt=""
              />
              <span className="ml-2 text-4xl text-gradient"> PORTFOLIO</span>
            </a>
          </div>

          <div>
            <a
              className="btn btn-sm"
              href="https://drive.google.com/file/d/19QFyO_BLs9iHa-ln3BoSzWkLoosy60lX/view?=download"
              referrerPolicy="no-referrer"
              target="_blank"
              download
              rel="noreferrer"
            >
              My Resume
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
