import ImageMasonry from '@/components/ImageMasonry';

export default function GalleryPage() {
  return (
    <div className="section">
      <div className="container">
        <h1 className="font-display text-4xl md:text-5xl mb-6">Gallery</h1>
        <p className="text-lg text-slate-700 mb-8">A glimpse into our spaces and surroundings.</p>
        <ImageMasonry />
      </div>
    </div>
  );
}

