import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const initialWishes = [
  { name: "Margaret & Thomas", date: "June 2025", message: "We have watched your love grow from a quiet spark into something warm and steady. May your life together be filled with laughter, grace, and the kind of peace that only comes from choosing each other, every single morning." },
  { name: "Clara Ashford", date: "July 2025", message: "Elara, I've never seen you more yourself than when you're with Sebastian. And Sebastian — thank you for seeing her the way she deserves to be seen. You are both so loved." },
  { name: "James Holt", date: "July 2025", message: "Little brother, you found the one. Mum would be so proud. Love her well, grow old together, argue about small things, and forgive quickly. That's the secret — and you already know it." },
  { name: "Sofia & René", date: "August 2025", message: "We flew from Paris for this. That should say everything. To two people who remind us that real love is patient, honest, and worth fighting for. À votre bonheur." },
];

export function GuestWishes() {
  const [wishes, setWishes] = useState(initialWishes);
  const [form, setForm] = useState({ name: "", message: "" });
  const [added, setAdded] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.message) return;
    setWishes(w => [{ name: form.name, date: "October 2025", message: form.message }, ...w]);
    setForm({ name: "", message: "" });
    setAdded(true);
    setTimeout(() => setAdded(false), 3000);
  }

  return (
    <section className="py-24 px-6 relative overflow-hidden" style={{ background: "#EDE5D4" }}>
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 31px, #5C3D2E 31px, #5C3D2E 32px)" }} />

      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
        >
          <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ fontFamily: "'Lato', sans-serif", color: "#9C8B6E" }}>letters from those we love</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "#2C2318", fontWeight: 400 }}>
            Guest Wishes
          </h2>
          <div className="w-16 h-px mx-auto mt-6" style={{ background: "#9C8B6E" }} />
        </motion.div>

        {/* Write a wish form */}
        <motion.div
          className="mb-16 p-8 relative"
          style={{ background: "#F8F3E8", borderLeft: "3px solid #9C8B6E" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 27px, #5C3D2E 27px, #5C3D2E 28px)" }} />
          <p style={{ fontFamily: "'Dancing Script', cursive", fontSize: "1.4rem", color: "#9C8B6E", marginBottom: "1.5rem" }}>
            Write us a letter —
          </p>
          <form onSubmit={submit} className="space-y-6 relative">
            <div>
              <label className="text-xs tracking-widest uppercase block mb-1" style={{ fontFamily: "'Lato', sans-serif", color: "#9C8B6E" }}>Your Name</label>
              <input
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                required
                style={{ width: "100%", background: "transparent", border: "none", borderBottom: "1px solid #9C8B6E", padding: "0.4rem 0", fontFamily: "'EB Garamond', serif", fontSize: "1.05rem", color: "#2C2318", outline: "none" }}
              />
            </div>
            <div>
              <label className="text-xs tracking-widest uppercase block mb-1" style={{ fontFamily: "'Lato', sans-serif", color: "#9C8B6E" }}>Your Message</label>
              <textarea
                value={form.message}
                onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                required
                rows={4}
                style={{ width: "100%", background: "transparent", border: "none", borderBottom: "1px solid #9C8B6E", padding: "0.4rem 0", fontFamily: "'EB Garamond', serif", fontSize: "1.05rem", color: "#2C2318", outline: "none", resize: "none" }}
              />
            </div>
            <div className="flex items-center gap-6">
              <motion.button
                type="submit"
                className="px-8 py-3 border tracking-widest text-xs uppercase"
                style={{ borderColor: "#5C3D2E", color: "#5C3D2E", fontFamily: "'Lato', sans-serif", letterSpacing: "0.2em", background: "transparent" }}
                whileHover={{ background: "#5C3D2E", color: "#F4EFE4" }}
                transition={{ duration: 0.25 }}
              >
                Leave a wish
              </motion.button>
              <AnimatePresence>
                {added && (
                  <motion.span
                    style={{ fontFamily: "'Dancing Script', cursive", color: "#9C8B6E", fontSize: "1.1rem" }}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    Your letter has been received ♡
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </form>
        </motion.div>

        {/* Wishes list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {wishes.map((wish, i) => (
            <motion.div
              key={i}
              className="p-7 relative"
              style={{ background: "#F8F3E8", boxShadow: "0 2px 12px rgba(44,35,24,0.08)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
            >
              <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 25px, #5C3D2E 25px, #5C3D2E 26px)" }} />
              <div className="relative">
                <div className="mb-3" style={{ fontFamily: "'Dancing Script', cursive", fontSize: "1.5rem", color: "#C8B89A" }}>"</div>
                <p style={{ fontFamily: "'EB Garamond', serif", fontSize: "1.02rem", color: "#5C3D2E", lineHeight: 1.85 }}>{wish.message}</p>
                <div className="mt-5 flex items-center justify-between">
                  <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.95rem", color: "#2C2318", fontStyle: "italic" }}>— {wish.name}</p>
                  <p className="text-xs" style={{ fontFamily: "'Lato', sans-serif", color: "#9C8B6E" }}>{wish.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
