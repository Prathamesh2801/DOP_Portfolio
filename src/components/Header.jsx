import React from "react";
import { NavLink } from "react-router-dom";
import finishedLogo from "../assets/img/finishedLogo.png";

export default function Header() {
  // Function to close the drawer only on mobile
  const closeDrawer = () => {
    if (window.innerWidth < 1024) {
      const drawerCheckbox = document.getElementById("my-drawer-3");
      if (drawerCheckbox) drawerCheckbox.checked = false;
    }
  };

  return (
    <div className="drawer bg-bg-main text-copy">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar bg-bg-main border-b border-subtle">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-ghost btn-square"
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
          <div className="mx-4 flex-1 px-2 flex items-center justify-end lg:justify-start space-x-4">
            <div className="h-14 w-14 rounded-full bg-subtle p-1 flex items-center justify-center">
              <img 
                src={finishedLogo} 
                alt="VD Logo" 
                className="h-12 w-12 object-contain mix-blend-plus-lighter brightness-125" 
              />
            </div>
            <span className="text-3xl tracking-wider font-jersey">Vivek Dubey</span>
          </div>
          <div className="hidden flex-none lg:block">
            <ul className="menu menu-horizontal space-x-8 text-lg">
              <li><NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>SHORT FLIMS</NavLink></li>
              <li><NavLink to="/feature" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>FEATURE FLIMS</NavLink></li>
              <li><NavLink to="/music" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Music</NavLink></li>
              <li><NavLink to="/commercials" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Commercials</NavLink></li>
              <li><NavLink to="/webseries" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Web Series</NavLink></li>
              <li><NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>About</NavLink></li>
            </ul>
          </div>
        </div>
      </div>
      {/* Mobile Sidebar */}
      <div className="drawer-side fixed inset-0 z-50">
        <label htmlFor="my-drawer-3" className="drawer-overlay bg-bg-modal"></label>
        <div className="w-full min-h-screen bg-bg-main border-l border-subtle">
          <div className="p-6 border-b border-subtle">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-subtle p-0.5 flex items-center justify-center">
                  <img 
                    src={finishedLogo} 
                    alt="VD Logo" 
                    className="h-8 w-8 object-contain mix-blend-plus-lighter brightness-125" 
                  />
                </div>
                <span className="text-2xl tracking-wide font-jersey">Menu</span>
              </div>
              <label
                htmlFor="my-drawer-3"
                className="btn btn-ghost btn-circle"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </label>
            </div>
          </div>
          <ul className="menu p-6 space-y-6">
            <li className="w-full">
              <NavLink 
                to="/" 
                onClick={closeDrawer}
                className={({ isActive }) => 
                  `nav-link p-4 text-center text-xl tracking-wide
                  ${isActive ? 'active' : ''}`
                }
              >
                SHORT FILMS
              </NavLink>
            </li>
            <li className="w-full">
              <NavLink 
                to="/feature" 
                onClick={closeDrawer}
                className={({ isActive }) => 
                  `nav-link p-4 text-center text-xl tracking-wide
                  ${isActive ? 'active' : ''}`
                }
              >
                FEATURE FILMS
              </NavLink>
            </li>
            <li className="w-full">
              <NavLink 
                to="/music" 
                onClick={closeDrawer}
                className={({ isActive }) => 
                  `nav-link p-4 text-center text-xl tracking-wide
                  ${isActive ? 'active' : ''}`
                }
              >
                Music
              </NavLink>
            </li>
            <li className="w-full">
              <NavLink 
                to="/commercials" 
                onClick={closeDrawer}
                className={({ isActive }) => 
                  `nav-link p-4 text-center text-xl tracking-wide
                  ${isActive ? 'active' : ''}`
                }
              >
                Commercials
              </NavLink>
            </li>
            <li className="w-full">
              <NavLink 
                to="/webseries" 
                onClick={closeDrawer}
                className={({ isActive }) => 
                  `nav-link p-4 text-center text-xl tracking-wide
                  ${isActive ? 'active' : ''}`
                }
              >
                Web Series
              </NavLink>
            </li>
           
            <li className="w-full">
              <NavLink 
                to="/about" 
                onClick={closeDrawer}
                className={({ isActive }) => 
                  `nav-link p-4 text-center text-xl tracking-wide
                  ${isActive ? 'active' : ''}`
                }
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
