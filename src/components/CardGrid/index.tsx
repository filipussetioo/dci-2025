import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import type { ReactZoomPanPinchContentRef } from "react-zoom-pan-pinch";
import dci from "../../assets/graphics/dci-map.svg";
import batikLow from "../../assets/graphics/batik-gradient.png";
import batikLowLight from "../../assets/graphics/batik-gradient-light.png";
import iconArrowUp from "../../assets/icons/icon-arrow-up-black.svg";

const tabs = [
  {
    id: "financial",
    title: "FINANCIAL\nPERFORMANCE",
    titleActive: "FINANCIAL\nPERFORMANCE",
    titleFlat: "FINANCIAL PERFORMANCE",
    num: "01",
  },
  {
    id: "platform",
    title: "DCI\nPLATFORM",
    titleActive: "DCI PLATFORM",
    titleFlat: "DCI PLATFORM",
    num: "02",
  },
  {
    id: "ecosystem",
    title: "DCI\nECOSYSTEM",
    titleActive: "DCI ECOSYSTEM",
    titleFlat: "DCI ECOSYSTEM",
    num: "03",
  },
  {
    id: "operational",
    title: "OPERATIONAL\nHIGHLIGHT",
    titleActive: "OPERATIONAL\nHIGHLIGHT",
    titleFlat: "OPERATIONAL HIGHLIGHT",
    num: "04",
  },
];

/* ── Content Panels ── */

