"use client";
import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { Review } from '@/types';

export default function TestimonialCarousel({ items }: { items: Review[] }) {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    intervalRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, 3500);
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, [items.length, reduced]);

  return (
    <div
      onMouseEnter={() => {
        if (intervalRef.current) window.clearInterval(intervalRef.current);
      }}
      onMouseLeave={() => {
        if (!reduced)
          intervalRef.current = window.setInterval(() => {
            setIndex((i) => (i + 1) % items.length);
          }, 3500);
      }}
      className="relative overflow-hidden"
    >
      <div className="h-40">
        {items.map((r, i) => (
          <motion.blockquote
            key={r.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: i === index ? 1 : 0, y: i === index ? 0 : -12 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className={`absolute inset-0 p-4 ${i === index ? 'pointer-events-auto' : 'pointer-events-none'}`}
            aria-hidden={i !== index}
          >
            <p className="text-lg">“{r.quote}”</p>
            <footer className="mt-2 text-sm text-slate-700">— {r.name}, {r.when}</footer>
          </motion.blockquote>
        ))}
      </div>
      <div className="mt-3 flex gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to testimonial ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full ${i === index ? 'bg-primary' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
}

