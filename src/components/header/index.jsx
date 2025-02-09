import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router"; // Changed from "react-router"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black p-4 w-full top-0 fixed z-20">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-white text-2xl font-bold flex gap-2 items-center"
        >
          <img
            src="src/assets/logos/updated-logo.png"
            width={72}
            className="rounded-full"
          />
          <p className="uppercase text-yellow-300 font-sans">Spartans</p>
        </Link>

        {/* Menu Button (Mobile) */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-white"
        >
          <Menu size={28} />
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-14 text-white font-semibold">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu - Sliding from Right */}

      <div
        className={`fixed top-0 right-0 h-full w-3/4 max-w-sm bg-black text-white shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-5 flex justify-between items-center">
          <h2 className="text-xl font-bold uppercase text-yellow-300">Spartans</h2>
          <button onClick={() => setIsOpen(false)}>
            <X size={28} />
          </button>
        </div>
        <ul className="flex flex-col items-start space-y-6 px-5 text-lg">
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/products" onClick={() => setIsOpen(false)}>
              Products
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
