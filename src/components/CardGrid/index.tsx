import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import type { ReactZoomPanPinchContentRef } from "react-zoom-pan-pinch";
import dci from "../../assets/graphics/dci-map.svg";
// import batikLow from "../../assets/graphics/batik-gradient.png";
// import batikLowLight from "../../assets/graphics/batik-gradient-light.png";
import iconArrowUp from "../../assets/icons/icon-arrow-up-black.svg";
import highlights1 from "../../assets/graphics/highlights-1.png";
import highlights2 from "../../assets/graphics/highlights-2.png";
// import iconButtonLeft from "../../assets/icons/icon-button-left.svg";
// import iconButtonRight from "../../assets/icons/icon-button-right.svg";
import accordionRight from "../../assets/icons/accordion-right.svg";
import accordionLeft from "../../assets/icons/accordion-left.svg";

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

const FinancialContent = ({ isDark, isActive }: { isDark: boolean; isActive?: boolean }) => {
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
            className="border-t-[0.5px] border-blue-primary w-full flex flex-col md:flex-row md:items-center md:justify-between gap-4 px-8 md:px-20 py-[clamp(1.5rem,4vh,3rem)]"
          >
            {/* Left: labels + stats */}
            <div className="flex flex-row md:flex-col justify-between md:justify-start items-start gap-3 flex-wrap">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-3">
                <p
                  className="text-[max(0.75rem,0.625vw)] uppercase tracking-[0.02em] leading-[1.3]"
                  style={{
                    color: isDark ? "#F3EDE3" : "#141C22",
                    ...floatIn(idx * 0.1),
                  }}
                >
                  {item.label}
                </p>
                <p
                  className="text-[max(0.75rem,0.625vw)] text-blue-primary tracking-[0.02em] leading-[1.3]"
                  style={floatIn(idx * 0.1 + 0.05)}
                >
                  {item.eng}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span
                    className="text-[max(0.75rem,0.625vw)] tracking-[0.02em]"
                    style={{
                      color: isDark ? "#F3EDE3" : "#141C22",
                      ...floatIn(idx * 0.1 + 0.1),
                    }}
                  >
                    Meningkat
                  </span>
                  <span
                    className="px-[12.5px] py-[2px] bg-blue-primary text-dark-blue text-[0.75rem] font-normal uppercase tracking-[-0.04em]"
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
                    alt=""
                    className="w-5 h-5"
                    style={floatIn(idx * 0.1 + 0.15)}
                  />
                </div>
                {item.margin && (
                  <div className="flex items-center gap-2">
                    <span
                      className="text-[max(0.75rem,0.625vw)] uppercase tracking-[0.02em]"
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

const MAP_LOCATIONS = [
  {
    id: "cibitung",
    title: "CIBITUNG",
    description:
      "Located in the industrial corridor of Cibitung, this campus serves as a key expansion site for DCI's growing infrastructure footprint.",
    marker: { top: "20%", left: "45%" },
    next: "jakarta",
  },
  {
    id: "jakarta",
    title: "JAKARTA",
    description:
      "Serving as the primary hub for the DCI Platform, our Jakarta campus provides Tier IV infrastructure.",
    marker: { top: "75%", left: "58%" },
    next: "bintan",
  },
  {
    id: "bintan",
    title: "FUTURE PLAN - BINTAN",
    description:
      "The company will continue to develop the DCI Platform by constructing data centers in multiple locations, such as Bintan.",
    marker: { top: "80%", left: "88%" },
    next: "cibitung",
  },
];

const PlatformContent = ({
  isDark,
  activeMarker,
  onMarkerChange,
}: {
  isDark: boolean;
  activeMarker: string | null;
  onMarkerChange: (id: string | null) => void;
}) => {
  const active = activeMarker;
  const current = MAP_LOCATIONS.find((l) => l.id === active);
  const transformRef = useRef<ReactZoomPanPinchContentRef>(null);
  const wrapperDivRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const zoomTo = useCallback(
    (locId: string) => {
      onMarkerChange(locId);
      const loc = MAP_LOCATIONS.find((l) => l.id === locId);
      if (!loc || !transformRef.current || !wrapperDivRef.current) return;

      const wrapperRect = wrapperDivRef.current.getBoundingClientRect();
      const imgEl = imgRef.current;
      const imgWidth = imgEl ? imgEl.offsetWidth : 1000;
      const imgHeight = imgEl ? imgEl.offsetHeight : 670;

      const markerX = (parseFloat(loc.marker.left) / 100) * imgWidth;
      const markerY = (parseFloat(loc.marker.top) / 100) * imgHeight;

      const scale = 2.2;
      const x = -(markerX * scale) + wrapperRect.width / 2;
      const y = -(markerY * scale) + wrapperRect.height / 2;

      transformRef.current.setTransform(x, y, scale, 300);
    },
    [onMarkerChange],
  );

  const resetView = useCallback(() => {
    onMarkerChange(null);
    transformRef.current?.resetTransform(300);
  }, [onMarkerChange]);

  const handleMarkerClick = (locId: string) => {
    if (active === locId) {
      resetView();
    } else {
      zoomTo(locId);
    }
  };

  // Restore zoom to saved marker on remount
  useEffect(() => {
    if (active) {
      const timeout = setTimeout(() => {
        const loc = MAP_LOCATIONS.find((l) => l.id === active);
        if (!loc || !transformRef.current || !wrapperDivRef.current) return;

        const wrapperRect = wrapperDivRef.current.getBoundingClientRect();
        const imgEl = imgRef.current;
        const imgWidth = imgEl ? imgEl.offsetWidth : 1000;
        const imgHeight = imgEl ? imgEl.offsetHeight : 670;

        const markerX = (parseFloat(loc.marker.left) / 100) * imgWidth;
        const markerY = (parseFloat(loc.marker.top) / 100) * imgHeight;

        const scale = 2.2;
        const x = -(markerX * scale) + wrapperRect.width / 2;
        const y = -(markerY * scale) + wrapperRect.height / 2;

        transformRef.current.setTransform(x, y, scale, 300);
      }, 150);
      return () => clearTimeout(timeout);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex h-full overflow-hidden">
      {/* Left Panel — Info */}
      <div
        className="w-1/2 relative flex flex-col justify-center px-[clamp(2rem,4.17vw,5rem)] py-[clamp(2rem,5.2vh,3.5rem)]"
        style={{
          borderRight: `1px solid ${isDark ? "rgba(6,182,212,0.15)" : "#d4cdb8"}`,
        }}
      >
        <AnimatePresence mode="wait">
          {active && current ? (
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="w-[320px]"
            >
              <div
                className="bg-cyan-400 text-black px-6 py-2 text-[11px] font-black italic uppercase"
                style={{
                  clipPath: "polygon(0 0, 92% 0, 100% 50%, 92% 100%, 0 100%)",
                }}
              >
                {current.title}
              </div>
              <p className="mt-4 text-[11px] text-gray-400 leading-relaxed italic">
                {current.description}
              </p>
              <button
                onClick={() => zoomTo(current.next)}
                className="mt-6 bg-cyan-400 text-black px-5 py-2 rounded-full text-[10px] font-black uppercase cursor-pointer"
              >
                VIEW {current.next.toUpperCase()} ›
              </button>
            </motion.div>
          ) : (
            <motion.p
              key="placeholder"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-[11px] leading-relaxed italic"
              style={{
                color: isDark ? "rgba(243,237,227,0.4)" : "rgba(20,28,34,0.4)",
              }}
            >
              Select a location on the map to view details.
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Right Panel — Interactive Map */}
      <div ref={wrapperDivRef} className="w-1/2 relative overflow-hidden">
        <TransformWrapper
          ref={transformRef}
          initialScale={1}
          centerOnInit={true}
          minScale={0.5}
          maxScale={5}
          smooth
        >
          <TransformComponent wrapperStyle={{ width: "100%", height: "100%" }}>
            <div style={{ position: "relative", display: "inline-block" }}>
              <img
                ref={imgRef}
                src={dci}
                alt="Map"
                style={{
                  display: "block",
                  width: "1000px",
                  height: "auto",
                  // opacity: isDark ? 1 : 1,
                }}
              />

              {MAP_LOCATIONS.map((loc) => (
                <div
                  key={loc.id}
                  id={`marker-${loc.id}`}
                  style={{
                    position: "absolute",
                    top: loc.marker.top,
                    left: loc.marker.left,
                  }}
                  className="absolute"
                >
                  <motion.div
                    onClick={(e) => {
                      e.stopPropagation();
                      handleMarkerClick(loc.id);
                    }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 w-3 h-3 md:w-4 md:h-4 pointer-events-auto cursor-pointer rotate-45 border border-cyan-400/50 z-10"
                    animate={{
                      backgroundColor:
                        active === loc.id ? "#22d3ee" : "transparent",
                    }}
                    transition={{ duration: 0.2 }}
                  />
                </div>
              ))}
            </div>
          </TransformComponent>
        </TransformWrapper>
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

const EcosystemContent = ({ isDark, isActive }: { isDark: boolean; isActive?: boolean }) => {
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

const OPERATIONAL_CELLS: (
  | {
      type: "text";
      id: string;
      titleId: string;
      titleEn: string;
      descId: string;
      descEn: string;
    }
  | { type: "image"; src: string; alt: string }
)[][] = [
  // Page 1
  [
    {
      type: "text",
      id: "01",
      titleId: "Ketersediaan Listrik 100%",
      titleEn: "100% Power Uptime",
      descId: "Pencapaian terkait ketersediaan listrik 100%",
      descEn: "100% Power Uptime Achievement",
    },
    { type: "image", src: highlights1, alt: "Control Room" },
    {
      type: "text",
      id: "03",
      titleId: "Skalabilitas Platform",
      titleEn: "Platform Scalability",
      descId:
        "Mengoperasikan pusat data DCI Platform di beberapa lokasi secara bersamaan",
      descEn:
        "Simultaneously operating data centers within the DCI Platform, across multiple locations",
    },
    { type: "image", src: highlights2, alt: "Server Racks" },
    {
      type: "text",
      id: "02",
      titleId: "Otomatisasi",
      titleEn: "Automation",
      descId:
        "Fokus dan investasi pada automation dan predictive maintenance untuk meningkatkan efisiensi operasional",
      descEn:
        "Focuses and invests in automation and predictive maintenance to increase operational efficiency",
    },
    { type: "image", src: highlights1, alt: "Data Center" },
  ],
  // Page 2 — flipped: image-text-image on row 1, text-image-text on row 2
  [
    { type: "image", src: highlights2, alt: "Security Systems" },
    {
      type: "text",
      id: "04",
      titleId: "Keamanan Tier IV",
      titleEn: "Tier IV Security",
      descId:
        "Standar keamanan fisik dan siber tertinggi untuk melindungi data pelanggan",
      descEn:
        "Highest physical and cyber security standards to protect customer data",
    },
    { type: "image", src: highlights1, alt: "Infrastructure" },
    {
      type: "text",
      id: "05",
      titleId: "Efisiensi Energi",
      titleEn: "Energy Efficiency",
      descId:
        "Optimalisasi penggunaan energi melalui desain infrastruktur yang efisien",
      descEn: "Optimizing energy usage through efficient infrastructure design",
    },
    { type: "image", src: highlights2, alt: "Green Energy" },
    {
      type: "text",
      id: "06",
      titleId: "Konektivitas Tinggi",
      titleEn: "High Connectivity",
      descId:
        "Jaringan konektivitas yang luas dengan berbagai operator telekomunikasi",
      descEn:
        "Extensive connectivity network with various telecommunications operators",
    },
  ],
];

const OperationalContent = ({ isDark }: { isDark: boolean }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Build text+image pairs for mobile
  const mobilePairs: {
    text: {
      id: string;
      titleId: string;
      titleEn: string;
      descId: string;
      descEn: string;
    };
    image: { src: string; alt: string } | null;
  }[] = [];
  for (const page of OPERATIONAL_CELLS) {
    for (let i = 0; i < page.length; i++) {
      const cell = page[i];
      if (cell.type === "text") {
        const nextImage =
          page[i + 1]?.type === "image"
            ? (page[i + 1] as { type: "image"; src: string; alt: string })
            : null;
        mobilePairs.push({ text: cell, image: nextImage });
      }
    }
  }

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setScrollProgress(max > 0 ? el.scrollLeft / max : 0);
  };

  // const scroll = (direction: "left" | "right") => {
  //   const el = scrollRef.current;
  //   if (!el) return;
  //   const pageWidth = el.clientWidth;
  //   el.scrollBy({
  //     left: direction === "left" ? -pageWidth : pageWidth,
  //     behavior: "smooth",
  //   });
  // };

  const renderTextCell = (cell: {
    id: string;
    titleId: string;
    titleEn: string;
    descId: string;
    descEn: string;
  }) => (
    <div className="px-[clamp(1.5rem,2.5vw,2.5rem)] py-[clamp(1rem,2vh,2rem)] flex flex-col justify-center h-full">
      <div className="flex items-center gap-3 mb-1">
        <div
          className="shrink-0 inline-flex items-center justify-center bg-blue-primary px-[19.5px] py-1"
          style={{
            clipPath:
              "polygon(15.5px 0%, calc(100% - 15.5px) 0%, 100% 50%, calc(100% - 15.5px) 100%, 15.5px 100%, 0% 50%)",
          }}
        >
          <span className="font-quantico text-[1rem] font-normal text-dark-blue tracking-[-0.04em] uppercase whitespace-nowrap">
            {cell.id}
          </span>
        </div>
        <h3
          className="text-[clamp(1.1rem,2vw,1.5rem)] font-bold tracking-tight"
          style={{ color: isDark ? "#ffffff" : "#111827" }}
        >
          {cell.titleId}
        </h3>
      </div>
      <p
        className="text-[clamp(0.7rem,1vw,0.85rem)] font-bold mb-3"
        style={{ color: isDark ? "#22d3ee" : "#0891b2" }}
      >
        {cell.titleEn}
      </p>
      <p
        className="text-[clamp(0.65rem,0.9vw,0.78rem)] leading-relaxed mb-1.5"
        style={{ color: isDark ? "#d1d5db" : "#374151" }}
      >
        {cell.descId}
      </p>
      <p
        className="text-[clamp(0.6rem,0.85vw,0.72rem)] italic leading-relaxed"
        style={{ color: isDark ? "#9ca3af" : "#6b7280" }}
      >
        {cell.descEn}
      </p>
    </div>
  );

  const renderImageCell = (cell: { src: string; alt: string }) => (
    <div className="w-full h-full overflow-hidden">
      <img
        src={cell.src}
        alt={cell.alt}
        className="w-full h-full object-contain"
      />
    </div>
  );

  return (
    <div className="flex flex-col w-full relative px-6 md:px-[5.42vw] py-10 md:py-16 gap-10">
      {/* Scrollable pages */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex-1 min-h-0 overflow-x-auto overflow-y-hidden scrollbar-hide"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {/* Mobile: 1 text+image pair per snap page */}
        <div
          className="flex h-full md:hidden"
          style={{ width: `${mobilePairs.length * 100}%` }}
        >
          {mobilePairs.map((pair, idx) => (
            <div
              key={idx}
              className="flex flex-col w-full shrink-0"
              style={{
                width: `${100 / mobilePairs.length}%`,
                scrollSnapAlign: "start",
              }}
            >
              {renderTextCell(pair.text)}
              {pair.image && renderImageCell(pair.image)}
            </div>
          ))}
        </div>

        {/* Desktop: grid pages */}
        <div
          className="hidden md:flex h-full"
          style={{ width: `${OPERATIONAL_CELLS.length * 100}%` }}
        >
          {OPERATIONAL_CELLS.map((page, pageIdx) => (
            <div
              key={pageIdx}
              className="h-full grid grid-rows-2 grid-cols-3"
              style={{
                width: `${100 / OPERATIONAL_CELLS.length}%`,
                scrollSnapAlign: "start",
              }}
            >
              {page.map((cell, cellIdx) => (
                <div key={cellIdx} className="overflow-hidden">
                  {cell.type === "text"
                    ? renderTextCell(cell)
                    : renderImageCell(cell)}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar: progress line + nav buttons */}
      <div className="flex items-center justify-between px-[clamp(1.5rem,3vw,3rem)] py-3">
        {/* Progress bar */}
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

        {/* Nav buttons */}
        {/* <div className="flex gap-3">
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10  flex items-center justify-center cursor-pointer transition-colors hover:bg-cyan-400/10"
            style={{
              borderColor: isDark ? "#22d3ee" : "#0891b2",
              color: isDark ? "#22d3ee" : "#0891b2",
            }}
          >
            <img src={iconButtonLeft} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 flex items-center justify-center cursor-pointer transition-colors hover:bg-cyan-400/10"
            style={{
              borderColor: isDark ? "#22d3ee" : "#0891b2",
              color: isDark ? "#22d3ee" : "#0891b2",
            }}
          >
            <img src={iconButtonRight} />
          </button>
        </div> */}
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
  const [platformMarker, setPlatformMarker] = useState<string | null>(null);
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

            {/* Expandable content — CSS grid transition for smooth height */}
            <div
              className="grid transition-[grid-template-rows] duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                gridTemplateRows: isActive ? "1fr" : "0fr",
                backgroundColor: isDark ? "#141c22" : "#f3ede3",
              }}
            >
              <div className="overflow-hidden">
                <div className="relative flex flex-col items-center">
                    {Content === PlatformContent ? (
                      <PlatformContent
                        isDark={isDark}
                        activeMarker={platformMarker}
                        onMarkerChange={setPlatformMarker}
                      />
                    ) : (
                      <Content isDark={isDark} isActive={isActive} />
                    )}

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
                </div>
              </div>
          </div>
        );
      })}
    </div>
  );
}
