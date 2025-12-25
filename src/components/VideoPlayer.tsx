import { useRef, useEffect, useState } from "react";

interface VideoPlayerProps {
  src: string;
  onVideoChange?: () => void;
}

const VideoPlayer = ({ src, onVideoChange }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoading, setIsLoading] = useState(true);

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

  return (
    <div className="video-container animate-scale-in">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted z-10">
          <div className="flex flex-col items-center gap-3">
            <div className="w-10 h-10 border-3 border-accent border-t-transparent rounded-full animate-spin" />
            <span className="text-muted-foreground text-sm">Loading video...</span>
          </div>
        </div>
      )}
      <video
        ref={videoRef}
        className="w-full aspect-video object-cover"
        autoPlay
        loop
        muted
        playsInline
        onCanPlay={handleCanPlay}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Decorative frame */}
      <div className="absolute inset-0 pointer-events-none border-4 border-accent/20 rounded-2xl" />
    </div>
  );
};

export default VideoPlayer;
