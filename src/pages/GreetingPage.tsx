import { useNavigate } from "react-router-dom";
import { ArrowLeft, Sparkles } from "lucide-react";
import Snowfall from "@/components/Snowfall";

const GreetingPage = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 relative overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 -z-20"
        style={{ background: "var(--gradient-snow)" }}
      />
      
      {/* Snowfall effect */}
      <Snowfall />

      {/* Greeting Card */}
      <div className="greeting-card max-w-2xl w-full text-center z-20">
        {/* Top decoration */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-6xl animate-float">
          🎄
        </div>

        {/* Card content */}
        <div className="pt-8 pb-4">
          {/* Stars decoration */}
          <div className="flex justify-center gap-2 mb-6 text-accent">
            <Sparkles className="w-5 h-5 animate-twinkle" />
            <Sparkles className="w-6 h-6 animate-twinkle" style={{ animationDelay: "0.3s" }} />
            <Sparkles className="w-5 h-5 animate-twinkle" style={{ animationDelay: "0.6s" }} />
          </div>

          {/* Main greeting */}
          <h1 
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 text-shadow-glow animate-fade-up"
          >
            Merry Christmas
          </h1>
          
          {/* Emoji decoration */}
          <div className="text-3xl md:text-4xl mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            🎄 ✨ 🎅 ✨ 🎄
          </div>

          {/* Sub message */}
          <p 
            className="font-body text-lg md:text-xl text-muted-foreground mb-8 animate-fade-up max-w-md mx-auto"
            style={{ animationDelay: "0.4s" }}
          >
            Wishing you endless joy, warmth, and love this holiday season and throughout the new year!
          </p>

          {/* Decorative line */}
          <div 
            className="w-24 h-1 mx-auto rounded-full mb-8 animate-fade-up"
            style={{ 
              background: "var(--gradient-gold)",
              animationDelay: "0.5s" 
            }}
          />

          {/* Additional message */}
          <p 
            className="font-display text-xl md:text-2xl text-accent italic mb-8 animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            "May your days be merry and bright"
          </p>

          {/* Bottom emojis */}
          <div className="flex justify-center gap-3 text-2xl mb-6 animate-fade-up" style={{ animationDelay: "0.7s" }}>
            <span className="animate-float">🎁</span>
            <span className="animate-float" style={{ animationDelay: "0.5s" }}>❄️</span>
            <span className="animate-float" style={{ animationDelay: "1s" }}>🦌</span>
            <span className="animate-float" style={{ animationDelay: "1.5s" }}>🔔</span>
            <span className="animate-float" style={{ animationDelay: "2s" }}>🎁</span>
          </div>
        </div>

        {/* Card border glow */}
        <div className="absolute inset-0 rounded-3xl pointer-events-none" 
          style={{
            boxShadow: "inset 0 0 60px hsl(var(--accent) / 0.1)"
          }}
        />
      </div>

      {/* Back button */}
      <button
        onClick={() => navigate("/")}
        className="btn-secondary-christmas flex items-center gap-2 mt-8 z-20 group animate-fade-up"
        style={{ animationDelay: "0.8s" }}
      >
        <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
        <span>Back to Videos</span>
      </button>

      {/* Corner decorations */}
      <div className="absolute bottom-6 right-6 text-5xl opacity-30 animate-float z-0">🎅</div>
      <div className="absolute top-6 left-6 text-4xl opacity-30 animate-float z-0" style={{ animationDelay: "1.5s" }}>⛄</div>
    </main>
  );
};

export default GreetingPage;
