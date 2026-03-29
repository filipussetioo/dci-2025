import { useEffect, useRef, useState } from "react";
import logoDark from "../../assets/icons/logo-dark.svg";
import logoLight from "../../assets/icons/logo-light.svg";

const Navbar = ({
  isDark,
  // onToggle,
}: {
  isDark: boolean;
  onToggle: () => void;
}) => {
  const [, setIsMobileMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 100);
    return () => clearTimeout(timer);
  }, []);

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

      <nav
        className="w-full px-16 py-4 transition-all duration-500"
        style={{
          backgroundColor: isDark ? "#141C22" : "#f3ede3",
          color: isDark ? "#F3EDE3" : "#141C22",
          transform: navVisible ? "translateY(0)" : "translateY(-100%)",
        }}
      >
        <div className="mx-auto flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollTo("hero")}
            className="cursor-pointer shrink-0"
            style={{
              transform: isReady ? "translateY(0)" : "translateY(-100%)",
              opacity: isReady ? 1 : 0,
              transition:
                "transform 1.2s cubic-bezier(0.22, 1, 0.36, 1), opacity 1.2s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            <img
              src={isDark ? logoLight : logoDark}
              alt="DCI Logo"
              className="h-12 md:h-16 w-auto p-1"
            />
          </button>

          {/* Center Nav Items */}
          <div className="lg:flex items-center gap-[clamp(1.5rem,2.08vw,2.5rem)] font-quantico text-[clamp(0.625rem,0.73vw,0.875rem)]">
            {/* DOWNLOAD REPORT — hexagonal outline button */}
            <a
              href="/pdf/DCI ARSR 2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer group relative"
              style={{
                transform: isReady ? "translateY(0)" : "translateY(-100%)",
                opacity: isReady ? 1 : 0,
                transition:
                  "transform 1.2s cubic-bezier(0.22, 1, 0.36, 1) 0.15s, opacity 1.2s cubic-bezier(0.22, 1, 0.36, 1) 0.15s",
              }}
            >
              <div
                className="bg-blue-primary group-hover:bg-blue-hover px-[27.5px] py-2 uppercase text-dark-blue text-[0.75rem] md:text-[1rem] font-normal tracking-[-0.04em]"
                style={{
                  clipPath:
                    "polygon(19.5px 0%, calc(100% - 19.5px) 0%, 100% 50%, calc(100% - 19.5px) 100%, 19.5px 100%, 0% 50%)",
                }}
              >
                <span className="overflow-hidden block h-[1.3em]">
                  <span className="block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full">
                    Download Report
                  </span>
                  <span className="block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full">
                    Download Report
                  </span>
                </span>
              </div>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
