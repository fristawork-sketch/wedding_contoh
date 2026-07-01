import { motion } from "motion/react";
import { MapPin, Navigation } from "lucide-react";

export function Location() {
  return (
    <section className="py-24 px-6 relative overflow-hidden" style={{ background: "#F0E9D8" }}>
      <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")" }} />

      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
        >
          <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ fontFamily: "'Lato', sans-serif", color: "#9C8B6E" }}>find your way to us</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "#2C2318", fontWeight: 400 }}>
            The Venue
          </h2>
          <div className="w-16 h-px mx-auto mt-6" style={{ background: "#9C8B6E" }} />
        </motion.div>

        {/* Vintage postcard layout */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-0 relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          {/* Left — postcard address side */}
          <div
            className="p-10 sm:p-14 relative"
            style={{ background: "#F8F3E8", borderRight: "1px solid #C8B89A", boxShadow: "4px 4px 24px rgba(44,35,24,0.1)" }}
          >
            {/* Postmark circle */}
            <div
              className="absolute top-8 right-8 w-20 h-20 rounded-full border-2 flex flex-col items-center justify-center opacity-30"
              style={{ borderColor: "#5C3D2E" }}
            >
              <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.55rem", letterSpacing: "0.15em", color: "#5C3D2E", textAlign: "center", lineHeight: 1.4 }}>
                WILTSHIRE<br />OCT 18<br />2025
              </p>
            </div>

            {/* Stamp corner */}
            <div
              className="absolute top-6 right-6 w-16 h-20 flex items-center justify-center border-2 opacity-20"
              style={{ borderColor: "#9C8B6E" }}
            >
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", color: "#5C3D2E" }}>♡</span>
            </div>

            <div className="mt-4">
              <p style={{ fontFamily: "'Dancing Script', cursive", fontSize: "1.3rem", color: "#9C8B6E", marginBottom: "1.5rem" }}>
                You are invited to —
              </p>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", color: "#2C2318", fontWeight: 400, fontStyle: "italic" }}>
                Chapel of the<br />Golden Fields
              </h3>
              <p style={{ fontFamily: "'EB Garamond', serif", fontSize: "1.05rem", color: "#7A6152", marginTop: "0.5rem" }}>
                Rosemere Estate
              </p>

              <div className="mt-8 space-y-4">
                {[
                  { icon: MapPin, label: "Address", value: "12 Halcyon Road\nWiltshire, BA14 8NW\nEngland" },
                  { icon: Navigation, label: "Nearest Station", value: "Trowbridge Station\n20 minutes by taxi" },
                ].map(({ icon: Icon, label, value }, i) => (
                  <div key={i} className="flex gap-4">
                    <Icon size={16} style={{ color: "#9C8B6E", marginTop: "3px", flexShrink: 0 }} />
                    <div>
                      <p className="text-xs tracking-wider uppercase" style={{ fontFamily: "'Lato', sans-serif", color: "#9C8B6E" }}>{label}</p>
                      <p style={{ fontFamily: "'EB Garamond', serif", fontSize: "1rem", color: "#5C3D2E", whiteSpace: "pre-line", lineHeight: 1.6 }}>{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="https://www.google.com/maps/place/Zea+Fam's/@-1.7857495,111.0918403,19z/data=!4m15!1m8!3m7!1s0x2e05d66fa549cb67:0xc3c9c224f6656a12!2sSungai+Tuat,+Kec.+Lamandau,+Kabupaten+Lamandau,+Kalimantan+Tengah!3b1!8m2!3d-1.7915792!4d111.0579632!16s%2Fg%2F1hc0h80k9!3m5!1s0x2e05d7ce1269b433:0x153657259504cc58!8m2!3d-1.7858192!4d111.0917611!16s%2Fg%2F11y687k0nf?entry=ttu&g_ep=EgoyMDI2MDYyOC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-block px-8 py-3 border text-sm tracking-widest uppercase"
                style={{ borderColor: "#9C8B6E", color: "#5C3D2E", fontFamily: "'Lato', sans-serif", letterSpacing: "0.2em" }}
              >
                Lokasi Pemenuhan Hukum Adat
              </a>
            </div>
          </div>

          {/* Right — map / aerial photo */}
          <div className="relative min-h-72 overflow-hidden" style={{ background: "#C8B89A" }}>
            <img
              src="https://images.unsplash.com/photo-1639823096986-f08f3884de84?w=800&h=600&fit=crop&auto=format"
              alt="The wedding venue"
              className="w-full h-full object-cover"
              style={{ filter: "sepia(30%) contrast(0.9) brightness(0.95)", minHeight: "350px" }}
            />
            {/* Overlay pin */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                className="flex flex-col items-center"
              >
                <div className="px-4 py-2" style={{ background: "rgba(244,239,228,0.92)" }}>
                  <p style={{ fontFamily: "'Dancing Script', cursive", fontSize: "1.1rem", color: "#5C3D2E" }}>This is where it happens ♡</p>
                </div>
                <div className="w-0.5 h-8" style={{ background: "#5C3D2E" }} />
                <div className="w-3 h-3 rounded-full" style={{ background: "#5C3D2E" }} />
              </motion.div>
            </div>
            {/* Grain */}
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")" }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
