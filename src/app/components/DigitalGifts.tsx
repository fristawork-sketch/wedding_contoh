import { motion } from "motion/react";
import { Heart, Home, Plane, BookOpen, Coffee, Banknote, PiggyBankIcon, BanknoteArrowUpIcon } from "lucide-react";
import { useState } from "react";

const gifts = [
  { icon: Home, title: "Alamat Rumah",amount: "Any amount", bank: "Jl. trans Kalimantan, Desa Sungai Tuat RT. 03", label: "Rumah" },
  { icon: BanknoteArrowUpIcon, title: "Transfer", amount: "Any amount", bank: "1590013275325", label: "Mandiri : Rulia Alda Firadila" },
  ];

export function DigitalGifts() {
  const [copied, setCopied] = useState<number | null>(null);

  function copy(text: string, i: number) {
    navigator.clipboard.writeText(text);
    setCopied(i);
    setTimeout(() => setCopied(null), 2000);
  }

  return (
    <section className="py-24 px-6 relative overflow-hidden" style={{ background: "linear-gradient(160deg, #DDD0BA 0%, #D0C3AD 100%)" }}>
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")" }} />

      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
        >
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "#2C2318", fontWeight: 400 }}>
            Tanda Kasih
          </h2>
          <p className="mt-4 max-w-xl mx-auto" style={{ fontFamily: "'Lato', sans-serif", fontSize: "1.05rem", color: "#8d7e74", fontStyle: "roman", lineHeight: 1.85 }}>
           Apabila anda ingin memberikan hadiah kepada kedua mempelai dapat diberikan melalui opsi-opsi dibawah ini. Terima Kasih
          </p>
          <div className="w-16 h-px mx-auto mt-6" style={{ background: "#9C8B6E" }} />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {gifts.map((gift, i) => {
            const Icon = gift.icon;
            return (
              <motion.div
                key={i}
                className="p-8 relative group"
                style={{ background: "rgba(244,239,228,0.7)", border: "1px solid rgba(156,139,110,0.3)" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                whileHover={{ y: -3, transition: { duration: 0.3 } }}
              >
                <div className="flex items-start gap-5">
                  <div className="mt-1 flex-shrink-0">
                    <Icon size={22} style={{ color: "#9C8B6E" }} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.25rem", color: "#2C2318", fontWeight: 400, fontStyle: "italic" }}>
                        {gift.title}
                      </h3>
                      <span
                        className="px-2 py-0.5 text-xs flex-shrink-0"
                        style={{ background: "#D9CCBB", fontFamily: "'Dancing Script', cursive", color: "#7A6152", fontSize: "0.85rem" }}
                      >
                        {gift.label}
                      </span>
                    </div>
                    <p style={{ fontFamily: "'EB Garamond', serif", fontSize: "0.98rem", color: "#7A6152", lineHeight: 1.75 }}>
                      {gift.description}
                    </p>
                    <div
                      className="mt-5 flex items-center justify-between p-3 cursor-pointer"
                      style={{ background: "#E8DFD0", border: "1px dashed #9C8B6E" }}
                      onClick={() => copy(gift.bank, i)}
                    >
                      <span style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.75rem", color: "#7A6152", letterSpacing: "0.05em" }}>
                        {gift.bank}
                      </span>
                      <span style={{ fontFamily: "'Dancing Script', cursive", color: "#9C8B6E", fontSize: "0.9rem", marginLeft: "0.5rem", flexShrink: 0 }}>
                        {copied === i ? "copied ✓" : "copy"}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
