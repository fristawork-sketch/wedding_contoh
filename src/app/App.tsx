import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HeroSection } from "./components/HeroSection";
import { OurStory } from "./components/OurStory";
import { BrideGroom } from "./components/BrideGroom";
import { WeddingDetails } from "./components/WeddingDetails";
import { Countdown } from "./components/Countdown";
import { EventSchedule } from "./components/EventSchedule";
import { Location } from "./components/Location";
import { PhotoGallery } from "./components/PhotoGallery";
import { RSVPForm } from "./components/RSVPForm";
import { GuestWishes } from "./components/GuestWishes";
import { DigitalGifts } from "./components/DigitalGifts";

const navItems = [
  { label: "Our Story", href: "#story" },
  { label: "The Two of Us", href: "#us" },
  { label: "Details", href: "#details" },
  { label: "Schedule", href: "#schedule" },
  { label: "Gallery", href: "#gallery" },
  { label: "RSVP", href: "#rsvp" },
];

function Nav({ visible }: { visible: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between"
          style={{ background: "rgba(240,233,216,0.92)", backdropFilter: "blur(8px)", borderBottom: "1px solid rgba(156,139,110,0.2)" }}
          initial={{ y: -64, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -64, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p style={{ fontFamily: "'Dancing Script', cursive", fontSize: "1.3rem", color: "#5C3D2E" }}>
            E &amp; S
          </p>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs tracking-widest uppercase hover:opacity-60 transition-opacity"
                style={{ fontFamily: "'Lato', sans-serif", color: "#5C3D2E", letterSpacing: "0.18em" }}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#rsvp"
              className="px-5 py-2 border text-xs tracking-widest uppercase"
              style={{ borderColor: "#5C3D2E", color: "#5C3D2E", fontFamily: "'Lato', sans-serif", letterSpacing: "0.18em" }}
            >
              RSVP
            </a>
          </div>

          {/* Mobile hamburger */}
          <button className="md:hidden flex flex-col gap-1.5" onClick={() => setOpen(o => !o)}>
            {[0, 1, 2].map(i => (
              <span key={i} className="block w-6 h-px" style={{ background: "#5C3D2E" }} />
            ))}
          </button>

          {/* Mobile menu */}
          <AnimatePresence>
            {open && (
              <motion.div
                className="absolute top-full left-0 right-0 py-6 px-6 flex flex-col gap-5 md:hidden"
                style={{ background: "rgba(240,233,216,0.98)", borderBottom: "1px solid rgba(156,139,110,0.2)" }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {navItems.map(item => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-xs tracking-widest uppercase"
                    style={{ fontFamily: "'Lato', sans-serif", color: "#5C3D2E", letterSpacing: "0.18em" }}
                  >
                    {item.label}
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}

function FloatingPapers() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {[
        { left: "8%", top: "20%", rotate: "-12deg", size: 32, delay: 0 },
        { left: "92%", top: "35%", rotate: "18deg", size: 24, delay: 1.2 },
        { left: "5%", top: "65%", rotate: "8deg", size: 20, delay: 2 },
        { left: "88%", top: "70%", rotate: "-20deg", size: 28, delay: 0.6 },
        { left: "50%", top: "5%", rotate: "5deg", size: 18, delay: 1.8 },
      ].map((p, i) => (
        <motion.div
          key={i}
          className="absolute opacity-5"
          style={{ left: p.left, top: p.top, width: p.size, height: p.size * 1.3, background: "#9C8B6E", transform: `rotate(${p.rotate})` }}
          animate={{ y: [0, -12, 0], rotate: [p.rotate, `${parseInt(p.rotate) + 5}deg`, p.rotate] }}
          transition={{ repeat: Infinity, duration: 4 + i, delay: p.delay, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

export default function App() {
  const [opened, setOpened] = useState(false);
  const [navVisible, setNavVisible] = useState(false);

  useEffect(() => {
    if (!opened) return;
    const handler = () => setNavVisible(window.scrollY > 80);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [opened]);

  return (
    <div
      className="min-h-screen"
      style={{ fontFamily: "'EB Garamond', serif" }}
    >
      <FloatingPapers />
      <Nav visible={navVisible} />

      {/* Hero always shown */}
      <HeroSection onOpen={() => setOpened(true)} />

      {/* Main invitation content reveals after opening */}
      <AnimatePresence>
        {opened && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            {/* Page turn reveal overlay */}
            <motion.div
              className="fixed inset-0 z-40 pointer-events-none"
              style={{ background: "linear-gradient(135deg, #F4EFE4 50%, transparent 50%)", transformOrigin: "top left" }}
              initial={{ scaleX: 1 }}
              animate={{ scaleX: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: "easeInOut" }}
            />

            <div id="story"><OurStory /></div>
            <div id="us"><BrideGroom /></div>
            <div id="details">
              <WeddingDetails />
              <Countdown />
            </div>
            <div id="schedule"><EventSchedule /></div>
            <Location />
            <div id="gallery"><PhotoGallery /></div>
            <div id="rsvp"><RSVPForm /></div>
            <GuestWishes />
            <DigitalGifts />

            {/* Footer */}
            <footer
              className="py-16 px-6 text-center relative overflow-hidden"
              style={{ background: "#2C2318" }}
            >
              <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")" }} />
              <div className="relative">
                <p style={{ fontFamily: "'Dancing Script', cursive", fontSize: "3rem", color: "#9C8B6E" }}>Elara &amp; Sebastian</p>
                <p className="mt-2" style={{ fontFamily: "'EB Garamond', serif", fontSize: "1rem", color: "#7A6152", fontStyle: "italic" }}>
                  October 18, 2025 · Chapel of the Golden Fields · Wiltshire
                </p>
                <div className="w-12 h-px mx-auto my-6" style={{ background: "#9C8B6E" }} />
                <p style={{ fontFamily: "'EB Garamond', serif", fontSize: "0.9rem", color: "#5C3D2E", fontStyle: "italic" }}>
                  "And I choose you. In the quiet and in the chaos. In the ordinary and the extraordinary. Every day, I choose you."
                </p>
                <p className="mt-8 text-xs tracking-widest uppercase" style={{ fontFamily: "'Lato', sans-serif", color: "#3C2D20", letterSpacing: "0.2em" }}>
                  Made with love · 2025
                </p>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
