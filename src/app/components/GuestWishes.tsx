import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "@/firebase";

interface Wish {
  id: string;
  nama: string;
  konfirmasi: string;
  pesan: string;
  date?: any;
}

export default function GuestWishes() {
  const [nama, setNama] = useState("");
  const [konfirmasi, setKonfirmasi] = useState("");
  const [pesan, setPesan] = useState("");
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const q = query(collection(db, "aldabara"), orderBy("date", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data: Wish[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Wish, "id">),
      }));
      setWishes(data);
    });

    return () => unsubscribe();
  }, []);

  const formatTanggal = (date: any) => {
    if (!date) return "-";
    return new Date(date.seconds * 1000).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!nama.trim() || !konfirmasi.trim() || !pesan.trim()) {
      alert("Mohon lengkapi semua data terlebih dahulu.");
      return;
    }

    try {
      setIsSubmitting(true);
      await addDoc(collection(db, "aldabara"), {
        nama,
        konfirmasi,
        pesan,
        date: serverTimestamp(),
      });

      setNama("");
      setKonfirmasi("");
      setPesan("");

      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    } catch (error) {
      console.error("Gagal mengirim ucapan:", error);
      alert("Terjadi kesalahan saat mengirim ucapan. Silakan coba lagi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="min-h-screen w-full py-16 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#EDE5D4" }}
    >
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl sm:text-4xl font-serif tracking-wide text-neutral-800 mb-3">
            Guest Wishes
          </h1>
          <p className="text-neutral-600 text-sm sm:text-base italic">
            Leave your wishes and prayers for the bride and groom.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl shadow-md p-6 sm:p-8 mb-10 space-y-5"
          style={{ backgroundColor: "#F8F3E8" }}
        >
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              Nama
            </label>
            <input
              type="text"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              placeholder="Masukkan nama Anda"
              className="w-full rounded-lg border border-neutral-300 bg-white/70 px-4 py-2.5 text-sm text-neutral-800 outline-none focus:ring-2 focus:ring-neutral-400 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              Konfirmasi Kehadiran
            </label>
            <select
              value={konfirmasi}
              onChange={(e) => setKonfirmasi(e.target.value)}
              className="w-full rounded-lg border border-neutral-300 bg-white/70 px-4 py-2.5 text-sm text-neutral-800 outline-none focus:ring-2 focus:ring-neutral-400 transition"
            >
              <option value="">Pilih Kehadiran</option>
              <option value="Hadir">Hadir</option>
              <option value="Tidak Hadir">Tidak Hadir</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              Ucapan
            </label>
            <textarea
              value={pesan}
              onChange={(e) => setPesan(e.target.value)}
              placeholder="Tuliskan ucapan dan doa Anda..."
              rows={4}
              className="w-full rounded-lg border border-neutral-300 bg-white/70 px-4 py-2.5 text-sm text-neutral-800 outline-none focus:ring-2 focus:ring-neutral-400 transition resize-none"
            />
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full rounded-lg bg-neutral-800 text-white py-3 text-sm font-medium tracking-wide transition disabled:opacity-60"
          >
            {isSubmitting ? "Mengirim..." : "Kirim Ucapan"}
          </motion.button>

          <AnimatePresence>
            {showSuccess && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="text-center text-sm text-neutral-700 font-medium"
              >
                Ucapan berhasil dikirim ❤️
              </motion.p>
            )}
          </AnimatePresence>
        </motion.form>

        {/* List of Wishes */}
        <div className="space-y-4">
          <AnimatePresence>
            {wishes.map((wish, index) => (
              <motion.div
                key={wish.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                className="rounded-2xl shadow-sm p-5 sm:p-6"
                style={{ backgroundColor: "#F8F3E8" }}
              >
                <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                  <h3 className="font-semibold text-neutral-800">
                    {wish.nama}
                  </h3>
                  <span
                    className={`text-xs px-3 py-1 rounded-full font-medium ${
                      wish.konfirmasi === "Hadir"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {wish.konfirmasi === "Hadir" ? "Hadir" : "Tidak Hadir"}
                  </span>
                </div>
                <p className="text-neutral-700 text-sm leading-relaxed mb-3">
                  {wish.pesan}
                </p>
                <p className="text-xs text-neutral-500 italic">
                  {formatTanggal(wish.date)}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>

          {wishes.length === 0 && (
            <p className="text-center text-neutral-500 text-sm italic py-6">
              Belum ada ucapan. Jadilah yang pertama mengirim ucapan!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
