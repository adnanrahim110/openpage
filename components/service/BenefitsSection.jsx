"use client";

import Subtitle from "@/components/ui/Subtitle";
import Title from "@/components/ui/Title";
import { FaCheck, FaStar } from "react-icons/fa";

const BenefitsSection = ({ service }) => {
  if (!service?.benefits) return null;

  const benefits = service.benefits;
  const points = benefits.points || [];

  return (
    <section
      id="what-we-handle"
      className="relative overflow-hidden bg-primary-50 py-24 lg:py-32"
    >
      <div
        className="absolute inset-0 opacity-30 mix-blend-multiply"
        style={{
          backgroundImage: `url('/images/banners/texture.avif')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 20%, rgba(59,130,246,0.1), transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(139,92,246,0.1), transparent 50%),
              repeating-linear-gradient(
                45deg,
                transparent,
                transparent 60px,
                rgba(15,23,42,0.02) 60px,
                rgba(15,23,42,0.02) 61px
              )
            `,
          }}
        />
      </div>

      <div className="container relative z-10">
        <div className="mx-auto max-w-6xl text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-br from-blue-500 to-primary-500 rounded-2xl blur-xl opacity-30" />
              <div className="relative rounded-2xl bg-linear-to-br from-blue-500 to-primary-500 p-4 shadow-2xl ring-2 ring-blue-500/20">
                <FaStar size={32} className="text-white" />
              </div>
            </div>
          </div>

          {benefits.eyebrow && (
            <Subtitle
              variant="neutral"
              className="mb-4 bg-white border-slate-200 text-slate-600"
            >
              {benefits.eyebrow}
            </Subtitle>
          )}

          {benefits.title && (
            <Title
              as="h2"
              title={benefits.title}
              className="text-slate-900 mb-1"
            />
          )}

          {benefits.text &&
            (Array.isArray(benefits.text) ? (
              benefits.text.map((paragraph, idx) => (
                <p key={idx} className="text-lg text-slate-600 leading-relaxed">
                  {paragraph}
                </p>
              ))
            ) : (
              <p className="text-lg text-slate-600 leading-relaxed">
                {benefits.text}
              </p>
            ))}
        </div>

        {points.length > 0 && (
          <div
            className={`grid grid-cols-1 md:grid-cols-2 ${
              benefits.inline ? "lg:grid-cols-4" : "lg:grid-cols-2"
            } gap-6 lg:gap-8`}
          >
            {points.map((point, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white backdrop-blur-sm border-2 border-slate-200 p-8 shadow-lg transition-all duration-500 hover:bg-white hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-500/20"
              >
                <div className="absolute inset-0 bg-linear-to-br from-blue-500/0 via-purple-500/0 to-blue-500/0 opacity-0 group-hover:opacity-5 transition-opacity duration-500" />

                {!benefits.inline && (
                  <div className="absolute top-6 right-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-blue-500 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity" />
                      <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-blue-500 to-purple-500 text-sm font-bold text-white shadow-xl ring-2 ring-blue-500/20">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                    </div>
                  </div>
                )}

                <div className="mb-4 inline-flex">
                  <div className="relative">
                    <div className="absolute inset-0 bg-emerald-500 rounded-xl blur-md opacity-20 group-hover:opacity-40 transition-opacity" />
                    <div className="relative flex size-12 items-center justify-center rounded-xl bg-linear-to-br from-emerald-500 to-emerald-600 shadow-xl ring-2 ring-emerald-500/20">
                      <FaCheck className="text-xl text-white" />
                    </div>
                  </div>
                </div>

                <div className="relative mt-2">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-base text-slate-600 leading-relaxed">
                    {point.text}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BenefitsSection;