const FinancialContent = ({ isDark }: { isDark: boolean }) => (
  <div className="h-full flex flex-col justify-center w-full font-quantico">
    <div>
      {[
        { label: "Pendapatan", eng: "Revenue", val: "1306", pct: "25,1%" },
        {
          label: "EBITDA",
          eng: "EBITDA",
          val: "874",
          pct: "25,1%",
          margin: "0,45%",
        },
        {
          label: "Laba Bersih",
          eng: "Net Profit",
          val: "514",
          pct: "25,1%",
          margin: "0,45%",
        },
      ].map((item, idx, arr) => (
        <div
          key={idx}
          className={`border-t border-blue-primary w-full flex flex-col md:flex-row md:items-center justify-between gap-[1vh] px-8 md:px-20 py-[clamp(0.5rem,2vh,2rem)] ${idx === arr.length - 1 ? "border-b" : ""}`}
        >
          {/* Left side: label + badges */}
          <div className="space-y-[clamp(0.5rem,2.5vh,3rem)]">
            <div>
              <p
                className="text-[clamp(1rem,2.2vh,1.5rem)] uppercase"
                style={{ color: isDark ? "#F3EDE3" : "#141C22" }}
              >
                {item.label}
              </p>
              <p className="text-[clamp(0.875rem,1.7vh,1.125rem)] text-blue-primary">
                {item.eng}
              </p>
            </div>
            <div className="flex items-end gap-3">
              {/* Up arrow + percentage */}
              <div className="flex items-center gap-1">
                <img
                  src={iconArrowUp}
                  alt=""
                  className="w-[clamp(1.2rem,2.5vh,1.75rem)] h-[clamp(1.2rem,2.5vh,1.75rem)]"
                />
                <span
                  className="px-5 py-0.5 bg-blue-primary text-dark-blue text-[clamp(0.75rem,1.7vh,1.125rem)] uppercase"
                  style={{
                    clipPath:
                      "polygon(10px 0%, calc(100% - 10px) 0%, 100% 50%, calc(100% - 10px) 100%, 10px 100%, 0% 50%)",
                  }}
                >
                  {item.pct}
                </span>
              </div>
              {/* Margin badge (if exists) */}
              {item.margin && (
                <div className="flex flex-col items-center gap-1">
                  <span
                    className="text-[clamp(0.6rem,1.3vh,0.875rem)] uppercase tracking-widest"
                    style={{ color: isDark ? "#F3EDE3" : "#141C22" }}
                  >
                    Margin
                  </span>
                  <span
                    className="px-5 py-0.5 bg-blue-primary text-dark-blue text-[clamp(0.75rem,1.7vh,1.125rem)] uppercase"
                    style={{
                      clipPath:
                        "polygon(10px 0%, calc(100% - 10px) 0%, 100% 50%, calc(100% - 10px) 100%, 10px 100%, 0% 50%)",
                    }}
                  >
                    {item.margin}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Right side: IDR + number + Miliar */}
          <div className="flex items-center gap-4">
            <span
              className="text-[clamp(1rem,2.5vh,1.875rem)] uppercase self-start pt-1"
              style={{ color: isDark ? "#F3EDE3" : "#141C22" }}
            >
              IDR
            </span>
            <span className="text-[clamp(3rem,15vh,179px)] text-blue-primary leading-none tracking-tighter">
              {item.val}
            </span>
            <div className="text-left self-start pt-1">
              <p
                className="text-[clamp(1rem,2.5vh,1.875rem)] uppercase leading-none"
                style={{ color: isDark ? "#F3EDE3" : "#141C22" }}
              >
                Miliar
              </p>
              <p className="text-[clamp(0.875rem,2vh,1.5rem)] text-blue-primary">
                Billion
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

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
                  opacity: isDark ? 0.5 : 0.3,
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
                    style={{
                      backgroundColor:
                        active === loc.id ? "#22d3ee" : "transparent",
                    }}
                    animate={{
                      backgroundColor:
                        active === loc.id ? "#22d3ee" : "transparent",
                    }}
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
  {
    label: "FINANCIAL INSTITUTIONS",
    val: "100+",
    lineStart: "0%",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  },
  {
    label: "NETWORK SERVICE PROVIDERS",
    val: "70+",
    lineStart: "15%",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
  },
  {
    label: "OTHER ENTERPRISES AND SOE",
    val: "60+",
    lineStart: "30%",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
  {
    label: "GLOBAL CLOUD PROVIDERS",
    val: "6",
    lineStart: "40%",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
  },
  {
    label: "BIGGEST GLOBAL SOCIAL MEDIA AND INDONESIAN E-COMMERCE PLATFORM",
    val: "5",
    lineStart: "48%",
    img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
  },
];

const EcosystemContent = ({ isDark }: { isDark: boolean }) => (
  <div className="h-full relative flex flex-col pl-8 md:pl-[clamp(2.5rem,4.17vw,5rem)] pb-8 md:pb-[clamp(1.5rem,2.22vh,3rem)] w-full font-quantico">
    <div className="flex-1 flex flex-col justify-center w-full relative z-10">
      {ecosystemItems.map((item, idx) => (
        <div key={idx} className="group cursor-default">
          {/* Line with diamonds — starts from right */}
          <div
            className="flex items-center w-full"
            style={{ paddingRight: 0, paddingLeft: item.lineStart }}
          >
            <div className="w-3 h-3 bg-blue-primary rotate-45 shrink-0" />
            <div className="flex-1 h-px bg-blue-primary" />
          </div>
          {/* Label + value row */}
          <div
            className="relative flex items-center justify-between gap-4 py-1 pr-8 md:pr-20 overflow-hidden transition-all duration-500 ease-out group-hover:py-6 group-hover:scale-[1.02] origin-right"
            style={{ paddingLeft: item.lineStart }}
          >
            <div
              className="absolute inset-y-0 right-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 bg-cover bg-center"
              style={{
                backgroundImage: `url(${item.img})`,
                left: item.lineStart,
              }}
            />
            <div
              className="absolute inset-y-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                left: item.lineStart,
                background: isDark
                  ? "linear-gradient(to right, #0c1322cc, #0c132266, #0c1322cc)"
                  : "linear-gradient(to right, #f3ede3cc, #f3ede366, #f3ede3cc)",
              }}
            />
            <p
              className="relative z-10 text-[10px] md:text-sm uppercase group-hover:text-base md:group-hover:text-lg transition-all duration-500 break-words"
              style={{ color: isDark ? "#F3EDE3" : "#141C22" }}
            >
              {item.label}
            </p>
            <span className="relative z-10 text-5xl md:text-[clamp(3rem,8.89vh,6rem)] text-blue-primary leading-none tracking-tighter shrink-0 group-hover:scale-150 transition-transform duration-500 origin-right">
              {item.val}
            </span>
          </div>
        </div>
      ))}
    </div>

    {/* Trusted by section — bottom left */}
    <div className="absolute bottom-8 md:bottom-12 left-8 md:left-20 pointer-events-none">
      <p
        className="text-sm uppercase tracking-[0.3em]"
        style={{ color: isDark ? "#F3EDE3" : "#141C22" }}
      >
        TRUSTED BY
      </p>
      <p className="text-7xl md:text-[clamp(5rem,14.8vh,10rem)] text-blue-primary leading-none tracking-tighter">
        270+
      </p>
      <p
        className="text-2xl md:text-[clamp(1.5rem,2.78vh,1.875rem)] uppercase tracking-widest leading-none"
        style={{ color: isDark ? "#F3EDE3" : "#141C22" }}
      >
        CUSTOMERS
      </p>
    </div>
  </div>
);

const OperationalContent = ({ isDark }: { isDark: boolean }) => (
  <div className="h-full flex flex-col px-8 md:px-20 w-full pb-12 pt-[clamp(1rem,4.5vh,3rem)]">
    <div className="relative mb-12">
      <div className="flex items-center gap-3 mb-2">
        <span className="w-6 h-6 rounded-full border border-cyan-500/50 flex items-center justify-center text-[10px] font-black text-cyan-500">
          01
        </span>
        <span className="text-[10px] font-black text-cyan-500 uppercase tracking-widest">
          Ketersediaan Listrik 100%
        </span>
      </div>
      <p
        className="text-xs italic"
        style={{ color: isDark ? "#9ca3af" : "#6b7280" }}
      >
        Pencapaian terkait ketersediaan listrik 100%
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      <div className="p-8 border border-cyan-500/10 bg-cyan-500/5 backdrop-blur-sm">
        <h4
          className="text-[clamp(0.875rem,1.85vh,1.25rem)] font-black uppercase mb-2 tracking-tight"
          style={{ color: isDark ? "#ffffff" : "#111827" }}
        >
          Reliable Infrastructure
        </h4>
        <p
          className="text-sm leading-relaxed"
          style={{ color: isDark ? "#9ca3af" : "#4b5563" }}
        >
          Maintaining world-class operational excellence and uptime across all
          campuses.
        </p>
      </div>
    </div>
  </div>
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const panels: React.ComponentType<any>[] = [
  FinancialContent,
  PlatformContent,
  EcosystemContent,
  OperationalContent,
];

/* ── Main Layout ── */

export default function CardGrid({ isDark }: { isDark: boolean }) {
  const [activeTab, setActiveTab] = useState<number | null>(null);
  const [platformMarker, setPlatformMarker] = useState<string | null>(null);

  return (
    <div
      className="w-full h-screen overflow-hidden flex m-0 p-0"
      style={{ backgroundColor: isDark ? "#080c14" : "#f0ebe0" }}
      id="highlights"
    >
      {tabs.map((tab, i) => {
        const isActive = activeTab === i;
        const isInactiveSide = activeTab !== null && activeTab !== i;
        const isClosed = activeTab === null;
        const Content = panels[i];

        return (
          <motion.div
            key={tab.id}
            layout // MAGIC: This prevents the "patah-patah" jitter
            onClick={() => setActiveTab(i)}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 35,
              mass: 1,
            }}
            className="relative h-full border-r last:border-r-0 flex-shrink-0 overflow-hidden border-blue-primary border-2"
            style={{
              // Using flex instead of hard width for smoother distribution
              flex: isActive ? 20 : isClosed ? 1 : 0,
              minWidth: isInactiveSide ? "60px" : "0px",
              backgroundColor: isDark
                ? i % 2 === 0
                  ? "#141c22"
                  : "#12294a"
                : i % 2 === 0
                  ? "#f3ede3"
                  : "#ede5cc",
              borderColor: isDark ? "rgba(6,182,212,0.15)" : "#d4cdb8",
              cursor: isActive ? "default" : "pointer",
            }}
          >
            {/* Batik pattern at bottom of each card (visible when closed) */}
            {!isActive && (
              <img
                src={isDark ? batikLow : batikLowLight}
                alt=""
                className="absolute bottom-0 left-0 w-full pointer-events-none"
              />
            )}

            {/* Hexagonal number badge at top center (visible when closed) */}
            {isClosed && (
              <div className="absolute top-[clamp(2rem,5.9vh,4rem)] left-1/2 -translate-x-1/2 z-40 pointer-events-none">
                <svg width="114" height="49" viewBox="0 0 114 49">
                  <polygon
                    points="16,1 98,1 113,24.5 98,48 16,48 1,24.5"
                    fill="none"
                    stroke="#22d3ee"
                    strokeWidth="1"
                  />
                </svg>
                <span
                  className={`absolute inset-0 flex items-center justify-center text-[clamp(1rem,2.2vh,1.5rem)] font-quantico ${isDark ? "text-cream" : "text-dark-blue"}`}
                >
                  {tab.num}
                </span>
              </div>
            )}

            {/* 1. DYNAMIC TITLE - Handles the "Fly and Rotate" */}
            <motion.div
              layout
              initial={false}
              animate={{
                top: isActive ? "8vh" : "50%",
                left: isActive ? "5vw" : "50%",
                x: isActive ? "0%" : "-50%",
                y: isActive ? "0%" : "-50%",
                rotate: isInactiveSide ? -90 : 0,
              }}
              transition={{ type: "spring", stiffness: 200, damping: 30 }}
              className="absolute z-40 pointer-events-none whitespace-nowrap"
            >
              <h3
                className={`font-quantico uppercase transition-colors duration-500
                ${isClosed ? "text-2xl md:text-5xl whitespace-pre-line text-center" : ""}
                ${isActive ? "text-3xl lg:text-[clamp(2.5rem,4.44vh,3rem)] xl:text-[clamp(3rem,6.67vh,4.5rem)] text-left whitespace-pre-line" : ""}
                ${isInactiveSide ? "text-2xl" : ""}
              `}
                style={{ color: isDark ? "#03B5DE" : "#D1AB78" }}
              >
                {isInactiveSide
                  ? tab.titleFlat
                  : isActive
                    ? tab.titleActive
                    : tab.title}
              </h3>
            </motion.div>

            {/* 2. THE CONTENT PANEL */}
            <AnimatePresence mode="wait">
              {isActive && (
                <motion.div
                  key={`content-${tab.id}`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20, transition: { duration: 0.2 } }} // Hides FASTER on close
                  className="absolute inset-0 w-full h-full z-10 overflow-hidden pt-[clamp(7rem,21vh,18rem)]"
                >
                  {Content === PlatformContent ? (
                    <PlatformContent
                      isDark={isDark}
                      activeMarker={platformMarker}
                      onMarkerChange={setPlatformMarker}
                    />
                  ) : (
                    <Content isDark={isDark} />
                  )}

                  {/* CLOSE BUTTON */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveTab(null);
                    }}
                    className="absolute top-[3vh] right-[3vh] md:top-[clamp(3rem,8.89vh,6rem)] md:right-[clamp(3rem,8.89vh,6rem)] w-[clamp(2rem,4.44vh,3rem)] h-[clamp(2rem,4.44vh,3rem)] z-50 group"
                  >
                    <svg
                      viewBox="0 0 100 100"
                      className="text-cyan-500 transition-transform group-hover:rotate-90 duration-500"
                    >
                      <polygon
                        points="50,0 100,50 50,100 0,50"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      />
                      <line
                        x1="35"
                        y1="35"
                        x2="65"
                        y2="65"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <line
                        x1="65"
                        y1="35"
                        x2="35"
                        y2="65"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
