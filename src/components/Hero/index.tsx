import { useEffect, useState } from "react";
import iconArrowDown from "../../assets/icons/icon-button.svg";
import heartLeft from "../../assets/graphics/heart-left.svg";
import heartRight from "../../assets/graphics/heart-right.svg";

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  const navHeight = 60;
  const y = el.getBoundingClientRect().top + window.scrollY - navHeight;
  window.scrollTo({ top: y, behavior: "smooth" });
  // setIsMobileMenuOpen(false);
};

export const Hero = ({ isDark }: { isDark: boolean }) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    // <section
    //   id="hero"
    //   className="relative min-h-screen h-full flex flex-col items-center overflow-hidden px-6 pb-12"
    // >
    //   <div className="h-20 md:h-24 shrink-0" />
    //   {/* Batik pattern — TOP LEFT corner */}
    //   <div className="absolute top-0 left-0 w-[45%] h-[55%] pointer-events-none">
    //     <svg
    //       viewBox="0 0 500 500"
    //       className="w-full h-full"
    //       style={{
    //         color: isDark ? "#1a3a5a" : "#c5b990",
    //         opacity: isDark ? 0.15 : 0.3,
    //         transition: "color 0.5s, opacity 0.5s",
    //       }}
    //     >
    //       <pattern
    //         id="batik-l"
    //         x="0"
    //         y="0"
    //         width="60"
    //         height="60"
    //         patternUnits="userSpaceOnUse"
    //       >
    //         <path
    //           d="M30 0L60 30L30 60L0 30Z"
    //           fill="none"
    //           stroke="currentColor"
    //           strokeWidth="0.8"
    //         />
    //         <circle
    //           cx="30"
    //           cy="30"
    //           r="6"
    //           fill="none"
    //           stroke="currentColor"
    //           strokeWidth="0.6"
    //         />
    //         <circle cx="30" cy="30" r="2" fill="currentColor" opacity="0.4" />
    //         <circle cx="0" cy="0" r="3" fill="currentColor" opacity="0.2" />
    //         <circle cx="60" cy="0" r="3" fill="currentColor" opacity="0.2" />
    //         <circle cx="0" cy="60" r="3" fill="currentColor" opacity="0.2" />
    //         <circle cx="60" cy="60" r="3" fill="currentColor" opacity="0.2" />
    //         <path
    //           d="M15 15L45 15L45 45L15 45Z"
    //           fill="none"
    //           stroke="currentColor"
    //           strokeWidth="0.3"
    //           opacity="0.5"
    //         />
    //       </pattern>
    //       <rect width="500" height="500" fill="url(#batik-l)" />
    //     </svg>
    //   </div>

    //   {/* Batik pattern — TOP RIGHT corner */}
    //   <div className="absolute top-0 right-0 w-[45%] h-[55%] pointer-events-none">
    //     <svg
    //       viewBox="0 0 500 500"
    //       className="w-full h-full"
    //       style={{
    //         color: isDark ? "#1a3a5a" : "#c5b990",
    //         opacity: isDark ? 0.15 : 0.3,
    //         transition: "color 0.5s, opacity 0.5s",
    //       }}
    //     >
    //       <pattern
    //         id="batik-r"
    //         x="0"
    //         y="0"
    //         width="60"
    //         height="60"
    //         patternUnits="userSpaceOnUse"
    //       >
    //         <path
    //           d="M30 0L60 30L30 60L0 30Z"
    //           fill="none"
    //           stroke="currentColor"
    //           strokeWidth="0.8"
    //         />
    //         <circle
    //           cx="30"
    //           cy="30"
    //           r="6"
    //           fill="none"
    //           stroke="currentColor"
    //           strokeWidth="0.6"
    //         />
    //         <circle cx="30" cy="30" r="2" fill="currentColor" opacity="0.4" />
    //         <circle cx="0" cy="0" r="3" fill="currentColor" opacity="0.2" />
    //         <circle cx="60" cy="0" r="3" fill="currentColor" opacity="0.2" />
    //         <circle cx="0" cy="60" r="3" fill="currentColor" opacity="0.2" />
    //         <circle cx="60" cy="60" r="3" fill="currentColor" opacity="0.2" />
    //         <path
    //           d="M15 15L45 15L45 45L15 45Z"
    //           fill="none"
    //           stroke="currentColor"
    //           strokeWidth="0.3"
    //           opacity="0.5"
    //         />
    //       </pattern>
    //       <rect width="500" height="500" fill="url(#batik-r)" />
    //     </svg>
    //   </div>

    //   {/* Content */}
    //   {/* <div className="flex flex-col justify-between h-full"> */}
    //   <div className="flex flex-col justify-between h-full">
    //     <div className="relative z-10 text-center mx-auto">
    //       <h1
    //         className="font-quantico font-normal text-[clamp(4rem,15vw,6.3rem)] leading-[0.95] tracking-[-0.04em] uppercase text-center"
    //         style={{
    //           color: isDark ? "#ffffff" : "#111827",
    //           transition: "color 0.5s",
    //         }}
    //       >
    //         Powering the
    //         <br />
    //         Foundations of
    //         <br />
    //         Indonesia's AI Future
    //       </h1>
    //     </div>

    //     <div className="text-center mb-6">
    //       <p className="font-quantico text-xs md:text-sm  uppercase tracking-[0.25em] text-[#3bb8c4]">
    //         2025 Annual &amp; Sustainability Report
    //       </p>
    //       <div className="mt-2">
    //         <svg viewBox="0 0 24 14" className="w-5 h-3 mx-auto text-[#3bb8c4]">
    //           <path
    //             d="M2 2L12 12L22 2"
    //             fill="none"
    //             stroke="currentColor"
    //             strokeWidth="2"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //           />
    //         </svg>
    //       </div>
    //     </div>
    //   </div>
    //   {/* </div> */}
    // </section>
    // <section
    //   id="hero"
    //   className="relative h-screen w-full flex flex-col overflow-hidden px-6 pb-12"
    // >
    //   {/* 1. Navbar Offset: Set this to the height of your navbar */}
    //   {/* This ensures your headline starts below the navigation */}
    //   <div className="h-24 md:h-32 shrink-0" />

    //   {/* 2. Main Content Area: flex-grow fills the middle space */}
    //   <div className="flex-grow flex flex-col items-center justify-center relative z-10 text-center mx-auto w-full">
    //     <h1
    //       className="font-Quantico font-normal text-[clamp(2.5rem,7vw,5.5rem)] md:text-[clamp(4rem,9vw,6.3rem)] leading-[1.0] md:leading-[0.95] tracking-[-0.02em] uppercase text-center"
    //       style={{
    //         color: isDark ? "#ffffff" : "#1A1A1A",
    //         transition: "color 0.5s",
    //       }}
    //     >
    //       Powering the
    //       <br />
    //       Foundations of
    //       <br />
    //       Indonesia's AI Future
    //     </h1>
    //   </div>

    //   {/* 3. Bottom Footer: shrink-0 keeps it at the very bottom */}
    //   <div className="shrink-0 relative z-10 text-center">
    //     <p className="text-sm md:text-base font-medium text-[#4bbbd2] tracking-wide">
    //       2025 Annual &amp; Sustainability Report
    //     </p>
    //     <div className="mt-3 flex justify-center">
    //       <svg viewBox="0 0 24 14" className="w-8 h-3 text-[#4bbbd2]">
    //         <path
    //           d="M2 2L12 12L22 2"
    //           fill="none"
    //           stroke="currentColor"
    //           strokeWidth="1.5"
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //         />
    //       </svg>
    //     </div>
    //   </div>
    // </section>
    <section
      id="hero"
      className="relative flex-1 w-full flex flex-col overflow-hidden px-6"
    >
      <img
        src={heartLeft}
        alt="Decorative heart left"
        className="absolute top-[20%] md:top-[20%] -left-[55%] md:left-14 w-full md:w-[48%] min-[1399px]:w-[40%] md:max-w-140 md:min-w-100 pointer-events-none z-0"
      />
      <img
        src={heartRight}
        alt="Decorative heart right"
        className="absolute top-[20%] md:top-[20%] -right-[55%] md:right-14 w-full md:w-[48%] min-[1399px]:w-[40%] md:max-w-140 md:min-w-100 pointer-events-none z-0"
      />
      {/* 2. Headline Container */}
      {/* Headline — near top */}
      <div className="shrink-0 flex flex-col items-center pt-33 md:pt-40 lg:pt-[clamp(7rem,15vh,12rem)] relative z-10 text-center mx-auto w-full">
        <h1
          className="font-quantico font-normal text-[1.78rem] md:text-[3.16rem] lg:text-[max(4.21rem,3.742vw)] leading-[1.1] md:leading-[0.95] tracking-[-0.04em] uppercase text-center"
          style={{
            color: isDark ? "#F3EDE3" : "#141C22",
            transition: "color 0.5s",
          }}
        >
          {["Powering the", "Foundations of", "Indonesia's AI Future"].map(
            (line, i) => (
              <span key={line} className="overflow-hidden block">
                <h1
                  className="block"
                  style={{
                    transform: isReady ? "translateY(0)" : "translateY(100%)",
                    transition: `transform 1.8s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.15}s`,
                  }}
                >
                  {line}
                </h1>
              </span>
            ),
          )}
        </h1>
      </div>

      {/* Spacer — pushes subtitle to ~70% of viewport */}
      <div className="grow" />

      {/* Subtitle + arrow */}
      <div
        className="shrink-0 relative z-10 text-center flex flex-col gap-[clamp(1rem,2vh,1.5rem)] cursor-pointer"
        onClick={() => scrollTo("downloads")}
      >
        <div className="overflow-hidden">
          <p
            className={`text-[0.75rem] md:text-[1rem] lg:text-[max(1rem,0.889vw)] leading-[1.3] font-archivo tracking-[0.02em] font-normal`}
            style={{
              color: isDark ? "#F3EDE3" : "#03B5DE",
              transition:
                "color 0.5s, transform 1.8s cubic-bezier(0.22, 1, 0.36, 1) 0.6s",
              transform: isReady ? "translateY(0)" : "translateY(100%)",
            }}
          >
            2025 Annual &amp; Sustainability Report
          </p>
        </div>
        <div
          className="flex justify-center"
          style={{
            opacity: isReady ? 1 : 0,
            transition: "opacity 1s ease 1.2s",
          }}
        >
          {/* Animated or static arrow */}
          <div className="w-8 h-auto text-blue-primary">
            <img src={iconArrowDown} className="w-full h-full" />
          </div>
        </div>
      </div>

      {/* Bottom spacer — keeps subtitle above center */}
      <div className="grow" />
    </section>
  );
};
