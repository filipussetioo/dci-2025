import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import iconArrowUp from "../../assets/icons/icon-arrow-up-black.svg";
import highlights1 from "../../assets/graphics/ops-1.png";
import highlights4 from "../../assets/graphics/ops-4.png";
import highlights5 from "../../assets/graphics/ops-5.png";
import highlights6 from "../../assets/graphics/ops-6.png";
import accordionRight from "../../assets/icons/accordion-right.svg";
import accordionLeft from "../../assets/icons/accordion-left.svg";

// Campus assets
import h1Bg from "../../assets/graphics/campuses/h1/campus-h1-bg.png";
import h1Icon from "../../assets/graphics/campuses/h1/campus-h1-icon.png";
import h1Content1 from "../../assets/graphics/campuses/h1/campus-h1-content-1-opt.jpg";
import h1Content2 from "../../assets/graphics/campuses/h1/campus-h1-content-2-opt.jpg";
import h1Content3 from "../../assets/graphics/campuses/h1/campus-h1-content-3-opt.jpg";
import h2Bg from "../../assets/graphics/campuses/h2/campus-h2-bg.png";
import h2Icon from "../../assets/graphics/campuses/h2/campus-h2-icon.png";
import h2Content1 from "../../assets/graphics/campuses/h2/campus-h2-content-1-opt.jpg";
import h2Content2 from "../../assets/graphics/campuses/h2/campus-h2-content-2-opt.jpg";
import h2Content3 from "../../assets/graphics/campuses/h2/campus-h2-content-3-opt.jpg";
import e1Bg from "../../assets/graphics/campuses/e1/campus-e1-bg.png";
import e1Icon from "../../assets/graphics/campuses/e1/campus-e1-icon.png";
import e1Content1 from "../../assets/graphics/campuses/e1/campus-e1-content-1.png";
import e2Bg from "../../assets/graphics/campuses/e2/campus-e2-bg.png";
import e2Icon from "../../assets/graphics/campuses/e2/campus-e2-icon.png";
import e2Content1 from "../../assets/graphics/campuses/e2/campus-e2-content-1-opt.jpg";
import iconButton from "../../assets/icons/icon-button.svg";

const tabs = [
  {
    id: "financial",
    title: "FINANCIAL\nPERFORMANCE",
    titleActive: "FINANCIAL PERFORMANCE",
    titleFlat: "FINANCIAL PERFORMANCE",
    num: "01",
  },
  {
    id: "ecosystem",
    title: "DCI ECOSYSTEM",
    titleActive: "DCI ECOSYSTEM",
    titleFlat: "DCI ECOSYSTEM",
    num: "02",
  },
  {
    id: "platform",
    title: "DCI PLATFORM",
    titleActive: "DCI PLATFORM",
    titleFlat: "DCI PLATFORM",
    num: "03",
  },
  {
    id: "operational",
    title: "OPERATIONAL\nHIGHLIGHT",
    titleActive: "OPERATIONAL HIGHLIGHT",
    titleFlat: "OPERATIONAL HIGHLIGHT",
    num: "04",
  },
];

/* ── Content Panels ── */

