import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

import fotoAlda from "../../assets/alda.jpeg";
import fotoBara from "../../assets/bara.JPEG";

const people = [
  {
    name: "Rulia Alda Firadila,S.P",
    description: "Anak Pertama Dari ",
    description2: "Bpk Rubi Setiawan Bromen & Ibu Liana.",
    photo: fotoAlda,
    rotate: "-2deg",
  },
  {
    name: "Farid Sambara Saputra",
    description: "Putra kedua dari:",
    description2: "Bpk Elia Benny (✞) & Ibu Vera Rano",
    photo: fotoBara,
    rotate: "2deg",
  },
];

// Satu quote gabungan untuk kedua mempelai
const sharedQuote =
  "Untuk segala versi diri yang pernah ada dan yang akan datang, kami memilih untuk tetap saling menggenggam. Dengan penuh cinta, kami mengundang Anda untuk merayakan awal kisah kami.";

export function BrideGroom() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 px-6 relative overflow-hidden" style={{ background: "#E8DFD0" }}>
      {/* Lined paper texture */}
     

      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
        >
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "#2C2318", fontWeight: 400 }}>ALDA &amp; BARA</h2>
          <div className="w-16 h-px mx-auto mt-6" style={{ background: "#9C8B6E" }} />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {people.map((person, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: i * 0.2 }}
            >
              {/* Polaroid frame */}
              <motion.div
                className="relative mb-8 p-4 pb-14"
                style={{ background: "#503d30", boxShadow: "0 8px 32px rgba(44,35,24,0.18), 0 2px 8px rgba(44,35,24,0.10)", transform: `rotate(${person.rotate})` }}
                whileHover={{ rotate: "0deg", scale: 1.02, transition: { duration: 0.4 } }}
              >
                <div className="w-72 h-96 overflow-hidden" style={{ background: "#C8B89A" }}>
                  <img
                    src={person.photo}
                    alt={person.name}
                    className="w-full h-full object-cover"
                    style={{ filter: "sepia(20%) contrast(0.95) brightness(0.98)" }}
                  />
                </div>
                <div className="absolute bottom-4 left-0 right-0 text-center">
                <span
                style={{
                fontFamily: "'Dancing Script', cursive",
                fontSize: "1.35rem",
                color: "#E8DFD0",  }}
                >
                {i === 0 ? "The Bride" : "The Groom"}
                </span>              
                 </div>
                {/* Film grain overlay on photo */}
                <div className="absolute inset-4 bottom-14 pointer-events-none opacity-20" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")" }} />
              </motion.div>

              <h3
                style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", color: "#2C2318", fontWeight: 400, fontStyle: "italic" }}
              >
                {person.name}
              </h3>
              <p className="text-xs tracking-widest uppercase mt-1 mb-5" style={{ fontFamily: "'Lato', sans-serif", color: "#9C8B6E" }}>
              </p>
              <p
                className="text-center max-w-xs"
                style={{ fontFamily: "'EB Garamond', serif", fontSize: "1.05rem", color: "#5C3D2E", lineHeight: 1.85 }}
              >
                {person.description}
              </p>
              <p
                className="text-center max-w-xs"
                style={{ fontFamily: "'EB Garamond', serif", fontSize: "1.05rem", color: "#5C3D2E", lineHeight: 1.85 }}
              >
                {person.description2}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Satu quote tunggal di tengah, untuk keduanya */}
        <motion.blockquote
          className="mt-20 text-center italic max-w-xl mx-auto px-4"
          style={{ fontFamily: "'EB Garamond', serif", fontSize: "1.25rem", color: "#9C8B6E", lineHeight: 1.8 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          "{sharedQuote}"
        </motion.blockquote>
      </div>
    </section>
  );
}