"use client";

import { roundSlider } from "@/constants";
import { banners_texture } from "@/public";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { HiSparkles } from "react-icons/hi2";
import Subtitle from "../ui/Subtitle";
import Title from "../ui/Title";

const FALLBACK_SLIDES = [
  "/images/books/1_4.avif",
  "/images/books/2_4.avif",
  "/images/books/3_4.avif",
];

const RoundSlider = () => {
  const slides = useMemo(
    () => (Array.isArray(roundSlider) ? roundSlider.filter(Boolean) : []),
    []
  );
  const items = slides.length ? slides : FALLBACK_SLIDES;
  const total = items.length;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const containerRef = useRef(null);
  const autoplayRef = useRef(null);

  const goTo = useCallback(
    (index, dir = 1) => {
      if (!total) return;
      const nextIndex = ((index % total) + total) % total;
      setDirection(dir);
      setCurrentIndex(nextIndex);
    },
    [total]
  );

  const goNext = useCallback(() => {
    if (total <= 1) return;
    goTo(currentIndex + 1, 1);
  }, [currentIndex, goTo, total]);

  const goPrev = useCallback(() => {
    if (total <= 1) return;
    goTo(currentIndex - 1, -1);
  }, [currentIndex, goTo, total]);

  useEffect(() => {
    if (total <= 1) return;

    const id = setInterval(goNext, 3500);
    autoplayRef.current = id;

    return () => clearInterval(id);
  }, [goNext, total]);

  const handleMouseMove = useCallback((e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      setMousePos({ x, y });
    }
  }, []);

  const handleDragStart = useCallback((e) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  const handleDragEnd = useCallback(
    (e) => {
      if (!isDragging) return;
      setIsDragging(false);

      const deltaX = e.clientX - dragStart.x;
      const deltaY = Math.abs(e.clientY - dragStart.y);

      if (Math.abs(deltaX) > 100 && deltaY < 80) {
        if (deltaX > 0) goPrev();
        else goNext();
      }
    },
    [isDragging, dragStart, goNext, goPrev]
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goNext, goPrev]);

  return (
    <section className="relative overflow-hidden  py-20 md:py-24">
      <Image
        src={banners_texture}
        width={2000}
        height={1001}
        alt=""
        className="absolute inset-0 size-full object-cover brightness-125 object-top"
      />
      <div className="absolute inset-0 opacity-[0.015]">
        <div
          className="size-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, black 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container relative">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 space-y-4 text-center md:mb-8 mx-auto max-w-3xl">
            <Subtitle variant="halo" icon={HiSparkles}>
              Portfolio
            </Subtitle>

            <Title
              as="h2"
              variant="black"
              highlight="Stories That Inspire the World"
              title="Our Published Authors — Stories That Inspire the World"
              className="font-normal"
            />
          </div>

          <div
            ref={containerRef}
            className="relative text-center"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
          >
            <div className="relative mx-auto h-[420px] w-full md:h-[500px]">
              {items.map((src, index) => {
                const offset = (index - currentIndex + total) % total;
                const isActive = offset === 0;
                const isPrev = offset === total - 1;
                const isNext = offset === 1;

                let translateY = 0;
                let translateX = 0;
                let scale = 1;
                let opacity = 0;
                let zIndex = 0;
                let rotateZ = 0;
                let blur = 0;

                if (isActive) {
                  translateY = mousePos.y * 12;
                  translateX = mousePos.x * 15;
                  scale = 1;
                  opacity = 1;
                  zIndex = 30;
                  rotateZ = mousePos.x * 1.5;
                } else if (isNext) {
                  translateY = 25 + mousePos.y * 6;
                  translateX = 280 + mousePos.x * 8;
                  scale = 0.88;
                  opacity = 1;
                  zIndex = 20;
                  rotateZ = 3;
                } else if (isPrev) {
                  translateY = 25 + mousePos.y * 6;
                  translateX = -280 + mousePos.x * 8;
                  scale = 0.88;
                  opacity = 1;
                  zIndex = 20;
                  rotateZ = -3;
                } else if (offset === 2) {
                  translateY = 50;
                  translateX = 520;
                  scale = 0.78;
                  opacity = 1;
                  zIndex = 10;
                  rotateZ = 4;
                } else if (offset === total - 2) {
                  translateY = 50;
                  translateX = -520;
                  scale = 0.78;
                  opacity = 1;
                  zIndex = 10;
                  rotateZ = -4;
                }

                return (
                  <div
                    key={`slide-${index}`}
                    className="absolute left-1/2 top-1/2 w-[280px] sm:w-[320px] md:w-[300px]"
                    style={{
                      transform: `translate(-50%, -50%) translateX(${translateX}px) translateY(${translateY}px) scale(${scale}) rotate(${rotateZ}deg)`,
                      opacity,
                      zIndex,
                      filter: `blur(${blur}px)`,
                      transition: isDragging
                        ? "none"
                        : "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
                      pointerEvents: isActive ? "auto" : "none",
                    }}
                  >
                    <div
                      className="group relative aspect-4/5 cursor-grab active:cursor-grabbing"
                      onMouseDown={handleDragStart}
                      onMouseUp={handleDragEnd}
                      onMouseLeave={handleDragEnd}
                    >
                      <div className="relative size-full overflow-hidden ">
                        <div className="relative size-full overflow-hidden">
                          <div
                            className="absolute inset-0 bg-contain bg-no-repeat bg-center transition-transform duration-700"
                            style={{
                              backgroundImage: `url(${src})`,
                            }}
                          />
                        </div>
                      </div>

                      <div
                        className="absolute inset-0 -z-10 bg-black/10 blur-2xl transition-all duration-700"
                        style={{
                          transform: "translateY(30px) scale(0.9)",
                          opacity: isActive ? 0.5 : 0.2,
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="inline-flex items-center justify-center gap-12 bg-black/5 backdrop-blur-xs p-2">
              <button
                onClick={goPrev}
                className="group relative flex h-12 w-12 items-center justify-center"
                aria-label="Previous"
              >
                <div className="absolute inset-0 border border-black/20 transition-all duration-300 group-hover:border-black group-hover:scale-110" />
                <svg
                  className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div className="flex items-center gap-2">
                {items.map((_, index) => (
                  <button
                    key={`dot-${index}`}
                    onClick={() => goTo(index, index > currentIndex ? 1 : -1)}
                    className="group relative"
                    aria-label={`Go to slide ${index + 1}`}
                  >
                    {index === currentIndex ? (
                      <div className="h-0.5 w-12 bg-black transition-all duration-500" />
                    ) : (
                      <div className="h-1 w-1 rounded-full bg-black/30 transition-all duration-300 group-hover:bg-black/50" />
                    )}
                  </button>
                ))}
              </div>

              <button
                onClick={goNext}
                className="group relative flex h-12 w-12 items-center justify-center"
                aria-label="Next"
              >
                <div className="absolute inset-0 border border-black/20 transition-all duration-300 group-hover:border-black group-hover:scale-110" />
                <svg
                  className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoundSlider;
