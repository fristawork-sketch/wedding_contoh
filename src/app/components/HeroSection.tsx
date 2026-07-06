import { motion } from "motion/react";
import { useEffect, useState } from "react";

declare module "*.png";

// 🟢 IMAGE JPEG ASSETS
import kiri from "../../assets/kiri.png";
import kanan from "../../assets/kanan.png";

export function HeroSection({ onOpen }: { onOpen: () => void }) {
  const [flicker, setFlicker] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setFlicker(true), 2200);
    return () => clearTimeout(t);
  }, []);

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

      {/* LEFT — kini tampil & menyesuaikan di semua ukuran layar */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 0.9, x: 0 }}
        whileHover={{ opacity: 1, scale: 1.03 }}
        transition={{ delay: 0.6, duration: 1.2 }}
        className="
          flex
          absolute
          left-0
          bottom-0
          items-end
          h-[38vh] sm:h-[55vh] md:h-[80vh] lg:h-[100vh]
          w-[26vw] sm:w-[24vw] md:w-[26vw] lg:w-[30vw]
          z-10
          pointer-events-none
        "
      >
        <img
          src={kiri}
          alt="foto kiri"
          className="h-full w-auto max-w-full object-contain"
        />
      </motion.div>

      {/* RIGHT — kini tampil & menyesuaikan di semua ukuran layar */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 0.9, x: 0 }}
        whileHover={{ opacity: 1, scale: 1.03 }}
        transition={{ delay: 0.6, duration: 1.2 }}
        className="
          flex
          absolute
          right-0
          bottom-0
          items-end
          justify-end
          h-[38vh] sm:h-[55vh] md:h-[80vh] lg:h-[100vh]
          w-[26vw] sm:w-[24vw] md:w-[26vw] lg:w-[30vw]
          z-10
          pointer-events-none
        "
      >
        <img
          src={kanan}
          alt="foto kanan"
          className="h-full w-auto max-w-full object-contain"
        />
      </motion.div>

      {/* 🎞️ Film strip atas */}
      <div className="absolute top-0 left-0 right-0 h-6 sm:h-8 flex gap-0 opacity-20">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="h-full flex-1 border-r border-foreground/30 flex flex-col justify-between py-1"
          >
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-foreground/40 mx-auto rounded-sm" />
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-foreground/40 mx-auto rounded-sm" />
          </div>
        ))}
      </div>

      {/* ✉️ Envelope overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 1.5, duration: 1.2 }}
      >
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon points="0,0 100,0 50,55" fill="#C8B89A" opacity="0.35" />
        </svg>
      </motion.div>

      {/* ⚡ Flash effect */}
      {flicker && (
        <motion.div
          className="absolute inset-0 bg-white pointer-events-none z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.85, 0] }}
          transition={{ duration: 0.4, times: [0, 0.3, 1] }}
        />
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

        <motion.button
          onClick={onOpen}
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