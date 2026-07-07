import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

declare module "*.png";

// 🟢 IMAGE JPEG ASSETS


// 📛 Ambil nama tamu dari URL, contoh: https://domainmu.vercel.app/?to=Budi+Santoso
function useGuestName() {
  const [guestName, setGuestName] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const raw =
      params.get("to") || params.get("nama") || params.get("name") || "";
    if (raw) {
      setGuestName(decodeURIComponent(raw.replace(/\+/g, " ")));
    }
  }, []);

  return guestName;
}

export function HeroSection({ onOpen }: { onOpen: () => void }) {
  const [flicker, setFlicker] = useState(false);
  const [closing, setClosing] = useState(false);
  const guestName = useGuestName();

  useEffect(() => {
    const t = setTimeout(() => setFlicker(true), 2200);
    return () => clearTimeout(t);
  }, []);

  // 🎬 Animasi "membuka" saat tombol ditekan, baru setelah itu pindah section
  const handleOpen = () => {
    if (closing) return;
    setClosing(true);
    setTimeout(() => {
      onOpen();
    }, 900);
  };

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #F0E9D8 0%, #E8DCC8 40%, #DDD0BA 100%)",
      }}
    >
   

      {/* 🎞️ Film grain */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.06'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          opacity: 0.4,
        }}
      />
      {/* 🚪 Animasi "pintu terbuka" saat undangan dibuka */}
      {closing && (
        <>
          <motion.div
            className="absolute inset-y-0 left-0 w-1/2 pointer-events-none z-30"
            style={{ background: "#F0E9D8" }}
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          />
          <motion.div
            className="absolute inset-y-0 right-0 w-1/2 pointer-events-none z-30"
            style={{ background: "#F0E9D8" }}
            initial={{ x: 0 }}
            animate={{ x: "100%" }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          />
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none z-40"
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 0, scale: 1.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Heart size={64} fill="#9C8B6E" stroke="#9C8B6E" />
          </motion.div>
        </>
      )}

      {/* 💍 MAIN CONTENT */}
      <div className="relative z-20 flex flex-col items-center text-center px-4 sm:px-6 max-w-2xl w-full">
        <motion.p
          className="text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.35em] uppercase mb-6 sm:mb-8 opacity-60"
          style={{ fontFamily: "'Lato', sans-serif", color: "#7A6152" }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.6, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Undangan Pernikahan
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <motion.h1
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 200 }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.4rem, 12vw, 7rem)",
              color: "#2C2318",
              fontWeight: 400,
            }}
          >
            ALDA
          </motion.h1>

          <p
            style={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: "clamp(1.3rem, 5vw, 2rem)",
              color: "#9C8B6E",
            }}
          >
            &
          </p>

          <motion.h1
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 200 }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.4rem, 12vw, 7rem)",
              color: "#2C2318",
              fontWeight: 400,
            }}
          >
            BARA
          </motion.h1>
        </motion.div>

        <motion.div
          className="w-16 sm:w-24 h-px my-6 sm:my-8"
          style={{
            background:
              "linear-gradient(90deg, transparent, #9C8B6E, transparent)",
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.2 }}
        />

        <motion.p
          className="text-sm sm:text-base px-2"
          style={{
            fontFamily: "'EB Garamond', serif",
            fontStyle: "italic",
            color: "#5C3D2E",
            lineHeight: 1.9,
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
        >
          "Two imperfect people who chose to stay,
          <br />
          and to grow together — forever."
        </motion.p>

        <motion.p
          className="mt-4 text-xs sm:text-sm uppercase tracking-widest"
          style={{ color: "#7A6152" }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
        >
          11 Juli · 2026
        </motion.p>

        {/* 💌 Kolom "Kepada Yth" — terpisah dari kolom nama tamu */}
        <motion.div
          className="mt-8 sm:mt-10 flex flex-col items-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7 }}
        >
          <p
            className="text-[11px] sm:text-xs uppercase tracking-widest mb-1"
            style={{ fontFamily: "'Lato', sans-serif", color: "#7A6152" }}
          >
            Kepada Yth. Bapak/Ibu/Saudara/i
          </p>

          {/* 🖊️ Kolom nama tamu (terpisah, ambil dari link ?to=NamaTamu) */}
          <p
            className="text-lg sm:text-2xl px-4 py-1"
            style={{
              fontFamily: "'Dancing Script', cursive",
              color: "#2C2318",
              borderBottom: "1px solid #9C8B6E",
              minWidth: "180px",
            }}
          >
            {guestName || "Tamu Undangan"}
          </p>
        </motion.div>

        <motion.button
          onClick={handleOpen}
          disabled={closing}
          className="mt-10 sm:mt-12 px-8 sm:px-10 py-3 sm:py-4 border text-sm sm:text-base"
          style={{
            borderColor: "#9C8B6E",
            color: "#5C3D2E",
            fontFamily: "'EB Garamond', serif",
            letterSpacing: "0.15em",
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
          whileHover={{ scale: 1.05, borderColor: "#5C3D2E" }}
          whileTap={{ scale: 0.97 }}
        >
          Buka Undangan
        </motion.button>
      </div>
    </section>
  );
}