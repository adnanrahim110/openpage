"use client";

import Subtitle from "@/components/ui/Subtitle";
import Title from "@/components/ui/Title";
import { useMemo, useState } from "react";
import { FaArrowRight, FaStar } from "react-icons/fa";

const toArray = (value) =>
  Array.isArray(value) ? value.filter(Boolean) : value ? [value] : [];

const buildFallbackSlides = (benefits) => {
  const payload = toArray(benefits.text);
  if (payload.length === 0) {
    return [
      {
        id: "benefit-default",
        eyebrow: benefits.eyebrow || "Author Advantage",
        title:
          benefits.headings?.[0] ||
          benefits.title ||
          "Premium Publishing Advantage",
        copy:
          benefits.summary ||
          benefits.lead ||
          "Partner with our concierge studio to keep every phase coordinated, measured, and on-brand.",
        footnote: benefits.footnotes?.[0],
      },
    ];
  }

  return payload.map((copy, index) => ({
    id: `benefit-${index + 1}`,
    eyebrow: benefits.eyebrow || "Author Advantage",
    title:
      benefits.headings?.[index] ||
      `Advantage ${String(index + 1).padStart(2, "0")}`,
    copy,
    footnote: benefits.footnotes?.[index],
  }));
};

const BenefitsSection = ({ service }) => {
  if (!service?.benefits) return null;

  const benefits = service.benefits;
  const slides = benefits.carousel?.length
    ? benefits.carousel
    : buildFallbackSlides(benefits);
  const baseDetails = benefits.list?.length
    ? benefits.list
    : toArray(benefits.text);
  const detailList =
    baseDetails.length > 0
      ? baseDetails
      : [
          benefits.summary ||
            benefits.lead ||
            "Full-stack studio pods align creative, tech, and growth.",
        ];
  const metrics =
    benefits.metrics?.length > 0
      ? benefits.metrics
      : [
          { label: "Author rating", value: "4.9/5" },
          { label: "Success ratio", value: "98%" },
          { label: "Launch uplift", value: "+63%" },
        ];
  const chips =
    benefits.chips?.length > 0
      ? benefits.chips
      : ["Metadata research", "Account concierge", "Post-launch analytics"];

  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = slides[activeIndex % slides.length];

  const slideNav = useMemo(
    () =>
      slides.map((slide, index) => ({
        label: slide.title,
        value: index,
      })),
    [slides]
  );

  const goTo = (next) => {
    setActiveIndex((prev) => {
      const total = slides.length;
      return (prev + next + total) % total;
    });
  };

  return (
    <section className="relative overflow-hidden bg-linear-to-br from-slate-50 via-white to-blue-50/40 py-36">
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 30% 15%, rgba(59,130,246,0.12), transparent 45%),
              radial-gradient(circle at 70% 85%, rgba(99,102,241,0.1), transparent 40%),
              linear-gradient(120deg, rgba(15,23,42,0.04), transparent 35%),
              linear-gradient(300deg, rgba(15,23,42,0.04), transparent 35%)
            `,
          }}
        />
      </div>

      <div className="container relative z-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_420px]">
          <div>
            <div className="flex items-center gap-4">
              <span className="rounded-3xl bg-linear-to-br from-blue-500 to-purple-500 p-4 text-white shadow-xl">
                <FaStar size={28} />
              </span>
              <div className="space-y-2">
                <Subtitle
                  variant="neutral"
                  className="bg-white border-slate-200 text-slate-600"
                  textClassName="tracking-[0.3em]"
                >
                  {benefits.eyebrow || "Value Stack"}
                </Subtitle>
                <Title
                  as="h2"
                  title={benefits.title}
                  className="text-slate-900"
                />
              </div>
            </div>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              {benefits.lead ||
                benefits.summary ||
                "A studio-grade collective of editors, designers, and marketeers that keep authors in the spotlight."}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              {chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:-translate-y-0.5"
                >
                  {chip}
                </span>
              ))}
            </div>

            <div className="mt-10 grid gap-6">
              {detailList.slice(0, 3).map((detail, index) => (
                <div
                  key={`detail-${index}`}
                  className="rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm"
                >
                  <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                    <span className="text-slate-900">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="h-px flex-1 bg-linear-to-r from-blue-500/50 to-transparent" />
                    <span>Insight</span>
                  </div>
                  <p className="mt-3 text-base text-slate-600">{detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-4xl border border-white/60 bg-white/90 p-8 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-blue-500">
                    Advantage
                  </p>
                  <h3 className="text-2xl font-semibold text-slate-900">
                    {activeSlide.title}
                  </h3>
                </div>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => goTo(-1)}
                    className="rounded-full border border-slate-200 bg-white p-3 text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:text-blue-600"
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    onClick={() => goTo(1)}
                    className="rounded-full border border-slate-200 bg-white p-3 text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:text-blue-600"
                  >
                    →
                  </button>
                </div>
              </div>

              <div className="mt-6 min-h-[200px] text-slate-600">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  {activeSlide.eyebrow || "Key Upside"}
                </p>
                <p className="mt-3 leading-relaxed">{activeSlide.copy}</p>
                {activeSlide.footnote && (
                  <p className="mt-4 text-xs text-slate-400">
                    {activeSlide.footnote}
                  </p>
                )}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {slideNav.map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => setActiveIndex(item.value)}
                    className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] ${
                      item.value === activeIndex
                        ? "border-blue-500 bg-blue-50 text-blue-600"
                        : "border-slate-200 text-slate-500"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
