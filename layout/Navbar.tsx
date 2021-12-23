import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="sticky top-0 row-span-1 grid-flow-row col-span-4 lg:col-span-1 lg:row-span-4 h-20 lg:h-screen bg-slate-500">
      <div className="flex flex-row lg:flex-col lg:justify-center lg:items-center h-full px-4 lg:px-32 ">
        <div className="w-full flex flex-row lg:flex-col items-center lg:items-start justify-between">
          <div className="lg:mb-8">
            <h1 className="text-4xl lowercase font-semibold tracking-wider">
              Stiven
            </h1>
          </div>

          <ul className="flex flex-row lg:flex-col space-x-4 lg:space-x-0 lg:space-y-4">
            <li>
              <Link href="/">
                <a className="link link-navbar">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a className="link link-navbar">Blog</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
