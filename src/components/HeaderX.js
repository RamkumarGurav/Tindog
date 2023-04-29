/* eslint-disable */
import React from "react";

const HeaderX = () => {
  return (
    <div>
      <div
        className="bg-price text-white
       py-4 px-5"
        // style={{ backgroundColor: "tomato" }}
      >
        <nav className="flex items-start flex-col justify-start gap-2 md:flex-row md:justify-between">
          <div>
            <h1 className="text-xl font-bold hover:text-white visited:text-white decoration-black pb-2 border-b border-gray-100 ">
              <a href="/" className="font-lato uppercase hover:text-gray-500">
                Food Ninjas
              </a>
            </h1>
          </div>
          <ul className="flex flex-col justify-center items-start gap-3 md:flex-row md:justify-center mt-2 md:mt-0 ">
            <li className="home border-white">
              <a
                href="#"
                className="hover:text-black text-xl rounded-full  hover:fill-black py-1 px-2 hover:bg-white"
                style={{ border: "3px solid white" }}
              >
                <span className="x">Home</span>
                <svg
                  className="inline-block w-5 mb-1 ml-1 text-white fill-white  "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black text-xl ">
                <span>Recepies</span>
              </a>
            </li>
            <li className="home">
              <a
                href="#"
                className="hover:text-black text-xl rounded-full border-2 hover:fill-black border-white py-1 px-2 hover:bg-white"
              >
                <span>Contact</span>
                <svg
                  className="inline-block w-5 mb-1 ml-1 text-white fill-white  "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M96 0C60.7 0 32 28.7 32 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H96zM208 288h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H144c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM512 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V80zM496 192c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm16 144c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V336z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black text-xl">
                <span className="hover:text-black text-xl">About</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <main className="px-12 py-6">
        <div className="text-white ">
          <a
            className="hoverbtn rounded-full m-3 uppercase py-2 px-3 bg-price"
            style={{ border: "3px solid tomato" }}
          >
            Login
          </a>
          <a
            className="hoverbtn rounded-full m-3 uppercase py-2 px-3 bg-price"
            style={{ border: "3px solid tomato" }}
          >
            Login
          </a>
        </div>

        <header className="text-rose-500 text-4xl font-extrabold">
          <h2>Recepies</h2>
          <h3>For Ninjas</h3>
        </header>

        <div>
          <h4 className="font-bold text-lg border-b border-gray-200 mb-5 py-3">
            Latest Recipes
          </h4>
          <div className="ram-grid-auto">
            {/* card hover:shadow-lg card-transitions go here */}
            <div
              className="card hover:shadow-lg card-transition"
              // style={{
              //   width: "40vmax",
              // }}
            >
              <img
                src="https://media.istockphoto.com/id/177126541/photo/indian-chicken-jalfrezi-curry.jpg?s=612x612&w=0&k=20&c=lOkmRiBFovpKW5FA9hn0_yXg5HOTx78Can4E3JavpFE="
                alt="curry"
                className="w-full h-48 sm:h-64 object-cover"
              />
              <div className="py-2 px-4 flex flex-col">
                <span className="font-bold text-gray-800">
                  5 Bean Chilli Stew
                </span>
                <span className="text-sm text-gray-500">Recipe by Mario</span>
              </div>
              <div className="badge">
                <span>25 mins</span>
              </div>
            </div>
            <div
              className="card hover:shadow-lg card-transition card-transition"
              // style={{
              //   width: "40vmax",
              // }}
            >
              <img
                src="https://media.istockphoto.com/id/177126541/photo/indian-chicken-jalfrezi-curry.jpg?s=612x612&w=0&k=20&c=lOkmRiBFovpKW5FA9hn0_yXg5HOTx78Can4E3JavpFE="
                alt="curry"
                className="w-full h-48 sm:h-64 object-cover"
              />
              <div className="py-2 px-4 flex flex-col">
                <span className="font-bold text-gray-800">
                  5 Bean Chilli Stew
                </span>
                <span className="text-sm text-gray-500">Recipe by Mario</span>
              </div>
              <div className="badge">
                <span>25 mins</span>
              </div>
            </div>
            <div
              className="card hover:shadow-lg card-transition"
              // style={{
              //   width: "40vmax",
              // }}
            >
              <img
                src="https://media.istockphoto.com/id/177126541/photo/indian-chicken-jalfrezi-curry.jpg?s=612x612&w=0&k=20&c=lOkmRiBFovpKW5FA9hn0_yXg5HOTx78Can4E3JavpFE="
                alt="curry"
                className="w-full h-48 sm:h-64 object-cover"
              />
              <div className="py-2 px-4 flex flex-col">
                <span className="font-bold text-gray-800">
                  5 Bean Chilli Stew
                </span>
                <span className="text-sm text-gray-500">Recipe by Mario</span>
              </div>
              <div className="badge">
                <span>
                  <svg
                    className="w-3 inline-block mb-1 mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                  </svg>
                  25 mins
                </span>
              </div>
            </div>
            <div
              className="card hover:shadow-lg card-transition"
              // style={{
              //   width: "40vmax",
              // }}
            >
              <img
                src="https://media.istockphoto.com/id/177126541/photo/indian-chicken-jalfrezi-curry.jpg?s=612x612&w=0&k=20&c=lOkmRiBFovpKW5FA9hn0_yXg5HOTx78Can4E3JavpFE="
                alt="curry"
                className="w-full h-48 sm:h-64 object-cover"
              />
              <div className="py-2 px-4 flex flex-col">
                <span className="font-bold text-gray-800">
                  5 Bean Chilli Stew
                </span>
                <span className="text-sm text-gray-500">Recipe by Mario</span>
              </div>
              <div className="badge">
                <span>25 mins</span>
              </div>
            </div>
            <div
              className="card hover:shadow-lg card-transition"
              // style={{
              //   width: "40vmax",
              // }}
            >
              <img
                src="https://media.istockphoto.com/id/177126541/photo/indian-chicken-jalfrezi-curry.jpg?s=612x612&w=0&k=20&c=lOkmRiBFovpKW5FA9hn0_yXg5HOTx78Can4E3JavpFE="
                alt="curry"
                className="w-full h-48 sm:h-64 object-cover"
              />
              <div className="py-2 px-4 flex flex-col">
                <span className="font-bold text-gray-800">
                  5 Bean Chilli Stew
                </span>
                <span className="text-sm text-gray-500">Recipe by Mario</span>
              </div>
              <div className="badge">
                <span>25 mins</span>
              </div>
            </div>
            <div
              className="card hover:shadow-lg card-transition"
              // style={{
              //   width: "40vmax",
              // }}
            >
              <img
                src="https://media.istockphoto.com/id/177126541/photo/indian-chicken-jalfrezi-curry.jpg?s=612x612&w=0&k=20&c=lOkmRiBFovpKW5FA9hn0_yXg5HOTx78Can4E3JavpFE="
                alt="curry"
                className="w-full h-48 sm:h-64 object-cover"
              />
              <div className="py-2 px-4 flex flex-col">
                <span className="font-bold text-gray-800">
                  5 Bean Chilli Stew
                </span>
                <span className="text-sm text-gray-500">Recipe by Mario</span>
              </div>
              <div className="badge">
                <span>25 mins</span>
              </div>
            </div>
          </div>
          <div>{/* card hover:shadow-lg card-transitions go here */}</div>
          <h4 className="font-light">Most Popular </h4>
          <div className="text-white">
            <button className="tbtn rounded-sm bg-price border-2 border-price hover:border-2 hover:border-price hover:shadow-red-500 ">
              Load More
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeaderX;
