import { useEffect, useRef, useState } from "react";
import music from "../../assets/music.mp3";
declare module "*.mp3";

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const tryAutoPlay = () => {
      const audio = audioRef.current;
      if (!audio) return;

      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // diblok browser, aman diabaikan
        });

      window.removeEventListener("click", tryAutoPlay);
      window.removeEventListener("touchstart", tryAutoPlay);
    };

    window.addEventListener("click", tryAutoPlay);
    window.addEventListener("touchstart", tryAutoPlay);

    return () => {
      window.removeEventListener("click", tryAutoPlay);
      window.removeEventListener("touchstart", tryAutoPlay);
    };
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
      {/* AUDIO */}
      <audio ref={audioRef} src={music} loop preload="auto" />

      {/* 🎧 BUTTON FLOATING */}
      <button
        onClick={toggleMusic}
        className="
          fixed bottom-6 right-6
          z-50
          w-12 h-12
          rounded-full
          flex items-center justify-center
          bg-black/40 backdrop-blur-md
          text-white
          shadow-lg
          transition-all duration-300
          hover:scale-110
        "
      >
        {/* ICON */}
        <span className={isPlaying ? "animate-pulse" : ""}>
          {isPlaying ? "🔊" : "🔈"}
        </span>
      </button>
    </>
  );
}