import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Logo from "../assets/logo.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="
        fixed top-0 left-0 w-full z-50
        bg-white/95 backdrop-blur-sm shadow-sm
        px-4 md:px-10 py-3
        flex items-center justify-between
        font-[Poppins]
      "
    >
      {/* LOGO */}
      <img
        src={Logo}
        alt="CampusCrib Logo"
        className="w-36 md:w-44 object-contain cursor-pointer"
      />

      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
        <a href="#" className="hover:text-orange-600 transition">Home</a>
        <a href="#" className="hover:text-orange-600 transition">Browse Hostels</a>
        <a href="#about" className="hover:text-orange-600 transition">About</a>
        <a href="#" className="hover:text-orange-600 transition">Contact</a>
      </div>

      {/* RIGHT BUTTONS */}
      <div className="hidden md:flex items-center gap-4">
        <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition">
          Register
        </button>

        <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition">
          Login
        </button>
      </div>

      {/* MOBILE MENU ICON */}
      <button
        className="md:hidden text-3xl text-gray-700"
        onClick={() => setOpen(!open)}
      >
        {open ? <HiX /> : <HiMenu />}
      </button>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg p-6 flex flex-col gap-4 md:hidden">
          <a href="#" className="text-gray-700 hover:text-orange-600 transition">Home</a>
          <a href="#" className="text-gray-700 hover:text-orange-600 transition">Browse Hostels</a>
          <a href="#" className="text-gray-700 hover:text-orange-600 transition">About</a>
          <a href="#" className="text-gray-700 hover:text-orange-600 transition">Contact</a>

          <hr />

          <button className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition">
            Sign Up
          </button>

          <button className="w-full px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition">
            Login
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;