import React, { useState } from "react";
import { Link } from "react-scroll";
/*import {HiOutlineMenu,HiOutlinex} from "react-icons/hi";*/
function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Hamburger icon
  const HamburgerIcon = (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
    </svg>
  );

  // Close icon
  const CloseIcon = (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
    </svg>
  );

  return (
    <header className="bg-gray-800 text-white p-4 fixed w-full top-0 z-50">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        {/* Logo / Name */}

        <div className="text-2xl font-bold">Sudip Sharma</div>
        <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? CloseIcon : HamburgerIcon}
        </button>
        {/* Navigation */}
        <nav className={`${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} md:flex md:max-h-full md:opacity-100  md:flex flex-col md:flex-row md:space-x-6 text-lg absolute md:static top-16 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent overflow-hidden transition-all duration-200 ease-in-out`}>

          <ul className="flex flex-col md:flex-row md:space-x-6 items-center justify-center p-4 md:p-0">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={400}
                onClick={() => setIsOpen(false)} className="hover:text-yellow-400 px-4 py-2 rounded transform transition duration-200 ease-in-out hover:scale-110 inline-block cursor-pointer"
              >Home</Link>

            </li>

            <li>
              <Link to="about"
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)} className="hover:text-yellow-400 px-4 py-2 rounded transform transition duration-200 ease-in-out hover:scale-110 inline-block cursor-pointer"
              >

                About</Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={400}
                onClick={() => setIsOpen(false)} className="hover:text-yellow-400 px-4 py-2 rounded transform transition duration-200 ease-in-out hover:scale-110 inline-block cursor-pointer"
              >Projects</Link>

            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={400}
                onClick={() => setIsOpen(false)} className="hover:text-yellow-400 px-4 py-2 rounded transform transition duration-200 ease-in-out hover:scale-110 inline-block cursor-pointer"
              >Contact</Link>

            </li>

          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
