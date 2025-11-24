"use client";

import { BookOpen, Globe, Palette, Wand2 } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Title from "../ui/Title";

const processSteps = [
  {
    step: "01",
    action: "Imagine",
    title: "Story Coaching & Editing",
    description:
      "Perfect for first-time authors, parents, and teachers who want their message to land with young readers.",
    points: [
      "Turn your idea into a full children’s story",
      "Adjust language and rhythm for read-aloud moments",
      "Make your message (kindness, courage, faith, etc.) feel natural, not preachy",
    ],
    cta: {
      title: "Not a “professional writer”? That’s okay.",
      text: "Many of our favorite books started as a simple story a parent told their child at bedtime. We help you shape that into something the world can hold in their hands.",
    },
    icon: Wand2,
    image: "/images/il1.avif",
    cardGradient: "from-white via-[#fff6ed] to-[#ffe9d9]",
    badgeColor: "bg-[#ffe3d4]",
    iconGradient: "from-[#ffc7ec] to-[#ff9ed2]",
    doodleColor: "#ffdcca",
    imageBorder: "border-[#ffd7c4]",
  },

  {
    step: "02",
    action: "Illustrate",
    title: "Character Design & Illustration",
    description:
      "Your characters become real on the page — expressive faces, fun details, and immersive scenes.",
    points: [
      "Custom character sheets before full pages",
      "Page-by-page illustrations planned with your text",
      "High-resolution artwork, print-safe colors",
    ],
    cta: {
      title: "Illustration Mood Options",
      text: (
        <>
          <strong>
            Soft watercolor • Cozy storybook • Bold cartoon • Modern flat •
            Fantasy adventure
          </strong>{" "}
          <br /> Share reference images you like (or other books) and we’ll
          match the feeling, not copy the style.
        </>
      ),
    },
    icon: BookOpen,
    image: "/images/il2.avif",
    cardGradient: "from-white via-[#f3faff] to-[#e4f3ff]",
    badgeColor: "bg-[#def2ff]",
    iconGradient: "from-[#7dd3fc] to-[#60a5fa]",
    doodleColor: "#d6efff",
    imageBorder: "border-[#a8dcff]",
  },

  {
    step: "03",
    action: "Publish",
    title: "Layout, Formatting & Publishing",
    description:
      "We make sure your book looks beautiful in print and on screens — without any technical stress on your side.",
    points: [
      "Trim size selection and layout planning",
      "Kid-friendly fonts and text placement",
      "Print-ready PDF with bleed and crop marks",
      "Kindle KDP / ebook formatting support",
      "Guidance or done-for-you uploading to Amazon & B&N",
    ],
    cta: {
      title: "You keep 100% rights and royalties.",
      text: "We’re your production & publishing partner — not a traditional publisher taking control. Your story stays fully yours.",
    },
    icon: Palette,
    image: "/images/il3.avif",
    cardGradient: "from-white via-[#fdf2ff] to-[#f9e3ff]",
    badgeColor: "bg-[#f5dcff]",
    iconGradient: "from-[#c084fc] to-[#f472b6]",
    doodleColor: "#f6d7ff",
    imageBorder: "border-[#efc6ff]",
  },
];

