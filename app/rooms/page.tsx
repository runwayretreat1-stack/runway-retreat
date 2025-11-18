import Image from 'next/image';
import RoomCard from '@/components/RoomCard';
import { rooms } from '@/data/rooms';

export const revalidate = 60;

const loungeShots = [
  { src: '/assets/hall-2.jpeg', caption: 'Family lounge that connects the bedrooms.' },
  { src: '/assets/hall-3.jpeg', caption: 'Extended hall for gatherings and movie nights.' }
];

const stayFacts = [
  { label: 'Bedrooms', value: '3 (2 queen + 1 twin)' },
  { label: 'Bathrooms', value: 'Ensuite + common washrooms' },
  { label: 'Guests', value: 'Ideal for families & crews up to 6' },
  { label: 'Spaces', value: 'Hall, dining, kitchenette, balcony sit-out' }
];

const bedroomDetails = [
  {
    title: 'Bedroom 1 — Front Queen',
    description: 'Attached bathroom, wardrobe, and workspace overlooking the greenery.',
    image: '/assets/bedroom-1.jpeg'
  },
  {
    title: 'Bedroom 2 — Garden Queen',
    description: 'Opens toward the sit-out, includes a wardrobe and plenty of cross ventilation.',
    image: '/assets/bedroom-2.jpeg'
  },
  {
    title: 'Bedroom 3 — Twin',
    description: 'Two single beds perfect for kids or friends, plus storage for long stays.',
    image: '/assets/bedroom-3.jpeg'
  }
];

export default function RoomsPage() {
  return (
    <div className="section">
      <div className="container space-y-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] items-start">
          <div>
            <h1 className="font-display text-4xl md:text-5xl mb-6">Entire Stay</h1>
            <p className="text-lg text-slate-700">
              We rent Runway Retreat as a single booking. Your group enjoys every space—three AC bedrooms, the
              airy hall, dining table, balcony sit-out, kitchenette, and each wash area.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {stayFacts.map((fact) => (
                <div key={fact.label} className="rounded-2xl border border-white/10 bg-white p-4 shadow-card">
                  <p className="text-xs uppercase tracking-wide text-slate-500">{fact.label}</p>
                  <p className="text-base font-medium text-slate-800">{fact.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {loungeShots.map((shot) => (
              <figure key={shot.src} className="rounded-2xl overflow-hidden border border-white/10 shadow-card bg-white flex flex-col">
                <Image
                  src={shot.src}
                  alt={shot.caption}
                  width={900}
                  height={600}
                  className="h-52 w-full object-cover"
                  loading="lazy"
                />
                <figcaption className="p-4 text-sm text-slate-700">{shot.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
        <div className="grid gap-6 max-w-4xl mx-auto">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
        <section className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2">
            <div>
              <h2 className="font-display text-3xl">Bedroom layout</h2>
              <p className="text-slate-700">Pick any room you like during your stay—they are all yours.</p>
            </div>
            <span className="text-sm uppercase tracking-wide text-slate-500">1 group at a time</span>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {bedroomDetails.map((detail) => (
              <figure key={detail.title} className="rounded-2xl overflow-hidden border border-white/10 shadow-card bg-white flex flex-col">
                <Image
                  src={detail.image}
                  alt={detail.title}
                  width={900}
                  height={600}
                  className="h-56 w-full object-cover"
                  loading="lazy"
                />
                <figcaption className="p-4">
                  <p className="font-medium">{detail.title}</p>
                  <p className="text-sm text-slate-700">{detail.description}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
