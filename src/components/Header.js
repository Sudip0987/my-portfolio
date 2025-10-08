import React, { useState } from "react";
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
        <nav className={`${isOpen ? "block" : "hidden"} md:flex flex-wrap space-x-6 text-lg absolute md:static top-16 left-0 w-full md:w-auto bg-gray-800 mdbg-transparent`}>

          <ul className="flex flex-col mdfkex-row md:space-x-6">
            <li><a href="#home" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Home</a></li>
            <li><a href="#about" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>About</a></li>
            <li><a href="#projects" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Projects</a></li>
            <li><a href="#contact" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
