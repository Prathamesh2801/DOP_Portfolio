import React from "react";
import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <div className="drawer">
    <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content flex flex-col">
      {/* Navbar */}
      <div className="navbar bg-base-200 w-full">
        <div className="flex-none lg:hidden">
          <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-6 w-6 stroke-current">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </label>
        </div>
        <div className="mx-4 flex-1 end-2 px-2 text-2xl font-semibold flex justify-end lg:justify-start  ">Portfolio</div>
        <div className="hidden flex-none lg:block">
          <ul className="menu menu-horizontal space-x-4 text-lg">
            {/* Navbar menu content here */}
            <li><NavLink to="/" >Blog</NavLink></li>
            <li><a>Music</a></li>
            <li><a>Gallery</a></li>
            <li><NavLink to="/about">About</NavLink></li>
          </ul>
        </div>
      </div>
     
    </div>
    <div className="drawer-side z-10">
      <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
      <ul className="menu bg-base-200 min-h-full w-80 p-4  space-y-4  text-lg">
        {/* Sidebar content here */}
        <li><NavLink to="/">Blog</NavLink></li>
        <li><a>Music</a></li>
        <li><a>Gallery</a></li>
        <li><NavLink to="/about">About</NavLink></li>
      </ul>
    </div>
  </div>
  );
}