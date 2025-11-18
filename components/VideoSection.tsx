"use client";
import { useEffect, useRef, useState } from 'react';

function VideoCard({ src, poster, title }: { src: string; poster: string; title: string }) {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);

  return (
    <div>
      <button
        className="w-full overflow-hidden rounded-2xl border border-white/10 shadow-lg"
        onClick={() => setOpen(true)}
        aria-label={`Play ${title}`}
      >
        <img src={poster} alt="Video poster" className="w-full h-56 object-cover" />
      </button>
      <dialog ref={dialogRef} className="rounded-xl p-0 w-11/12 max-w-3xl">
        <div className="relative">
          <video controls className="w-full h-auto" poster={poster}>
            <source src={src} type="video/mp4" />
          </video>
          <button
            onClick={() => setOpen(false)}
            className="absolute top-2 right-2 rounded bg-black/70 text-white px-2 py-1"
            aria-label="Close video"
          >
            ✕
          </button>
        </div>
      </dialog>
    </div>
  );
}

export default function VideoSection() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <VideoCard src="/videos/tour-1.mp4" poster="/images/video-1-poster.svg" title="Courtyard" />
      <VideoCard src="/videos/tour-2.mp4" poster="/images/video-2-poster.svg" title="Rooms" />
    </div>
  );
}

