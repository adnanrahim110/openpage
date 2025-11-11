"use client";

import Subtitle from "@/components/ui/Subtitle";
import Title from "@/components/ui/Title";
import { FaStar } from "react-icons/fa";

const BenefitsSection = ({ service }) => {
  if (!service?.benefits) return null;

  const benefits = service.benefits;

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
            {Array.isArray(benefits.text) ? (
              benefits.text.map((paragraph, idx) => (
                <p key={idx} className="mt-6 text-lg text-slate-600">
                  {paragraph}
                </p>
              ))
            ) : (
              <p className="mt-6 text-lg text-slate-600">{benefits.text}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
