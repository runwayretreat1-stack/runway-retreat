export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-gray-100/60">
      <div className="container py-10 grid gap-8 md:grid-cols-4 text-sm">
        <div>
          <p className="font-display text-xl mb-2">Runway Retreat</p>
          <p className="text-slate-700">Bajpe, Mangalore, Karnataka, India</p>
          <p className="text-slate-700">Phone: +91 9113943697</p>
          <p className="text-slate-700">Email: runwayretreat1@gmail.com</p>
        </div>
        <div>
          <p className="font-medium mb-2">Quick Links</p>
          <ul className="space-y-1">
            <li><a className="hover:underline" href="/rooms">Stay</a></li>
            <li><a className="hover:underline" href="/gallery">Gallery</a></li>
            <li><a className="hover:underline" href="/experiences">Experiences</a></li>
            <li><a className="hover:underline" href="/contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <p className="font-medium mb-2">Social</p>
          <ul className="space-y-1">
            <li><a className="hover:underline" href="#">Instagram</a></li>
            <li><a className="hover:underline" href="#">Facebook</a></li>
          </ul>
        </div>
        <div>
          <p className="font-medium mb-2">Maps</p>
          <a
            className="inline-block rounded-xl bg-primary text-white px-4 py-2"
            href="https://maps.google.com/?q=Runway%20Retreat%20Bajpe"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Google Maps
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-slate-600">
        © {new Date().getFullYear()} Runway Retreat. All rights reserved.
      </div>
    </footer>
  );
}
