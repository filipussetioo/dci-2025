import {
  Pause,
  Play,
  Volume2,
  VolumeX,
  Maximize,
  RotateCcw,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import iconPlay from "../../assets/icons/icon-play.svg";
import batikLow from "../../assets/graphics/batik-low.png";
import batikLowLight from "../../assets/graphics/batik-low-light.png";

export default function VideoSection({ isDark }: { isDark: boolean }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  const [isExpanded, setIsExpanded] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Expand when 20px of the section is visible from the bottom
      if (rect.top < windowHeight - 20) {
        setIsExpanded(true);
      }

      // Collapse only when section is fully below viewport (scrolled back up)
      if (rect.top >= windowHeight) {
        setIsExpanded(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const toggleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (containerRef.current) {
      if (!document.fullscreenElement) {
        containerRef.current.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const currentProgress =
        (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(currentProgress);
    }
  };

  const skip = (e: React.MouseEvent, seconds: number) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.currentTime += seconds;
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative px-6 md:px-12 h-screen flex items-center overflow-hidden"
    >
      {/* Batik pattern at bottom */}
      <div className="absolute bottom-0 left-0 w-[208%] pointer-events-none">
        <img
          src={isDark ? batikLow : batikLowLight}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 md:max-w-300 max-w-350 mx-auto">
        <div
          ref={containerRef}
          className="relative group aspect-video w-full shadow-lg overflow-hidden"
          style={{
            backgroundColor: isDark ? "#0d1424" : "#e8e4d8",
            clipPath: isExpanded ? "inset(0 0% 0 0%)" : "inset(0 50% 0 50%)",
            transition:
              "background-color 0.5s, clip-path 1s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          <video
            ref={videoRef}
            className="w-full h-full object-cover cursor-pointer"
            src="https://ik.imagekit.io/rzu2i5t1r/DCI/video_v2.mp4?updatedAt=1745295449182"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onTimeUpdate={handleTimeUpdate}
            loop
            muted={isMuted}
            playsInline
            onClick={togglePlay}
          />

          {/* Diamond play button centered */}
          {!isPlaying && progress === 0 && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <img src={iconPlay} className="w-10 md:w-16"></img>
            </div>
          )}

          {/* CUSTOM CONTROLS OVERLAY */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={togglePlay}
                  className="text-white hover:text-[#3bb8c4]"
                >
                  {isPlaying ? (
                    <Pause size={24} fill="currentColor" />
                  ) : (
                    <Play size={24} fill="currentColor" />
                  )}
                </button>

                <button
                  onClick={toggleMute}
                  className="text-white hover:text-[#3bb8c4]"
                >
                  {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
                </button>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={(e) => skip(e, -10)}
                  className="text-white hover:text-[#3bb8c4] flex flex-col items-center"
                >
                  <RotateCcw size={18} />
                  <span className="text-[8px] font-bold">-10s</span>
                </button>
                <button
                  onClick={toggleFullscreen}
                  className="text-white hover:text-[#3bb8c4]"
                >
                  <Maximize size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-30">
            <div
              className="h-full bg-[#3bb8c4] transition-all duration-100"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
