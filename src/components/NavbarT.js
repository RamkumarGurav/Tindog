import React, { useEffect, useState } from "react";

const NavbarT = () => {
  const [open, setOpen] = useState(false);
  // let ws = window.innerWidth;

  // useEffect(() => {
  //   if (window.innerWidth > 767) {
  //     console.log("x");
  //     setOpen(true);
  //   }
  // }, [ws]);

  console.log(open);
  return (
    <div className="shadow-md w-full fixed top-0 right-0 px-5 py-3 bg-white ">
      <div className="flex justify-between md:flex md:justify-between md:item-center ">
        <div className="flex items-center h-10 justify-center">
          <span className="text-xl font-bold font-lato uppercase border-2 bg-price text-white border-price rounded-md outline-none">
            TinDog
          </span>
        </div>
        <div
          className="flex items-center h-10 justify-center visible md:hidden"
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

        <ul
          className={`bg-white absolute  right-0  z-[-2] w-full  pl-12 transition-all duration-500 origin-center ease-in-out md:static md:top-0 md:opacity-100 md:pb-0 md:z-auto md:w-auto md:pl-0 md:flex md:justify-center md:items-center md:mb-0 md:shadow-none ${
            open ? "opacity-100 top-10 shadow-md visible" : "top-[-490px]  "
          }  `}
        >
          <li className="text-xs md:my-0 mt-9 mb-6 md:mt-0 uppercase md:ml-8 font-bold ">
            <a
              href="#"
              className="text-gray-700 duration-200 ease-in-out  hover:text-red-400"
            >
              HOME
            </a>
          </li>
          <li className="text-xs md:my-0 my-6 md:mt-0 uppercase md:ml-8 font-bold ">
            <a
              href="#"
              className="text-gray-700 duration-200 ease-in-out hover:text-red-400"
            >
              Dogs
            </a>
          </li>
          <li className="text-xs md:my-0 my-6 md:mt-0 uppercase md:ml-8 font-bold ">
            <a
              href="#"
              className="text-gray-700 duration-200 ease-in-out hover:text-red-400"
            >
              About
            </a>
          </li>
          <li className="text-xs md:my-0 my-6 md:mt-0 uppercase md:ml-8 font-bold ">
            <a
              href="#"
              className="text-gray-700 duration-200 ease-in-out hover:text-red-400"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarT;
