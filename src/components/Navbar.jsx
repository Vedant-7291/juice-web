import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import logo2 from "../assets/logo2.png"; // Add your logo in assets folder

const Navbar = () => {
  return (
    <header className="w-full bg-white shadow-md">
      {/* Top Contact + Logo + Button */}
      <div className="flex justify-between items-center px-6 py-4 text-sm text-gray-700 border-b">
        {/* Left: Phone & Email (Stacked) */}
        <div className="flex flex-col leading-6">
          <span className="flex items-center gap-2">
            <FaPhoneAlt className="text-green-600" />
            Call at: +91 XXXXX XXXXX
          </span>
          <span className="flex items-center gap-2">
            <MdEmail className="text-green-600" />
            Mail at: info@pizaikitchen.com
          </span>
        </div>

        {/* Center: Logo */}
        <img src={logo2} alt="Zussioberry Logo" className="h-16" />

        {/* Right: View Menu Button */}
        <button className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition text-base">
          View Menu
        </button>
      </div>

      {/* Main Navbar */}
      <nav className="flex justify-center items-center py-5">
        <ul className="flex gap-10 text-gray-800 font-medium text-lg">
          <li className="hover:text-green-600 cursor-pointer">Home</li>
          <li className="hover:text-green-600 cursor-pointer">About</li>
          <li className="hover:text-green-600 cursor-pointer">Franchise</li>
          <li className="hover:text-green-600 cursor-pointer">Career</li>
          <li className="hover:text-green-600 cursor-pointer">Blog</li>
          <li className="hover:text-green-600 cursor-pointer">News</li>
          <li className="hover:text-green-600 cursor-pointer">Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
