import { motion } from "motion/react";

const details = [
  { label: "Pemenuhan Ukum Adat", value: "Jum'at, 10 Juli", sub: "Pukul 09:00 WIB", sub2: "Rumah Bapak Erlan, Desa Sungai Tuat Rt.03" },
  { label: "Gereja", value: "Sabtu, 11 Juli", sub: "The Orchard Garden, East Wing" },
  { label: "Resepsi", value: "Garden Romantique", sub: "Cream, sage, dusty rose & earth tones" },
];

// 3 tanggal utama yang ditampilkan di kartu besar
const dateCards = [
  { caption: "pemenuhan ukum adat", day: "10", month: "JULI", year: "2026" },
  { caption: "pemberkatan gereja", day: "11", month: "JULI", year: "2026" },
  { caption: "resepsi", day: "11", month: "JULI", year: "2026" },
];

export function WeddingDetails() {
  return (
    <section
      className="py-24 px-6 relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #DDD0BA 0%, #D0C3AD 100%)" }}
    >
      {/* Film grain */}
      <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")" }} />

      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
        >
          <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ fontFamily: "'Lato', sans-serif", color: "#7A6152" }}>please save the date</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "#2C2318", fontWeight: 400 }}>
            Wedding Details
          </h2>
          <div className="w-16 h-px mx-auto mt-6 mb-16" style={{ background: "#9C8B6E" }} />
        </motion.div>

        {/* 3 date displays */}
        <div className="flex flex-wrap items-stretch justify-center gap-6 sm:gap-8 mb-16">
          {dateCards.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: i * 0.15 }}
            >
              <div
                className="border px-8 sm:px-10 py-8 relative h-full"
                style={{ borderColor: "#9C8B6E", background: "rgba(244,239,228,0.4)" }}
              >
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 whitespace-nowrap" style={{ background: "#D0C3AD" }}>
                  <span style={{ fontFamily: "'Dancing Script', cursive", color: "#9C8B6E", fontSize: "0.95rem" }}>{d.caption}</span>
                </div>
                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(3rem, 8vw, 4.5rem)", color: "#2C2318", fontWeight: 400, lineHeight: 1, letterSpacing: "0.05em" }}>{d.day}</p>
                <p style={{ fontFamily: "'EB Garamond', serif", fontSize: "1.2rem", color: "#5C3D2E", letterSpacing: "0.3em" }}>{d.month}</p>
                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.7rem", color: "#9C8B6E", letterSpacing: "0.25em", marginTop: "0.5rem" }}>{d.year}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Details grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {details.map((d, i) => (
            <motion.div
              key={i}
              className="py-8 px-6 text-center relative"
              style={{ background: "rgba(244,239,228,0.5)", borderTop: "1px solid #9C8B6E" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
            >
              <p className="text-xs tracking-widest uppercase mb-2" style={{ fontFamily: "'Lato', sans-serif", color: "#9C8B6E" }}>{d.label}</p>
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.3rem", color: "#2C2318", fontStyle: "italic" }}>{d.value}</p>
              <p className="mt-1 text-sm" style={{ fontFamily: "'EB Garamond', serif", color: "#7A6152" }}>{d.sub}</p>
              <p className="mt-1 text-sm" style={{ fontFamily: "'EB Garamond', serif", color: "#7A6152" }}>{d.sub2}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="mt-16"
          style={{ fontFamily: "'Dancing Script', cursive", fontSize: "1.5rem", color: "#9C8B6E" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Demikianlah mereka bukan lagi dua, melainkan satu. Karena itu, apa yang telah dipersatukan Allah, tidak boleh diceraikan manusia.<br />
          <span style={{ fontSize: "1rem", fontFamily: "'EB Garamond', serif", fontStyle: "italic" }}>Matius 19:6</span>
        </motion.p>
      </div>
    </section>
  );
}