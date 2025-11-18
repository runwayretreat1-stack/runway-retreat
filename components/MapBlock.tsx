export default function MapBlock() {
  return (
    <div className="rounded-2xl overflow-hidden border border-white/10">
      <div className="relative w-full aspect-video">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.985770461309!2d74.88279707536232!3d12.972761814852266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba357000d1e7f3b%3A0xa5aff75b7196670d!2sRunway%20Retreat!5e0!3m2!1sen!2sin!4v1763487597802!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map showing Runway Retreat near Bajpe"
        />
      </div>
      <div className="p-5 flex items-center justify-between">
        <div>
          <p className="font-medium">Runway Retreat</p>
          <p className="text-sm text-slate-700">Bajpe, Mangalore — Near Mangalore Airport</p>
        </div>
        <a
          className="rounded-xl bg-primary text-white px-4 py-2"
          href="https://maps.google.com/?q=Runway%20Retreat%20Bajpe"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on Google Maps
        </a>
      </div>
    </div>
  );
}
