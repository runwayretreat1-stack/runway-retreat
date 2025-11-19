"use client";
import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  const shouldReduce = useReducedMotion();
  const parent = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.08 }
    }
  };
  const child = {
    hidden: { opacity: 0, y: shouldReduce ? 0 : 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } }
  };

  return (
    <section className="relative h-[70vh] min-h-[420px] w-full overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster="/images/hero-poster.svg"
        aria-label="Runway Retreat walkthrough video"
      >
        <source src="/assets/videos/Video-1.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative container h-full flex items-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          variants={parent}
          className="max-w-2xl text-white"
        >
          <motion.h1 variants={child} className="font-display text-4xl md:text-6xl">
            Runway Retreat — Your Calm Landing Near Bajpe
          </motion.h1>
          <motion.p variants={child} className="mt-4 text-lg md:text-xl text-gray-100">
            A private 3-bedroom homestay minutes from Mangalore Airport—one booking gives your group
            the whole building, lush views, and easy access to beaches & heritage spots.
          </motion.p>
          <motion.div variants={child} className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-xl bg-accent text-white px-5 py-3 hover:opacity-95">
              Check Availability
            </Link>
            <Link href="/experiences" className="rounded-xl bg-white/90 text-ink px-5 py-3 hover:bg-white">
              Explore Experiences
            </Link>
            <a href="#walkthrough" className="rounded-xl bg-white/20 text-white px-5 py-3 hover:bg-white/30">
              Watch Walkthrough
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
