import logoDark from "../../assets/icons/logo-dark.svg";
import logoLight from "../../assets/icons/logo-light.svg";
import batikLow from "../../assets/graphics/batik-download.png";
import batikLowLight from "../../assets/graphics/batik-download-light.png";

export const DownloadSection = ({ isDark }: { isDark: boolean }) => {
  return (
    <section
      id="downloads"
      className="relative overflow-hidden h-screen"
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

      {/* Content — Report CTA */}
      <img
        src={isDark ? batikLow : batikLowLight}
        alt=""
        className="absolute bottom-0 px-8 w-full pointer-events-none"
      />
      <div className="relative z-10 pt-[clamp(3rem,10.4vh,7rem)] text-center px-6">
        <h2 className="font-quantico text-5xl sm:text-6xl md:text-7xl lg:text-[clamp(4.5rem,11.85vh,8rem)] uppercase leading-[1.05] tracking-tight">
          Read the Full
          <br />
          Report
        </h2>

        {/* DOWNLOAD REPORT button */}
        <button
          className="mt-[clamp(1.5rem,3.7vh,2.5rem)] inline-block cursor-pointer font-quantico px-[clamp(1.5rem,2.08vw,2.5rem)] py-[clamp(0.5rem,1.11vh,0.75rem)] text-[clamp(1.25rem,2.78vh,1.875rem)] uppercase tracking-[0.2em] bg-blue-primary text-dark-blue"
          style={{
            clipPath:
              "polygon(30px 0%, calc(100% - 30px) 0%, 100% 50%, calc(100% - 30px) 100%, 30px 100%, 0% 50%)",
          }}
        >
          Download Report
        </button>
      </div>

      {/* Footer section */}
      <div className="relative z-10 mt-[clamp(3rem,17.6vh,11.875rem)] pb-[clamp(1rem,1.85vh,2.5rem)] text-center text-[clamp(0.625rem,1.3vh,0.875rem)] tracking-[0.15em] uppercase">
        <div className="relative z-10 flex flex-col gap-[clamp(1.5rem,3.7vh,2.5rem)]">
          {/* DCI Logo */}
          <div className="flex justify-center">
            <img
              src={isDark ? logoLight : logoDark}
              alt="DCI Logo"
              className="h-auto w-[clamp(3.5rem,4.17vw,5rem)]"
            />
          </div>

          {/* Teal divider */}
          {/* <div className="w-16 h-[2px] bg-[#3bb8c4] mx-auto mb-6" /> */}

          {/* Description text */}
          <p
            className="font-archivo text-[clamp(0.75rem,1.48vh,1rem)] leading-[2] mx-auto py-[clamp(1.5rem,3.7vh,2.5rem)]"
            style={{
              backgroundImage:
                "linear-gradient(var(--color-blue-primary), var(--color-blue-primary)), linear-gradient(var(--color-blue-primary), var(--color-blue-primary))",
              backgroundSize: "70% 0.5px, 70% 0.5px",
              backgroundPosition: "center top, center bottom",
              backgroundRepeat: "no-repeat",
            }}
          >
            This is an interactive digital version of DCI Indonesia
            <br />
            Integrated 2025 Annual &amp; Sustainability Report.
          </p>

          {/* Links */}
          <div
            className="flex items-center justify-center gap-[clamp(1rem,1.67vw,2rem)] font-quantico text-[clamp(0.625rem,1.3vh,0.875rem)] uppercase"
            style={{ color: isDark ? "#F3EDE3" : "#141C22" }}
          >
            <a
              href="https://www.dci-indonesia.com/"
              className="border-b-[0.5px] border-blue-primary transition-colors p-1"
            >
              www.dci-indonesia.com/
            </a>
            <a
              href="mailto:corpsec@dci-indonesia.com"
              className="border-b-[0.5px] border-blue-primary transition-colors p-1"
            >
              corpsec@dci-indonesia.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
