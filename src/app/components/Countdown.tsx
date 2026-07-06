import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

// Ubah 3 acara ini sesuai kebutuhan (label & tanggal masing-masing)
const EVENTS = [
  { label: "Pemenuhan Hukum Adat", date: "2026-07-10T09:00:00" },
  { label: "Pemberkatan Nikah", date: "2026-07-11T09:00:00" },
  { label: "Resepsi", date: "2026-07-11T11:00:00" },
];

function getTimeLeft(targetDate: Date) {
  const now = new Date();
  const diff = targetDate.getTime() - now.getTime();
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
  const [activeIndex, setActiveIndex] = useState(0);
  const activeDate = new Date(EVENTS[activeIndex].date);
  const [time, setTime] = useState(getTimeLeft(activeDate));

  useEffect(() => {
    setTime(getTimeLeft(activeDate));
    const id = setInterval(() => setTime(getTimeLeft(activeDate)), 1000);
    return () => clearInterval(id);
  }, [activeIndex]);

  return (
    <section className="py-24 px-6 relative overflow-hidden" style={{ background: "#F0E9D8" }}>

      <div className="max-w-3xl mx-auto text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
        >
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "#2C2318", fontWeight: 400 }}>
            Menuju
          </h2>
          <p className="text-xs tracking-[0.2em]  mb-3" style={{ fontFamily: "EB Garamond', serif", color: "#9C8B6E" }}>Klik untuk mengganti acara</p>
          <div className="w-16 h-px mx-auto mt-6 mb-10" style={{ background: "#9C8B6E" }} />
        </motion.div>

        {/* Tabs untuk memilih acara */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-14 flex-wrap">
          {EVENTS.map((event, i) => {
            const isActive = i === activeIndex;
            return (
              <button
                key={event.label}
                onClick={() => setActiveIndex(i)}
                className="px-5 py-2 transition-all duration-300"
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "0.75rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: isActive ? "#F0E9D8" : "#7A6152",
                  background: isActive ? "#9C8B6E" : "transparent",
                  border: "1px solid #9C8B6E",
                  cursor: "pointer",
                }}
              >
                {event.label}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            <p
              className="mb-8"
              style={{ fontFamily: "'EB Garamond', serif", fontSize: "1rem", color: "#7A6152", fontStyle: "italic" }}
            >
              {activeDate.toLocaleDateString("id-ID", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>

            <div className="flex items-center justify-center gap-6 sm:gap-10 flex-wrap">
              <Unit value={time.days} label="Hari" />
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", color: "#9C8B6E", marginBottom: "2rem" }}>·</div>
              <Unit value={time.hours} label="Jam" />
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", color: "#9C8B6E", marginBottom: "2rem" }}>·</div>
              <Unit value={time.minutes} label="Menit" />
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", color: "#9C8B6E", marginBottom: "2rem" }}>·</div>
              <Unit value={time.seconds} label="Detik" />
            </div>
          </motion.div>
        </AnimatePresence>

        <motion.p
          className="mt-16"
          style={{ fontFamily: "'EB Garamond', serif", fontSize: "1.1rem", color: "#7A6152", fontStyle: "italic" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          "Aku menikmati setiap detik, karena semuanya membawaku lebih dekat kepadamu."
        </motion.p>
        <p style={{ fontFamily: "'Dancing Script', cursive", color: "#9C8B6E", fontSize: "1.1rem", marginTop: "0.5rem" }}> Alda ❤️ Bara</p>
      </div>
    </section>
  );
}