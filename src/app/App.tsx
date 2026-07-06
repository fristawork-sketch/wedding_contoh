import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

import { HeroSection } from "./components/HeroSection";
import { BrideGroom } from "./components/BrideGroom";
import { WeddingDetails } from "./components/WeddingDetails";
import { Countdown } from "./components/Countdown";
import { EventSchedule } from "./components/EventSchedule";
import { Location } from "./components/Location";
import { PhotoGallery } from "./components/PhotoGallery";
import { RSVPForm } from "./components/RSVPForm";
import GuestWishes from "./components/GuestWishes";
import { DigitalGifts } from "./components/DigitalGifts";
import { MusicPlayer } from "./components/music"; // ✅ MUSIC IMPORT
import { Heart } from "lucide-react";



const navItems = [
  { label: "The Two of Us", href: "#us" },
  { label: "Galeri", href: "#gallery" },
  { label: "Konfirmasi Kehadiran", href: "#rsvp" },
  { label: "Details", href: "#details" },
  { label: "Jadwal", href: "#schedule" },
];

function Nav({ visible }: { visible: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between"
          style={{
            background: "rgba(240,233,216,0.92)",
            backdropFilter: "blur(8px)",
            borderBottom: "1px solid rgba(156,139,110,0.2)",
          }}
          initial={{ y: -64, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -64, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p style={{ fontFamily: "'Dancing Script', cursive", fontSize: "1.3rem", color: "#5C3D2E" }}>
            A & B
          </p>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs tracking-widest uppercase hover:opacity-60 transition-opacity"
                style={{
                  fontFamily: "'Lato', sans-serif",
                  color: "#5C3D2E",
                  letterSpacing: "0.18em",
                }}
              >
                {item.label}
              </a>
            ))}
          </div>

          <button className="md:hidden flex flex-col gap-1.5" onClick={() => setOpen(!open)}>
            {[0, 1, 2].map((i) => (
              <span key={i} className="block w-6 h-px" style={{ background: "#5C3D2E" }} />
            ))}
          </button>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}

function FloatingPapers() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className="absolute opacity-5"
          style={{
            left: `${i * 15}%`,
            top: `${i * 12}%`,
            width: 30,
            height: 40,
            background: "#9C8B6E",
            transform: `rotate(${i * 10}deg)`,
          }}
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
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, [opened]);

  return (
    <div className="min-h-screen" style={{ fontFamily: "'EB Garamond', serif" }}>

      {/* 🔥 MUSIC  */}
      <MusicPlayer />

      <FloatingPapers />
      <Nav visible={navVisible} />

      <HeroSection onOpen={() => setOpened(true)} />

      <AnimatePresence>
        {opened && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div id="us"><BrideGroom /></div>
            <div id="gallery"><PhotoGallery /></div>
            {/*<div id="schedule"><EventSchedule /></div>*/}
            <div id="details">
              <WeddingDetails />
              <Countdown />
            </div>
            <Location />
            <div id="rsvp"><RSVPForm /></div>
            <GuestWishes />
            <DigitalGifts />.



<footer
  className="py-16 text-center flex items-center justify-center gap-2"
  style={{ background: "#2C2318" }}
>
  <p style={{ color: "#9C8B6E" }}>ALDA</p>

  <Heart
    size={16}
    fill="#e45959"
    stroke="#000000"
  />

  <p style={{ color: "#9C8B6E" }}>BARA</p>
</footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}