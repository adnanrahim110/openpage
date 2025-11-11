"use client";

const TitleMarquee = ({ service }) => {
  const overview = service?.overview ?? {};

  return (
    <section className="relative overflow-hidden bg-linear-to-br from-white via-slate-50 to-blue-50 py-24">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 25%, rgba(59,130,246,0.08), transparent 55%),
              radial-gradient(circle at 80% 0%, rgba(147,51,234,0.08), transparent 60%),
              linear-gradient(115deg, rgba(15,23,42,0.04) 10%, transparent 40%),
              linear-gradient(295deg, rgba(15,23,42,0.04) 10%, transparent 40%)
            `,
          }}
        />
      </div>

      <div className="container relative z-10">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,1.1fr)_480px] items-center">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2 text-[11px] font-semibold uppercase text-slate-500 shadow-sm">
              {overview.eyebrow || "Signature Program"}
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-linear-to-r from-blue-500 to-purple-500" />
              {(service?.link ?? "/service").replace("/", "").toUpperCase()}
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-semibold text-slate-900">
                {overview.title || service?.title}
              </h1>
              {Array.isArray(overview.text) ? (
                overview.text.map((paragraph, idx) => (
                  <p key={idx} className="text-lg md:text-xl text-slate-600">
                    {paragraph}
                  </p>
                ))
              ) : (
                <p className="text-lg md:text-xl text-slate-600">
                  {overview.text ||
                    "Premium publishing services tailored to your creative vision."}
                </p>
              )}
            </div>
          </div>

          <div className="relative h-full">
            <div className="absolute inset-y-6 inset-x-10 rounded-[40px] bg-linear-to-br from-white to-blue-50/60 blur-2xl" />

            <div className="relative rounded-4xl border border-white/60 bg-white/85 p-10 shadow-2xl backdrop-blur-xl">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase text-blue-500">
                    Studio Dispatch
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-slate-900">
                    Concierge Launch Desk
                  </h3>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-blue-500 to-purple-500 text-white text-sm font-bold shadow-lg">
                  OP
                </div>
              </div>

              <p className="mt-6 text-base  text-slate-600">
                Dedicated strategists pair copy, creative, and distribution so
                your launch feels curated—not templated.
              </p>

              <div className="mt-8 grid gap-4">
                {overview.points.slice(0, 4).map((chip, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50/70 px-4 py-3 text-sm font-medium text-slate-700"
                  >
                    {chip}
                    <span className="text-blue-500">↗</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TitleMarquee;
