import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navlinks from "./Navlinks";

const NavbarComplexT = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white py-1">
      <div className="flex items-center justify-around font-medium ">
        <div className="z-30 flex justify-between w-full p-4 md:w-auto">
          <div className="text-xl text-cyan-400 h-9">LOGO</div>
          <div
            className="md:hidden"
            onClick={() => {
              setOpen(!open);
            }}
          >
            {open ? (
              <svg
                className="w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                fill="tomato"
              >
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
              </svg>
            ) : (
              <svg
                className="w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                fill="gray"
              >
                <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
              </svg>
            )}
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-lato">
          <li>
            <a to="/" className="py-7 px-3 inline-block">
              Home
            </a>
          </li>
          <Navlinks />
        </ul>
        <div className="hidden md:block">
          <button className="bg-blue-500 text-white rounded-full py-2 px-6">
            Get Started
          </button>
        </div>

        {/* mobile noav */}
        <ul
          className={`md:hidden absolute top-0 w-full bg-white py-24 pl-4  font-semibold font-lato duration-500 ${
            open ? "left-0" : "left-[-100%]"
          } `}

          style={{minHeight:'100vh'}}
        >
          <li>
            <a to="/" className="py-2 px-3 inline-block">
              Home
            </a>
          </li>
          <Navlinks />
          <div className="py-2">
            <button className="bg-blue-500 text-white rounded-full py-2 px-6">
              Get Started
            </button>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarComplexT;
