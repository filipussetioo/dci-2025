import { useState, useEffect } from "react";
import { Menu, X, Search } from "lucide-react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Performance", "Strategy", "Locations", "Downloads"];

  return (
    <nav
      className={`fixed w-full z-[100] transition-all duration-500 px-6 md:px-12 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo - Click to scroll to top */}
        <Link
          to="hero"
          smooth={true}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="w-8 h-8 bg-blue-600 rounded-sm flex items-center justify-center transform group-hover:rotate-45 transition-transform duration-500">
            <div className="w-3 h-3 bg-white" />
          </div>
          <span className="text-xl font-bold tracking-tighter uppercase">
            DCI <span className="font-light">Reports</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-10 text-[13px] font-bold uppercase tracking-widest text-gray-600">
          {navItems.map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()} // Must match the ID of your sections
              spy={true}
              smooth={true}
              offset={-100} // Adjust this based on your navbar height
              duration={500}
              activeClass="text-blue-600 border-b-2 border-blue-600"
              className="cursor-pointer hover:text-blue-600 transition-all pb-1"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-6">
          <button className="hidden md:block hover:text-blue-600">
            <Search size={20} />
          </button>
          <button className="bg-blue-600 text-white px-6 py-2.5 text-[13px] font-bold uppercase tracking-wider hover:bg-gray-900 transition-colors">
            Contact
          </button>
          <button
            className="lg:hidden text-gray-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white border-t transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-screen py-8 shadow-xl" : "max-h-0 py-0"
        }`}
      >
        <div className="px-6 space-y-6">
          {navItems.map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
              className="block text-2xl font-light border-b pb-4 cursor-pointer"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
