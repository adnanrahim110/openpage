"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

const ServicesShowcase = ({ service, pathname }) => {
  const related = useMemo(() => {
    const pool =
      service?.relatedServices?.length > 0
        ? service.relatedServices
        : service?.servicesCard ?? [];
    return pool.filter((card) => card.link !== pathname);
  }, [pathname, service?.relatedServices, service?.servicesCard]);

  if (!related.length) return null;

  const heroCard = related[0];
  const restCards = related.slice(1);

  return (
    <section className="relative overflow-hidden bg-linear-to-br from-white via-slate-50 to-blue-50/30 py-32">
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 10% 20%, rgba(59,130,246,0.12), transparent 45%),
              radial-gradient(circle at 90% 80%, rgba(147,51,234,0.12), transparent 45%),
              linear-gradient(125deg, rgba(15,23,42,0.05), transparent 45%),
              linear-gradient(305deg, rgba(15,23,42,0.04), transparent 45%)
            `,
          }}
        />
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col gap-6 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-slate-500">
            Companion Services
          </p>
          <h2 className="text-4xl font-semibold leading-tight text-slate-900">
            Extend your {service?.title?.toLowerCase()} stack
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Modular services crafted to plug directly into your publishing
            workflow—each managed by the same concierge team.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          <Link
            href={heroCard.link}
            className="group relative flex h-full flex-col overflow-hidden rounded-[32px] border border-slate-200 bg-white p-8 shadow-2xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
              Spotlight
              <span className="text-blue-500">↗</span>
            </div>
            <h3 className="mt-6 text-3xl font-semibold text-slate-900">
              {heroCard.title}
            </h3>
            <p className="mt-4 flex-1 text-base leading-relaxed text-slate-600">
              {heroCard.text}
            </p>
            {heroCard.img && (
              <div className="mt-8 rounded-3xl bg-slate-50 p-4">
                <Image
                  src={heroCard.img}
                  alt={heroCard.title}
                  className="h-40 w-full rounded-2xl object-cover"
                />
              </div>
            )}
            <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600">
              Explore service
              <span className="transition group-hover:translate-x-1">→</span>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-[32px] border border-transparent transition group-hover:border-blue-200" />
          </Link>

          <div className="lg:col-span-2">
            <div className="grid gap-6 md:grid-cols-2">
              {restCards.map((card) => (
                <Link
                  key={card.link}
                  href={card.link}
                  className="group flex h-full flex-col rounded-[28px] border border-slate-200 bg-white/90 p-6 shadow-lg transition hover:-translate-y-1 hover:border-blue-200"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h4 className="text-xl font-semibold text-slate-900">
                      {card.title}
                    </h4>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">
                      {card.link.replace("/", "")}
                    </span>
                  </div>
                  <p className="mt-3 flex-1 text-sm text-slate-600">
                    {card.text}
                  </p>
                  {card.img && (
                    <div className="mt-5 overflow-hidden rounded-2xl bg-slate-50">
                      <Image
                        src={card.img}
                        alt={card.title}
                        className="h-36 w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-blue-600">
                    View details
                    <span className="transition group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
