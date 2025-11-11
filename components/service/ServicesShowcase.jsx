"use client";

import Subtitle from "@/components/ui/Subtitle";
import Title from "@/components/ui/Title";
import { servicesList } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

const getServicesWithoutIcons = (ids) => {
  if (!Array.isArray(servicesList)) {
    console.error("servicesList is not an array:", servicesList);
    return [];
  }
  return servicesList
    .filter(({ id }) => ids.includes(id))
    .map(({ icon, ...rest }) => rest);
};

const ServicesShowcase = ({ service, pathname }) => {
  const related = useMemo(() => {
    const pool = getServicesWithoutIcons([1, 2, 3, 6, 7, 9, 10]);
    return pool.filter((card) => card.link !== pathname);
  }, [pathname, service?.related?.cards, service?.servicesCard]);

  if (!related.length) return null;

  return (
    <section className="relative overflow-hidden bg-primary-50 py-32">
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
        <div className="flex flex-col gap-6 text-center items-center">
          <Subtitle
            variant="neutral"
            className="bg-white border-slate-200 text-slate-600"
          >
            Explore More Publishing Solutions
          </Subtitle>
          <Title
            as="h2"
            title={`Extend your ${
              service?.title?.toLowerCase() ?? "service"
            } stack`}
            className="text-slate-900"
          />
          <div className="mx-auto max-w-5xl space-y-1">
            <p className="text-lg text-slate-600">
              Discover everything you need to build your author brand. From
              ghostwriting and editing to audiobook production and marketing, we
              offer services that complement your self-publishing journey and
              maximize your book’s success.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {related.map((card) => (
            <Link
              key={card.link}
              href={card.link}
              className="group flex h-full flex-col rounded-[28px] border border-slate-200 bg-white/90 p-6 shadow-lg transition hover:-translate-y-1 hover:border-blue-200"
            >
              <div className="flex items-center justify-between gap-4">
                <h4 className="text-xl font-semibold text-slate-900">
                  {card.title}
                </h4>
              </div>
              <p className="mt-3 flex-1 text-sm text-slate-600">{card.text}</p>
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
                <span className="transition group-hover:translate-x-1">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
