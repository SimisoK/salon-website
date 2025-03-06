import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="navbar bg-[#efd7cd]">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          NONHLE
        </Link>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li className="bg-[#c79a96] text-white hover:bg-[#a87672]">
              <Link to="/">About</Link>
            </li>
            <li className="bg-[#c79a96] text-white hover:bg-[#a87672]">
              <Link to="/beauty-therapy">Beauty Therapy</Link>
            </li>
            <li className="bg-[#c79a96] text-white hover:bg-[#a87672]">
              <Link to="/blog">My Blog</Link>
            </li>
            <li className="bg-[#c79a96] text-white hover:bg-[#a87672]">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/beauty-therapy">Beauty Therapy</Link>
            </li>
            <li>
              <Link to="/blog">My Blog</Link>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;