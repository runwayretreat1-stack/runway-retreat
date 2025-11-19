"use client";
import { useEffect, useRef, useState } from 'react';

function VideoCard({
  src,
  poster,
  title,
  description
}: {
  src: string;
  poster: string;
  title: string;
  description: string;
}) {
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
        type="button"
        className="group relative block w-full overflow-hidden rounded-[28px] border border-white/10 bg-slate-900 text-left shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-2xl focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        onClick={() => setOpen(true)}
        aria-label={`Play ${title} video`}
      >
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <video
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            poster={poster}
            muted
            loop
            autoPlay
            playsInline
            preload="metadata"
          >
            <source src={src} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" aria-hidden />
          <div className="pointer-events-none absolute inset-0 flex flex-col justify-between p-5 text-white">
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.4em] text-white/70">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" aria-hidden />
              Live tour
            </span>
            <div>
              <p className="font-display text-2xl">{title}</p>
              <p className="mt-1 text-sm text-white/80">{description}</p>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <span className="relative inline-flex h-16 w-16 items-center justify-center">
              <span className="absolute h-16 w-16 rounded-full bg-primary/40 blur-lg opacity-0 transition duration-300 group-hover:opacity-100" aria-hidden />
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-primary shadow-xl transition duration-300 group-hover:scale-110">
                <svg
                  className="h-6 w-6 -translate-x-px fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </span>
          </div>
        </div>
      </button>
      <dialog
        ref={dialogRef}
        className="w-[min(92vw,900px)] rounded-2xl border border-white/10 bg-white/95 p-0 backdrop:bg-black/60 backdrop:backdrop-blur-sm"
      >
        <div className="relative overflow-hidden rounded-2xl">
          <video controls className="h-full w-full" poster={poster}>
            <source src={src} type="video/mp4" />
          </video>
          <button
            onClick={() => setOpen(false)}
            className="absolute top-3 right-3 rounded-full bg-black/70 px-3 py-1 text-sm font-semibold text-white transition hover:bg-black"
            aria-label="Close video"
          >
            Close
          </button>
        </div>
      </dialog>
    </div>
  );
}

export default function VideoSection() {
  const videos = [
    {
      src: '/assets/videos/Video-1.mp4',
      poster: '/images/video-1-poster.svg',
      title: 'Courtyard Fly-through',
      description: 'Step inside from the gate to the lounge and catch the morning light.'
    },
    {
      src: '/assets/videos/video-2.mp4',
      poster: '/images/video-2-poster.svg',
      title: 'Bedrooms & Wash Areas',
      description: 'Tour the private suites, ensuite washrooms, and cozy reading corners.'
    }
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {videos.map((video) => (
        <VideoCard key={video.title} {...video} />
      ))}
    </div>
  );
}
