import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Logo from "../assets/logo.png";

function LoggedInNavbar() {
  const [open, setOpen] = useState(false);

  // TEMP: simulate logged-in student
  const isLoggedIn = true;
  const studentName = "Student";

  const closeMenu = () => setOpen(false);

  // Extra safety (UI-level protection)
  if (!isLoggedIn) return null;

  return (
    <nav
      className="
        fixed top-0 left-0 w-full z-50
        bg-white/95 backdrop-blur-sm shadow-sm
        px-4 md:px-10 py-3
        flex items-center justify-between
      "
    >
      {/* LOGO */}
      <Link to="/" onClick={closeMenu}>
        <img
          src={Logo}
          alt="CampusCrib Logo"
          className="w-36 md:w-44 object-contain cursor-pointer"
        />
      </Link>

      {/* DESKTOP LINKS */}
      <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
        <Link to="/" className="hover:text-orange-600 transition">
          Home
        </Link>
        <HashLink smooth to="/#available-hostels" className="hover:text-orange-600 transition">
            Browse Hostels
        </HashLink>
        <Link to="/dashboard" className="hover:text-orange-600 transition">
          Dashboard
        </Link>
      </div>

      {/* USER INFO */}
      <div className="hidden md:flex items-center gap-3">
        <FaUserCircle className="text-2xl text-gray-600" />
        <span className="text-sm text-gray-700">
          Hi, {studentName}
        </span>

        <button className="ml-4 px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-100 transition">
          Logout
        </button>
      </div>

      {/* MOBILE MENU ICON */}
      <button
        className="md:hidden text-3xl text-gray-700"
        onClick={() => setOpen(!open)}
      >
        {open ? <HiX /> : <HiMenu />}
      </button>

      {/* MOBILE MENU */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg p-6 flex flex-col gap-4 md:hidden">
          <Link to="/" onClick={closeMenu} className="hover:text-orange-600">
            Home
          </Link>

          <HashLink smooth to="/#available-hostels" onClick={closeMenu} className="hover:text-orange-600">
            Browse Hostels
          </HashLink>

          <Link
            to="/dashboard"
            onClick={closeMenu}
            className="hover:text-orange-600"
          >
            Dashboard
          </Link>

          <hr />

          <div className="flex items-center gap-2 text-gray-700">
            <FaUserCircle className="text-xl" />
            <span className="text-sm">Hi, {studentName}</span>
          </div>

          <button
            onClick={closeMenu}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}

export default LoggedInNavbar;