import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import "./App.css";
import CardGrid from "./components/CardGrid";
// import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import Navbar from "./components/Navbar";
import { PresidentMessage } from "./components/PresidentMessage";
import { DownloadSection } from "./components/Report";
import VideoSection from "./components/Video";
// import IndonesiaMap from "./components/Maps";
// import DCIDashboard from "./components/Maps";
import dciImageOne from "./assets/graphics/dci-1-opt.jpg";
import dciImageTwo from "./assets/graphics/dci-2-opt.jpg";
// import heroGraphic from "./assets/graphics/hero.png";
// import heroGraphicLight from "./assets/graphics/hero-light.png";
// import { MapSection } from "./components/Maps";

function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.086,
      smoothWheel: true,
      touchMultiplier: 2,
      wheelMultiplier: 1,
      prevent: (node) => {
        return node.hasAttribute?.("data-lenis-prevent");
      },
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  const dciOneRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: dciOneScrollProgress } = useScroll({
    target: dciOneRef,
    offset: ["start end", "end start"],
  });
  const dciOneScale = useSpring(
    useTransform(dciOneScrollProgress, [0, 0.5], [0.8, 1.1]),
    { stiffness: 200, damping: 50, mass: 1 },
  );

  const dciTwoRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: dciTwoScrollProgress } = useScroll({
    target: dciTwoRef,
    offset: ["start end", "end start"],
  });
  const dciTwoScale = useSpring(
    useTransform(dciTwoScrollProgress, [0, 0.5], [0.8, 1.1]),
    { stiffness: 200, damping: 50, mass: 1 },
  );

  const toggleDark = () => setIsDark((prev) => !prev);

  return (
    <div
      style={{
        backgroundColor: isDark ? "#141C22" : "#F3EDE3",
        color: isDark ? "#F3EDE3" : "##141C22",
        transition: "background-color 0.5s, color 0.5s",
      }}
    >
      <div className="relative">
        {/* Batik graphic spanning hero + video */}
        {/* <img
          src={isDark ? heroGraphic : heroGraphicLight}
          alt=""
          className="absolute px-[clamp(1.5rem,2.08vw,2.5rem)] w-full pointer-events-none z-10 top-[8%]"
        /> */}

        <div className="h-screen flex flex-col relative z-20">
          <Navbar isDark={isDark} onToggle={toggleDark} />
          <Hero isDark={isDark} />
        </div>
        {/* <DCIDashboard /> */}
        <VideoSection isDark={isDark} />
      </div>
      <main>
        {/* <MapSection isDark={isDark} /> */}
        <PresidentMessage isDark={isDark} />
        <div
          ref={dciOneRef}
          className="overflow-hidden px-0 min-[1600px]:px-73.25 lg:pt-63.25 "
        >
          <motion.img
            src={dciImageOne}
            className="w-full h-auto max-h-screen will-change-transform"
            style={{ scale: dciOneScale }}
            alt="DCI Location 1"
            loading="lazy"
          />
        </div>
        <CardGrid isDark={isDark} />
        <div
          ref={dciTwoRef}
          className="overflow-hidden px-0 min-[1600px]:px-73.25"
        >
          <motion.img
            src={dciImageTwo}
            className="w-full h-auto will-change-transform"
            style={{ scale: dciTwoScale }}
            alt="DCI Location 2"
            loading="lazy"
          />
        </div>
        <DownloadSection isDark={isDark} />
      </main>
      {/* <Footer isDark={isDark} /> */}
    </div>
  );
}

export default App;
