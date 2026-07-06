import { motion } from "motion/react";
import { useState } from "react";
import foto1 from "../../assets/1.jpeg"
import foto2 from "../../assets/3.jpeg";
import foto3 from "../../assets/4.jpeg";


const photos = [
  { src: foto1, alt: "Foto kenangan", rotate: "-3deg" },
  { src: foto2, alt: "Foto kenangan", rotate: "2.5deg" },
  { src: foto3, alt: "Foto kenangan", rotate: "-1.5deg" },
];

function Polaroid({
  photo,
  index,
  flashed,
  onClick,
}: {
  photo: { src: string; alt: string; rotate: string };
  index: number;
  flashed: number | null;
  onClick: (i: number) => void;
}) {
  return (
    <motion.div
      className="relative cursor-pointer w-full max-w-[260px]"
      style={{ transform: `rotate(${photo.rotate})` }}
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ rotate: "0deg", scale: 1.04, zIndex: 10, transition: { duration: 0.3 } }}
      onClick={() => onClick(index)}
    >
      {/* Flash overlay */}
      {flashed === index && (
        <motion.div
          className="absolute inset-0 bg-white z-20 pointer-events-none"
          initial={{ opacity: 0.9 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      )}

      {/* Polaroid frame */}
      <div
        className="p-3 pb-6 relative"
        style={{ background: "#F8F3E8", boxShadow: "0 6px 20px rgba(44,35,24,0.15), 0 2px 6px rgba(44,35,24,0.1)" }}
      >
        <div className="overflow-hidden" style={{ background: "#B8A898", aspectRatio: "3/4" }}>
          <img
            src={photo.src}
            alt={photo.alt}
            className="w-full h-full object-cover"
            style={{ filter: "sepia(25%) contrast(0.92) brightness(0.97) saturate(0.85)" }}
          />
        </div>
        {/* Film grain on photo */}
        <div className="absolute inset-3 bottom-6 pointer-events-none opacity-15" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")" }} />
      </div>

      {/* Tape strip */}
      {index % 2 === 0 && (
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-5 opacity-40" style={{ background: "#D9CCBB", transform: "translateX(-50%) rotate(-5deg)" }} />
      )}
    </motion.div>
  );
}

export function PhotoGallery() {
  const [flashed, setFlashed] = useState<number | null>(null);

  function handleClick(i: number) {
    setFlashed(i);
    setTimeout(() => setFlashed(null), 600);
  }

  return (
    <section className="py-24 px-6 relative overflow-hidden" style={{ background: "#E8DFD0" }}>
      {/* Cork board subtle texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")" }} />

      <div className="max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
        >
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "#2C2318", fontWeight: 400 }}>Photo Album</h2>
          <div className="w-16 h-px mx-auto mt-6" style={{ background: "#9C8B6E" }} />
        </motion.div>

        {/* Baris pertama: 2 foto berdampingan */}
        <div className="flex justify-center gap-8 sm:gap-10 flex-wrap mb-8 sm:mb-10">
          <Polaroid photo={photos[0]} index={0} flashed={flashed} onClick={handleClick} />
          <Polaroid photo={photos[1]} index={1} flashed={flashed} onClick={handleClick} />
        </div>

        {/* Baris kedua: 1 foto di tengah */}
        <div className="flex justify-center">
          <Polaroid photo={photos[2]} index={2} flashed={flashed} onClick={handleClick} />
        </div>
      </div>
    </section>
  );
}
