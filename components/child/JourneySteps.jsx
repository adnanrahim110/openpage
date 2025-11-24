"use client";

import Title from "../ui/Title";

const steps = [
  {
    step: "Step 1",
    title: "Share Your Idea",
    desc: "We learn about your story, age range, and goals on a relaxed call.",
  },
  {
    step: "Step 2",
    title: "Story & Plan",
    desc: "We shape your story and create a simple page-by-page storyboard.",
  },
  {
    step: "Step 3",
    title: "Illustrate & Design",
    desc: "We design characters, illustrate scenes, and lay out every page.",
  },
  {
    step: "Step 4",
    title: "Publish & Celebrate",
    desc: "Your book goes live on Amazon & B&N — ready for kids everywhere.",
  },
];

const JourneySteps = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-16 left-0 h-40 w-40 rounded-full bg-orange-100/60 blur-3xl" />
        <div className="absolute -bottom-20 right-10 h-44 w-44 rounded-full bg-primary-50/80 blur-3xl" />
        <div className="absolute inset-0 bg-[url('/images/banners/noisy_bg.avif')] opacity-[0.08] mix-blend-multiply" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <Title
            as="h2"
            title="How Your Children's Book Journey Works"
            highlight="Children's Book Journey"
            className="text-[#1d2435]"
            style={{ fontFamily: "'Baloo 2', cursive" }}
          />
          <p className="mt-3 text-base text-slate-600 sm:text-lg">
            A friendly, guided process built for busy parents, teachers, and
            first-time authors.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-4">
          {steps.map((item) => (
            <div
              key={item.step}
              className="rounded-3xl border border-orange-100 bg-[#fff6ed] p-5 shadow-[0_10px_40px_rgba(255,193,148,0.15)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_60px_rgba(25,123,188,0.14)]"
            >
              <p className="text-sm font-semibold text-[#d45d0c]">
                {item.step}
              </p>
              <h3
                className="mt-2 text-lg font-semibold text-[#1f2a3d]"
                style={{ fontFamily: "'Baloo 2', cursive" }}
              >
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneySteps;
