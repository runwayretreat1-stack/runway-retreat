import Image from 'next/image';

const images = [
  '/assets/front-view-1.jpeg',
  '/assets/full-view.jpeg',
  '/assets/nameboard.jpeg',
  '/assets/hall-view-1.jpeg',
  '/assets/hall-view-2.jpeg',
  '/assets/hall-2.jpeg',
  '/assets/hall-3.jpeg',
  '/assets/bedroom-1.jpeg',
  '/assets/bedroom-2.jpeg',
  '/assets/bedroom-3.jpeg',
  '/assets/bathroom-4.jpeg',
  '/assets/washroom-1.jpeg',
  '/assets/washroom-2.jpeg',
  '/assets/washroom-3.jpeg'
];

export default function ImageMasonry() {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
      {images.map((src, i) => (
        <div key={src} className="mb-4 break-inside-avoid rounded-2xl overflow-hidden border border-white/10">
          <Image
            src={src}
            alt={`Runway Retreat gallery image ${i + 1}`}
            width={1200}
            height={800}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}
