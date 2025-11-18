import Link from 'next/link';

export default function CTASection() {
  return (
    <div className="rounded-2xl bg-primary text-white p-8 flex flex-col md:flex-row items-center justify-between gap-4">
      <div>
        <h3 className="font-display text-2xl">Ready to reserve the whole home?</h3>
        <p className="text-white/80">One booking = all 3 bedrooms, hall, dining, and sit-out to yourself.</p>
      </div>
      <div className="flex gap-3">
        <Link href="/contact" className="rounded-xl bg-accent text-white px-5 py-3 hover:opacity-95">
          Check Availability
        </Link>
        <Link href="/experiences" className="rounded-xl bg-white/20 text-white px-5 py-3 hover:bg-white/30">
          Explore Experiences
        </Link>
      </div>
    </div>
  );
}
