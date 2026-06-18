import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function HeroSection({ onOpen }: { onOpen: () => void }) {
  const [flicker, setFlicker] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setFlicker(true), 2200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(160deg, #F0E9D8 0%, #E8DCC8 40%, #DDD0BA 100%)" }}
    >
      {/* Film grain overlay */}
      <div className="absolute inset-0 pointer-events-none z-10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.06'/%3E%3C/svg%3E\")", backgroundRepeat: "repeat", opacity: 0.4 }} />

      {/* Top film strip decoration */}
      <div className="absolute top-0 left-0 right-0 h-8 flex gap-0 opacity-20">
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} className="h-full flex-1 border-r border-foreground/30 flex flex-col justify-between py-1">
            <div className="w-2 h-2 bg-foreground/40 mx-auto rounded-sm" />
            <div className="w-2 h-2 bg-foreground/40 mx-auto rounded-sm" />
          </div>
        ))}
      </div>

      {/* Envelope flap shape */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 1.5, duration: 1.2, ease: "easeInOut" }}
      >
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon points="0,0 100,0 50,55" fill="#C8B89A" opacity="0.35" />
        </svg>
      </motion.div>

      {/* Camera flash */}
      {flicker && (
        <motion.div
          className="absolute inset-0 bg-white pointer-events-none z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.85, 0] }}
          transition={{ duration: 0.4, times: [0, 0.3, 1] }}
        />
      )}

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl">
        <motion.p
          className="text-xs tracking-[0.35em] uppercase mb-8 opacity-60"
          style={{ fontFamily: "'Lato', sans-serif", color: "#7A6152" }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.6, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          A love story — forever & always
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1.2, ease: "easeOut" }}
        >
          <h1
            className="leading-none mb-2"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(3.5rem, 10vw, 7rem)", color: "#2C2318", fontWeight: 400, letterSpacing: "-0.01em" }}
          >
            Elara
          </h1>
          <p style={{ fontFamily: "'Dancing Script', cursive", fontSize: "clamp(1.5rem, 4vw, 2.5rem)", color: "#9C8B6E", lineHeight: 1 }}>
            &amp;
          </p>
          <h1
            className="leading-none mt-2"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(3.5rem, 10vw, 7rem)", color: "#2C2318", fontWeight: 400, letterSpacing: "-0.01em" }}
          >
            Sebastian
          </h1>
        </motion.div>

        <motion.div
          className="w-24 h-px my-8 mx-auto"
          style={{ background: "linear-gradient(90deg, transparent, #9C8B6E, transparent)" }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        />

        <motion.p
          style={{ fontFamily: "'EB Garamond', serif", fontSize: "clamp(1rem, 2.5vw, 1.2rem)", color: "#5C3D2E", lineHeight: 1.9, fontStyle: "italic" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1.2 }}
        >
          "Two imperfect people who chose to stay, to heal,<br className="hidden sm:block" />
          and to grow together — forever."
        </motion.p>

        <motion.p
          className="mt-4 text-sm tracking-widest uppercase"
          style={{ fontFamily: "'Lato', sans-serif", color: "#7A6152", letterSpacing: "0.2em" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1.7, duration: 1 }}
        >
          October 18 · 2025
        </motion.p>

        <motion.button
          onClick={onOpen}
          className="mt-12 px-10 py-4 border relative overflow-hidden group"
          style={{ borderColor: "#9C8B6E", color: "#5C3D2E", fontFamily: "'EB Garamond', serif", fontSize: "1.1rem", letterSpacing: "0.15em", background: "transparent" }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          whileHover={{ scale: 1.02 }}
        >
          <span className="relative z-10">Open Invitation</span>
          <motion.div
            className="absolute inset-0"
            style={{ background: "#9C8B6E" }}
            initial={{ scaleX: 0, originX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="absolute inset-0 flex items-center justify-center z-20"
            style={{ color: "#F4EFE4", fontFamily: "'EB Garamond', serif", fontSize: "1.1rem", letterSpacing: "0.15em", opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            Open Invitation
          </motion.span>
        </motion.button>

        <motion.p
          className="mt-6 text-xs"
          style={{ fontFamily: "'Dancing Script', cursive", color: "#9C8B6E", fontSize: "1.1rem" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 2.3, duration: 1 }}
        >
          scroll to explore our story ↓
        </motion.p>
      </div>

      {/* Corner decorations */}
      <div className="absolute bottom-8 left-8 opacity-20">
        <div style={{ fontFamily: "'Dancing Script', cursive", color: "#5C3D2E", fontSize: "0.9rem", transform: "rotate(-15deg)" }}>est. 2019</div>
      </div>
      <div className="absolute bottom-8 right-8 opacity-20">
        <div style={{ fontFamily: "'Dancing Script', cursive", color: "#5C3D2E", fontSize: "0.9rem", transform: "rotate(10deg)" }}>forever yours</div>
      </div>
    </section>
  );
}
