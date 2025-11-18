"use client";
import Image from 'next/image';
import { useState } from 'react';

export default function ContactPage() {
  const [status, setStatus] = useState<string | null>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const phone = String(data.get('phone') || '').trim();
    const email = String(data.get('email') || '').trim();
    const checkin = String(data.get('checkin') || '').trim();
    const checkout = String(data.get('checkout') || '').trim();
    const guests = String(data.get('guests') || '').trim();
    const notes = String(data.get('message') || '').trim();
    if (!name || !phone || !email) {
      setStatus('Please fill required fields.');
      return;
    }
    const text = encodeURIComponent(
      [
        'Hello Runway Retreat, I would like to check availability.',
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Email: ${email}`,
        `Dates: ${checkin || '—'} -> ${checkout || '—'}`,
        `Guests: ${guests || '—'}`,
        `Message: ${notes || '—'}`,
        '— Sent from website'
      ].join('\n')
    );
    const whatsappUrl = `https://wa.me/919113943697?text=${text}`;
    window.open(whatsappUrl, '_blank');
    setStatus('Opening WhatsApp… please send the message to finish.');
    form.reset();
  }

  return (
    <div className="section">
      <div className="container grid gap-10 lg:grid-cols-[minmax(0,1fr)_380px]">
        <div>
          <h1 className="font-display text-4xl md:text-5xl mb-6">Contact & Booking</h1>
          <p className="text-lg text-slate-700">
            Tell us your dates and guest count. We’ll respond quickly.
          </p>
          <p className="text-sm text-slate-600 mb-8">
            We accept one booking at a time—the full three-bedroom house (hall, dining, wash areas, and sit-out)
            is exclusively yours.
          </p>

          <form onSubmit={onSubmit} className="space-y-4" noValidate>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-sm mb-1" htmlFor="name">Name*</label>
                <input id="name" name="name" required className="w-full rounded-xl border p-3" />
              </div>
              <div>
                <label className="block text-sm mb-1" htmlFor="phone">Phone*</label>
                <input id="phone" name="phone" required className="w-full rounded-xl border p-3" />
              </div>
            </div>
            <div>
              <label className="block text-sm mb-1" htmlFor="email">Email*</label>
              <input id="email" name="email" type="email" required className="w-full rounded-xl border p-3" />
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <label className="block text-sm mb-1" htmlFor="checkin">Check-in</label>
                <input id="checkin" name="checkin" type="date" className="w-full rounded-xl border p-3" />
              </div>
              <div>
                <label className="block text-sm mb-1" htmlFor="checkout">Check-out</label>
                <input id="checkout" name="checkout" type="date" className="w-full rounded-xl border p-3" />
              </div>
              <div>
                <label className="block text-sm mb-1" htmlFor="guests">Guests</label>
                <input id="guests" name="guests" type="number" min={1} defaultValue={2} className="w-full rounded-xl border p-3" />
              </div>
            </div>
            <div>
              <label className="block text-sm mb-1" htmlFor="message">Message</label>
              <textarea id="message" name="message" className="w-full rounded-xl border p-3" rows={4} />
            </div>
            {status && <p aria-live="polite" className="text-sm text-green-700">{status}</p>}
            <button type="submit" className="rounded-xl bg-accent text-white px-5 py-3 hover:opacity-95">
              WhatsApp Us
            </button>
          </form>
        </div>
        <div className="space-y-4">
          <figure className="rounded-3xl overflow-hidden border border-white/10 shadow-card">
            <Image
              src="/assets/full-view.jpeg"
              alt="Full exterior view of Runway Retreat"
              width={900}
              height={1200}
              className="h-80 w-full object-cover"
              loading="lazy"
            />
            <figcaption className="p-4 text-sm text-slate-700">Full view of the homestay along the private lane.</figcaption>
          </figure>
          <figure className="rounded-3xl overflow-hidden border border-white/10 shadow-card">
            <Image
              src="/assets/nameboard.jpeg"
              alt="Name board of Runway Retreat"
              width={900}
              height={600}
              className="h-60 w-full object-cover"
              loading="lazy"
            />
            <figcaption className="p-4 text-sm text-slate-700">Look for the name board right at the entrance gate.</figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}
