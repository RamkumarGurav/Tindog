import React, { useState } from "react";

const Navlinks = () => {
  const links = [
    {
      name: "Men",
      submenu: true,

      sublinks: [
        {
          Head: "Topwear",
          innerSublinks: [
            { name: "T-Shirt", link: "/" },
            { name: "Casual shirts", link: "/" },
            { name: "Formal shirts", link: "/" },
            { name: "Formal shirts", link: "/" },
          ],
        },
        {
          Head: "Bottom-wear",
          innerSublinks: [
            { name: "T-Shirt", link: "/" },
            { name: "Casual shirts", link: "/" },
            { name: "Formal shirts", link: "/" },
            { name: "Formal shirts", link: "/" },
          ],
        },
        {
          Head: "Innerwear",
          innerSublinks: [
            { name: "T-Shirt", link: "/" },
            { name: "Casual shirts", link: "/" },
            { name: "Formal shirts", link: "/" },
            { name: "Formal shirts", link: "/" },
          ],
        },
        {
          Head: "Footwear",
          innerSublinks: [
            { name: "T-Shirt", link: "/" },
            { name: "Casual shirts", link: "/" },
            { name: "Formal shirts", link: "/" },
            { name: "Formal shirts", link: "/" },
          ],
        },
        {
          Head: "Sleepwear",
          innerSublinks: [
            { name: "T-Shirt", link: "/" },
            { name: "Casual shirts", link: "/" },
            { name: "Formal shirts", link: "/" },
            { name: "Formal shirts", link: "/" },
          ],
        },
      ],
    },
    {
      name: "Women",
      submenu: true,

      sublinks: [
        {
          Head: "Topwear",
          innerSublinks: [
            { name: "T-Shirt", link: "/" },
            { name: "Casual shirts", link: "/" },
            { name: "Formal shirts", link: "/" },
            { name: "Formal shirts", link: "/" },
          ],
        },
        {
          Head: "Bottom-wear",
          innerSublinks: [
            { name: "T-Shirt", link: "/" },
            { name: "Casual shirts", link: "/" },
            { name: "Formal shirts", link: "/" },
            { name: "Formal shirts", link: "/" },
          ],
        },
        {
          Head: "Innerwear",
          innerSublinks: [
            { name: "T-Shirt", link: "/" },
            { name: "Casual shirts", link: "/" },
            { name: "Formal shirts", link: "/" },
            { name: "Formal shirts", link: "/" },
          ],
        },
        {
          Head: "Footwear",
          innerSublinks: [
            { name: "T-Shirt", link: "/" },
            { name: "Casual shirts", link: "/" },
            { name: "Formal shirts", link: "/" },
            { name: "Formal shirts", link: "/" },
          ],
        },
        {
          Head: "Sleepwear",
          innerSublinks: [
            { name: "T-Shirt", link: "/" },
            { name: "Casual shirts", link: "/" },
            { name: "Formal shirts", link: "/" },
            { name: "Formal shirts", link: "/" },
          ],
        },
      ],
    },

    {
      name: "Kid's",
      submenu: true,
      right: 40,
      left: 64,
      sublinks: [
        {
          Head: "Topwear",
          innerSublinks: [
            { name: "T-Shirt", link: "/" },
            { name: "Casual shirts", link: "/" },
            { name: "Formal shirts", link: "/" },
            { name: "Formal shirts", link: "/" },
          ],
        },
        {
          Head: "Bottom-wear",
          innerSublinks: [
            { name: "T-Shirt", link: "/" },
            { name: "Casual shirts", link: "/" },
            { name: "Formal shirts", link: "/" },
            { name: "Formal shirts", link: "/" },
          ],
        },
        {
          Head: "Innerwear",
          innerSublinks: [
            { name: "T-Shirt", link: "/" },
            { name: "Casual shirts", link: "/" },
            { name: "Formal shirts", link: "/" },
            { name: "Formal shirts", link: "/" },
          ],
        },
        {
          Head: "Footwear",
          innerSublinks: [
            { name: "T-Shirt", link: "/" },
            { name: "Casual shirts", link: "/" },
            { name: "Formal shirts", link: "/" },
            { name: "Formal shirts", link: "/" },
          ],
        },
        {
          Head: "Sleepwear",
          innerSublinks: [
            { name: "T-Shirt", link: "/" },
            { name: "Casual shirts", link: "/" },
            { name: "Formal shirts", link: "/" },
            { name: "Formal shirts", link: "/" },
          ],
        },
      ],
    },
  ];
  const [heading, setHeading] = useState("");

  return (
    <>
      {links.map((link, i) => {
        return (
          <div key={i}>
            <div
              className="bg-white md:cursor-pointer px-3 text-left group "
              key={i}
            >
              <h1
                className="my-7 cursor-pointer"
                onClick={() =>
                  heading !== link.name ? setHeading(link.name) : setHeading("")
                }
              >
                {link.name}
              </h1>
              {link.submenu && (
                <div>
                  <div
                    className={`absolute top-26 hidden group-hover:md:block hover:md:block `}
                  >
                    <div className="py-3">
                      <div
                        className={`w-4 h-4 absolute left-3 top-5 mt-1 bg-white rotate-45`}
                      ></div>
                    </div>
                    <div className="bg-white p-3 grid grid-cols-2 xl:grid-cols-3 gap-10">
                      {link.sublinks.map((mysublinks, i) => (
                        <div key={i}>
                          <h1 className=" font-semibold sm:text-sm">
                            {mysublinks.Head}
                          </h1>

                          {mysublinks.innerSublinks.map((slink, i) => (
                            <li
                              key={i}
                              className="text-xs text-gray-600 my-2.5"
                            >
                              <a href={slink.link} className="hover:text-price">
                                {slink.name}
                              </a>
                            </li>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* for mobile menu */}
            <div
              className={`${heading === link.name ? "md:hidden" : "hidden"}`}
            >
              {link.sublinks.map((slinks, j) => (
                <div key={j}>
                  <div>
                    <h1 className="py-2 pl-7 flex items-center cursor-pointer font-semibold md:pr-0 pr-5">
                      {slinks.Head}
                    </h1>

                    <div>
                      {slinks.innerSublinks.map((ilink, i) => (
                        <li
                          key={i}
                          className="pl-14 py-2 font-semibold text-sm text-gray-600 my-2.5"
                        >
                          <a href={ilink.link} className="hover:text-price">
                            {ilink.name}
                          </a>
                        </li>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Navlinks;