const FinancialContent = ({
  isDark,
  isActive,
}: {
  isDark: boolean;
  isActive?: boolean;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    if (!isActive) return;
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => {
      clearTimeout(timer);
      setIsVisible(false);
    };
  }, [isActive]);

  const floatIn = (delay = 0) => ({
    transform: isVisible ? "translateY(0)" : "translateY(-27px)",
    opacity: isVisible ? 1 : 0,
    transition: `transform 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s, opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
  });

  return (
    <div className="h-full flex flex-col justify-center w-full font-quantico">
      <div>
        {[
          {
            label: "PENDAPATAN",
            eng: "Revenue",
            val: "2,540",
            pct: "40,1% YoY",
          },
          {
            label: "EBITDA",
            eng: "EBITDA",
            val: "1,550",
            pct: "31,0% YoY",
            margin: "61,0%",
          },
          {
            label: "LABA BERSIH",
            eng: "Net Profit",
            val: "1,002",
            pct: "25,7% YoY",
            margin: "39,4%",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="border-t-[0.5px] border-blue-primary w-full flex flex-col sm:flex-row md:items-center sm:justify-between gap-4 px-8 md:px-20 py-[clamp(1.5rem,4vh,3rem)]"
          >
            {/* Left: labels + stats */}
            <div className="flex flex-row sm:flex-col justify-between md:justify-start items-start gap-3 flex-wrap">
              <div className="flex flex-col sm:flex-row items-start md:items-center gap-1 md:gap-3">
                <p
                  className="text-[0.75rem] md:text-[1rem] uppercase tracking-[0.02em] leading-[1.3]"
                  style={{
                    color: isDark ? "#F3EDE3" : "#141C22",
                    ...floatIn(idx * 0.1),
                  }}
                >
                  {item.label}
                </p>
                <p
                  className="text-[0.75rem] md:text-[1rem] text-blue-primary tracking-[0.02em] leading-[1.3]"
                  style={floatIn(idx * 0.1 + 0.05)}
                >
                  {item.eng}
                </p>
              </div>
              {/* Mobile: side by side columns | Desktop: stacked rows */}
              <div className="flex flex-row md:flex-col items-start gap-4">
                <div className="flex flex-col md:flex-row items-center gap-1 md:gap-2">
                  <span
                    className="text-[max(0.75rem,0.625vw)] tracking-[0.02em] md:w-[5.5em]"
                    style={{
                      color: isDark ? "#F3EDE3" : "#141C22",
                      ...floatIn(idx * 0.1 + 0.1),
                    }}
                  >
                    Meningkat
                  </span>
                  <div className="flex items-center">
                    <span
                      className="px-[12.5px] py-0.5 bg-blue-primary text-dark-blue text-[0.75rem] font-normal uppercase tracking-[-0.04em]"
                      style={{
                        clipPath:
                          "polygon(10.5px 0%, calc(100% - 10.5px) 0%, 100% 50%, calc(100% - 10.5px) 100%, 10.5px 100%, 0% 50%)",
                        ...floatIn(idx * 0.1 + 0.15),
                      }}
                    >
                      {item.pct}
                    </span>
                    <img
                      src={iconArrowUp}
                      alt="Increase"
                      className="w-5 h-5"
                      style={floatIn(idx * 0.1 + 0.15)}
                    />
                  </div>
                </div>
                {item.margin && (
                  <div className="flex flex-col md:flex-row items-center gap-1 md:gap-2">
                    <span
                      className="text-[max(0.75rem,0.625vw)] tracking-[0.02em] md:w-[5.5em]"
                      style={{
                        color: isDark ? "#F3EDE3" : "#141C22",
                        ...floatIn(idx * 0.1 + 0.2),
                      }}
                    >
                      Margin
                    </span>
                    <span
                      className="px-[12.5px] py-[2px] bg-blue-primary text-dark-blue text-[0.75rem] font-normal uppercase tracking-[-0.04em]"
                      style={{
                        clipPath:
                          "polygon(10.5px 0%, calc(100% - 10.5px) 0%, 100% 50%, calc(100% - 10.5px) 100%, 10.5px 100%, 0% 50%)",
                        ...floatIn(idx * 0.1 + 0.25),
                      }}
                    >
                      {item.margin}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Right: IDR + number + Miliar */}
            <div className="flex items-center justify-center md:justify-end gap-4">
              <span
                className="text-[1rem] md:text-[1.33rem] lg:text-[1.78rem] uppercase self-start pt-1 tracking-[0.02em]"
                style={{
                  color: isDark ? "#F3EDE3" : "#141C22",
                  ...floatIn(idx * 0.1),
                }}
              >
                IDR
              </span>
              <span className="text-[4.21rem] md:text-[5.61rem] lg:text-[7.48rem] text-blue-primary leading-none tracking-tighter">
                {item.val}
              </span>
              <div className="text-left self-start pt-1">
                <p
                  className="text-[1rem] md:text-[1.33rem] lg:text-[1.78rem] uppercase leading-none tracking-[0.02em]"
                  style={{
                    color: isDark ? "#F3EDE3" : "#141C22",
                    ...floatIn(idx * 0.1),
                  }}
                >
                  Miliar
                </p>
                <p
                  className="text-[0.75rem] md:text-[1rem] text-blue-primary tracking-[0.02em]"
                  style={floatIn(idx * 0.1 + 0.05)}
                >
                  Billion
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const CAMPUSES = [
  {
    id: "h1",
    name: "DCI H1 CAMPUS",
    location: "Cibitung, West Java",
    description:
      "The Company has been operating JK1, JK2, JK3, and JK5 data center buildings. During 1st Q 2025, the Company added 36 MW capacity by operating JK6 data center building.\n\nFurther, the Company plans to build sustainable data center buildings on our total land of 8.5 hectares with a total capacity up to 300 MW.",
    bgImage: h1Bg,
    mapImage: h1Icon,
    gallery: [h1Content1, h1Content2, h1Content3],
  },
  {
    id: "h2",
    name: "DCI PLATFORM H2 CAMPUS",
    location: "Karawang, West Java",
    description:
      "The Company has been operating H2-01 and H2-02 data center buildings. DCI-H2 Karawang was built in line with green principle and is supported by the solar panel facilities in the data center complex as renewable power resource.\n\nOn a plot of land of 86 hectares, DCI H2 Karawang has a potential capacity expansion to more than 600 MW with up to 30 MW of electricity generated by solar panels.",
    bgImage: h2Bg,
    mapImage: h2Icon,
    gallery: [h2Content1, h2Content2, h2Content3],
  },
  {
    id: "e1",
    name: "DCI PLATFORM E1",
    location: "DKI Jakarta",
    description:
      "DCI E1 Jakarta is the first Tier IV downtown data center in Jakarta; it's built with 19 MW capacity.\n\nLocated strategically close to Indonesia's main internet exchange hub, DCI E1 Jakarta allows fast and efficient interconnection.",
    bgImage: e1Bg,
    mapImage: e1Icon,
    gallery: [e1Content1],
  },
  {
    id: "e2",
    name: "DCI E2",
    location: "Surabaya, East Java",
    description:
      "In 2025, the Company expanded its presence to Indonesia's second-largest city — Surabaya. The DCI E2 Surabaya data center is designed with a 9 MW capacity.\n\nDCI E2 Surabaya construction is expected to be completed in Q4 2025.",
    bgImage: e2Bg,
    mapImage: e2Icon,
    gallery: [e2Content1],
  },
];

const PlatformContent = ({ isDark }: { isDark: boolean }) => {
  const [activeCampus, setActiveCampus] = useState<string | null>(null);
  const [galleryIdx, setGalleryIdx] = useState(0);

  const active = CAMPUSES.find((c) => c.id === activeCampus);

  const toggleCampus = (id: string) => {
    if (activeCampus === id) {
      setActiveCampus(null);
    } else {
      setActiveCampus(id);
      setGalleryIdx(0);
    }
  };

  return (
    <div className="flex flex-col md:flex-row w-full">
      {/* Left: Gallery (visible when a campus is active) */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "50%" }}
            exit={{ width: 0 }}
            transition={{
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="hidden lg:block overflow-hidden shrink-0"
          >
            <div
              className="flex flex-col justify-between h-full pl-0 pr-8"
              style={{ minWidth: "50vw" }}
            >
              {/* Top line */}
              <div className="w-full h-[0.5px] mb-4 bg-blue-primary shrink-0" />

              {/* Main image */}
              <div className="ml-8 flex-1 relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={`${activeCampus}-${galleryIdx}`}
                    src={active.gallery[galleryIdx]}
                    alt={active.name}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  />
                </AnimatePresence>
              </div>

              {/* Thumbnails + nav */}
              <div className="flex items-center justify-center gap-3 py-4 shrink-0">
                {active.gallery.length > 1 && (
                  <button
                    onClick={() => setGalleryIdx((p) => Math.max(0, p - 1))}
                    className="w-8 h-8 flex items-center justify-center cursor-pointer"
                  >
                    <img
                      src={iconButton}
                      alt="Previous"
                      className="w-8 h-8"
                      style={{ transform: "rotate(90deg)" }}
                    />
                  </button>
                )}
                {active.gallery.map((thumb, idx) => (
                  <button
                    key={idx}
                    onClick={() => setGalleryIdx(idx)}
                    className={`w-12 h-9 overflow-hidden cursor-pointer border ${idx === galleryIdx ? "border-blue-primary" : "border-transparent opacity-50"}`}
                  >
                    <img
                      src={thumb}
                      alt={`${active.name} thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
                {active.gallery.length > 1 && (
                  <button
                    onClick={() =>
                      setGalleryIdx((p) =>
                        Math.min(active.gallery.length - 1, p + 1),
                      )
                    }
                    className="w-8 h-8 flex items-center justify-center cursor-pointer"
                  >
                    <img
                      src={iconButton}
                      alt="Next"
                      className="w-8 h-8"
                      style={{ transform: "rotate(-90deg)" }}
                    />
                  </button>
                )}
              </div>

              {/* Bottom line */}
              <div className="w-full h-[0.5px] bg-blue-primary shrink-0" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Right: Accordion list */}
      <div className="flex-1 flex flex-col">
        {CAMPUSES.map((campus) => {
          const isActive = activeCampus === campus.id;
          return (
            <div
              key={campus.id}
              className="border-t-[0.5px] border-blue-primary"
            >
              {/* Header — clickable */}
              <div
                className={`relative flex items-center justify-between p-8 md:px-16 md:py-6 cursor-pointer overflow-hidden ${active ? "h-fit" : "min-h-53.5"}`}
                onClick={() => toggleCampus(campus.id)}
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 transition-opacity duration-700 ease-in-out"
                  style={{
                    backgroundImage: `url(${campus.bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: isActive ? 0 : 1,
                  }}
                />

                <div
                  className="relative z-10 flex-1 pr-8 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{
                    transform: isActive ? "translateY(0)" : "translateY(0)",
                  }}
                >
                  <p
                    className="text-[1rem] md:text-[1.33rem] lg:text-[1.78rem] uppercase font-quantico transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    style={{
                      color: isDark ? "#F3EDE3" : "#141C22",
                      transform: isActive ? "translateY(0)" : "translateY(8px)",
                    }}
                  >
                    {campus.name}
                  </p>
                  <p
                    className="text-[0.75rem] md:text-[1rem] text-blue-primary tracking-[0.02em] transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    style={{
                      transform: isActive ? "translateY(0)" : "translateY(8px)",
                      opacity: isActive ? 1 : 0.7,
                    }}
                  >
                    {campus.location}
                  </p>
                </div>

                {/* Map thumbnail + arrow */}
                <div className="relative z-10 flex items-center gap-8">
                  <img
                    src={campus.mapImage}
                    alt={`${campus.name} map`}
                    className={`w-auto object-contain transition-[opacity,transform] duration-500 ease-in-out md:!opacity-100 md:!scale-100 ${isActive ? "h-20 opacity-0 scale-75 md:opacity-100" : "h-30 opacity-100 scale-100"}`}
                  />
                  <div className="relative w-8 h-8">
                    <img
                      src={iconButton}
                      alt="Toggle campus details"
                      className="absolute inset-0 w-8 h-8 transition-opacity duration-500 ease-in-out"
                      style={{ opacity: isActive ? 0 : 1 }}
                    />
                    <img
                      src={iconButton}
                      alt="Toggle campus details"
                      className="absolute inset-0 w-8 h-8 rotate-180 transition-opacity duration-500 ease-in-out"
                      style={{ opacity: isActive ? 1 : 0 }}
                    />
                  </div>
                </div>
              </div>

              {/* Expandable content — mobile: gallery + description */}
              <div
                className="grid ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{
                  gridTemplateRows: isActive ? "1fr" : "0fr",
                  opacity: isActive ? 1 : 0,
                  transition: isActive
                    ? "grid-template-rows 1.2s cubic-bezier(0.16,1,0.3,1), opacity 0.8s ease-out 0.2s"
                    : "grid-template-rows 1.4s cubic-bezier(0.16,1,0.3,1), opacity 1s ease-in 0.1s",
                }}
              >
                <div className="overflow-hidden">
                    {/* Mobile gallery */}
                    <div className="border-t-[0.5px] border-blue-primary mx-2 lg:hidden" />
                    <div className="lg:hidden flex flex-col py-4 px-4">
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={campus.gallery[galleryIdx]}
                          alt={campus.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex items-center justify-center gap-3 py-4">
                        {campus.gallery.length > 1 && (
                          <button
                            onClick={() =>
                              setGalleryIdx((p) => Math.max(0, p - 1))
                            }
                            className="w-8 h-8 flex items-center justify-center cursor-pointer"
                          >
                            <img
                              src={iconButton}
                              alt="Previous"
                              className="w-8 h-8"
                              style={{ transform: "rotate(90deg)" }}
                            />
                          </button>
                        )}
                        {campus.gallery.map((thumb, idx) => (
                          <button
                            key={idx}
                            onClick={() => setGalleryIdx(idx)}
                            className={`w-12 h-9 overflow-hidden cursor-pointer border ${idx === galleryIdx ? "border-blue-primary" : "border-transparent opacity-50"}`}
                          >
                            <img
                              src={thumb}
                              alt={`${campus.name} thumbnail ${idx + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </button>
                        ))}
                        {campus.gallery.length > 1 && (
                          <button
                            onClick={() =>
                              setGalleryIdx((p) =>
                                Math.min(campus.gallery.length - 1, p + 1),
                              )
                            }
                            className="w-8 h-8 flex items-center justify-center cursor-pointer"
                          >
                            <img
                              src={iconButton}
                              alt="Next"
                              className="w-8 h-8"
                              style={{ transform: "rotate(-90deg)" }}
                            />
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="border-b-[0.5px] border-blue-primary mx-2 md:hidden" />

                    {/* Description */}
                    <div className="px-4 py-3 lg:px-16 lg:py-6">
                      <p
                        className="text-[max(0.75rem,0.625vw)] leading-relaxed whitespace-pre-line"
                        style={{ color: isDark ? "#d1d5db" : "#374151" }}
                      >
                        {campus.description}
                      </p>
                    </div>
                </div>
              </div>
            </div>
          );
        })}
        <div className="border-t-[0.5px] border-blue-primary" />
      </div>
    </div>
  );
};

const ecosystemItems = [
  { label: "FINANCIAL INSTITUTIONS", val: "100+" },
  { label: "NETWORK SERVICE PROVIDERS", val: "80+" },
  { label: "CROSS-INDUSTRY ENTERPRISES AND SOES", val: "60+" },
  { label: "GLOBAL CLOUD PROVIDERS", val: "6" },
  {
    label: "BIGGEST GLOBAL SOCIAL MEDIA AND INDONESIAN E-COMMERCE PLATFORM",
    val: "5",
  },
];

/* Diamond line divider component */
const DiamondLine = () => (
  <div className="relative flex items-center w-full h-1.5">
    <div className="absolute left-[3px] right-[3px] top-1/2 -translate-y-1/2 h-[0.5px] bg-blue-primary" />
    <div className="absolute left-0 top-1/2 -translate-y-1/2 rotate-45 w-1.5 h-1.5 bg-blue-primary" />
    <div className="absolute right-0 top-1/2 -translate-y-1/2 rotate-45 w-1.5 h-1.5 bg-blue-primary" />
  </div>
);

const EcosystemContent = ({
  isDark,
  isActive,
}: {
  isDark: boolean;
  isActive?: boolean;
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isActive) return;
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => {
      clearTimeout(timer);
      setIsVisible(false);
    };
  }, [isActive]);

  const floatIn = (delay = 0) => ({
    transform: isVisible ? "translateY(0)" : "translateY(-27px)",
    opacity: isVisible ? 1 : 0,
    transition: `transform 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s, opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
  });

  const expandIn = (delay = 0) => ({
    transform: isVisible ? "scale(1)" : "scale(0.85)",
    opacity: isVisible ? 1 : 0,
    transition: `transform 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s, opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
    transformOrigin: "bottom left",
  });

  return (
    <div className="w-full font-quantico px-8 md:px-16 py-10">
      {/* Trusted By section */}
      <div className="flex flex-col gap-4">
        <DiamondLine />
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6">
          <p
            className="text-[1rem] md:text-[1.33rem] lg:text-[1.78rem] uppercase tracking-[0.02em]"
            style={{ color: isDark ? "#F3EDE3" : "#141C22", ...floatIn(0) }}
          >
            TRUSTED BY
          </p>
          <span
            className="text-[4.21rem] md:text-[5.61rem] lg:text-[7.48rem] text-blue-primary leading-none tracking-tighter"
            style={floatIn(0.05)}
          >
            270+
          </span>
          <p
            className="text-[1rem] md:text-[1.33rem] lg:text-[1.78rem] uppercase tracking-[0.02em]"
            style={{ color: isDark ? "#F3EDE3" : "#141C22", ...floatIn(0.1) }}
          >
            CUSTOMERS
          </p>
        </div>
        <DiamondLine />
      </div>

      {/* Ecosystem items */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-16">
        {ecosystemItems.map((item, idx) => (
          <div
            key={idx}
            className="border-l-[0.5px] border-r-[0.5px] md:border-l-0 md:border-r-0 md:border-t-[0.5px] md:border-b-[0.5px] border-blue-primary flex flex-row md:flex-col items-center md:text-center py-4 md:py-6 px-4 md:px-0 gap-4 justify-between min-[1400px]:min-h-73.5"
            style={expandIn(0.3)}
          >
            {/* Diamond + label */}
            <div className="flex flex-row md:flex-col items-center gap-2">
              <div className="w-1.5 h-1.5 rotate-45 bg-blue-primary shrink-0" />
              <p
                className="text-[max(0.75rem,0.625vw)] uppercase tracking-[0.02em] leading-[1.3] md:px-2 text-left md:text-center"
                style={{ color: isDark ? "#F3EDE3" : "#141C22" }}
              >
                {item.label}
              </p>
            </div>
            {/* Number + diamond */}
            <div className="flex flex-row md:flex-col items-center gap-2">
              <span className="text-[clamp(2.5rem,8vw,5rem)] text-blue-primary leading-none tracking-tighter">
                {item.val}
              </span>
              <div className="w-1.5 h-1.5 rotate-45 bg-blue-primary shrink-0" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const OP_ITEMS = {
  "01": {
    id: "01",
    title: "1,900 MW+ Scalable Capacity",
    bullets: [
      "DCI enables scalability up to 1,900 MW across 5+ locations in Indonesia",
      "Supported by a total landbank of 6,500 ha for long-term expansion",
    ],
  },
  "02": {
    id: "02",
    title: "12 Months Greenfield-to-RFS (incl. power); <6 Months Fit-Out",
    bullets: [
      "Proven track record of delivering 15 MW+ non-modular data centers within 12 months for hyperscalers",
      "Built by local contractors to global standards, achieving >30% lower CapEx than the market average",
    ],
  },
  "03": {
    id: "03",
    title: "100% Power Uptime",
    bullets: [
      "Achieved and maintained 100% power uptime since inception.",
      "Ensured through Tier IV design, full redundancy, and multi-site resilience.",
    ],
  },
  "04": {
    id: "04",
    title: "AI-Ready Infrastructure",
    bullets: [
      "AI-ready data halls with 120+ kW/rack density, liquid cooling, and flexible ramp-up.",
      "Standard 2N redundancy configuration ensures maximum reliability.",
    ],
  },
  "05": {
    id: "05",
    title: "Automation & Predictive Maintenance",
    bullets: [
      "Focused and invested in AI-based automation and predictive maintenance to enhance operational efficiency.",
      "Automation minimizes human error and enables consistent 24/7 monitoring.",
    ],
  },
  "06": {
    id: "06",
    title: "Platform-Wide Scalability",
    bullets: [
      "Operates multiple DCI campuses simultaneously under a unified operational platform.",
      "Delivers consistent standards, flexibility, and seamless interconnectivity across regions.",
    ],
  },
};

const OperationalContent = ({ isDark }: { isDark: boolean }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setScrollProgress(max > 0 ? el.scrollLeft / max : 0);
  };

  const renderCard = (item: {
    id: string;
    title: string;
    bullets: string[];
  }) => (
    <div className="flex flex-col gap-3 px-[clamp(1.5rem,2.5vw,2.5rem)] py-[clamp(1rem,2vh,2rem)]">
      <div className="flex items-center gap-3">
        <div
          className="shrink-0 inline-flex items-center justify-center bg-blue-primary px-[19.5px] py-1"
          style={{
            clipPath:
              "polygon(15.5px 0%, calc(100% - 15.5px) 0%, 100% 50%, calc(100% - 15.5px) 100%, 15.5px 100%, 0% 50%)",
          }}
        >
          <span className="font-quantico text-[1rem] font-normal text-dark-blue tracking-[-0.04em] uppercase whitespace-nowrap">
            {item.id}
          </span>
        </div>
        <h3
          className="text-[max(0.75rem,0.625vw)] font-bold tracking-tight"
          style={{ color: isDark ? "#F3EDE3" : "#111827" }}
        >
          {item.title}
        </h3>
      </div>
      <div className="flex flex-col gap-2 ml-2">
        {item.bullets.map((bullet, bIdx) => (
          <div key={bIdx} className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 rotate-45 bg-blue-primary shrink-0 mt-1.5" />
            <p
              className="text-[max(0.75rem,0.625vw)] leading-relaxed"
              style={{ color: isDark ? "#d1d5db" : "#374151" }}
            >
              {bullet}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderImage = (src: string, alt: string) => {
    const clipId = `pixelOctagon-${alt.replace(/\s/g, "")}`;
    return (
      <div className="w-full h-auto flex items-center justify-center p-4">
        <div
          className="w-full h-auto relative"
          style={{ paddingBottom: "71.875%" }}
        >
          <div
            className="absolute inset-0"
            style={{
              clipPath: `url(#${clipId})`,
              backgroundImage: `url(${src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col w-full relative px-6 lg:px-[5.42vw] py-10 lg:py-16 gap-10">
      {/* Scrollable pages */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex-1 min-h-0 overflow-x-auto overflow-y-hidden scrollbar-hide"
        style={{ scrollSnapType: "x proximity" }}
      >
        {/* Mobile: 1 item per snap page, 02+03 counted as 1 */}
        <div className="flex h-full md:hidden" style={{ width: `${5 * 100}%` }}>
          {[
            <div key="m1" className="flex flex-col">
              {renderCard(OP_ITEMS["01"])}
              {renderImage(highlights1, "DCI Campus")}
            </div>,
            <div key="m2" className="flex flex-col h-full">
              {renderCard(OP_ITEMS["02"])}
              <div className="h-[0.5px] bg-blue-primary mx-6" />
              {renderCard(OP_ITEMS["03"])}
            </div>,
            <div key="m3" className="flex flex-col">
              {renderCard(OP_ITEMS["04"])}
              {renderImage(highlights4, "Server Room")}
            </div>,
            <div key="m4" className="flex flex-col">
              {renderImage(highlights5, "Technician")}
              {renderCard(OP_ITEMS["05"])}
            </div>,
            <div key="m5" className="flex flex-col">
              {renderCard(OP_ITEMS["06"])}
              {renderImage(highlights6, "DCI Building")}
            </div>,
          ].map((page, idx) => (
            <div key={idx} className="w-full shrink-0" style={{ width: "20%" }}>
              {page}
            </div>
          ))}
        </div>

        {/* Desktop: 2 pages */}
        <div
          className="hidden md:flex h-full"
          style={{ width: `${100 + (100 * 2) / 3}%` }}
        >
          {/* Page 1 */}
          <div
            className="shrink-0 grid grid-cols-3 w-1/2"
            style={{
              width: `${(100 / (1 + 2 / 3)) * 1}%`,
              gridTemplateRows: "auto auto",
            }}
          >
            {/* Col 1: text top, image bottom */}
            <div className="flex flex-col">
              {renderCard(OP_ITEMS["01"])}
              <div className="flex-1 overflow-hidden">
                {renderImage(highlights1, "DCI Campus")}
              </div>
            </div>
            {/* Col 2: 02 top, separator + 03 bottom (text only) */}
            <div className="flex flex-col">
              <div className="flex-1">{renderCard(OP_ITEMS["02"])}</div>
              <div className="h-[0.5px] bg-blue-primary mx-6" />
              <div className="flex-1">{renderCard(OP_ITEMS["03"])}</div>
            </div>
            {/* Col 3: image top, text bottom */}
            <div className="flex flex-col">
              <div className="flex-1 overflow-hidden">
                {renderImage(highlights4, "Server Room")}
              </div>
              {renderCard(OP_ITEMS["04"])}
            </div>
          </div>

          {/* Page 2: same column pattern */}
          <div
            className="shrink-0 grid grid-cols-2 ml-4 gap-4"
            style={{
              scrollSnapAlign: "start",
              width: `${(100 / (1 + 2 / 3)) * (2 / 3)}%`,
            }}
          >
            {/* Col 1: text top, image bottom */}
            <div className="flex flex-col">
              {renderCard(OP_ITEMS["05"])}
              <div className="flex-1 overflow-hidden">
                {renderImage(highlights5, "Technician")}
              </div>
            </div>
            {/* Col 2: image top, text bottom */}
            <div className="flex flex-col">
              <div className="flex-1 overflow-hidden">
                {renderImage(highlights6, "DCI Building")}
              </div>
              {renderCard(OP_ITEMS["06"])}
            </div>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="flex items-center justify-between px-[clamp(1.5rem,3vw,3rem)] py-3">
        <div className="flex-1 relative h-[2px]">
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: isDark
                ? "rgba(6,182,212,0.15)"
                : "rgba(0,0,0,0.1)",
            }}
          />
          <motion.div
            className="absolute top-0 left-0 h-full"
            style={{
              backgroundColor: isDark ? "#22d3ee" : "#0891b2",
              width: "30%",
            }}
            animate={{ left: `${scrollProgress * 70}%` }}
            transition={{ type: "tween", duration: 0.1 }}
          />
          <div
            className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rotate-45"
            style={{ backgroundColor: isDark ? "#22d3ee" : "#0891b2" }}
          />
          <div
            className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rotate-45"
            style={{ backgroundColor: isDark ? "#22d3ee" : "#0891b2" }}
          />
        </div>
      </div>
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const panels: React.ComponentType<any>[] = [
  FinancialContent,
  EcosystemContent,
  PlatformContent,
  OperationalContent,
];

/* ── Main Layout ── */

export default function CardGrid({ isDark }: { isDark: boolean }) {
  const [activeTab, setActiveTab] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className="w-full flex flex-col"
      style={{ backgroundColor: isDark ? "#141c22" : "#f0ebe0" }}
      id="highlights"
    >
      {tabs.map((tab, i) => {
        const isActive = activeTab === i;
        const isCollapsed = activeTab !== null && activeTab !== i;
        const Content = panels[i];

        return (
          <div key={tab.id}>
            {/* Tab header row */}
            <motion.div
              className={`relative flex items-center justify-evenly cursor-pointer px-20 overflow-hidden max-h-50 ${i > 0 ? "border-t-[0.5px] border-blue-primary" : ""}`}
              style={{
                backgroundColor: isDark ? "#141c22" : "#f3ede3",
              }}
              onClick={() => setActiveTab(isActive ? null : i)}
              animate={{
                paddingTop: isCollapsed
                  ? "1.25rem"
                  : activeTab === null
                    ? "4.125rem"
                    : "clamp(3rem,8vh,6rem)",
                paddingBottom: isCollapsed
                  ? "1.25rem"
                  : activeTab === null
                    ? "4.125rem"
                    : "clamp(3rem,8vh,6rem)",
              }}
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : { type: "spring", stiffness: 200, damping: 35, mass: 1 }
              }
            >
              {/* Left diamond */}
              <div className="absolute left-20 top-1/2 -translate-y-1/2 w-2 h-2 rotate-45 bg-blue-primary" />

              {/* Left arrow (pointing right) */}
              <motion.img
                src={accordionLeft}
                className="hidden md:block w-[102px] h-[118px] shrink-0 rotate-90"
              />

              {/* Title or Number */}
              {isCollapsed ? (
                <motion.span
                  className="font-quantico text-[1rem] md:text-[1.33rem] lg:text-[1.78rem] uppercase leading-[0.95]"
                  style={{ color: isDark ? "#F3EDE3" : "#141C22" }}
                  initial={{
                    opacity: 0,
                    y: activeTab !== null && i > activeTab ? 20 : -20,
                  }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 30,
                    delay: 0.05,
                  }}
                >
                  {tab.num}
                </motion.span>
              ) : (
                <motion.h3
                  className="font-quantico text-[1.33rem] md:text-[1.78rem] lg:text-[max(2.37rem,2.107vw)] uppercase tracking-[-0.04em] leading-[0.95] text-center whitespace-pre-line font-normal"
                  style={{ color: isDark ? "#F3EDE3" : "#141C22" }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {tab.title}
                </motion.h3>
              )}

              {/* Right arrow (pointing left) */}
              <motion.img
                src={accordionRight}
                className="hidden md:block w-25.5 h-29.5 shrink-0 rotate-90"
              />

              {/* Right diamond */}
              <div className="absolute right-20 top-1/2 -translate-y-1/2 w-2 h-2 rotate-45 bg-blue-primary" />
            </motion.div>

            {/* Expandable content — only mounted when active */}
            <AnimatePresence initial={false}>
              {isActive && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={
                    shouldReduceMotion
                      ? { duration: 0 }
                      : {
                          duration: 1.2,
                          ease: [0.16, 1, 0.3, 1],
                        }
                  }
                  className="overflow-hidden"
                  style={{
                    backgroundColor: isDark ? "#141c22" : "#f3ede3",
                  }}
                >
                  <div className="relative flex flex-col items-center">
                    <Content isDark={isDark} isActive={isActive} />

                    {/* CLOSE BUTTON — bottom center */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveTab(null);
                      }}
                      className="w-6 h-6 my-6 z-50 group cursor-pointer text-blue-primary"
                    >
                      <svg
                        viewBox="0 0 100 100"
                        className="text-blue-primary transition-transform group-hover:rotate-90 duration-500"
                      >
                        <polygon
                          points="50,0 100,50 50,100 0,50"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                        />
                        <line
                          x1="35"
                          y1="35"
                          x2="65"
                          y2="65"
                          stroke="currentColor"
                          strokeWidth="3"
                        />
                        <line
                          x1="65"
                          y1="35"
                          x2="35"
                          y2="65"
                          stroke="currentColor"
                          strokeWidth="3"
                        />
                      </svg>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
