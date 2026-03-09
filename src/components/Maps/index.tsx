// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import dci from "../../assets/graphics/dci-map.svg";

// const LOCATIONS = [
//   {
//     id: "bintan",
//     title: "FUTURE PLAN - BINTAN",
//     description:
//       "The company will continue to develop the DCI Platform by constructing data centers in multiple locations, such as Bintan.",
//     origin: "45% 28%",
//     scale: 1.4,
//     marker: { x: "45%", y: "28%" },
//     line: { vertical: 80, left: 180, direction: "down" as const },
//     panel: { top: 38, left: 8 },
//     next: "jakarta",
//   },
//   {
//     id: "jakarta",
//     title: "JAKARTA",
//     description:
//       "Serving as the primary hub for the DCI Platform, our Jakarta campus provides Tier IV infrastructure.",
//     origin: "50% 55%",
//     scale: 1.4,
//     marker: { x: "57%", y: "76%" },
//     line: { vertical: 228, left: 350, direction: "up" as const },
//     panel: { top: 48, left: 8 },
//     next: "bintan",
//   },
// ];

// export default function DCILayout() {
//   const [active, setActive] = useState(null);
//   const current = LOCATIONS.find((l) => l.id === active);

//   return (
//     <div className="relative h-screen w-full bg-[#05080d] text-white overflow-hidden">
//       {/* THE ZOOMABLE LAYER */}
//       <motion.div
//         animate={{
//           scale: active ? current.scale : 1,
//           transformOrigin: active ? current.origin : "center center",
//         }}
//         transition={{ type: "spring", stiffness: 45, damping: 20 }}
//         className="absolute inset-0 flex items-center justify-center"
//       >
//         {/* Map wrapper: locked aspect ratio so markers always align with the SVG */}
//         <div
//           className="relative max-w-full max-h-full"
//           style={{ aspectRatio: `${1612} / ${1080}`, width: "100%" }}
//         >
//           <img
//             src={dci}
//             className="absolute inset-0 w-full h-full opacity-50"
//             alt="Map"
//           />

//           {/* Markers + L-lines positioned as % of the map container */}
//           {LOCATIONS.map((loc) => (
//             <div
//               key={loc.id}
//               style={{ left: loc.marker.x, top: loc.marker.y }}
//               className="absolute"
//             >
//               {/* Diamond marker */}
//               <motion.div
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   setActive(loc.id);
//                 }}
//                 className="absolute -translate-x-1/2 -translate-y-1/2 w-2 h-2 md:w-4 md:h-4 pointer-events-auto cursor-pointer rotate-45 border border-cyan-400/50 bg-[#05080d] z-10"
//                 animate={{
//                   backgroundColor:
//                     active === loc.id ? "#22d3ee" : "transparent",
//                 }}
//               />

//               {/* L-line — hidden on mobile */}
//               <AnimatePresence>
//                 {active === loc.id && (
//                   <motion.div
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     className="absolute top-0 left-0 pointer-events-none hidden md:block"
//                   >
//                     {loc.line.vertical > 0 && (
//                       <div
//                         className="absolute left-0 w-[1px] bg-cyan-400"
//                         style={{
//                           height: loc.line.vertical,
//                           top:
//                             loc.line.direction === "up"
//                               ? -loc.line.vertical
//                               : 0,
//                         }}
//                       />
//                     )}
//                     <div
//                       className="absolute h-[1px] bg-cyan-400"
//                       style={{
//                         top:
//                           loc.line.direction === "up"
//                             ? -loc.line.vertical
//                             : loc.line.direction === "down"
//                               ? loc.line.vertical
//                               : 0,
//                         left: -loc.line.left,
//                         width: loc.line.left,
//                       }}
//                     />
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           ))}
//         </div>
//       </motion.div>

//       {/* TITLE OVERLAY */}
//       <div className="absolute top-4 left-5 md:top-8 md:left-10 z-40">
//         <h1 className="text-2xl md:text-4xl font-black italic tracking-tighter uppercase leading-[0.85]">
//           DCI
//           <br />
//           PLATFORM
//         </h1>
//       </div>

//       {/* CLOSE BUTTON — top right */}
//       <AnimatePresence>
//         {active && (
//           <motion.button
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setActive(null)}
//             className="absolute top-4 right-5 md:top-8 md:right-10 z-50 text-cyan-400 text-[10px] border border-cyan-400/30 px-3 py-1 rounded-full uppercase"
//           >
//             ✕ Reset View
//           </motion.button>
//         )}
//       </AnimatePresence>

//       {/* INFO PANEL — desktop: absolute positioned, mobile: bottom sheet */}
//       <AnimatePresence>
//         {active && current && (
//           <>
//             {/* Desktop panel */}
//             <motion.div
//               key={`desktop-${current.id}`}
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0 }}
//               className="hidden md:block absolute z-30 pointer-events-auto w-[320px]"
//               style={{
//                 top: `${current.panel.top}%`,
//                 left: `${current.panel.left}%`,
//               }}
//             >
//               <div
//                 className="bg-cyan-400 text-black px-6 py-2 text-[11px] font-black italic uppercase"
//                 style={{
//                   clipPath: "polygon(0 0, 92% 0, 100% 50%, 92% 100%, 0 100%)",
//                 }}
//               >
//                 {current.title}
//               </div>
//               <p className="mt-4 text-[11px] text-gray-400 leading-relaxed italic">
//                 {current.description}
//               </p>
//               <button
//                 onClick={() => setActive(current.next)}
//                 className="mt-6 bg-cyan-400 text-black px-5 py-2 rounded-full text-[10px] font-black uppercase"
//               >
//                 VIEW {current.next.toUpperCase()} ›
//               </button>
//             </motion.div>

//             {/* Mobile bottom sheet */}
//             <motion.div
//               key={`mobile-${current.id}`}
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: 40 }}
//               className="md:hidden absolute bottom-0 left-0 right-0 z-30 pointer-events-auto bg-[#05080d]/90 backdrop-blur-sm border-t border-white/10 px-5 py-5"
//             >
//               <div
//                 className="bg-cyan-400 text-black px-4 py-1.5 text-[11px] font-black italic uppercase w-fit"
//                 style={{
//                   clipPath: "polygon(0 0, 92% 0, 100% 50%, 92% 100%, 0 100%)",
//                 }}
//               >
//                 {current.title}
//               </div>
//               <p className="mt-3 text-[11px] text-gray-400 leading-relaxed italic">
//                 {current.description}
//               </p>
//               <button
//                 onClick={() => setActive(current.next)}
//                 className="mt-4 bg-cyan-400 text-black px-5 py-2 rounded-full text-[10px] font-black uppercase"
//               >
//                 VIEW {current.next.toUpperCase()} ›
//               </button>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }
