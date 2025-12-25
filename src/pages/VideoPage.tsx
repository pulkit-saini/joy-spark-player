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
    <main className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 relative overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-festive)" }}
      />
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--accent)) 1px, transparent 1px)`,
          backgroundSize: "40px 40px"
        }} />
      </div>

      {/* Volume notice */}
      <div className="volume-notice mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
        <Volume2 className="w-4 h-4 text-accent" />
        <span>Please turn on your volume for the best experience!</span>
      </div>

      {/* Video Player */}
      <div className="w-full max-w-4xl mb-8">
        <VideoPlayer 
          src={videos[currentVideoIndex]} 
          key={currentVideoIndex}
        />
      </div>

      {/* Video indicator */}
      <div className="flex gap-2 mb-6">
        {videos.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentVideoIndex 
                ? "bg-accent w-6" 
                : "bg-muted-foreground/30"
            }`}
          />
        ))}
      </div>

      {/* Action buttons */}
      <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
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

      {/* Decorative elements */}
      <div className="absolute bottom-4 left-4 text-4xl opacity-20 animate-float">🎄</div>
      <div className="absolute top-10 right-10 text-3xl opacity-20 animate-float" style={{ animationDelay: "1s" }}>⭐</div>
      <div className="absolute top-1/4 left-8 text-2xl opacity-15 animate-float" style={{ animationDelay: "2s" }}>❄️</div>
    </main>
  );
};

export default VideoPage;
