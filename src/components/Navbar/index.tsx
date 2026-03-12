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
        className="w-full px-6 md:px-[clamp(2.5rem,5vw,10rem)] py-3 transition-all duration-500"
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
              className="h-[clamp(3rem,3.75vw,4.5rem)] w-auto"
            />
          </button>

          {/* Center Nav Items */}
          <div className="hidden lg:flex items-center gap-[clamp(1.5rem,2.08vw,2.5rem)] font-quantico text-[clamp(0.625rem,0.73vw,0.875rem)]">
            <button
              onClick={() => scrollTo("message")}
              className="group flex items-center gap-2 uppercase tracking-[0.2em] cursor-pointer transition-colors"
              style={{ color: isDark ? "#F3EDE3" : "#141C22" }}
            >
              <span className="w-1.5 h-1.5 bg-blue-primary rotate-45 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300" />
              Message from President Director
              <span className="w-1.5 h-1.5 bg-blue-primary rotate-45 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300" />
            </button>
            <button
              onClick={() => scrollTo("highlights")}
              className="group flex items-center gap-2 uppercase tracking-[0.2em] cursor-pointer transition-colors"
              style={{ color: isDark ? "#F3EDE3" : "#141C22" }}
            >
              <span className="w-1.5 h-1.5 bg-blue-primary rotate-45 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300" />
              Performance Highlights
              <span className="w-1.5 h-1.5 bg-blue-primary rotate-45 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300" />
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
                <span className="relative px-[clamp(1rem,1.46vw,1.75rem)] py-[clamp(0.375rem,0.42vw,0.5rem)] uppercase tracking-[0.2em] text-dark-blue">
                  <span className="overflow-hidden block h-[calc(1em+5px)] leading-[calc(1em+5px)]">
                    <span className="block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full">
                      Download Report
                    </span>
                    <span className="block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full">
                      Download Report
                    </span>
                  </span>
                </span>
              </div>
            </button>
          </div>

          {/* Right — Dark/Light Toggle Switch */}
          <div className="flex items-center gap-3">
            <button
              onClick={onToggle}
              className="flex items-center gap-[clamp(0.5rem,0.83vw,1rem)] cursor-pointer group"
              aria-label="Toggle Theme"
            >
              <span
                className="font-quantico text-[clamp(0.625rem,0.73vw,0.875rem)] font uppercase tracking-[0.15em] transition-colors"
                // style={{ color: isDark ? "#ffffff" : "#9ca3af" }}
              >
                Dark
              </span>

              {/* Hexagonal toggle container */}
              <div className="relative w-[clamp(3.5rem,4.375vw,5.25rem)] h-[clamp(1.75rem,2.29vw,2.75rem)] flex items-center justify-center">
                {/* Outer shape (acts as border) */}
                <div
                  className="absolute inset-0 bg-blue-primary"
                  style={{
                    clipPath:
                      "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                  }}
                />
                {/* Inner shape (covers interior, leaving ~1px border) */}
                <div
                  className="absolute inset-px"
                  style={{
                    clipPath:
                      "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                    backgroundColor: isDark ? "#141C22" : "#f3ede3",
                  }}
                />

                {/* The Knob — diamond */}
                <div
                  className="relative z-10 w-[clamp(1.2rem,1.46vw,1.75rem)] h-[clamp(1.2rem,1.46vw,1.75rem)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{
                    clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                    backgroundColor: isDark ? "#F3EDE3" : "#141C22",
                    transform: isDark
                      ? "translateX(clamp(-14px,-0.73vw,-10px))"
                      : "translateX(clamp(10px,0.73vw,14px))",
                  }}
                />
              </div>

              <span
                className="font-quantico text-[clamp(0.625rem,0.73vw,0.875rem)] uppercase tracking-[0.15em] transition-colors"
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
