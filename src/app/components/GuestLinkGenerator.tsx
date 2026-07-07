import { useState } from "react";

const DOMAIN = "https://aldabarawedding.vercel.app";

// Nama pasangan pengantin — ganti sesuai kebutuhan
const COUPLE_NAME = "Alda ＆ Bara";

function slugify(name: string) {
  return encodeURIComponent(name.trim()).replace(/%20/g, "+");
}

function buildMessage(guestName: string, link: string) {
  return `Salam Sejahtera.

Kepada Yth. Bapak/Ibu/Saudara/i
${guestName}

Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami:

${COUPLE_NAME}

Untuk informasi lengkap mengenai acara, silakan kunjungi tautan undangan berikut:
${link}

Merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.

Mohon maaf, undangan disampaikan melalui pesan ini. Terima kasih atas perhatian dan doanya.

Kami yang berbahagia,
${COUPLE_NAME}`;
}

export default function GuestLinkGenerator() {
  const [namesInput, setNamesInput] = useState("");
  const [links, setLinks] = useState<
    { name: string; link: string; message: string }[]
  >([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [copiedMsgIndex, setCopiedMsgIndex] = useState<number | null>(null);

  const handleGenerate = () => {
    const names = namesInput
      .split("\n")
      .map((n) => n.trim())
      .filter(Boolean);

    const generated = names.map((name) => {
      const link = `${DOMAIN}/?to=${slugify(name)}`;
      return {
        name,
        link,
        message: buildMessage(name, link),
      };
    });

    setLinks(generated);
  };

  const handleCopyLink = (link: string, index: number) => {
    navigator.clipboard.writeText(link);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1500);
  };

  const handleCopyMessage = (message: string, index: number) => {
    navigator.clipboard.writeText(message);
    setCopiedMsgIndex(index);
    setTimeout(() => setCopiedMsgIndex(null), 1500);
  };

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6" style={{ background: "#F0E9D8" }}>
      <div className="max-w-xl mx-auto">
        <h1 className="text-2xl font-semibold mb-1 text-neutral-800">
          Generator Link Tamu Undangan
        </h1>
        <p className="text-sm text-neutral-600 mb-6">
          Masukkan nama tamu, satu nama per baris. Link dan teks undangan
          lengkap akan dibuat otomatis untuk tiap tamu.
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
          <div className="space-y-6">
            {links.map((item, i) => (
              <div
                key={i}
                className="rounded-lg border border-neutral-300 bg-white/70 px-4 py-4"
              >
                {/* Nama tamu + link (link ditampilkan center) */}
                <div className="flex items-center justify-between gap-3 mb-3">
                  <p className="text-sm font-medium text-neutral-800 truncate">
                    {item.name}
                  </p>
                  <button
                    onClick={() => handleCopyLink(item.link, i)}
                    className="flex-shrink-0 text-xs px-3 py-1.5 rounded-md border border-neutral-400 text-neutral-700 hover:bg-neutral-100"
                  >
                    {copiedIndex === i ? "Tersalin" : "Salin Link"}
                  </button>
                </div>
                <p className="text-xs text-neutral-500 text-center mb-4 break-all">
                  {item.link}
                </p>

                {/* Preview teks undangan lengkap */}
                <div className="rounded-md bg-neutral-50 border border-neutral-200 px-3 py-3 mb-3">
                  <pre className="text-xs text-neutral-700 whitespace-pre-wrap font-sans leading-relaxed">
                    {item.message}
                  </pre>
                </div>

                <button
                  onClick={() => handleCopyMessage(item.message, i)}
                  className="w-full text-xs px-3 py-2 rounded-md bg-neutral-800 text-white hover:bg-neutral-700"
                >
                  {copiedMsgIndex === i ? "Pesan Tersalin" : "Salin Teks Undangan"}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
