import { useState } from "react";
import BookingModal from "../components/BookingModal";
import { BRAND } from "../lib/theme";
import { Link } from "react-router-dom";

export default function LandingPage() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
        <div className="container-max py-14 sm:py-20 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <p className="kicker mb-3">Intuitive Massage & Bodywork</p>
            <h1 className="h1 mb-6">
              Elevated, personalized bodywork—in studio or in your home.
            </h1>
            <p className="text-lg text-slate max-w-prose">
              With over 17 years of professional experience, Alison blends Deep Tissue, Swedish,
              Myofascial Release, Sports Massage, Reflexology, and Reiki to craft a session tailored
              to your body’s needs. :contentReference[oaicite:1]{index=1}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button onClick={() => setOpen(true)} className="btn-primary">Book Now</button>
              <a href="#contact" className="btn-outline">Call {BRAND.phone}</a>
            </div>
            <div className="mt-6 text-sm text-slate">
              * Premium essential oils and CBD/THC salves available to enhance therapeutic benefits. :contentReference[oaicite:2]{index=2}
            </div>
          </div>

          <div className="relative">
            <div className="card">
              <img
                src="/everyday-essentials-logo.png"
                alt="Everyday Essentials emblem"
                className="mx-auto w-56 sm:w-64"
              />
              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-ink/90">
                <li className="p-3 rounded-lg bg-offwhite border border-accent/30">Deep Tissue</li>
                <li className="p-3 rounded-lg bg-offwhite border border-accent/30">Swedish</li>
                <li className="p-3 rounded-lg bg-offwhite border border-accent/30">Myofascial Release</li>
                <li className="p-3 rounded-lg bg-offwhite border border-accent/30">Sports Massage</li>
                <li className="p-3 rounded-lg bg-offwhite border border-accent/30">Reflexology</li>
                <li className="p-3 rounded-lg bg-offwhite border border-accent/30">Reiki</li>
              </ul>
              <p className="text-xs mt-4 text-slate text-center">
                Studio: Old Town Arvada • Mobile: Denver Metro (by request) :contentReference[oaicite:3]{index=3}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES PEEK */}
      <section className="container-max py-12">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Therapeutic Massage",
              desc:
                "A personalized blend targeting tension and restoring balance.",
            },
            {
              title: "Sports / Recovery",
              desc: "Pre-event, between sets, or post-performance—keep your body in tune.",
            },
            {
              title: "In-Home Sessions",
              desc: "The studio experience, brought to you. Limited availability.",
            },
          ].map((s) => (
            <div key={s.title} className="card">
              <h3 className="h2 mb-2">{s.title}</h3>
              <p className="text-slate">{s.desc}</p>
              <div className="mt-4">
                <button onClick={() => setOpen(true)} className="btn-outline">Book</button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-right mt-4">
          <Link to="/services" className="text-primary hover:underline">See all services →</Link>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-white border-y border-accent/20">
        <div className="container-max py-14 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="h2 mb-3">Meet Alison Clukey, LMT</h2>
            <p className="text-slate leading-relaxed">
              Nationally certified Licensed Massage Therapist with 17+ years in therapeutic and holistic bodywork.
              Graduate of The Connecticut Center for Massage Therapy; member of the AMTA. :contentReference[oaicite:4]{index=4}
            </p>
            <div className="mt-6">
              <button onClick={() => setOpen(true)} className="btn-primary">Schedule with Alison</button>
            </div>
          </div>
          <div className="card">
            <ul className="space-y-2 text-ink/90">
              <li>• Boutique studio in historic Old Town Arvada</li>
              <li>• CPTG essential oils; premium CBD / THC salves (optional) :contentReference[oaicite:5]{index=5}</li>
              <li>• On-site / backstage options for touring artists (by arrangement) :contentReference[oaicite:6]{index=6}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="container-max py-14">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card">
            <h3 className="h2 mb-4">Studio</h3>
            <p className="text-slate">
              {BRAND.addressLines.join(", ")}
            </p>
            <p className="mt-2">
              <a className="text-primary hover:underline" href={`tel:${BRAND.phone.replace(/[^0-9]/g,"")}`}>
                {BRAND.phone}
              </a>
            </p>
            <p className="text-xs text-slate mt-2">
              Address & phone from current site. :contentReference[oaicite:7]{index=7}
            </p>
          </div>
          <div className="card">
            <h3 className="h2 mb-4">Ready to feel better?</h3>
            <p className="text-slate">
              Questions or special requests? Send a note and we’ll get back quickly.
            </p>
            <div className="mt-4 flex gap-3">
              <button onClick={() => setOpen(true)} className="btn-primary">Book Now</button>
              <a className="btn-outline" href="mailto:info@example.com">Email Us</a>
            </div>
          </div>
        </div>
      </section>

      <BookingModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
