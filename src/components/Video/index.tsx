import {
  Pause,
  Play,
  Volume2,
  VolumeX,
  Maximize,
  RotateCcw,
} from "lucide-react";
import { useRef, useState } from "react";

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  // 1. Fixed the 'null' type error by specifying the element type
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const togglePlay = () => {
    // 2. Add the null check here to satisfy TypeScript
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
    e.stopPropagation(); // Prevents triggering the play/pause on the container
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
    <section className="py-12 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-sm font-bold tracking-[0.3em] text-blue-600 uppercase">
            Corporate Vision
          </h2>
          <div className="h-[1px] flex-grow bg-gray-200"></div>
        </div>

        {/* Container Ref added here for Fullscreen support */}
        <div
          ref={containerRef}
          className="relative group aspect-video w-full bg-black shadow-2xl overflow-hidden rounded-sm"
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

          {!isPlaying && progress === 0 && (
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-6 pointer-events-none">
              <h3 className="text-white text-3xl md:text-5xl font-light tracking-tight mb-4">
                2024 <span className="font-semibold">Strategic Outlook</span>
              </h3>
            </div>
          )}

          {/* CUSTOM CONTROLS OVERLAY */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={togglePlay}
                  className="text-white hover:text-blue-400"
                >
                  {isPlaying ? (
                    <Pause size={24} fill="currentColor" />
                  ) : (
                    <Play size={24} fill="currentColor" />
                  )}
                </button>

                <button
                  onClick={toggleMute}
                  className="text-white hover:text-blue-400"
                >
                  {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
                </button>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={(e) => skip(e, -10)}
                  className="text-white hover:text-blue-400 flex flex-col items-center"
                >
                  <RotateCcw size={18} />
                  <span className="text-[8px] font-bold">-10s</span>
                </button>
                <button
                  onClick={toggleFullscreen}
                  className="text-white hover:text-blue-400"
                >
                  <Maximize size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-30">
            <div
              className="h-full bg-blue-600 transition-all duration-100"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
