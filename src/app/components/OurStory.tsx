import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const memories = [
  {
    year: "Spring 2019",
    title: "The First Hello",
    text: "It was raining outside the bookshop on Marchetti Street. You were reaching for the same worn copy of 'Letters to a Young Poet' and our hands touched. You laughed. I forgot how to breathe.",
    side: "left",
    tag: "where it began",
  },
  {
    year: "Summer 2020",
    title: "That Long Drive",
    text: "Eight hours with your playlist and a gas station map. We got wonderfully lost somewhere near the coast. You said 'I think I want to keep getting lost with you.' I kept it in my chest for months.",
    side: "right",
    tag: "the turning point",
  },
  {
    year: "Autumn 2021",
    title: "When Everything Broke",
    text: "The hardest year. We almost didn't make it. But you knocked on my door at 2am with tea and honest words. We chose to stay. That's when I understood what love really is.",
    side: "left",
    tag: "the staying",
  },
  {
    year: "Winter 2022",
    title: "Learning Each Other Again",
    text: "Slow mornings and long conversations. We rebuilt something quieter, steadier, and more beautiful than what we had before. Two people learning how to be gentle with each other.",
    side: "right",
    tag: "the healing",
  },
  {
    year: "Summer 2024",
    title: "Yes, Forever",
    text: "On the rooftop of our first apartment, with fairy lights and our favourite song playing softly — you asked. I said yes before you finished the sentence. Yes, a thousand times.",
    side: "left",
    tag: "the question",
  },
];

function MemoryCard({ memory, index }: { memory: typeof memories[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className="relative flex flex-col md:flex-row items-start gap-8 py-10"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.1, ease: "easeOut" }}
    >
      {/* Timeline line segment */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px hidden md:block" style={{ background: "linear-gradient(to bottom, transparent, #9C8B6E 20%, #9C8B6E 80%, transparent)", transform: "translateX(-50%)" }} />

      {/* Year bubble */}
      <div
        className="absolute left-0 md:left-1/2 top-10 z-10 hidden md:flex items-center justify-center w-4 h-4 rounded-full border-2"
        style={{ borderColor: "#9C8B6E", background: "#F4EFE4", transform: "translate(-50%, 0)" }}
      />

      {/* Content positioning */}
      <div className={`w-full md:w-1/2 ${memory.side === "right" ? "md:ml-auto md:pl-12" : "md:pr-12 md:text-right"}`}>
        <div
          className="relative p-6 sm:p-8"
          style={{ background: "#EDE5D4", borderLeft: memory.side === "left" ? "none" : "3px solid #C8B89A", borderRight: memory.side === "left" ? "3px solid #C8B89A" : "none" }}
        >
          {/* Paper texture overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 24px, #5C3D2E 24px, #5C3D2E 25px)" }} />

          <p
            className="text-xs tracking-widest uppercase mb-2"
            style={{ fontFamily: "'Lato', sans-serif", color: "#9C8B6E" }}
          >
            {memory.year}
          </p>
          <h3
            className="mb-3"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", color: "#2C2318", fontWeight: 400, fontStyle: "italic" }}
          >
            {memory.title}
          </h3>
          <p
            style={{ fontFamily: "'EB Garamond', serif", fontSize: "1.05rem", color: "#5C3D2E", lineHeight: 1.85 }}
          >
            {memory.text}
          </p>
          <div
            className="mt-4 inline-block px-3 py-1"
            style={{ background: "#D9CCBB", fontFamily: "'Dancing Script', cursive", fontSize: "0.9rem", color: "#7A6152" }}
          >
            {memory.tag}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function OurStory() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-6 relative overflow-hidden" style={{ background: "#F0E9D8" }}>
      <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")", backgroundRepeat: "repeat" }} />

      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
        >
          <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ fontFamily: "'Lato', sans-serif", color: "#9C8B6E" }}>pages from our diary</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "#2C2318", fontWeight: 400 }}>Our Story</h2>
          <div className="w-16 h-px mx-auto mt-6" style={{ background: "#9C8B6E" }} />
        </motion.div>

        <div className="relative">
          {memories.map((memory, i) => (
            <MemoryCard key={i} memory={memory} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
