import { useState } from "react";
import { Menu, X } from "lucide-react"; // Icons for hamburger menu

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#efd7cd]text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-xl font-bold">
          NONHLE
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menu Items */}
        <div
          className={`absolute top-16 left-0 w-full bg-[#ac7846] text-center py-4 md:static md:flex md:space-x-6 md:bg-transparent md:py-0 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li className="bg-[#c79a96] block py-2 md:inline text-white hover:bg-[#a87672]">
            <Link to="/">About</Link>
          </li>
          <li className="bg-[#c79a96] block py-2 md:inline text-white hover:bg-[#a87672]">
            <Link to="/beauty-therapy">Beauty Therapy</Link>
          </li>
          <li className="bg-[#c79a96] block py-2 md:inline text-white hover:bg-[#a87672]">
            <Link to="/blog">My Blog</Link>
          </li>
          <li className="bg-[#c79a96] block py-2 md:inline text-white hover:bg-[#a87672]">
            <a href="#contact">Contact</a>
          </li>
        </div>
      </div>
    </nav>
  );
}
