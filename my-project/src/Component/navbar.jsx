import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-center gap-4 p-4 bg-gray-100">
      <NavLink
        to="/"
        className="bg-pink-300 px-4 py-2 rounded-lg text-white hover:bg-pink-400"
      >
        Home
      </NavLink>

      <NavLink
        to="/about-us"
        className="bg-purple-300 px-4 py-2 rounded-lg text-white hover:bg-purple-400"
      >
        About Us
      </NavLink>

      <NavLink
        to="/product"
        className="bg-blue-300 px-4 py-2 rounded-lg text-white hover:bg-blue-400"
      >
        Products
      </NavLink>
    </nav>
  );
}

export default Navbar;