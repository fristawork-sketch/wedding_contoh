import { useEffect, useState } from "react";
import { motion } from "motion/react";

const WEDDING_DATE = new Date("2025-10-18T15:00:00");

function getTimeLeft() {
  const now = new Date();
  const diff = WEDDING_DATE.getTime() - now.getTime();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function Unit({ value, label }: { value: number; label: string }) {
  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div
        className="relative flex items-center justify-center"
        style={{ width: "clamp(80px, 18vw, 120px)", height: "clamp(80px, 18vw, 120px)", background: "rgba(244,239,228,0.5)", border: "1px solid #9C8B6E" }}
      >
        <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 6vw, 3.5rem)", color: "#2C2318", fontWeight: 400, lineHeight: 1 }}>
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <p className="mt-3 text-xs tracking-widest uppercase" style={{ fontFamily: "'Lato', sans-serif", color: "#9C8B6E" }}>{label}</p>
    </motion.div>
  );
}

export function Countdown() {
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="py-24 px-6 relative overflow-hidden" style={{ background: "#F0E9D8" }}>
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")" }} />

      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
        >
          <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ fontFamily: "'Lato', sans-serif", color: "#9C8B6E" }}>counting every heartbeat</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "#2C2318", fontWeight: 400 }}>
            Until We Say
          </h2>
          <p style={{ fontFamily: "'Dancing Script', cursive", fontSize: "2rem", color: "#9C8B6E" }}>I Do</p>
          <div className="w-16 h-px mx-auto mt-6 mb-16" style={{ background: "#9C8B6E" }} />
        </motion.div>

        <div className="flex items-center justify-center gap-6 sm:gap-10 flex-wrap">
          <Unit value={time.days} label="Days" />
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", color: "#9C8B6E", marginBottom: "2rem" }}>·</div>
          <Unit value={time.hours} label="Hours" />
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", color: "#9C8B6E", marginBottom: "2rem" }}>·</div>
          <Unit value={time.minutes} label="Minutes" />
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", color: "#9C8B6E", marginBottom: "2rem" }}>·</div>
          <Unit value={time.seconds} label="Seconds" />
        </div>

        <motion.p
          className="mt-16"
          style={{ fontFamily: "'EB Garamond', serif", fontSize: "1.1rem", color: "#7A6152", fontStyle: "italic" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          "Every second that passes is one closer to the moment<br />
          I get to call you my wife — and that is everything."
        </motion.p>
        <p style={{ fontFamily: "'Dancing Script', cursive", color: "#9C8B6E", fontSize: "1.1rem", marginTop: "0.5rem" }}>— Sebastian</p>
      </div>
    </section>
  );
}