const ProcessSection = () => {
  const wrapperRef = useRef(null);
  const stickyRef = useRef(null);
  const horizontalRef = useRef(null);
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!wrapperRef.current || !stickyRef.current || !horizontalRef.current)
        return;

      const wrapper = wrapperRef.current;
      const sticky = stickyRef.current;
      const horizontal = horizontalRef.current;

      const { top: wrapperTop } = wrapper.getBoundingClientRect();
      const wrapperHeight = wrapper.offsetHeight;
      const stickyHeight = sticky.offsetHeight;

      const scrollableDist = wrapperHeight - stickyHeight;
      const progress = Math.max(0, Math.min(1, -wrapperTop / scrollableDist));

      const contentWidth = horizontal.scrollWidth;
      const containerWidth = sticky.offsetWidth;
      const totalHorizontalScroll = contentWidth - containerWidth;

      if (totalHorizontalScroll > 0) {
        const newTranslateX = -totalHorizontalScroll * progress;
        setTranslateX(newTranslateX);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-linear-to-b from-[#fffaf3] via-[#f5f1ff] to-[#fefdf8] text-slate-900">
      <motion.span
        aria-hidden
        className="pointer-events-none absolute -right-10 top-14 hidden h-64 w-64 rounded-full bg-[#ffd5ec]/60 blur-3xl md:block"
        animate={{ y: [0, 30, -10, 0] }}
        transition={{ duration: 18, repeat: Infinity }}
      />
      <div ref={wrapperRef} className="relative w-full h-[400vh]">
        <div
          ref={stickyRef}
          className="sticky top-0 w-full h-screen overflow-hidden"
        >
          <div
            ref={horizontalRef}
            className="flex flex-nowrap h-full relative"
            style={{
              transform: `translateX(${translateX}px)`,
              width: `${processSteps.length * 100}vw`,
            }}
          >
            {processSteps.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.step}
                  className="flex w-screen shrink-0 items-center justify-center px-4 py-20 lg:py-10 sm:px-6 lg:px-12"
                >
                  <div className="relative flex w-full flex-col max-w-7xl overflow-hidden rounded-[36px] border border-white/80 bg-white/90 p-6 shadow-[0_35px_90px_rgba(248,189,182,0.35)] md:p-10 lg:flex-row">
                    <div
                      className={`pointer-events-none absolute inset-0 rounded-[36px] bg-linear-to-br ${item.cardGradient}`}
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-[36px] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.8),transparent_55%)]" />
                    <div
                      className="pointer-events-none absolute inset-0 rounded-[36px] opacity-30 mix-blend-multiply"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
                        backgroundSize: "24px 24px",
                      }}
                    />

                    <motion.span
                      aria-hidden
                      className="absolute left-6 top-16 hidden rounded-full md:block"
                      style={{
                        background: item.doodleColor,
                        width: 70,
                        height: 70,
                        opacity: 0.55,
                      }}
                      animate={{ rotate: [0, 8, -4, 0] }}
                      transition={{ duration: 14, repeat: Infinity }}
                    />

                    <motion.span
                      aria-hidden
                      className="absolute right-8 bottom-6 hidden rounded-full md:block"
                      style={{
                        background: item.doodleColor,
                        width: 48,
                        height: 48,
                        opacity: 0.4,
                      }}
                      animate={{ rotate: [0, -6, 3, 0] }}
                      transition={{ duration: 12, repeat: Infinity }}
                    />

                    <div className="relative z-10 grid flex-1 gap-8 lg:grid-cols-[3fr_2fr] lg:items-center">
                      <div className="space-y-5 lg:pr-10">
                        <div className="flex flex-wrap items-center gap-4">
                          <motion.span
                            className={`rounded-2xl bg-linear-to-br ${item.iconGradient} p-4 text-white shadow-lg`}
                            animate={{ rotate: [0, 4, -2, 0] }}
                            transition={{ duration: 10, repeat: Infinity }}
                          >
                            <IconComponent className="h-8 w-8" />
                          </motion.span>

                          <span className="text-4xl font-black text-slate-200">
                            {item.step}
                          </span>

                          <span
                            className={`rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-slate-500 ${item.badgeColor}`}
                          >
                            {item.action}
                          </span>
                        </div>

                        <h3
                          className="text-4xl font-bold text-[#1f1f1f] md:text-4xl"
                          style={{ fontFamily: "'Baloo 2', cursive" }}
                        >
                          {item.title}
                        </h3>

                        <p className="text-base text-slate-600">
                          {item.description}
                        </p>
                        <ul className="list-inside list-disc space-y-2 text-sm text-slate-500">
                          {item.points.map((point, idx) => (
                            <li key={idx}>{point}</li>
                          ))}
                        </ul>
                        <div className="mt-4 rounded-3xl bg-orange-100 border border-orange-200 p-4">
                          <h4
                            className="text-base text-orange-600 font-semibold mb-1"
                            style={{ fontFamily: "'Baloo 2', cursive" }}
                          >
                            {item.cta.title}
                          </h4>
                          <p className="text-[13px] text-neutral-700">
                            {item.cta.text}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col gap-4 text-slate-500">
                        <div
                          className={`relative aspect-square overflow-hidden rounded-[28px] border ${item.imageBorder} bg-white shadow-xl`}
                        >
                          <img
                            src={item.image}
                            alt={`Illustration for ${item.title}`}
                            className="h-full w-full object-cover"
                          />

                          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-white/60 via-transparent to-transparent" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;
