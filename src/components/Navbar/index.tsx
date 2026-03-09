import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import logoDark from "../../assets/icons/logo-dark.svg";
import logoLight from "../../assets/icons/logo-light.svg";
// import iconDarkMode from "../../assets/icons/icon-dark-mode.svg";
// import iconLightMode from "../../assets/icons/icon-light-mode.svg";

const Navbar = ({
  isDark,
  onToggle,
}: {
  isDark: boolean;
  onToggle: () => void;
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsHidden(currentY > 80);
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const navHeight = 60;
    const y = el.getBoundingClientRect().top + window.scrollY - navHeight;
    window.scrollTo({ top: y, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const navVisible = !isHidden || isHovering;

  return (
    <div
      className="fixed top-0 left-0 w-full z-100"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Invisible hover trigger zone */}
      <div className="absolute top-0 left-0 w-full h-5" />

      <nav
        className="w-full px-6 md:px-10 py-3 transition-all duration-500"
        style={{
          backgroundColor: isDark ? "#141C22" : "#f3ede3",
          color: isDark ? "#F3EDE3" : "#141C22",
          transform: navVisible ? "translateY(0)" : "translateY(-100%)",
          // borderBottom: `1px solid ${isDark ? "rgba(55,65,81,0.3)" : "rgba(209,213,219,0.3)"}`,
        }}
      >
        <div className="max-w-360 mx-auto flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollTo("hero")}
            className="cursor-pointer shrink-0"
          >
            <img
              src={isDark ? logoLight : logoDark}
              alt="DCI Logo"
              className="h-18 w-auto"
            />
          </button>

          {/* Center Nav Items */}
          <div className="hidden lg:flex items-center gap-10 font-quantico text-sm">
            <button
              onClick={() => scrollTo("message")}
              className="uppercase tracking-[0.2em] cursor-pointer transition-colors"
              style={{ color: isDark ? "#9ca3af" : "#4b5563" }}
            >
              Message from President Director
            </button>
            <button
              onClick={() => scrollTo("highlights")}
              className="uppercase tracking-[0.2em] cursor-pointer transition-colors"
              style={{ color: isDark ? "#9ca3af" : "#4b5563" }}
            >
              Performance Highlights
            </button>

            {/* DOWNLOAD REPORT — hexagonal outline button */}
            <button
              onClick={() => scrollTo("downloads")}
              className="cursor-pointer group relative"
            >
              <div className="relative inline-flex items-center justify-center">
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 200 40"
                  preserveAspectRatio="none"
                >
                  <polygon
                    points="12,1 188,1 199,20 188,39 12,39 1,20"
                    stroke="#3bb8c4"
                    strokeWidth="1.5"
                    fill="var(--color-blue-primary)"
                  />
                </svg>
                <span className="relative px-7 py-2 uppercase tracking-[0.2em] text-dark-blue">
                  Download Report
                </span>
              </div>
            </button>
          </div>

          {/* Right — Dark/Light Toggle Switch */}
          <div className="flex items-center gap-3">
            <button
              onClick={onToggle}
              className="flex items-center gap-4 cursor-pointer group"
              aria-label="Toggle Theme"
            >
              <span
                className="font-quantico text-sm font uppercase tracking-[0.15em] transition-colors"
                // style={{ color: isDark ? "#ffffff" : "#9ca3af" }}
              >
                Dark
              </span>

              {/* Hexagonal toggle container */}
              <div className="relative w-21 h-11 flex items-center justify-center">
                {/* Outer shape (acts as border) */}
                <div
                  className="absolute inset-0 bg-blue-primary"
                  style={{
                    clipPath:
                      "polygon(22px 0%, calc(100% - 22px) 0%, 100% 50%, calc(100% - 22px) 100%, 22px 100%, 0% 50%)",
                  }}
                />
                {/* Inner shape (covers interior, leaving ~1px border) */}
                <div
                  className="absolute inset-px"
                  style={{
                    clipPath:
                      "polygon(22px 0%, calc(100% - 22px) 0%, 100% 50%, calc(100% - 22px) 100%, 22px 100%, 0% 50%)",
                    backgroundColor: isDark ? "#141C22" : "#f3ede3",
                  }}
                />

                {/* The Knob — diamond */}
                <div
                  className="relative z-10 w-7 h-7 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{
                    clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                    backgroundColor: isDark ? "#F3EDE3" : "#141C22",
                    transform: isDark
                      ? "translateX(-14px)"
                      : "translateX(14px)",
                  }}
                />
              </div>

              <span
                className="font-quantico text-sm uppercase tracking-[0.15em] transition-colors"
                // style={{ color: !isDark ? "#ffffff" : "#9ca3af" }}
              >
                Light
              </span>
            </button>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden transition-colors ml-2"
              style={{ color: isDark ? "#ffffff" : "#111827" }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-full left-0 w-full transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-screen py-5" : "max-h-0 py-0"
          }`}
          style={{ backgroundColor: isDark ? "#0c1322" : "#f6f4eb" }}
        >
          <div className="px-4 space-y-4">
            <button
              onClick={() => scrollTo("message")}
              className="block font-quantico text-xs font-bold uppercase tracking-wider cursor-pointer"
              style={{ color: isDark ? "#d1d5db" : "#374151" }}
            >
              Message from President Director
            </button>
            <button
              onClick={() => scrollTo("highlights")}
              className="block font-quantico text-xs font-bold uppercase tracking-wider cursor-pointer"
              style={{ color: isDark ? "#d1d5db" : "#374151" }}
            >
              Performance Highlights
            </button>
            <button
              onClick={() => scrollTo("downloads")}
              className="block font-quantico text-xs font-bold uppercase tracking-wider text-teal-500 cursor-pointer"
            >
              Download Report
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
