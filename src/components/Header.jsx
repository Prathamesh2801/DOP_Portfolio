import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  // Function to close the drawer only on mobile
  const closeDrawer = () => {
    if (window.innerWidth < 1024) {
      const drawerCheckbox = document.getElementById("my-drawer-3");
      if (drawerCheckbox) drawerCheckbox.checked = false;
    }
  };

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col transition-transform duration-300 ease-in-out">
        {/* Navbar */}
        <div className="navbar bg-base-200 w-full">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="mx-4 flex-1 end-2 px-2 text-3xl font-bold flex justify-end lg:justify-start">
            Vicky Portfolio
          </div>
          <div className="hidden flex-none lg:block">
            <ul className="menu menu-horizontal space-x-4 text-lg">
              {/* Navbar menu content here */}
              <li>
                <NavLink to="/">Blog</NavLink>
              </li>
              <li>
                <NavLink to="/music">Music</NavLink>
              </li>
              <li>
                <NavLink to="/commercials">Commercials</NavLink>
              </li>
              <li>
                <NavLink to="/webseries">Web Series</NavLink>
              </li>
              <li>
                <NavLink to="/gallery">Arthouse</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="drawer-side z-10 transition-transform duration-300 ease-in-out transform">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4 space-y-4 text-lg">
          {/* Sidebar content here */}
          <li>
            <NavLink to="/" onClick={closeDrawer}>Blog</NavLink>
          </li>
          <li>
            <NavLink to="/music" onClick={closeDrawer}>Music</NavLink>
          </li>
          <li>
            <NavLink to="/commercials" onClick={closeDrawer}>Commercials</NavLink>
          </li>
          <li>
            <NavLink to="/webseries" onClick={closeDrawer}>Web Series</NavLink>
          </li>
          <li>
            <NavLink to="/gallery" onClick={closeDrawer}>Arthouse</NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={closeDrawer}>About</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
