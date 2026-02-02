import { Link, useLocation } from "react-router-dom";
import logo from "../utils/images/LOGO.png";

const linkBase =
  "relative px-4 py-2 font-medium text-[16px] text-blue-100/90 transition " +
  "after:content-[''] after:absolute after:left-0 after:-bottom-[6px] after:h-[2px] after:w-0 after:bg-orange-400 after:transition-all after:duration-300 " +
  "hover:text-white hover:after:w-full";

const Header = () => {
  const { pathname } = useLocation();
  const isActive = (path) => pathname === path;

  return (
    <header className="fixed top-0 left-0 w-full z-[100] bg-blue-900/90 backdrop-blur-md shadow-lg shadow-blue-900/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className=" rounded-full p-1.5 shadow-sm">
            <img
              src={logo}
              alt="E-Cell Logo"
              className="h-14 w-14 rounded-full object-cover"
            />
          </div>

          <span className="text-xl font-semibold text-white tracking-wide">
            E<span className="text-orange-400">•</span>Cell
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center">

          <Link
            to="/"
            className={`${linkBase} ${
              isActive("/") ? "text-white font-semibold after:w-full" : ""
            }`}
          >
            Home
          </Link>

          <Link
            to="/about"
            className={`${linkBase} ${
              isActive("/about") ? "text-white font-semibold after:w-full" : ""
            }`}
          >
            About
          </Link>

          <Link
            to="/team"
            className={`${linkBase} ${
              isActive("/team") ? "text-white font-semibold after:w-full" : ""
            }`}
          >
            Team
          </Link>

          <Link
            to="/events"
            className={`${linkBase} ${
              isActive("/events") ? "text-white font-semibold after:w-full" : ""
            }`}
          >
            Events
          </Link>

          <Link
            to="/gallery"
            className={`${linkBase} ${
              isActive("/gallery") ? "text-white font-semibold after:w-full" : ""
            }`}
          >
            Gallery
          </Link>

          {/* Join Dropdown */}
          <div className="relative ml-4 group">
            {/* Button */}
            <div className="cursor-pointer rounded-full bg-orange-500 px-5 py-2.5 text-white font-semibold text-sm shadow-md hover:shadow-lg hover:bg-orange-600 transition">
              Join Us
            </div>

            {/* Dropdown */}
            <div className="absolute right-0 mt-4 w-40 bg-white rounded-2xl shadow-xl shadow-slate-900/10 border border-slate-200 overflow-hidden opacity-0 invisible translate-y-3 scale-95 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:scale-100 transition-all duration-200 ease-out z-50">

              <Link
                to="/join/member"
                className="group/item relative block px-5 py-4 text-sm font-medium text-black hover:bg-slate-50 transition"
              >
                Join as Member
                <span className="absolute left-0 top-0 h-full w-1 bg-orange-500 opacity-0 group-hover/item:opacity-100 transition" />
              </Link>

              <div className="h-px bg-slate-200" />

              <Link
                to="/join/idea"
                className="group/item relative block px-5 py-4 text-sm font-medium text-black hover:bg-slate-50 transition"
              >
                Share an Idea
                <span className="absolute left-0 top-0 h-full w-1 bg-orange-500 opacity-0 group-hover/item:opacity-100 transition" />
              </Link>

            </div>
          </div>
        </nav>

        {/* Mobile CTA */}
        <div className="md:hidden">
          <Link
            to="/join/member"
            className="rounded-full bg-orange-500 px-4 py-2 text-white font-semibold text-sm shadow-md hover:bg-orange-600 transition"
          >
            Join
          </Link>
        </div>

      </div>
    </header>
  );
};

export default Header;
