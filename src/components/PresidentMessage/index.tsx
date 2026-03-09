import iconPlus from "../../assets/icons/icon-plus.svg";
import batik from "../../assets/graphics/batik-message.png";
import batikLight from "../../assets/graphics/batik-message-light.png";

export const PresidentMessage = ({ isDark }: { isDark: boolean }) => (
  <section
    id="message"
    className="py-[clamp(2rem,5.2vh,3.5rem)] px-6 md:px-10 relative overflow-hidden min-h-screen"
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
      src={isDark ? batik : batikLight}
      alt=""
      className="absolute px-10 w-full pointer-events-none z-10 top-[8%]"
    />
    <div className="max-w-3xl mx-auto relative z-10">
      {/* Decorative geometric cross icon */}
      <div className="flex justify-center">
        <img src={iconPlus} alt="Icon plus" className="h-[clamp(3rem,8.9vh,6rem)] w-auto" />
      </div>

      {/* Section heading */}
      <div className="text-center border-b-[0.5px] border-blue-primary">
        <h2 className="font-quantico text-[clamp(2rem,3.75vw,4.5rem)] uppercase tracking-tight leading-[1.15] py-[clamp(2rem,6.67vh,4.5rem)]">
          Message from
          <br />
          President Director
        </h2>
      </div>

      {/* Teal divider */}
      {/* <div className="w-full h-[0px] bg-blue mx-auto mb-10" /> */}

      {/* Message body — paragraph 1 */}
      <div className="py-[clamp(2rem,6.67vh,4.5rem)] border-b-[0.5px] border-blue-primary flex flex-col gap-4">
        <div className="text-center">
          <p className="font-archivo text-sm md:text-[15px] leading-[1.9]">
            In 2025, the Company continued to strengthen its leading position in
            the data center industry. This achievement reflects not only our
            track record but also our ongoing commitment to innovation,
            operational excellence, and meeting the growing demands of our
            customers.
          </p>
        </div>

        {/* Message body — paragraph 2 (italic) */}
        <div className="text-center">
          <p className="font-archivo text-sm md:text-[15px] leading-[1.9] italic opacity-50">
            To support this vision, the Company remains focused on expanding
            service capacity while advancing innovations that improve quality
            and provide reliable digital infrastructure solutions. Through
            consistent capacity growth and continuous improvements that deliver
            added value, the Company is committed to maintaining its industry
            leadership and supporting the acceleration of digital transformation
            in the years ahead.
          </p>
        </div>
      </div>

      {/* Photo + Name — left aligned */}
      <div
        className="flex items-center justify-center gap-4 py-[clamp(2rem,6.67vh,4.5rem)]"
        style={{
          borderTop: `1px solid ${isDark ? "#1f2937" : "#e5e7eb"}`,
          transition: "border-color 0.5s",
        }}
      >
        <div
          className="w-[clamp(4rem,4.95vw,5.94rem)] h-[clamp(5rem,10.37vh,7rem)] overflow-hidden shrink-0"
          style={{
            transition: "background-color 0.5s",
          }}
        >
          <div
            className="w-full h-full"
            style={{
              background: isDark
                ? "linear-gradient(to bottom right, #374151, #1f2937)"
                : "linear-gradient(to bottom right, #d1d5db, #e5e7eb)",
            }}
          />
        </div>
        <div>
          <p
            className="font-quantico text-xl font-bold uppercase tracking-wider"
            style={{
              transition: "color 0.5s",
            }}
          >
            Toto Sugiri
          </p>
          <p className="font-archivo text-[18px] tracking-[0.15em] uppercase">
            Chairman of DCI Indonesia
          </p>
        </div>
      </div>
    </div>
  </section>
);
