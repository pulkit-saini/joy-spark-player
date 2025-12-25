import { useRef, useEffect, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

interface VideoPlayerProps {
  src: string;
  onVideoChange?: () => void;
}

const VideoPlayer = ({ src, onVideoChange }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(console.error);
    }
  }, [src]);

  const handleCanPlay = () => {
    setIsLoading(false);
    onVideoChange?.();
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed inset-0 w-full h-full">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-background z-10">
          <div className="flex flex-col items-center gap-3">
            <div className="w-10 h-10 border-3 border-accent border-t-transparent rounded-full animate-spin" />
            <span className="text-muted-foreground text-sm">Loading video...</span>
          </div>
        </div>
      )}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted={isMuted}
        playsInline
        onCanPlay={handleCanPlay}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Mute/Unmute button */}
      <button
        onClick={toggleMute}
        className="absolute bottom-6 right-6 z-20 p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 text-foreground hover:bg-background transition-all duration-300 hover:scale-110"
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? (
          <VolumeX className="w-6 h-6" />
        ) : (
          <Volume2 className="w-6 h-6 text-accent" />
        )}
      </button>
    </div>
  );
};

export default VideoPlayer;
