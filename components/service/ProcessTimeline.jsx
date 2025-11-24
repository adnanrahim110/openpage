"use client";

import { useId } from "react";

const processSteps = {
  title: "Follow the wave from idea to impact",
  text: "Each milestone builds on the last, guiding your manuscript through a calm, deliberate flow so you always know what's next.",
  steps: [
    {
      title: "Let's Shape the Big Idea",
      text: "We begin by understanding the heart of your book, its themes, purpose, and message, so your story develops on a strong and meaningful foundation.",
    },
    {
      title: "Plan with Purpose",
      text: "Our team researches, outlines, and organizes your book's direction, ensuring every chapter flows naturally and supports your vision with clarity and intention.",
    },
    {
      title: "Write with Confidence",
      text: "We guide you through each draft, helping you strengthen your voice while maintaining structure, style, and storytelling consistency from start to finish.",
    },
    {
      title: "Polish Every Page",
      text: "Our editors refine your manuscript with careful attention to tone, clarity, pacing, and grammar, revising each section until your writing reads smoothly and professionally.",
    },
    {
      title: "Hear What Matters",
      text: "You receive thoughtful and constructive feedback designed to enhance your ideas without changing your voice. Every improvement supports and strengthens your message.",
    },
    {
      title: "Publish with Impact",
      text: "Your book is completed with professional formatting, custom cover design, and a seamless publishing process across Amazon, global eBook stores, and audiobook platforms.",
    },
  ],
};

const waveSettings = {
  segments: 18,
  segmentHeight: 80,
  amplitude: 18,
  centerX: 40,
};

const wavePath = createWavePath(waveSettings);
const WAVE_VIEWBOX_HEIGHT = waveSettings.segments * waveSettings.segmentHeight;

const ProcessTimeline = ({ process = processSteps }) => {
  const gradientId = useId();
  const glowId = `${gradientId}-glow`;

  return (
    <section className="relative overflow-hidden bg-primary-50/60 py-20">
      <div className="absolute pointer-events-none opacity-30 blur-xs bottom-0 -left-10 h-4/6 w-2/7 bg-contain bg-bottom bg-no-repeat bg-[url(/images/banners/exp_bg.avif)]" />
      <div className="absolute pointer-events-none opacity-30 blur-xs top-0 -right-10 h-4/6 w-2/7 rotate-180 bg-contain bg-bottom bg-no-repeat bg-[url(/images/banners/exp_bg.avif)]" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/4 h-64 w-64 rounded-full bg-primary-200/30 blur-3xl" />
        <div className="absolute bottom-10 right-28 h-60 w-60 rounded-full bg-secondary-500/15 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.55em] text-primary-500">
            Our Method
          </p>
          <h2 className="mt-4 font-sitka text-3xl leading-tight text-slate-900 sm:text-4xl">
            {process.title}
          </h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            {process.text}
          </p>
        </div>

        <div className="relative mt-16 md:mt-20">
          <WaveLine gradientId={gradientId} glowId={glowId} />

          <div className="space-y-10 sm:space-y-0">
            {process.steps.map((step, index) => {
              const isLeft = index % 2 === 0;
              return (
                <TimelineRow
                  key={step.title}
                  step={step}
                  index={index}
                  isLeft={isLeft}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineRow = ({ step, index, isLeft }) => {
  const stepNumber = String(index + 1).padStart(2, "0");
  const sideClasses = isLeft
    ? "max-lg:order-2 md:col-start-1 md:col-end-2 md:text-right md:justify-end"
    : "order-2 md:col-start-3 md:col-end-4 md:text-left md:justify-start";

  return (
    <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[minmax(0,1fr)_140px_minmax(0,1fr)]">
      <div className="order-1 flex w-full justify-center md:col-start-2 md:col-end-3">
        <StepMarker number={stepNumber} />
      </div>

      <div className={`flex w-full ${sideClasses}`}>
        <article className="relative w-full max-w-md rounded-4xl border border-white/60 bg-white/90 p-8 shadow-xl shadow-primary-900/5 backdrop-blur">
          <span
            className={`hidden md:block absolute top-1/2 h-0.5 w-14 ${
              isLeft ? "-right-14 bg-linear-to-l" : "-left-14 bg-linear-to-r"
            } from-transparent via-primary-200 to-primary-500`}
          />
          <span
            className={`hidden md:block absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-primary-500 shadow-[0_0_20px] shadow-primary-400/70 ${
              isLeft ? "-right-[7px]" : "-left-[7px]"
            }`}
          />

          <div className="text-xs font-semibold uppercase tracking-[0.45em] text-primary-400">
            Step {stepNumber}
          </div>
          <h3 className="mt-3 font-sitka text-2xl text-slate-900">
            {step.title}
          </h3>
          <p className="mt-4 text-base text-slate-600">{step.text}</p>
          {step.points && (
            <ul className={`flex flex-col font-medium`}>
              {step.points.map((point, idx) => (
                <li key={idx} className="text-base text-slate-500">
                  {point}
                </li>
              ))}
            </ul>
          )}
        </article>
      </div>
    </div>
  );
};

const StepMarker = ({ number }) => {
  return (
    <div className="relative z-10 flex flex-col items-center">
      <div className="absolute inset-0 -translate-y-2">
        <div className="mx-auto h-12 w-12 rounded-full bg-primary-200/30 blur-2xl" />
      </div>
      <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-primary-100 bg-white shadow-lg shadow-primary-900/10">
        <span className="text-lg font-semibold text-primary-600">{number}</span>
      </div>
    </div>
  );
};

const WaveLine = ({ gradientId, glowId }) => {
  return (
    <div className="pointer-events-none absolute -inset-y-14 left-1/2 w-24 -translate-x-1/2">
      <svg
        className="h-full w-full"
        viewBox={`0 0 80 ${WAVE_VIEWBOX_HEIGHT}`}
        fill="none"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id={gradientId} x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
            <stop offset="35%" stopColor="#4dace3" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#197bbc" stopOpacity="0" />
          </linearGradient>
          <filter id={glowId} x="-50%" y="-10%" width="200%" height="140%">
            <feGaussianBlur stdDeviation="12" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          d={wavePath}
          stroke={`url(#${gradientId})`}
          strokeWidth="8"
          strokeLinecap="round"
          opacity="0.35"
          filter={`url(#${glowId})`}
        />
        <path
          d={wavePath}
          stroke={`url(#${gradientId})`}
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

function createWavePath({ segments, segmentHeight, amplitude, centerX }) {
  let path = `M${centerX} 0`;

  for (let i = 0; i < segments; i += 1) {
    const startY = i * segmentHeight;
    const endY = startY + segmentHeight;
    const direction = i % 2 === 0 ? 1 : -1;
    const cp1x = centerX + amplitude * direction;
    const cp2x = centerX - amplitude * direction;
    const cp1y = startY + segmentHeight * 0.3;
    const cp2y = startY + segmentHeight * 0.7;

    path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${centerX} ${endY}`;
  }

  return path;
}

export default ProcessTimeline;
