"use client";
import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import type { Room } from '@/types';

export default function RoomCard({ room }: { room: Room }) {
  const shouldReduce = useReducedMotion();
  return (
    <motion.article
      initial={{ opacity: 0, scale: shouldReduce ? 1 : 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="rounded-2xl overflow-hidden border border-white/10 shadow-card bg-white"
    >
      <Image
        src={room.image}
        alt={room.alt}
        width={800}
        height={600}
        className="w-full h-48 object-cover"
        loading="lazy"
      />
      <div className="p-5">
        <h3 className="font-medium text-lg">{room.name}</h3>
        <p className="text-sm text-slate-700">{room.description}</p>
        {room.note && <p className="mt-2 text-sm font-medium text-primary">{room.note}</p>}
        <div className="mt-3 flex flex-wrap gap-2">
          {room.amenities.map((a) => (
            <span key={a} className="rounded-full bg-gray-100 px-3 py-1 text-xs">
              {a}
            </span>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between">
          {/* <div className="text-slate-700">
            <span className="font-medium">₹{room.price}</span>
            <span className="text-sm">/night — entire home</span>
          </div> */}
          <Link className="text-primary hover:underline" href="/contact">View Details</Link>
        </div>
      </div>
    </motion.article>
  );
}
