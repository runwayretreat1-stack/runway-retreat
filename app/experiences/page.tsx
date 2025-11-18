import Image from 'next/image';
import { experiences } from '@/data/experiences';

export const revalidate = 120;

export default function ExperiencesPage() {
  return (
    <div className="section">
      <div className="container">
        <h1 className="font-display text-4xl md:text-5xl mb-6">Experiences</h1>
        <p className="text-lg text-slate-700 mb-8">
          Bajpe puts you minutes from beaches, heritage chapels, and verdant parks.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {experiences.map((item) => (
            <article key={item.slug} className="rounded-2xl overflow-hidden border border-white/10 shadow-card">
              <Image
                src={item.image}
                alt={item.alt}
                width={1200}
                height={800}
                className="w-full h-56 object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <h2 className="font-display text-2xl mb-2">{item.title}</h2>
                <p className="text-slate-700 mb-3">{item.blurb}</p>
                <p className="text-sm text-slate-600 mb-4">Best time: {item.bestTime}</p>
                <a
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                  href={item.directions}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Get directions to ${item.title}`}
                >
                  Get directions →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

