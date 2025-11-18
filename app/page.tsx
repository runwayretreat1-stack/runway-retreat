import Image from 'next/image';
import Hero from '@/components/Hero';
import FeatureIcons from '@/components/FeatureIcons';
import CTASection from '@/components/CTASection';
import RoomCard from '@/components/RoomCard';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import VideoSection from '@/components/VideoSection';
import Script from 'next/script';
import MapBlock from '@/components/MapBlock';
import { rooms } from '@/data/rooms';
import { reviews } from '@/data/reviews';

const loungeImages = [
  {
    src: '/assets/hall-view-1.jpeg',
    caption: 'Hallway drenched in natural light with relaxed seating.'
  },
  {
    src: '/assets/hall-view-2.jpeg',
    caption: 'Open living space that flows into the dining nook.'
  }
];

const washroomImages = [
  { src: '/assets/bathroom-4.jpeg', caption: 'Primary bathroom with a glass shower and clean lines.' },
  { src: '/assets/washroom-1.jpeg', caption: 'Ensuite dressed in warm tiles and thoughtful lighting.' },
  { src: '/assets/washroom-2.jpeg', caption: 'Fresh vanity stocked with essentials for every guest.' },
  { src: '/assets/washroom-3.jpeg', caption: 'Spacious wash area with ventilation and storage.' }
];

const stayHighlights = [
  '3 AC bedrooms (queen + queen + twin) with wardrobes and blackout curtains.',
  'Ensuite and common washrooms with pressure showers, geysers, and storage.',
  'Large hall, dining table, and balcony sit-out reserved only for your group.',
  'Kitchenette with fridge, microwave, and essentials for quick bites or tea.'
];

export default function HomePage() {
  return (
    <div className="">
      <Hero />

      <section className="section">
        <div className="container grid gap-6 lg:grid-cols-[1.1fr_0.9fr] items-stretch">
          <div className="space-y-4">
            <p className="text-sm font-medium uppercase tracking-wide text-primary">Spaces</p>
            <h2 className="font-display text-3xl md:text-4xl">A first look at Runway Retreat</h2>
            <p className="text-slate-700 max-w-2xl">
              The entire three-bedroom home is rented as one unit, so the hall and dining area stay private for
              your crew from touchdown to checkout. Here’s the front elevation and glimpses of the sunlit hall as
              you enter.
            </p>
            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-card">
              <Image
                src="/assets/full-view.jpeg"
                alt="Front view of Runway Retreat with garden and gate"
                width={1200}
                height={900}
                className="h-[360px] w-full object-cover"
                priority
              />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {loungeImages.map((item) => (
              <figure key={item.src} className="rounded-3xl overflow-hidden border border-white/10 shadow-card flex flex-col">
                <Image
                  src={item.src}
                  alt={item.caption}
                  width={900}
                  height={600}
                  className="h-56 w-full object-cover"
                  loading="lazy"
                />
                <figcaption className="p-4 text-sm text-slate-700">{item.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="amenities" className="section">
        <div className="container">
          <h2 className="font-display text-3xl md:text-4xl mb-6">Amenities</h2>
          <FeatureIcons />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="flex items-end justify-between mb-4">
            <h2 className="font-display text-3xl md:text-4xl">Stay Overview</h2>
            <a className="text-primary hover:underline" href="/rooms" aria-label="See full stay details">
              See full details
            </a>
          </div>
          <p className="text-slate-700 mb-6">
            We host only one booking at a time. Your reservation unlocks all three bedrooms, the shared hall and
            dining, plus the ensuite and common wash areas with the sit-out.
          </p>
          <div className="grid gap-6 max-w-3xl mx-auto">
            {rooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
          <ul className="mt-6 grid gap-3 md:grid-cols-2">
            {stayHighlights.map((item) => (
              <li key={item} className="rounded-2xl border border-white/10 bg-white p-4 shadow-card text-sm text-slate-700">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
            <div>
              <h2 className="font-display text-3xl md:text-4xl">Ensuite & Wash Areas</h2>
              <p className="text-slate-700">Spotless bathrooms stocked with essentials for long or short stays.</p>
            </div>
            <span className="text-sm uppercase tracking-wide text-slate-500">Actual photos</span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {washroomImages.map((item) => (
              <figure key={item.src} className="rounded-2xl overflow-hidden border border-white/10 shadow-card bg-white flex flex-col">
                <Image
                  src={item.src}
                  alt={item.caption}
                  width={800}
                  height={600}
                  className="h-48 w-full object-cover"
                  loading="lazy"
                />
                <figcaption className="p-4 text-sm text-slate-700">{item.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="walkthrough" className="section">
        <div className="container">
          <VideoSection />
        </div>
      </section>

      <section id="reviews" className="section">
        <div className="container">
          <h2 className="font-display text-3xl md:text-4xl mb-6">What Guests Say</h2>
          <TestimonialCarousel items={reviews} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <CTASection />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <MapBlock />
        </div>
      </section>
      <Script id="ld-lodging" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LodgingBusiness',
          name: 'Runway Retreat',
          url: 'https://runwayretreat.example.com',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Bajpe',
            addressRegion: 'Karnataka',
            addressCountry: 'IN'
          },
          telephone: '+919113943697',
          geo: { '@type': 'GeoCoordinates', latitude: 12.961, longitude: 74.891 },
          image: ['https://runwayretreat.example.com/images/og-home.png']
        })}
      </Script>
    </div>
  );
}
