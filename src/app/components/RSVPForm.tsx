import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function RSVPForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", attending: "yes", guests: "1", dietary: "", message: "" });

  function handle(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "transparent",
    border: "none",
    borderBottom: "1px solid #9C8B6E",
    padding: "0.5rem 0",
    fontFamily: "'EB Garamond', serif",
    fontSize: "1.05rem",
    color: "#2C2318",
    outline: "none",
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden" style={{ background: "#F0E9D8" }}>
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 31px, #5C3D2E 31px, #5C3D2E 32px)" }} />

      <div className="max-w-xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
        >
          <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ fontFamily: "'Lato', sans-serif", color: "#9C8B6E" }}>we'd love to have you</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "#2C2318", fontWeight: 400 }}>
            RSVP
          </h2>
          <p className="mt-3" style={{ fontFamily: "'EB Garamond', serif", fontSize: "1.05rem", color: "#7A6152", fontStyle: "italic" }}>
            Please respond by September 1, 2025
          </p>
          <div className="w-16 h-px mx-auto mt-6" style={{ background: "#9C8B6E" }} />
        </motion.div>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="thanks"
              className="text-center py-16"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div style={{ fontFamily: "'Dancing Script', cursive", fontSize: "4rem", color: "#9C8B6E" }}>♡</div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", color: "#2C2318", fontWeight: 400, fontStyle: "italic", marginTop: "1rem" }}>
                Thank you, {form.name.split(" ")[0]}
              </h3>
              <p className="mt-4" style={{ fontFamily: "'EB Garamond', serif", fontSize: "1.1rem", color: "#7A6152", lineHeight: 1.85 }}>
                We received your response and cannot wait to share this day with you.
                A confirmation will be sent to your email shortly.
              </p>
              <p className="mt-6" style={{ fontFamily: "'Dancing Script', cursive", fontSize: "1.3rem", color: "#9C8B6E" }}>
                With all our love, Elara &amp; Sebastian
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={submit}
              className="space-y-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="space-y-8">
                <div>
                  <label className="text-xs tracking-widest uppercase block mb-2" style={{ fontFamily: "'Lato', sans-serif", color: "#9C8B6E" }}>Your Full Name</label>
                  <input name="name" value={form.name} onChange={handle} required placeholder="as it appears on your invitation" style={inputStyle} />
                </div>
                <div>
                  <label className="text-xs tracking-widest uppercase block mb-2" style={{ fontFamily: "'Lato', sans-serif", color: "#9C8B6E" }}>Email Address</label>
                  <input type="email" name="email" value={form.email} onChange={handle} required placeholder="we'll send the details here" style={inputStyle} />
                </div>
              </div>

              {/* Attending radio */}
              <div>
                <p className="text-xs tracking-widest uppercase mb-4" style={{ fontFamily: "'Lato', sans-serif", color: "#9C8B6E" }}>Will you join us?</p>
                <div className="flex gap-8">
                  {[["yes", "Joyfully accepts"], ["no", "Regretfully declines"]].map(([val, label]) => (
                    <label key={val} className="flex items-center gap-3 cursor-pointer">
                      <div
                        className="w-5 h-5 rounded-full border-2 flex items-center justify-center"
                        style={{ borderColor: "#9C8B6E", background: form.attending === val ? "#9C8B6E" : "transparent" }}
                        onClick={() => setForm(f => ({ ...f, attending: val }))}
                      >
                        {form.attending === val && <div className="w-2 h-2 rounded-full bg-white" />}
                      </div>
                      <span style={{ fontFamily: "'EB Garamond', serif", fontSize: "1.05rem", color: "#5C3D2E" }}>{label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {form.attending === "yes" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.4 }}
                  className="space-y-8"
                >
                  <div>
                    <label className="text-xs tracking-widest uppercase block mb-2" style={{ fontFamily: "'Lato', sans-serif", color: "#9C8B6E" }}>Number of Guests</label>
                    <select name="guests" value={form.guests} onChange={handle} style={{ ...inputStyle, cursor: "pointer" }}>
                      {["1", "2", "3", "4"].map(n => <option key={n} value={n}>{n} {n === "1" ? "person" : "people"}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-xs tracking-widest uppercase block mb-2" style={{ fontFamily: "'Lato', sans-serif", color: "#9C8B6E" }}>Dietary Requirements</label>
                    <input name="dietary" value={form.dietary} onChange={handle} placeholder="any allergies or preferences" style={inputStyle} />
                  </div>
                </motion.div>
              )}

              <div>
                <label className="text-xs tracking-widest uppercase block mb-2" style={{ fontFamily: "'Lato', sans-serif", color: "#9C8B6E" }}>
                  A word for the couple
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handle}
                  rows={4}
                  placeholder="write something from the heart..."
                  style={{ ...inputStyle, resize: "none", borderBottom: "none", border: "1px solid #9C8B6E", padding: "0.75rem" }}
                />
              </div>

              <div className="text-center">
                <motion.button
                  type="submit"
                  className="px-12 py-4 border tracking-widest uppercase"
                  style={{ borderColor: "#5C3D2E", color: "#5C3D2E", fontFamily: "'Lato', sans-serif", fontSize: "0.8rem", letterSpacing: "0.25em", background: "transparent" }}
                  whileHover={{ background: "#5C3D2E", color: "#F4EFE4" }}
                  transition={{ duration: 0.25 }}
                >
                  Send my reply
                </motion.button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
