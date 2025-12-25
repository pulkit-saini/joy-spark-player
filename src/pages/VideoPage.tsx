import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Volume2, ArrowRight, PlayCircle } from "lucide-react";
import VideoPlayer from "@/components/VideoPlayer";

const videos = ["/videos/video-1.mp4", "/videos/video-2.mp4"];

const VideoPage = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const navigate = useNavigate();

  const handleNextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
  };

  const handleNextPage = () => {
    navigate("/greeting");
  };

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Full-screen Video Player */}
      <VideoPlayer 
        src={videos[currentVideoIndex]} 
        key={currentVideoIndex}
      />

      {/* Overlay content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-between p-4 md:p-8 pointer-events-none">
        {/* Volume notice at top */}
        <div className="volume-notice animate-fade-up pointer-events-auto" style={{ animationDelay: "0.2s" }}>
          <Volume2 className="w-4 h-4 text-accent" />
          <span>Tap the speaker icon to unmute!</span>
        </div>

        {/* Bottom controls */}
        <div className="flex flex-col items-center gap-4 pointer-events-auto">
          {/* Video indicator */}
          <div className="flex gap-2 mb-2">
            {videos.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentVideoIndex 
                    ? "bg-accent w-6" 
                    : "bg-foreground/30"
                }`}
              />
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <button
              onClick={handleNextPage}
              className="btn-primary-christmas flex items-center gap-2 group"
            >
              <span>Next Page</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            
            <button
              onClick={handleNextVideo}
              className="btn-gold flex items-center gap-2 group"
            >
              <span>Next Video</span>
              <PlayCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
            </button>
          </div>

          {/* Spacer for bottom margin */}
          <div className="h-16" />
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-24 left-4 text-4xl opacity-30 animate-float z-0 pointer-events-none">🎄</div>
      <div className="absolute top-20 right-10 text-3xl opacity-30 animate-float z-0 pointer-events-none" style={{ animationDelay: "1s" }}>⭐</div>
    </main>
  );
};

export default VideoPage;
