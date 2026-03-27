import { useEffect, useRef, useState } from "react";
import iconPlus from "../../assets/icons/icon-plus.svg";
import heartLeft from "../../assets/graphics/heart-left.svg";
import heartRight from "../../assets/graphics/heart-right.svg";
import potraitOtto from "../../assets/graphics/potrait-otto-opt.jpg";

export const PresidentMessage = ({ isDark }: { isDark: boolean }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const messageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!messageRef.current) return;
      const rect = messageRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight - 20) {
        setIsExpanded(true);
      }

      if (rect.top >= windowHeight) {
        setIsExpanded(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="message"
      className="py-8 px-6 md:px-10 relative overflow-hidden min-h-screen"
      style={{
        color: isDark ? "#F3EDE3" : "#141C22",
        transition: "color 0.5s",
      }}
    >
      {/* Batik bg pattern */}
      {/* <div className="absolute inset-0 pointer-events-none">
      <svg
        viewBox="0 0 800 600"
        className="w-full h-full"
        style={{
          color: isDark ? "#1a3a5a" : "#c5b990",
          opacity: isDark ? 0.06 : 0.15,
          transition: "color 0.5s, opacity 0.5s",
        }}
      >
        <pattern
          id="batik-msg"
          x="0"
          y="0"
          width="60"
          height="60"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M30 0L60 30L30 60L0 30Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.8"
          />
          <circle
            cx="30"
            cy="30"
            r="6"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.6"
          />
          <circle cx="30" cy="30" r="2" fill="currentColor" opacity="0.4" />
          <path
            d="M15 15L45 15L45 45L15 45Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.3"
            opacity="0.5"
          />
        </pattern>
        <rect width="800" height="600" fill="url(#batik-msg)" />
      </svg>
    </div> */}

      <img
        src={heartLeft}
        alt=""
        className="absolute top-[33%] left-14 w-[30%] pointer-events-none z-0"
      />
      <img
        src={heartRight}
        alt=""
        className="absolute top-[33%] right-14 w-[30%] pointer-events-none z-0"
      />
      <div className="max-w-xl mx-auto relative z-10  flex flex-col gap-10">
        {/* Decorative geometric cross icon */}
        <div className="flex justify-center">
          <img
            src={iconPlus}
            alt="Icon plus"
            className="h-[max(3rem,2.667vw)] w-auto"
          />
        </div>

        {/* Section heading */}
        <div className="text-center ">
          <div className="overflow-hidden">
            <div
              className="font-quantico text-[1.78rem] md:text-[2.37rem] lg:text-[max(3.16rem,2.633vw)] uppercase tracking-tight leading-[1.15]"
              style={{
                transform: isExpanded ? "translateY(0)" : "translateY(100%)",
                transition: "transform 1.8s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              Message from
            </div>
          </div>
          <div className="overflow-hidden">
            <div
              className="font-quantico text-[1.78rem] md:text-[2.37rem] lg:text-[max(3.16rem,2.633vw)] uppercase tracking-tight leading-[1.15]"
              style={{
                transform: isExpanded ? "translateY(0)" : "translateY(100%)",
                transition:
                  "transform 1.8s cubic-bezier(0.22, 1, 0.36, 1) 0.15s",
              }}
            >
              The CEO
            </div>
          </div>
        </div>

        {/* Message body — paragraph 1 */}
        <div ref={messageRef} className="relative">
          {/* Animated top border */}
          <div
            className="h-[0.5px] bg-blue-primary"
            style={{
              transformOrigin: "right",
              transform: isExpanded ? "scaleX(1)" : "scaleX(0)",
              transition: "transform 1.8s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          />
          <div
            className="py-6 flex flex-col gap-4"
            style={{
              clipPath: isExpanded ? "inset(0 0% 0 0%)" : "inset(0 0% 0 100%)",
              transition: "clip-path 1.8s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            <div className="text-center">
              <p className="font-archivo text-[max(0.75rem,0.625vw)] leading-[1.3] text-cream">
                In 2025, the Company continued to reinforce its leadership in
                Indonesia's data center infrastructure industry.
                <br />
                Our performance reflects not only sustained financial growth,
                but also disciplined execution, operational reliability, and the
                trust placed in us by customers across critical sectors.
              </p>
            </div>

            <div className="text-center">
              <p className="font-archivo text-[max(0.75rem,0.625vw)] leading-[1.3] text-cream">
                We remain committed to building infrastructure that is not only
                reliable today, but future-ready. Through continuous investment
                in technology, local talent development, and sustainable energy
                initiatives, the Company is positioning itself to support
                Indonesia's long-term digital and AI-driven growth.
              </p>
            </div>

            <div className="text-center">
              <p className="font-archivo text-[max(0.75rem,0.625vw)] leading-[1.3] text-cream">
                Looking ahead, our focus remains clear: disciplined expansion,
                operational excellence, prudent capital management, and the
                delivery of consistent value to shareholders and stakeholders
                alike.
              </p>
            </div>
          </div>

          {/* Animated bottom border */}
          <div
            className="h-[0.5px] bg-blue-primary"
            style={{
              transformOrigin: "right",
              transform: isExpanded ? "scaleX(1)" : "scaleX(0)",
              transition: "transform 1.8s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          />
        </div>

        {/* Photo + Name — left aligned */}
        <div className="overflow-hidden">
          <div
            className="flex items-center justify-center gap-4"
            style={{
              transition:
                "border-color 0.5s, transform 1.8s cubic-bezier(0.22, 1, 0.36, 1) 0.3s",
              transform: isExpanded ? "translateY(0)" : "translateY(100%)",
            }}
          >
            <img
              src={potraitOtto}
              alt="Otto Toto Sugiri"
              className="w-24 h-auto object-cover object-top"
            />
            <div>
              <p
                className="font-quantico text-[1rem] md:text-[1.33rem] lg:text-[1.78rem] font-normal"
                style={{
                  transition: "color 0.5s",
                }}
              >
                Otto Toto Sugiri
              </p>
              <p className="font-archivo text-[0.75rem] md:text-[1rem] text-blue-primary">
                Founder & CEO, DCI Indonesia
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
