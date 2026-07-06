import { useState } from "react";

const DOMAIN = "https://aldabara-ten.vercel.app";

function slugify(name: string) {
  return encodeURIComponent(name.trim()).replace(/%20/g, "+");
}

export default function GuestLinkGenerator() {
  const [namesInput, setNamesInput] = useState("");
  const [links, setLinks] = useState<{ name: string; link: string }[]>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleGenerate = () => {
    const names = namesInput
      .split("\n")
      .map((n) => n.trim())
      .filter(Boolean);

    const generated = names.map((name) => ({
      name,
      link: `${DOMAIN}/?to=${slugify(name)}`,
    }));

    setLinks(generated);
  };

  const handleCopy = (link: string, index: number) => {
    navigator.clipboard.writeText(link);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1500);
  };

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6" style={{ background: "#F0E9D8" }}>
      <div className="max-w-xl mx-auto">
        <h1 className="text-2xl font-semibold mb-1 text-neutral-800">
          Generator Link Tamu Undangan
        </h1>
        <p className="text-sm text-neutral-600 mb-6">
          Masukkan nama tamu, satu nama per baris. Link berbeda akan dibuat
          otomatis untuk tiap tamu.
        </p>

        <textarea
          value={namesInput}
          onChange={(e) => setNamesInput(e.target.value)}
          rows={6}
          placeholder={"Budi Santoso\nIbu Siti\nKeluarga Bpk. Ahmad"}
          className="w-full rounded-lg border border-neutral-300 bg-white/80 px-4 py-3 text-sm text-neutral-800 outline-none focus:ring-2 focus:ring-neutral-400 resize-none mb-4"
        />

        <button
          onClick={handleGenerate}
          className="w-full rounded-lg bg-neutral-800 text-white py-3 text-sm font-medium mb-8"
        >
          Buat Link
        </button>

        {links.length === 0 ? (
          <p className="text-sm text-neutral-500 italic text-center">
            Belum ada link. Masukkan nama tamu lalu klik "Buat Link".
          </p>
        ) : (
          <div className="space-y-3">
            {links.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between gap-3 rounded-lg border border-neutral-300 bg-white/70 px-4 py-3"
              >
                <div className="min-w-0">
                  <p className="text-sm font-medium text-neutral-800 truncate">
                    {item.name}
                  </p>
                  <p className="text-xs text-neutral-500 truncate">
                    {item.link}
                  </p>
                </div>
                <button
                  onClick={() => handleCopy(item.link, i)}
                  className="flex-shrink-0 text-xs px-3 py-1.5 rounded-md border border-neutral-400 text-neutral-700 hover:bg-neutral-100"
                >
                  {copiedIndex === i ? "Tersalin" : "Salin"}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
