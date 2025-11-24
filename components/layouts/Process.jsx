"use client";

import Image from "next/image";
import { forwardRef, useEffect, useRef, useState } from "react";

const processSteps = [
  {
    title: "Let’s Shape the Big Idea",
    text: "We begin by understanding the heart of your book, its themes, purpose, and message, so your story develops on a strong and meaningful foundation.",
    number: "01",
  },
  {
    title: "Plan with Purpose",
    text: "Our team researches, outlines, and organizes your book’s direction, ensuring every chapter flows naturally and supports your vision with clarity and intention.",
    number: "02",
  },
  {
    title: "Write with Confidence",
    text: "We guide you through each draft, helping you strengthen your voice while maintaining structure, style, and storytelling consistency from start to finish.",
    number: "03",
  },
  {
    title: "Polish Every Page",
    text: "Our editors refine your manuscript with careful attention to tone, clarity, pacing, and grammar, revising each section until your writing reads smoothly and professionally.",
    number: "04",
  },
  {
    title: "Hear What Matters",
    text: "You receive thoughtful and constructive feedback designed to enhance your ideas without changing your voice. Every improvement supports and strengthens your message.",
    number: "05",
  },
  {
    title: "Publish with Impact",
    text: "Your book is completed with professional formatting, custom cover design, and a seamless publishing process across Amazon, global eBook stores, and audiobook platforms.",
    number: "06",
  },
];

const StepItem = forwardRef(({ step, isActive, onActivate }, ref) => {
  return (
    <div
      ref={ref}
      className={`relative p-5 sm:p-6 rounded-2xl cursor-pointer border border-white/30 backdrop-blur
                  transition-all duration-300 ease-in-out
                  ${
                    isActive
                      ? "bg-white shadow-xl scale-[1.03]"
                      : "bg-white/60 hover:bg-white/80"
                  }`}
      onMouseEnter={onActivate}
      onClick={onActivate}
    >
      <span
        className={`block font-extrabold leading-none text-5xl md:text-9xl
                   transition-colors duration-300
                   md:absolute md:top-0 md:left-0 md:-translate-y-1/4 md:z-0
                   ${isActive ? "text-primary-100" : "text-primary-100/60"}`}
      >
        {step.number}
      </span>

      <div className="relative mt-3 md:mt-0 md:z-10">
        <h3
          className={`text-xl sm:text-2xl font-bold mb-2 transition-colors duration-300
                    ${isActive ? "text-primary" : "text-slate-800"}`}
        >
          {step.title}
        </h3>
        <p
          className={`transition-colors duration-300 text-sm sm:text-[15px] leading-relaxed ${
            isActive ? "text-slate-700" : "text-slate-600/90"
          }`}
        >
          {step.text}
        </p>
      </div>
    </div>
  );
});

StepItem.displayName = "StepItem";

const Process = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const [lines, setLines] = useState([]);
  const containerRef = useRef(null);
  const imageContainerRef = useRef(null);
  const stepRefs = useRef(new Array(processSteps.length));

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const handleWidthChange = (event) => {
      setIsLargeScreen(event.matches);
    };

    handleWidthChange(mediaQuery);

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleWidthChange);
    } else {
      mediaQuery.addListener(handleWidthChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleWidthChange);
      } else {
        mediaQuery.removeListener(handleWidthChange);
      }
    };
  }, []);

  useEffect(() => {
    if (!isLargeScreen) {
      setLines([]);
      return;
    }

    const calculateLines = () => {
      if (
        !containerRef.current ||
        !imageContainerRef.current ||
        stepRefs.current.some((ref) => !ref)
      ) {
        return;
      }

      const containerRect = containerRef.current.getBoundingClientRect();
      const imageRect = imageContainerRef.current.getBoundingClientRect();

      const imageCenter = {
        x: imageRect.left - containerRect.left + imageRect.width / 2,
        y: imageRect.top - containerRect.top + imageRect.height / 2,
      };

      const newLines = stepRefs.current.map((ref, index) => {
        if (!ref) return null;
        const stepRect = ref.getBoundingClientRect();

        const x1 =
          index < 3
            ? stepRect.right - containerRect.left
            : stepRect.left - containerRect.left;
        const y1 = stepRect.top - containerRect.top + stepRect.height / 2;

        return {
          x1,
          y1,
          x2: imageCenter.x,
          y2: imageCenter.y,
        };
      });

      setLines(newLines.filter(Boolean));
    };

    calculateLines();
    window.addEventListener("resize", calculateLines);

    return () => window.removeEventListener("resize", calculateLines);
  }, [activeIndex, isLargeScreen]);

  return (
    <div className="flex items-start lg:items-center justify-center min-h-screen text-slate-900 py-12 px-4 sm:px-6 lg:px-8 font-sans antialiased">
      <div className="relative w-full" ref={containerRef}>
        {isLargeScreen && (
          <svg
            className="absolute top-0 left-0 w-full h-full hidden lg:block"
            style={{ zIndex: 1, pointerEvents: "none" }}
          >
            {lines.map((line, index) => (
              <line
                key={index}
                x1={line.x1}
                y1={line.y1}
                x2={line.x2}
                y2={line.y2}
                className={`stroke-primary transition-opacity duration-300 ease-in-out`}
                strokeWidth="2"
                strokeDasharray="5, 5"
              />
            ))}
          </svg>
        )}

        <div className="container relative" style={{ zIndex: 2 }}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 items-start lg:items-center">
            <div className="flex flex-col gap-6 sm:gap-8 lg:gap-12">
              {processSteps.slice(0, 3).map((step, index) => (
                <StepItem
                  key={index}
                  ref={(el) => (stepRefs.current[index] = el)}
                  step={step}
                  isActive={activeIndex === index}
                  onActivate={() => setActiveIndex(index)}
                />
              ))}
            </div>

            <div
              ref={imageContainerRef}
              className="relative w-full h-80 sm:h-96 min-h-80 sm:min-h-[400px] lg:min-h-[600px] flex items-center justify-center"
            >
              {processSteps.map((step, index) => (
                <Image
                  key={index}
                  width={800}
                  height={1280}
                  src={`/images/book_mockups/p${index + 1}.avif`}
                  alt={step.title}
                  className={`absolute mix-blend-multiply object-contain max-h-full max-w-full transition-opacity duration-500 ease-in-out ${
                    activeIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                  priority={index === 0}
                />
              ))}
            </div>

            <div className="flex flex-col gap-12">
              {processSteps.slice(3, 6).map((step, index) => {
                const actualIndex = index + 3;
                return (
                  <StepItem
                    key={actualIndex}
                    ref={(el) => (stepRefs.current[actualIndex] = el)}
                    step={step}
                    isActive={activeIndex === actualIndex}
                    onActivate={() => setActiveIndex(actualIndex)}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
