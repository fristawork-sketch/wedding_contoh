import { motion } from "motion/react";
import { useState } from "react";

const photos = [
  { src: "https://images.unsplash.com/photo-1681176092314-aff3e74a41bb?w=500&h=600&fit=crop&auto=format", alt: "Together by the water", caption: "our first trip together", rotate: "-3deg" },
  { src: "https://images.unsplash.com/photo-1654977982201-a241a2c8c092?w=400&h=550&fit=crop&auto=format", alt: "Holding each other", caption: "a quiet Sunday morning", rotate: "2.5deg" },
  { src: "https://images.unsplash.com/photo-1762319981487-58b0ad96e2a2?w=500&h=400&fit=crop&auto=format", alt: "Smiling at the reception", caption: "when you made her laugh", rotate: "-1.5deg" },
  { src: "https://images.unsplash.com/photo-1764438740052-43095acfe41a?w=400&h=560&fit=crop&auto=format", alt: "Newlyweds embracing", caption: "the embrace that says everything", rotate: "3deg" },
  { src: "https://images.unsplash.com/photo-1714667712091-794f61db4f0e?w=500&h=500&fit=crop&auto=format", alt: "Sitting together", caption: "just sitting, just being", rotate: "-2deg" },
  { src: "https://images.unsplash.com/photo-1772945493050-c0bb5d528e2d?w=450&h=600&fit=crop&auto=format", alt: "In the golden field", caption: "the golden hour was kind to us", rotate: "1.5deg" },
  { src: "https://images.unsplash.com/photo-1769230375701-b1db7dc1dded?w=400&h=500&fit=crop&auto=format", alt: "Holding roses", caption: "flowers she chose herself", rotate: "-3.5deg" },
  { src: "https://images.unsplash.com/photo-1781211797591-6781d5f1479d?w=500&h=450&fit=crop&auto=format", alt: "Vintage attire couple", caption: "dressed for the rest of our lives", rotate: "2deg" },
];

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

      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
        >
          <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ fontFamily: "'Lato', sans-serif", color: "#9C8B6E" }}>moments we kept</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "#2C2318", fontWeight: 400 }}>Photo Album</h2>
          <div className="w-16 h-px mx-auto mt-6" style={{ background: "#9C8B6E" }} />
        </motion.div>

        {/* Polaroid scatter layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              className="relative cursor-pointer"
              style={{ transform: `rotate(${photo.rotate})` }}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              whileHover={{ rotate: "0deg", scale: 1.04, zIndex: 10, transition: { duration: 0.3 } }}
              onClick={() => handleClick(i)}
            >
              {/* Flash overlay */}
              {flashed === i && (
                <motion.div
                  className="absolute inset-0 bg-white z-20 pointer-events-none"
                  initial={{ opacity: 0.9 }}
                  animate={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                />
              )}

              {/* Polaroid frame */}
              <div
                className="p-3 pb-10 relative"
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
                <div className="absolute inset-3 bottom-10 pointer-events-none opacity-15" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")" }} />
                <p
                  className="absolute bottom-2 left-0 right-0 text-center"
                  style={{ fontFamily: "'Dancing Script', cursive", fontSize: "0.85rem", color: "#7A6152" }}
                >
                  {photo.caption}
                </p>
              </div>

              {/* Tape strips */}
              {i % 3 === 0 && (
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-5 opacity-40" style={{ background: "#D9CCBB", transform: "translateX(-50%) rotate(-5deg)" }} />
              )}
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center mt-14"
          style={{ fontFamily: "'Dancing Script', cursive", fontSize: "1.2rem", color: "#9C8B6E" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          click any photo to capture the moment ✦
        </motion.p>
      </div>
    </section>
  );
}
