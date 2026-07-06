import { motion } from "motion/react";
import { MapPin, Navigation } from "lucide-react";

const LOCATIONS = [
  {
    key: "Pemenuhan Hukum Adat",
    heading: "Pemenuhan Hukum Adat",
    address: "Kediaman Bpk.Erlan, Desa Sungai Tuat RT.03",
    mapUrl:
      "https://maps.app.goo.gl/Eo1XG3DdxQtWrRg87",
  },
  {
    key: "Pemberkatan Nikah",
    heading: "Pemberkatan Nikah",
    address: "Gereja Khatolik St. Maria, Desa TAnjung Beringin",
    mapUrl:
      "https://maps.app.goo.gl/uTMpVdqeHmD8y1Gq7",
  },
  {
     key: "Resepsi",
    heading: "Resepsi",
    address: "Kediaman Bpk.Khote, Desa Sungai Tuat RT.03",
    mapUrl:
    "https://maps.app.goo.gl/9jRg7uLG7HftZgb37"
  },
];

type Location = {
  key: string;
  tabLabel: string;
  heading: string;
  subheading: string;
  address: string;
  station: string;
  mapUrl: string;
};

function LocationSection({ loc, isLast }: { loc: Location; isLast: boolean }) {
  return (
    <div className={isLast ? "" : "pb-7 mb-7 border-b"} style={{ borderColor: "#D9CCBB" }}>
      <p
        className="text-[0.65rem] tracking-[0.25em] uppercase mb-1.5"
        style={{ fontFamily: "'Lato', sans-serif", color: "#9C8B6E" }}
      >
        {loc.tabLabel}
      </p>
      <h3
        style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.35rem", color: "#2C2318", fontWeight: 400, fontStyle: "italic" }}
      >
        {loc.heading}
      </h3>
      <p style={{ fontFamily: "'EB Garamond', serif", fontSize: "0.95rem", color: "#7A6152", marginTop: "0.15rem" }}>
        {loc.subheading}
      </p>

      <div className="mt-3 space-y-2">
        <div className="flex gap-2.5">
          <MapPin size={14} style={{ color: "#9C8B6E", marginTop: "3px", flexShrink: 0 }} />
          <p style={{ fontFamily: "'EB Garamond', serif", fontSize: "0.9rem", color: "#5C3D2E", lineHeight: 1.5 }}>
            {loc.address}
          </p>
        </div>

      </div>

      <a
        href={loc.mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block px-5 py-2 border text-xs tracking-widest uppercase"
        style={{ borderColor: "#9C8B6E", color: "#5C3D2E", fontFamily: "'Lato', sans-serif", letterSpacing: "0.15em" }}
      >
        Buka di Google Maps
      </a>
    </div>
  );
}

export function Location() {
  return (
    <section className="py-24 px-6 relative overflow-hidden" style={{ background: "#F0E9D8" }}>
      <div className="max-w-5xl mx-auto relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
        >
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "#2C2318", fontWeight: 400 }}>
            Lokasi Acara
          </h2>
          <div className="w-16 h-px mx-auto mt-6" style={{ background: "#9C8B6E" }} />
        </motion.div>

        {/* Satu kartu surat berisi 3 alamat */}
        <motion.div
          className="relative max-w-2xl mx-auto w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
        >
          <div
            className="p-8 sm:p-12 relative"
            style={{ background: "#F8F3E8", boxShadow: "4px 4px 24px rgba(44,35,24,0.1)" }}
          >
            {/* Postmark circle */}
            <div
             className="absolute top-6 right-28 w-14 h-16 flex items-center justify-center  rounded-full border-2 flex flex-col items-center justify-center opacity-30"
              style={{ borderColor: "#5C3D2E" }}
            >
              <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.5rem", letterSpacing: "0.15em", color: "#5C3D2E", textAlign: "center", lineHeight: 1.4 }}>
                Alda♡Bara <br />2026
              </p>
            </div>
            <div className="mt-2">
              {LOCATIONS.map((loc, i) => (
                <LocationSection key={loc.key} loc={loc} isLast={i === LOCATIONS.length - 1} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
