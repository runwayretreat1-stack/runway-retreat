"use client";
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Whole-home privacy',
    text: 'One reservation, your group only—no shared spaces.',
    icon: '🏡'
  },
  {
    title: '3 AC bedrooms & fast Wi‑Fi',
    text: 'Comfortable work and rest for everyone.',
    icon: '🛏️'
  },
  {
    title: 'Airport-close pickup',
    text: 'Reach us within minutes of landing.',
    icon: '✈️'
  },
  {
    title: 'Private sit-out & garden views',
    text: 'Greenery all around.',
    icon: '🌿'
  },
  {
    title: 'Indoor games',
    text: 'Carrom, Ludo, UNO, and Snake & Ladder for cozy evenings.',
    icon: '🎲'
  },
  {
    title: 'Outdoor games',
    text: 'Cricket and badminton gear to stretch out in the yard.',
    icon: '🏸'
  },
  {
    title: 'Home-style breakfast (on request)',
    text: 'Ask us for the day’s menu.',
    icon: '🍳'
  },
  {
    title: 'Parking & 24/7 support',
    text: 'We’re always a call away.',
    icon: '🅿️'
  }
];

export default function FeatureIcons() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {features.map((f) => (
        <motion.div
          key={f.title}
          whileHover={{ y: -2 }}
          className="rounded-2xl border border-white/10 shadow-lg p-5 bg-white/80 backdrop-blur-md"
        >
          <div aria-hidden className="text-2xl">{f.icon}</div>
          <h3 className="mt-2 font-medium">{f.title}</h3>
          <p className="text-slate-700 text-sm">{f.text}</p>
        </motion.div>
      ))}
    </div>
  );
}
