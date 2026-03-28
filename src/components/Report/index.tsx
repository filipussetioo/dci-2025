import logoDark from "../../assets/icons/logo-dark.svg";
import logoLight from "../../assets/icons/logo-light.svg";
// import batikLow from "../../assets/graphics/batik-download.png";
// import batikLowLight from "../../assets/graphics/batik-download-light.png";
import lungLeft from "../../assets/graphics/lungs-left.svg";
import lungRight from "../../assets/graphics/lungs-right.svg";
import cornersLeft from "../../assets/graphics/corners-left.svg";
import cornersRight from "../../assets/graphics/corners-right.svg";

export const DownloadSection = ({ isDark }: { isDark: boolean }) => {
  return (
    <section
      id="downloads"
      className="relative overflow-hidden h-max lg:h-screen"
      style={{
        color: isDark ? "#F3EDE3" : "#141C22",
        transition: "color 0.5s",
      }}
    >
      {/* Background */}
      {/* <div className="absolute inset-0" style={{ backgroundColor: isDark ? "#1a2235" : "#f0ebe0", transition: "background-color 0.5s" }}>
        {isDark && <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900" />}
        {isDark && <div className="absolute inset-0 bg-black/40" />}
        {!isDark && (
          <div className="absolute inset-0 pointer-events-none">
            <svg viewBox="0 0 800 600" className="w-full h-full text-[#c5b990] opacity-20">
              <pattern id="batik-report" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M30 0L60 30L30 60L0 30Z" fill="none" stroke="currentColor" strokeWidth="0.8" />
                <circle cx="30" cy="30" r="6" fill="none" stroke="currentColor" strokeWidth="0.6" />
                <circle cx="30" cy="30" r="2" fill="currentColor" opacity="0.4" />
                <path d="M15 15L45 15L45 45L15 45Z" fill="none" stroke="currentColor" strokeWidth="0.3" opacity="0.5" />
              </pattern>
              <rect width="800" height="600" fill="url(#batik-report)" />
            </svg>
          </div>
        )}
      </div> */}

      {/* Heart graphics — behind footer, above corners */}
      <img
        src={lungLeft}
        alt="Decorative lung graphic left"
        loading="lazy"
        className="absolute md:-bottom-[40%] md:left-0 lg:left-6 lg:max-w-[40%] z-0 pointer-events-none md:w-1/2 top-[30%] md:top-[15%] -left-[55%] w-[100%]"
      />
      <img
        src={lungRight}
        alt="Decorative lung graphic right"
        loading="lazy"
        className="absolute md:-bottom-[40%] md:right-0 lg:right-6 lg:max-w-[40%] z-0 pointer-events-none md:w-1/2 top-[30%] md:top-[15%] -right-[55%] w-[100%]"
      />
      <div className="relative z-10 pt-16 text-center px-6">
        <h2 className="font-quantico text-[1.78rem] md:text-[3.16rem] lg:text-[max(4.21rem,3.742vw)] uppercase leading-[0.95] tracking-[-0.04em]">
          Read the
          <br />
          Full Report
        </h2>

        {/* DOWNLOAD REPORT button */}
        <button className="group mt-16 inline-block cursor-pointer font-quantico ">
          <div
            className="bg-blue-primary group-hover:bg-blue-hover px-[24.5px] py-2 uppercase text-black text-[1em] font-normal tracking-[-0.04em]"
            style={{
              clipPath:
                "polygon(16.5px 0%, calc(100% - 16.5px) 0%, 100% 50%, calc(100% - 16.5px) 100%, 16.5px 100%, 0% 50%)",
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
        </button>
      </div>

      {/* Footer section */}
      <div className="relative z-10 mt-10 pb-[clamp(1rem,1.85vh,2.5rem)] text-center text-[clamp(0.625rem,1.3vh,0.875rem)] tracking-[0.15em] uppercase">
        <div className="relative z-10 flex flex-col gap-6">
          {/* DCI Logo */}
          <div className="flex justify-center">
            <img
              src={isDark ? logoLight : logoDark}
              alt="DCI Logo"
              className="h-auto w-8"
            />
          </div>

          {/* Teal divider */}
          {/* <div className="w-16 h-[2px] bg-[#3bb8c4] mx-auto mb-6" /> */}

          {/* Description text */}
          <p className="font-archivo text-[max(0.56rem,0.498vw)] mx-auto leading-[1.3] tracking-[0.02em]">
            DCI INDONESIA © 2026. AN INTERACTIVE DIGITAL VERSION OF DCI
            <br />
            INDONESIA 2025 ANNUAL & SUSTAINABILITY REPORT.
          </p>

          {/* Links */}
          <div className="inline-flex flex-col items-stretch mx-auto pb-36.5">
            <div className="h-[0.5px] bg-blue-primary" />
            <div className="flex flex-col md:flex-row items-center gap-[clamp(1rem,1.67vw,2rem)] font-quantico text-[clamp(0.625rem,1.3vh,0.875rem)] uppercase py-2 px-6 justify-evenly">
              <a
                href="https://www.dci-indonesia.com/"
                className="group relative inline-flex items-center cursor-pointer"
              >
                <div
                  className="bg-blue-primary group-hover:bg-blue-hover transition-colors duration-300 px-6 py-2 uppercase text-dark-blue tracking-[-0.04em]"
                  style={{
                    clipPath:
                      "polygon(1.1em 0%, calc(100% - 1.1em) 0%, 100% 50%, calc(100% - 1.1em) 100%, 1.1em 100%, 0% 50%)",
                  }}
                >
                  <span className="overflow-hidden block h-[1.3em]">
                    <span className="block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full">
                      www.dci-indonesia.com
                    </span>
                    <span className="block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full">
                      www.dci-indonesia.com
                    </span>
                  </span>
                </div>
              </a>
              <a
                href="mailto:corpsec@dci-indonesia.com"
                className="group relative inline-flex items-center cursor-pointer"
              >
                <div
                  className="bg-blue-primary group-hover:bg-blue-hover transition-colors duration-300 px-6 py-2 uppercase text-dark-blue tracking-[-0.04em]"
                  style={{
                    clipPath:
                      "polygon(1.1em 0%, calc(100% - 1.1em) 0%, 100% 50%, calc(100% - 1.1em) 100%, 1.1em 100%, 0% 50%)",
                  }}
                >
                  <span className="overflow-hidden block h-[1.3em]">
                    <span className="block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full">
                      corpsec@dci-indonesia.com
                    </span>
                    <span className="block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full">
                      corpsec@dci-indonesia.com
                    </span>
                  </span>
                </div>
              </a>
            </div>
            <div className="h-[0.5px] bg-blue-primary" />
          </div>
        </div>
      </div>
      {/* Corner decorations — bottom */}
      <img
        src={cornersLeft}
        alt="Decorative corner left"
        className="absolute bottom-8 left-8 z-10 w-15 h-auto"
      />
      <img
        src={cornersRight}
        alt="Decorative corner right"
        className="absolute bottom-8 right-8 z-10 w-15 h-auto"
      />
    </section>
  );
};
