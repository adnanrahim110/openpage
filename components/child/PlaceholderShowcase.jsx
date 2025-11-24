"use client";

import Title from "../ui/Title";

const mockupPlaceholders = [
  {
    label: "Cover Design",
    src: "/images/cw1.png",
    alt: "Children's book cover mockup",
  },
  {
    label: "Interior Spread",
    src: "/images/cw2.png",
    alt: "Open book interior spread mockup",
  },
  {
    label: "Character Sheet",
    src: "/images/cw3.jpg",
    alt: "Character sheet mockup",
  },
  {
    label: "Kindle Layout",
    src: "/images/cw4.jpg",
    alt: "Kindle layout mockup",
  },
];

const PlaceholderCard = ({ label, src, alt }) => {
  return (
    <div className="group relative flex min-h-60 items-center justify-center overflow-hidden rounded-3xl border border-orange-100/80 bg-white/90 text-center shadow-[0_18px_60px_rgba(255,193,148,0.16)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_80px_rgba(25,123,188,0.16)]">
      <span className="pointer-events-none absolute -left-8 -top-8 h-20 w-20 rounded-full bg-orange-100/70 blur-3xl transition-all duration-500 group-hover:scale-110 group-hover:opacity-80" />
      <span className="pointer-events-none absolute -right-6 bottom-6 h-16 w-16 rounded-full bg-primary-100/60 blur-3xl transition-all duration-500 group-hover:translate-y-1 group-hover:opacity-80" />
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-linear-to-br from-orange-50 via-white to-blue-50 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10 flex h-full w-full items-center justify-center">
        <div className="relative h-full w-full overflow-hidden rounded-2xl border border-orange-100/70 bg-white shadow-inner">
          <div className="absolute inset-0 bg-linear-to-t from-white/65 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
          <img
            src={src}
            alt={alt || label}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-x-3 bottom-3 flex justify-center">
            <span className="inline-flex items-center rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-slate-600 shadow-md ring-1 ring-orange-100/80">
              {label}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const PlaceholderShowcase = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      <div className="container relative z-10">
        <div className="flex items-center justify-center max-w-4xl mx-auto text-center">
          <div className="space-y-4">
            <span className="inline-flex items-center rounded-full bg-orange-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange-700">
              Portfolio Preview
            </span>
            <Title
              as="h2"
              title="Imagine Your Story Looking Like This"
              highlight={["Your Story"]}
              className="leading-tight text-[#1f2a3d]"
              style={{ fontFamily: "'Baloo 2', cursive" }}
            />
            <p>
              These are placeholders for your future portfolio — covers,
              spreads, and character sheets that show just how “real” your book
              can become.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {mockupPlaceholders.map((item) => (
            <PlaceholderCard
              key={item.label}
              label={item.label}
              src={item.src}
              alt={item.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlaceholderShowcase;
