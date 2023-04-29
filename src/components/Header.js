import React, { useState } from "react";

import { HiMenu } from "react-icons/hi";
import { CgClose } from "react-icons/cg";

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div id="title" className="m-0 p-0">
      <div className="container-fluid m-0 px-0 py-0">
        {/* <header className="contianer bg-[#ff4c68] mb-[100px] py-2 md:shadow-lg">
          <div className="py-4 px-[2vmax] lg:px-[4vmax]  flex flex-col gap-5 lg:flex-row lg:justify-between lg:items-center">
            <div className="flex justify-between items-center z-40">
              <a href="/" className="text-2xl font-bold text-white    ">
                Tindog
              </a>

              {open ? (
                <CgClose
                  size={30}
                  color={"white"}
                  onClick={handleOpen}
                  className="visible lg:hidden"
                />
              ) : (
                <HiMenu
                  size={30}
                  color={"white"}
                  onClick={handleOpen}
                  className="visible lg:hidden"
                />
              )}
            </div>

            <div
              className={`flex pb-2 bg-[#ff4c68] md:shadow-none text-white duration-500 ease-in-out  flex-col gap-5 absolute lg:static  ${
                open
                  ? "top-20 pt-2 pb-4 left-0 pl-[2vmax] w-full z-10  shadow-b-md"
                  : "top-[-100%] w-full left-0"
              } lg:flex-row lg:justify-between lg:items-center lg:w-[70%] xl:w-[50%]`}
            >
              <a href="/" className="text text-white    duration-300">
                <p className="hover:text-purple-300">Home</p>
              </a>
              <a href="#features" className="text text-white    duration-300">
                <p className="hover:text-purple-300">Features</p>
              </a>
              <a
                href="#testimonials"
                className="text text-white    duration-300"
              >
                <p className="hover:text-purple-300">Testimonials</p>
              </a>
              <a href="#price" className="text text-white    duration-300">
                <p className="hover:text-purple-300">Buy Subcription</p>
              </a>
              <a href="#footer" className="text text-white    duration-300">
                <p className="hover:text-purple-300">Contact</p>
              </a>
            </div>
          </div>
        </header> */}

        <div className="xheader-container">
          <div className="xheader">
            <a href="/" className="xlogo"><p>Tindog</p></a>
            {open ? (
              <CgClose
                size={30}
                color={"white"}
                onClick={handleOpen}
                className="ham close"
              />
            ) : (
              <HiMenu
                size={30}
                color={"white"}
                onClick={handleOpen}
                className="ham open"
              />
            )}
            <div className={`xnav ${open ? "xnavOpen" : " "}`}>
              <a href="/">
                <p>Home</p>
              </a>
              <a href="#features">
                <p>Features</p>
              </a>
              <a href="#testimonials">
                <p>Testimonials</p>
              </a>
              <a href="#price">
                <p>Prices</p>
              </a>
              <a href="#footer" >
                <p >Contact</p>
              </a>
            </div>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-md-2 g-4 px-12">
          <div className="col">
            <h1 className="big-heading">
              Meet new and interesting dogs nearby.
            </h1>
            <button className="btn btn-dark btn-lg me-4 mt-4" type="button">
              <i className="fa-brands fa-google-play"></i> Download
            </button>
            <button
              className="btn btn-outline-light  btn-lg  me-2 mt-4"
              type="button"
            >
              <i className="fa-brands fa-apple"></i> Download
            </button>
          </div>
          <div className="col col-iphone">
            <img src={require("../images/iphone6.png")} alt="iphone-mockup" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
