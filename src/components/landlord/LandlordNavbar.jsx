import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import Logo from "../../assets/logo.png";

export default function LandlordNavbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

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
      <HashLink smooth to="/#" onClick={closeMenu}>
        <img
          src={Logo}
          alt="CampusCrib Logo"
          className="w-36 md:w-44 object-contain cursor-pointer"
        />
      </HashLink>

      {/* DESKTOP LINKS */}
      <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
        <HashLink
          smooth
          to="/landlord-dashboard#"
          className="hover:text-orange-600 transition"
        >
          Dashboard
        </HashLink>

        <HashLink
          smooth
          to="/landlord-dashboard#listings"
          className="hover:text-orange-600 transition"
        >
          Listings
        </HashLink>

        <HashLink
          smooth
          to="/landlord-dashboard#bookings"
          className="hover:text-orange-600 transition"
        >
          Bookings
        </HashLink>
      </div>

      {/* USER INFO */}
      <div className="hidden md:flex items-center gap-3">
        <FaUserCircle className="text-2xl text-gray-600" />
        <span className="text-sm text-gray-700">Landlord</span>

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
          <HashLink
            smooth
            to="/landlord-dashboard#"
            onClick={closeMenu}
            className="hover:text-orange-600"
          >
            Dashboard
          </HashLink>

          <HashLink
            smooth
            to="/landlord-dashboard#listings"
            onClick={closeMenu}
            className="hover:text-orange-600"
          >
            Listings
          </HashLink>

          <HashLink
            smooth
            to="/landlord-dashboard#bookings"
            onClick={closeMenu}
            className="hover:text-orange-600"
          >
            Bookings
          </HashLink>

          <hr />

          <div className="flex items-center gap-2 text-gray-700">
            <FaUserCircle className="text-xl" />
            <span className="text-sm">Landlord</span>
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