"use client";

import Subtitle from "@/components/ui/Subtitle";
import TiltImage from "@/components/ui/TiltImage";
import Title from "@/components/ui/Title";
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
    plan: section.plan || false,
    bold: section.bold,
    heading: section.heading,
    media: {
      src: section.img,
      alt: section.title,
      shadow: Boolean(section.shadow),
    },
  }));

const ServiceBody = ({ service }) => {
  const workflow = service?.workflow ?? {};
  const blocks = legacyBlocks(service);

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
            >
              {workflow.eyebrow || "Operational primaryprint"}
            </Subtitle>
          </div>
          <Title as="h2" title={workflow.title} className="text-slate-900" />
          {Array.isArray(workflow.text) ? (
            workflow.text.map((paragraph, idx) => (
              <p
                key={`workflow-summary-${idx}`}
                className="text-lg text-slate-600 "
              >
                {paragraph}
              </p>
            ))
          ) : (
            <p className="text-lg text-slate-600 ">{workflow.text}</p>
          )}
        </div>

        <div className="mt-20 space-y-32">
          {(() => {
            const result = [];
            let noImageBlocks = [];

            blocks.forEach((block, index) => {
              const isReversed = index % 2 === 1;
              const media = block.media ?? {};
              const copy = toArray(block.copy ?? block.text);
              const bullets = toArray(block.bullets ?? block.points);
              const hasImage = media.src || media.image;

              if (block.plan) {
                noImageBlocks.push({ block, index, copy, bullets });
              } else if (!hasImage) {
                noImageBlocks.push({ block, index, copy, bullets });
              } else {
                if (noImageBlocks.length > 0) {
                  result.push(
                    <div
                      key={`no-image-group-${index}`}
                      className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch"
                    >
                      {noImageBlocks.map(({ block, index, copy, bullets }) => {
                        if (block.plan) {
                          const isExtensivePlan = block.title
                            ?.toLowerCase()
                            .startsWith("extensive");
                          const displayBullets =
                            isExtensivePlan && bullets.length > 0
                              ? bullets.slice(1)
                              : bullets;
                          const extensiveTag =
                            isExtensivePlan && bullets.length > 0
                              ? bullets[0]
                              : null;

                          return (
                            <div
                              key={block.id ?? block.title ?? index}
                              className="flex"
                            >
                              <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-slate-50 via-white to-primary-50/50 border-2 border-slate-200 shadow-xl hover:shadow-2xl hover:border-primary-300 transition-all duration-500 group w-full flex flex-col backdrop-blur-sm">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-linear-to-br from-primary-500/10 via-primary-400/5 to-transparent rounded-bl-full" />
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-linear-to-tr from-emerald-500/5 to-transparent rounded-tr-full" />

                                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                  <div className="absolute inset-0 rounded-3xl bg-linear-to-r from-primary-50 via-secondary-50 to-primary-50 blur-xl" />
                                </div>

                                <div className="absolute top-6 right-6 z-10">
                                  <div className="relative">
                                    <div className="absolute inset-0 bg-primary-600 rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
                                    <div className="relative bg-linear-to-r from-primary-600 to-primary-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg ring-2 ring-white/50">
                                      {block.kicker || `0${index + 1}`}
                                    </div>
                                  </div>
                                </div>

                                <div className="relative p-8 lg:p-10 flex flex-col grow">
                                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4 group-hover:text-primary-600 transition-colors bg-linear-to-r from-slate-900 to-slate-700 bg-clip-text">
                                    {block.title}
                                  </h3>

                                  {extensiveTag && (
                                    <div className="mb-4">
                                      <div className="inline-flex items-center gap-2 bg-linear-to-r from-emerald-600 to-emerald-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg ring-2 ring-emerald-500/20 hover:ring-emerald-500/40 transition-all group/tag">
                                        <span className="flex items-center justify-center w-4 h-4 bg-white/20 rounded-full">
                                          <FaCheck className="text-[10px]" />
                                        </span>
                                        <span>{extensiveTag}</span>
                                      </div>
                                    </div>
                                  )}

                                  {block.bold && (
                                    <p className="text-base font-semibold text-slate-700 mb-6 leading-relaxed">
                                      {block.bold}
                                    </p>
                                  )}

                                  {block.heading && (
                                    <div>
                                      <div className="flex items-center gap-3 mb-4">
                                        <div className="w-1 h-8 bg-linear-to-b from-primary-500 via-primary-600 to-primary-700 rounded-full shadow-md" />
                                        <h4 className="text-lg font-bold text-slate-900">
                                          {block.heading}
                                        </h4>
                                      </div>
                                    </div>
                                  )}

                                  {copy.map((paragraph, idx) => (
                                    <p
                                      key={`${block.id}-copy-${idx}`}
                                      className="text-base text-slate-600 mb-4 leading-relaxed"
                                    >
                                      {paragraph}
                                    </p>
                                  ))}

                                  {displayBullets.length > 0 && (
                                    <ul className="mt-2 space-y-4 grow">
                                      {displayBullets.map((item, bulletIdx) => (
                                        <li
                                          key={`${block.id}-bullet-${bulletIdx}`}
                                          className="flex items-start gap-4 text-slate-700 group/item"
                                        >
                                          <span className="mt-0.5 shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/25 group-hover/item:shadow-xl group-hover/item:shadow-primary-500/40 group-hover/item:scale-110 transition-all duration-300 ring-2 ring-primary-500/10">
                                            <FaCheck className="text-sm" />
                                          </span>
                                          <span className="pt-1.5 text-base leading-relaxed">
                                            {item}
                                          </span>
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </div>

                                <div className="h-2 bg-linear-to-r from-primary-500 via-primary-600 to-primary-500 group-hover:from-primary-600 group-hover:via-primary-700 group-hover:to-primary-600 transition-all duration-500 relative overflow-hidden">
                                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                </div>
                              </div>
                            </div>
                          );
                        }

                        return (
                          <div
                            key={block.id ?? block.title ?? index}
                            className="flex-1"
                          >
                            <div className="flex items-center gap-3 text-xs font-semibold uppercase text-slate-500">
                              <span className="text-slate-900">
                                {block.kicker || `0${index + 1}`}
                              </span>
                              <div className="h-px flex-1 bg-linear-to-r from-primary-500/40 to-transparent" />
                            </div>

                            <Title
                              as="h3"
                              title={block.title}
                              className="mt-3 text-slate-900"
                            />

                            {copy.map((paragraph, idx) => (
                              <p
                                key={`${block.id}-copy-${idx}`}
                                className="mt-4 text-base text-slate-600"
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
                                    <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary-50 text-primary-600 shadow-sm">
                                      <FaCheck className="text-xs" />
                                    </span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  );
                  noImageBlocks = [];
                }

                result.push(
                  <div
                    key={block.id ?? block.title ?? index}
                    className="row justify-between items-center"
                  >
                    <div
                      className={`lg:w-[55%] ${isReversed ? "lg:order-2" : ""}`}
                    >
                      <div className="flex items-center gap-3 text-xs font-semibold uppercase text-slate-500">
                        <span className="text-slate-900">
                          {block.kicker || `0${index + 1}`}
                        </span>
                        <div className="h-px flex-1 bg-linear-to-r from-primary-500/40 to-transparent" />
                      </div>

                      <Title
                        as="h3"
                        title={block.title}
                        className="mt-3 text-slate-900"
                      />

                      {copy.map((paragraph, idx) => (
                        <p
                          key={`${block.id}-copy-${idx}`}
                          className="mt-4 text-base text-slate-600"
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
                              <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary-50 text-primary-600 shadow-sm">
                                <FaCheck className="text-xs" />
                              </span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    <div
                      className={`lg:w-[40%] ${isReversed ? "lg:order-1" : ""}`}
                    >
                      <TiltImage
                        src={media.src ?? media.image}
                        alt={media.alt ?? block.title}
                        className="rounded-2xl"
                      />
                    </div>
                  </div>
                );
              }
            });

            if (noImageBlocks.length > 0) {
              result.push(
                <div
                  key="no-image-group-end"
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch"
                >
                  {noImageBlocks.map(({ block, index, copy, bullets }) => {
                    if (block.plan) {
                      const isExtensivePlan = block.title
                        ?.toLowerCase()
                        .startsWith("extensive");
                      const displayBullets =
                        isExtensivePlan && bullets.length > 0
                          ? bullets.slice(1)
                          : bullets;
                      const extensiveTag =
                        isExtensivePlan && bullets.length > 0
                          ? bullets[0]
                          : null;

                      return (
                        <div
                          key={block.id ?? block.title ?? index}
                          className="flex"
                        >
                          <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-slate-50 via-white to-primary-50/50 border-2 border-slate-200 shadow-xl hover:shadow-2xl hover:border-primary-300 transition-all duration-500 group w-full flex flex-col backdrop-blur-sm">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-linear-to-br from-primary-500/10 via-primary-400/5 to-transparent rounded-bl-full" />
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-linear-to-tr from-emerald-500/5 to-transparent rounded-tr-full" />

                            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                              <div className="absolute inset-0 rounded-3xl bg-linear-to-r from-primary-500/20 via-emerald-500/20 to-primary-500/20 blur-xl" />
                            </div>

                            <div className="absolute top-6 right-6 z-10">
                              <div className="relative">
                                <div className="absolute inset-0 bg-primary-600 rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
                                <div className="relative bg-linear-to-r from-primary-600 to-primary-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg ring-2 ring-white/50">
                                  {block.kicker || `0${index + 1}`}
                                </div>
                              </div>
                            </div>

                            <div className="relative p-8 lg:p-10 flex flex-col grow">
                              <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4 group-hover:text-primary-600 transition-colors bg-linear-to-r from-slate-900 to-slate-700 bg-clip-text">
                                {block.title}
                              </h3>

                              {extensiveTag && (
                                <div className="mb-4">
                                  <div className="inline-flex items-center gap-2 bg-linear-to-r from-emerald-600 to-emerald-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg ring-2 ring-emerald-500/20 hover:ring-emerald-500/40 transition-all group/tag">
                                    <span className="flex items-center justify-center w-4 h-4 bg-white/20 rounded-full">
                                      <FaCheck className="text-[10px]" />
                                    </span>
                                    <span>{extensiveTag}</span>
                                  </div>
                                </div>
                              )}

                              {block.bold && (
                                <p className="text-base font-semibold text-slate-700 mb-6 leading-relaxed">
                                  {block.bold}
                                </p>
                              )}

                              {block.heading && (
                                <div className="mb-6">
                                  <div className="flex items-center gap-3 mb-4">
                                    <div className="w-1 h-8 bg-linear-to-b from-primary-500 via-primary-600 to-primary-700 rounded-full shadow-md" />
                                    <h4 className="text-lg font-bold text-slate-900">
                                      {block.heading}
                                    </h4>
                                  </div>
                                </div>
                              )}

                              {copy.map((paragraph, idx) => (
                                <p
                                  key={`${block.id}-copy-${idx}`}
                                  className="text-base text-slate-600 mb-4 leading-relaxed"
                                >
                                  {paragraph}
                                </p>
                              ))}

                              {displayBullets.length > 0 && (
                                <ul className="mt-6 space-y-4 grow">
                                  {displayBullets.map((item, bulletIdx) => (
                                    <li
                                      key={`${block.id}-bullet-${bulletIdx}`}
                                      className="flex items-start gap-4 text-slate-700 group/item"
                                    >
                                      <span className="mt-0.5 shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/25 group-hover/item:shadow-xl group-hover/item:shadow-primary-500/40 group-hover/item:scale-110 transition-all duration-300 ring-2 ring-primary-500/10">
                                        <FaCheck className="text-sm" />
                                      </span>
                                      <span className="pt-1.5 text-base leading-relaxed">
                                        {item}
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>

                            <div className="h-2 bg-linear-to-r from-primary-500 via-primary-600 to-primary-500 group-hover:from-primary-600 group-hover:via-primary-700 group-hover:to-primary-600 transition-all duration-500 relative overflow-hidden">
                              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                            </div>
                          </div>
                        </div>
                      );
                    }

                    return (
                      <div
                        key={block.id ?? block.title ?? index}
                        className="flex-1"
                      >
                        <div className="flex items-center gap-3 text-xs font-semibold uppercase text-slate-500">
                          <span className="text-slate-900">
                            {block.kicker || `0${index + 1}`}
                          </span>
                          <div className="h-px flex-1 bg-linear-to-r from-primary-500/40 to-transparent" />
                        </div>

                        <Title
                          as="h3"
                          title={block.title}
                          className="mt-3 text-slate-900"
                        />

                        {copy.map((paragraph, idx) => (
                          <p
                            key={`${block.id}-copy-${idx}`}
                            className="mt-4 text-base text-slate-600"
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
                                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary-50 text-primary-600 shadow-sm">
                                  <FaCheck className="text-xs" />
                                </span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    );
                  })}
                </div>
              );
            }

            return result;
          })()}
        </div>
      </div>
    </section>
  );
};

export default ServiceBody;
