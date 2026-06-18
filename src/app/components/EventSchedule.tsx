import { motion } from "motion/react";

const events = [
  { time: "2:00 pm", title: "Guests Arrive", note: "The garden gates open. Find your seat, meet old friends, and let the afternoon wrap around you like a warm letter." },
  { time: "3:00 pm", title: "The Ceremony", note: "We say our vows beneath the old oak tree, in front of everyone we love. Bring tissues — we certainly will need them." },
  { time: "4:15 pm", title: "Golden Hour Portraits", note: "While we steal a few quiet minutes together, enjoy champagne and canapés in the orchard. The light is always best at this hour." },
  { time: "5:30 pm", title: "Cocktail Hour", note: "A jazz trio plays softly. The evening air smells of wisteria and possibility. Toast with us." },
  { time: "6:00 pm", title: "Reception Dinner", note: "Long tables, candlelight, and a menu that tastes like Sunday mornings. Stories will be told. Wine will be poured generously." },
  { time: "8:00 pm", title: "The First Dance", note: "We chose a song that made us both cry the first time we heard it. You'll understand why when it plays." },
  { time: "8:30 pm", title: "Open Dance Floor", note: "The night is young and so is our love. Dance with us until your feet beg you to stop — and then dance a little more." },
  { time: "11:30 pm", title: "Farewell & Wishes", note: "The last song, a long hug, and a lantern released into the dark sky — carrying every good wish skyward." },
];

export function EventSchedule() {
  return (
    <section className="py-24 px-6 relative overflow-hidden" style={{ background: "#EDE5D4" }}>
      {/* Ruled lines */}
      <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 35px, #5C3D2E 35px, #5C3D2E 36px)" }} />

      {/* Red margin line */}
      <div className="absolute left-[72px] top-0 bottom-0 w-px hidden lg:block" style={{ background: "#C8624B", opacity: 0.25 }} />

      <div className="max-w-2xl mx-auto relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
        >
          <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ fontFamily: "'Lato', sans-serif", color: "#9C8B6E" }}>the day unfolds</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "#2C2318", fontWeight: 400 }}>
            Day's Schedule
          </h2>
          <div className="w-16 h-px mx-auto mt-6" style={{ background: "#9C8B6E" }} />
        </motion.div>

        {/* Journal-style entries */}
        <div className="space-y-0">
          {events.map((event, i) => (
            <motion.div
              key={i}
              className="relative flex gap-6 py-6 border-b"
              style={{ borderColor: "rgba(156,139,110,0.2)" }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: i * 0.06 }}
            >
              {/* Time column */}
              <div className="w-20 flex-shrink-0 pt-1 text-right">
                <span style={{ fontFamily: "'EB Garamond', serif", fontSize: "0.95rem", color: "#9C8B6E", fontStyle: "italic" }}>{event.time}</span>
              </div>

              {/* Dot connector */}
              <div className="flex flex-col items-center">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ background: "#9C8B6E" }} />
                {i < events.length - 1 && <div className="w-px flex-1 mt-1" style={{ background: "rgba(156,139,110,0.3)", minHeight: "2rem" }} />}
              </div>

              {/* Content */}
              <div className="flex-1 pb-2">
                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.15rem", color: "#2C2318", fontStyle: "italic", marginBottom: "0.4rem" }}>
                  {event.title}
                </p>
                <p style={{ fontFamily: "'EB Garamond', serif", fontSize: "0.95rem", color: "#7A6152", lineHeight: 1.75 }}>
                  {event.note}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Handwritten footer note */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p style={{ fontFamily: "'Dancing Script', cursive", fontSize: "1.3rem", color: "#9C8B6E" }}>
            * please arrive 15 minutes early, with a full heart *
          </p>
        </motion.div>
      </div>
    </section>
  );
}
