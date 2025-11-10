"use client";

import Subtitle from "@/components/ui/Subtitle";
import TiltImage from "@/components/ui/TiltImage";
import Title from "@/components/ui/Title";
import { useMemo } from "react";
import { FaCheck } from "react-icons/fa6";

const toArray = (value) =>
  Array.isArray(value) ? value : value ? [value] : [];

const legacyBlocks = (service) =>
  (service?.service_body ?? []).map((section, index) => ({
    id: section.id ?? `legacy-${index}`,
    kicker: section.kicker ?? `0${index + 1}`,
    title: section.title,
    copy: toArray(section.text),
    bullets: toArray(section.points),
    media: {
      src: section.img,
      alt: section.title,
      shadow: Boolean(section.shadow),
    },
  }));

const ServiceBody = ({ service }) => {
  const workflow = service?.workflow ?? {};
  const legacyStoryline = service?.storyline ?? {};
  const blocks = useMemo(() => {
    if (workflow.blocks?.length) return workflow.blocks;
    if (legacyStoryline.blocks?.length) return legacyStoryline.blocks;
    return legacyBlocks(service);
  }, [service, workflow.blocks, legacyStoryline.blocks]);

  if (!blocks.length) return null;

  const pulses =
    workflow.pulses?.length > 0
      ? workflow.pulses
      : legacyStoryline.pulses?.length > 0
      ? legacyStoryline.pulses
      : [
          { label: "Average sprint", value: "4-8 weeks" },
          { label: "Dedicated leads", value: "3+" },
          { label: "Launch coverage", value: "Global" },
        ];

  return (
    <section className="relative overflow-hidden bg-white py-32">
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(148,163,184,0.15), transparent 60%),
              radial-gradient(circle at 80% 70%, rgba(226,232,240,0.8), transparent 60%),
              repeating-linear-gradient(
                90deg,
                transparent,
                transparent 48px,
                rgba(15,23,42,0.02) 48px,
                rgba(15,23,42,0.02) 49px
              ),
              repeating-linear-gradient(
                0deg,
                transparent,
                transparent 48px,
                rgba(15,23,42,0.02) 48px,
                rgba(15,23,42,0.02) 49px
              )
            `,
          }}
        />
      </div>

      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <div className="flex justify-center">
            <Subtitle
              variant="neutral"
              className="bg-white border-slate-200 text-slate-600"
              textClassName="tracking-[0.3em]"
            >
              {workflow.eyebrow || "Operational blueprint"}
            </Subtitle>
          </div>
          <Title
            as="h2"
            title={
              workflow.headline ||
              `A concierge workflow for ${
                service?.title?.toLowerCase() ?? "this service"
              }`
            }
            className="text-slate-900"
          />
          <p className="text-lg text-slate-600 leading-relaxed">
            {workflow.summary ||
              legacyStoryline.summary ||
              service?.sec2?.text ||
              "Every engagement moves through dedicated pods that pair editorial, design, and distribution so you can stay focused on authorship."}
          </p>
        </div>

        <div className="mt-16 space-y-24">
          {blocks.map((block, index) => {
            const isReversed = index % 2 === 1;
            const media = block.media ?? {};
            const copy = toArray(block.copy ?? block.text);
            const bullets = toArray(block.bullets ?? block.points);

            return (
              <div
                key={block.id ?? block.title ?? index}
                className="grid items-center gap-10 lg:grid-cols-12"
              >
                <div
                  className={`lg:col-span-6 ${isReversed ? "lg:order-2" : ""}`}
                >
                  <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">
                    <span className="text-slate-900">
                      {block.kicker || `0${index + 1}`}
                    </span>
                    <div className="h-px flex-1 bg-linear-to-r from-blue-500/40 to-transparent" />
                    <span>{block.badge || "Phase"}</span>
                  </div>

                  <Title
                    as="h3"
                    title={block.title}
                    className="mt-3 text-slate-900"
                  />

                  {copy.map((paragraph, idx) => (
                    <p
                      key={`${block.id}-copy-${idx}`}
                      className="mt-4 text-base leading-relaxed text-slate-600"
                    >
                      {paragraph}
                    </p>
                  ))}

                  {bullets.length > 0 && (
                    <ul className="mt-6 space-y-3">
                      {bullets.map((item, bulletIdx) => (
                        <li
                          key={`${block.id}-bullet-${bulletIdx}`}
                          className="flex items-start gap-3 text-slate-700"
                        >
                          <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-600 shadow-sm">
                            <FaCheck className="text-xs" />
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div
                  className={`lg:col-span-6 ${isReversed ? "lg:order-1" : ""}`}
                >
                  {(media.src || media.image) && (
                    <TiltImage
                      src={media.src ?? media.image}
                      alt={media.alt ?? block.title}
                      shadow={media.shadow ?? false}
                      interactive={false}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 grid gap-6 rounded-4xl border border-slate-200 bg-slate-50/70 p-8 md:grid-cols-3">
          {pulses.map(({ label, value }) => (
            <div
              key={`${label}-${value}`}
              className="rounded-2xl border border-white bg-white/85 p-5 shadow-sm"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                {label}
              </p>
              <div className="mt-3 text-2xl font-semibold text-slate-900">
                {value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceBody;
