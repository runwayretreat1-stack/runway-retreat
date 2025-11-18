"use client";
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y > lastY.current && y > 80) setHidden(true);
      else setHidden(false);
      lastY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
  }, [menuOpen]);

  return (
    <motion.header
      initial={false}
      animate={shouldReduce ? { y: 0 } : { y: hidden ? -80 : 0 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="sticky top-0 z-40"
    >
      <div className="glass border-b border-white/10 backdrop-blur-md">
        <nav className="container flex items-center justify-between h-16">
          <Link href="/" className="font-display text-xl" aria-label="Runway Retreat home">
            Runway Retreat
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link href="/rooms" className="hover:opacity-80">Stay</Link>
            <Link href="/gallery" className="hover:opacity-80">Gallery</Link>
            <Link href="/experiences" className="hover:opacity-80">Experiences</Link>
            <a href="/#amenities" className="hover:opacity-80">Amenities</a>
            <a href="/#reviews" className="hover:opacity-80">Reviews</a>
            <Link href="/contact" className="rounded-xl bg-accent text-white px-4 py-2 hover:opacity-95">Book Now</Link>
          </div>
          <button
            className="md:hidden rounded-xl border px-3 py-2"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            Menu
          </button>
        </nav>
      </div>
      {menuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="md:hidden fixed inset-0 bg-white/95 backdrop-blur-md p-6"
        >
          <div className="flex justify-between items-center mb-6">
            <span className="font-display text-xl">Menu</span>
            <button className="rounded-xl border px-3 py-2" onClick={() => setMenuOpen(false)} aria-label="Close menu">
              Close
            </button>
          </div>
          <div className="grid gap-4 text-lg">
            <Link href="/rooms" onClick={() => setMenuOpen(false)}>Stay</Link>
            <Link href="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link>
            <Link href="/experiences" onClick={() => setMenuOpen(false)}>Experiences</Link>
            <a href="/#amenities" onClick={() => setMenuOpen(false)}>Amenities</a>
            <a href="/#reviews" onClick={() => setMenuOpen(false)}>Reviews</a>
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="rounded-xl bg-accent text-white px-4 py-2 text-center">Book Now</Link>
          </div>
        </div>
      )}
    </motion.header>
  );
}
