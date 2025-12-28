import "./App.css";
import { AccordionSection } from "./components/Accordion";
// import { EcosystemGrid } from "./components/DCIPlatform";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import Navbar from "./components/Navbar";
import { PerformanceSection } from "./components/Performance";
import { DownloadSection } from "./components/Report";
import { LocationSection } from "./components/RoadMap";
import VideoSection from "./components/Video";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <VideoSection />
      {/* <EcosystemGrid/> */}
      <PerformanceSection />
      <AccordionSection />
      <LocationSection />
      <DownloadSection />
      <Footer />
    </>
  );
}

export default App;
