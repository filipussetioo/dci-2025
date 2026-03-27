import { useState, useRef, useCallback } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import type { ReactZoomPanPinchContentRef } from "react-zoom-pan-pinch";
import dci from "../../assets/graphics/dci-map.svg";

const LOCATIONS = [
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

export const MapSection = ({ isDark }: { isDark: boolean }) => {
  const shouldReduceMotion = useReducedMotion();
  const [active, setActive] = useState<string | null>(null);
  const current = LOCATIONS.find((l) => l.id === active);
  const transformRef = useRef<ReactZoomPanPinchContentRef>(null);
  const wrapperDivRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const zoomTo = useCallback((locId: string) => {
    setActive(locId);
    const loc = LOCATIONS.find((l) => l.id === locId);
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
  }, []);

  const resetView = useCallback(() => {
    setActive(null);
    transformRef.current?.resetTransform(300);
  }, []);

  const handleMarkerClick = (locId: string) => {
    if (active === locId) {
      resetView();
    } else {
      zoomTo(locId);
    }
  };

  return (
    <div
      className="flex h-screen overflow-hidden"
      style={{ backgroundColor: isDark ? "#141C22" : "#f3ede3" }}
    >
      {/* Left Panel — Info matching PlatformContent panels */}
      <div
        className="w-1/2 relative flex flex-col justify-center px-[clamp(2rem,4.17vw,5rem)] py-[clamp(2rem,5.2vh,3.5rem)]"
        style={{
          borderRight: `1px solid ${isDark ? "rgba(6,182,212,0.15)" : "#d4cdb8"}`,
        }}
      >
        {/* Title — matches CardGrid title style */}
        <h2
          className="font-quantico text-[clamp(2rem,4.44vh,3rem)] uppercase leading-[1.1] tracking-tight mb-[clamp(2rem,5.2vh,3.5rem)]"
          style={{ color: isDark ? "#03B5DE" : "#D1AB78" }}
        >
          DCI
          <br />
          PLATFORM
        </h2>

        {/* Info panel — matches PlatformContent info panel exactly */}
        <AnimatePresence mode="wait">
          {active && current ? (
            <motion.div
              key={current.id}
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -20 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="w-[320px]"
            >
              {/* Title badge — same as PlatformContent */}
              <div
                className="bg-cyan-400 text-black px-6 py-2 text-[11px] font-black italic uppercase"
                style={{
                  clipPath: "polygon(0 0, 92% 0, 100% 50%, 92% 100%, 0 100%)",
                }}
              >
                {current.title}
              </div>

              {/* Description — same as PlatformContent */}
              <p className="mt-4 text-[11px] text-gray-400 leading-relaxed italic">
                {current.description}
              </p>

              {/* Next button — same as PlatformContent */}
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

        {/* Reset button */}
        {/* <AnimatePresence>
          {active && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={resetView}
              className="mt-6 text-cyan-400 text-[10px] border border-cyan-400/30 px-3 py-1 rounded-full uppercase cursor-pointer w-fit"
            >
              ✕ Reset View
            </motion.button>
          )}
        </AnimatePresence> */}
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

              {LOCATIONS.map((loc) => (
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
                  {/* Diamond marker — matches PlatformContent */}
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
