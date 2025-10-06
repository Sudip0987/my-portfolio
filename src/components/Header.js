import React from "react";

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        {/* Logo / Name */}
        <div className="text-2xl font-bold">Sudip Sharma</div>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6 text-lg">
            <li><a href="#home" className="hover:text-yellow-400">Home</a></li>
            <li><a href="#about" className="hover:text-yellow-400">About</a></li>
            <li><a href="#projects" className="hover:text-yellow-400">Projects</a></li>
            <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
