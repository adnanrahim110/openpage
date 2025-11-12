"use client";

import Subtitle from "@/components/ui/Subtitle";
import Title from "@/components/ui/Title";
import { servicesList } from "@/constants";
import Link from "next/link";
import { useMemo } from "react";
import { FaArrowRight } from "react-icons/fa";

const getServicesWithIcons = (ids) => {
  if (!Array.isArray(servicesList)) {
    console.error("servicesList is not an array:", servicesList);
    return [];
  }
  return servicesList
    .filter(({ id }) => ids.includes(id))
    .map(({ img, ...rest }) => rest);
};

const ServicesShowcase = ({ service, pathname }) => {
  const related = useMemo(() => {
    const pool = getServicesWithIcons([1, 2, 3, 6, 7, 9, 10]);
    return pool.filter((card) => card.link !== pathname);
  }, [pathname, service?.related?.cards, service?.servicesCard]);

  if (!related.length) return null;

  return (
    <section className="relative overflow-hidden bg-linear-to-tl from-primary-100 via-transparent to-transparent py-32">
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

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {related.map((card, index) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.link}
                href={card.link}
                className="group relative overflow-hidden rounded-3xl bg-white border-2 border-slate-200 p-8 shadow-lg transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:border-blue-300 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-linear-to-br from-blue-500/0 via-purple-500/0 to-blue-500/0 opacity-0 group-hover:opacity-5 transition-opacity duration-500" />

                <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-blue-500/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute top-6 right-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-500 rounded-lg blur-md opacity-20 group-hover:opacity-40 transition-opacity" />
                    <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-blue-500 to-purple-500 text-xs font-bold text-white shadow-lg ring-2 ring-blue-500/20">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <div className="relative inline-flex">
                    <div className="absolute inset-0 bg-blue-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                    <div className="relative flex size-12 items-center justify-center rounded-2xl bg-linear-to-br from-blue-500 to-blue-600 shadow-xl ring-2 ring-blue-500/20 group-hover:scale-110 transition-transform duration-500">
                      {Icon && <Icon className="text-2xl text-white" />}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 pr-8">
                    {card.title}
                  </h4>
                </div>

                <p className="text-base text-slate-600 leading-relaxed line-clamp-3">
                  {card.text}
                </p>

                <div className="relative mt-6 flex items-center gap-2 text-sm font-semibold text-blue-600 group-hover:gap-3 transition-all">
                  <span>View details</span>
                  <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
