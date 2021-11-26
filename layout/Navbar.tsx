import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="sticky top-0 row-span-1 grid-flow-row col-span-4 lg:col-span-1 lg:row-span-4 h-20 lg:h-screen lg:border-r-2 lg:border-gray-200">
      <div className="flex flex-row lg:flex-col lg:justify-center lg:items-center h-full px-4 lg:px-24 ">
        <div className="w-full flex flex-row lg:flex-col items-center lg:items-start justify-between">
          <div className="lg:mb-8">
            <Image
              src="https://via.placeholder.com/150x60.png"
              alt="Logo"
              height={60}
              width={150}
            />
          </div>

          <ul className="flex flex-row lg:flex-col space-x-4 lg:space-x-0 lg:space-y-4">
            <li>
              <Link href="/">
                <a href="#" className="text-lg text-black hover:text-black">
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="blog">
                <a href="#" className="text-lg text-gray-500 hover:text-black">
                  Blog
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
