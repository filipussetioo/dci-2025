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
};

export const Hero = ({ isDark }: { isDark: boolean }) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex-1 w-full flex flex-col overflow-hidden px-6"
    >
      <img
        src={heartLeft}
        alt="Decorative heart left"
        fetchPriority="high"
        className="absolute top-[20%] md:top-[20%] -left-[55%] md:left-14 w-full md:w-[48%] min-[1399px]:w-[40%] md:max-w-140 md:min-w-100 pointer-events-none z-0"
      />
      <img
        src={heartRight}
        alt="Decorative heart right"
        fetchPriority="high"
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
                <span
                  className="block"
                  style={{
                    transform: isReady ? "translateY(0)" : "translateY(100%)",
                    transition: `transform 1.8s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.15}s`,
                  }}
                >
                  {line}
                </span>
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
            <img
              src={iconArrowDown}
              alt="Scroll down"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Bottom spacer — keeps subtitle above center */}
      <div className="grow" />
    </section>
  );
};
