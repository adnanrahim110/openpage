"use client";
import Title from "@/components/ui/Title";

const Process2 = ({ process }) => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="mx-auto max-w-5xl text-center">
          <Title
            as="h2"
            title={process.title}
            highlight={process.titleHighlight}
          />
          <p className="mt-4 text-neutral-600">{process.text}</p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {process.steps.map((step, index) => (
            <article
              key={index}
              className="group relative flex flex-col gap-4 p-6 rounded-2xl border border-primary-200 bg-linear-to-br from-primary-50 to-secondary-50 shadow-md shadow-primary/10 hover:shadow-2xl transform hover:-translate-y-1 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0">
                  <div className="size-14 rounded-full bg-linear-to-tr from-primary-600 to-indigo-400 flex items-center justify-center text-white font-semibold text-lg shadow-sm">
                    {index + 1}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-neutral-600 text-base">{step.text}</p>
                </div>
              </div>

              {step.points && step.points.length > 0 && (
                <ul className="mt-3 grid gap-2">
                  {step.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5 text-primary-600 shrink-0 mt-1"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414L8.414 15 5 11.586a1 1 0 011.414-1.414L8.414 12.172l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm text-neutral-600">{pt}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-4 flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-sm text-neutral-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-neutral-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m4 0h.01M12 3v3m0 12v3m9-9h-3M6 12H3"
                    />
                  </svg>
                  {`Step ${index + 1}`}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process2;
