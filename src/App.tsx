import { useState } from "react";
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
import dciImageOne from "./assets/graphics/dci-1.png";
import dciImageTwo from "./assets/graphics/dci-2.png";
import heroGraphic from "./assets/graphics/hero.png";
import heroGraphicLight from "./assets/graphics/hero-light.png";
import { MapSection } from "./components/Maps";

function App() {
  const [isDark, setIsDark] = useState(true);

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
        <img
          src={isDark ? heroGraphic : heroGraphicLight}
          alt=""
          className="absolute px-[clamp(1.5rem,2.08vw,2.5rem)] w-full pointer-events-none z-10 top-[8%]"
        />

        <div className="h-screen flex flex-col relative z-20">
          <Navbar isDark={isDark} onToggle={toggleDark} />
          <Hero isDark={isDark} />
        </div>
        {/* <DCIDashboard /> */}
        <VideoSection isDark={isDark} />
      </div>
      <MapSection isDark={isDark} />
      <PresidentMessage isDark={isDark} />
      <img src={dciImageOne} className="w-full h-auto" />
      <CardGrid isDark={isDark} />
      <img src={dciImageTwo} className="w-full h-auto" />
      <DownloadSection isDark={isDark} />
      {/* <Footer isDark={isDark} /> */}
    </div>
  );
}

export default App;
