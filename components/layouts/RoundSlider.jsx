"use client";

import { roundSlider } from "@/constants";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { HiSparkles } from "react-icons/hi2";
import { IoMdInfinite } from "react-icons/io";
import Subtitle from "../ui/Subtitle";
import Title from "../ui/Title";

const RoundSlider = () => {
  const slides = Array.isArray(roundSlider) ? roundSlider.filter(Boolean) : [];
  const slideCount = slides.length;

  const descriptorPalette = [
    {
      label: "Collector's Edition",
      accent: "Aurora Prism Series",
      descriptor: "Foil-gilded hardback crafted for discerning bibliophiles.",
      tone: "Hand-numbered and archival bound.",
      accentGradient:
        "linear-gradient(135deg, rgba(99,102,241,0.75), rgba(236,72,153,0.7), rgba(6,182,212,0.6))",
      accentColor: "rgba(99,102,241,0.38)",
    },
    {
      label: "Signature Bestseller",
      accent: "Midnight Velvet Finish",
      descriptor:
        "Critically acclaimed prose wrapped in luxe satin lamination.",
      tone: "Winner of three international awards.",
      accentGradient:
        "linear-gradient(135deg, rgba(79,70,229,0.75), rgba(30,64,175,0.65), rgba(147,197,253,0.6))",
      accentColor: "rgba(79,70,229,0.35)",
    },
    {
      label: "Illustrated Classic",
      accent: "Gilded Edge Illustrations",
      descriptor: "Hand-painted spreads breathing life into every chapter.",
      tone: "Printed on archival cotton stock.",
      accentGradient:
        "linear-gradient(135deg, rgba(248,113,113,0.75), rgba(251,191,36,0.7), rgba(94,234,212,0.6))",
      accentColor: "rgba(248,113,113,0.33)",
    },
    {
      label: "Avant-Garde Debut",
      accent: "Neon Reverie Palette",
      descriptor: "Cutting-edge storytelling with iridescent spot UV accents.",
      tone: "Edition limited to five hundred copies.",
      accentGradient:
        "linear-gradient(135deg, rgba(236,72,153,0.78), rgba(192,38,211,0.65), rgba(59,130,246,0.6))",
      accentColor: "rgba(236,72,153,0.4)",
    },
    {
      label: "Legacy Anthology",
      accent: "Chronicle Luxe Binding",
      descriptor:
        "A treasury of award-winning voices curated into one compendium.",
      tone: "Letterpress typography with bespoke foreword.",
      accentGradient:
        "linear-gradient(135deg, rgba(59,130,246,0.7), rgba(56,189,248,0.6), rgba(14,165,233,0.6))",
      accentColor: "rgba(56,189,248,0.38)",
    },
    {
      label: "Immersive Fantasy",
      accent: "Celestial Nightfall Foil",
      descriptor: "Epic saga enveloped in shimmering cosmic gradients.",
      tone: "Fold-out maps and companion art portfolio enclosed.",
      accentGradient:
        "linear-gradient(135deg, rgba(14,116,144,0.78), rgba(79,70,229,0.65), rgba(216,180,254,0.6))",
      accentColor: "rgba(14,116,144,0.42)",
    },
    {
      label: "Literary Spotlight",
      accent: "Ivory Silk Dust Jacket",
      descriptor: "Modern classic celebrated by critics across the globe.",
      tone: "Signed author plates available on request.",
      accentGradient:
        "linear-gradient(135deg, rgba(156,163,175,0.72), rgba(244,114,182,0.65), rgba(99,102,241,0.6))",
      accentColor: "rgba(156,163,175,0.36)",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(() =>
    typeof window === "undefined" ? 1440 : window.innerWidth
  );
  const [isHovering, setIsHovering] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);

  const autoplayRef = useRef(null);
  const pointerStartRef = useRef(null);
  const sliderRef = useRef(null);

  const slideMeta = slides.map((src, index) => ({
    id: `slide-${index}`,
    src,
    ...descriptorPalette[index % descriptorPalette.length],
  }));
  const metaCount = slideMeta.length;
  const activeMeta = metaCount > 0 ? slideMeta[currentIndex % metaCount] : null;

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  const goNext = useCallback(() => {
    if (slideCount <= 1) return;
    setCurrentIndex((prev) => (prev + 1) % slideCount);
  }, [slideCount]);

  const goPrev = useCallback(() => {
    if (slideCount <= 1) return;
    setCurrentIndex((prev) => (prev - 1 + slideCount) % slideCount);
  }, [slideCount]);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const shouldPause = isHovering || isDragging;

  useEffect(() => {
    if (slideCount <= 1 || shouldPause) {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
        autoplayRef.current = null;
      }
      return undefined;
    }

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slideCount);
    }, 5200);

    autoplayRef.current = interval;

    return () => {
      clearInterval(interval);
      if (autoplayRef.current === interval) {
        autoplayRef.current = null;
      }
    };
  }, [slideCount, shouldPause]);

  const getRelativeOffset = useCallback(
    (index) => {
      if (slideCount === 0) return 0;
      let offset = index - currentIndex;
      const half = Math.floor(slideCount / 2);
      if (offset > half) offset -= slideCount;
      if (offset < -half) offset += slideCount;
      return offset;
    },
    [currentIndex, slideCount]
  );

  const helixRadius =
    viewportWidth < 640 ? 110 : viewportWidth < 1024 ? 165 : 220;
  const helixRise = viewportWidth < 768 ? 66 : viewportWidth < 1280 ? 82 : 94;
  const depthOffset =
    viewportWidth < 768 ? 260 : viewportWidth < 1280 ? 340 : 440;

  const handlePointerDown = (event) => {
    if (!slideCount) return;
    const clientX = event.clientX ?? 0;
    pointerStartRef.current = clientX;
    setIsDragging(true);
    setDragOffset(0);
    stopAutoplay();

    if (sliderRef.current?.setPointerCapture) {
      try {
        sliderRef.current.setPointerCapture(event.pointerId);
      } catch (_) {}
    }
  };

  const handlePointerMove = (event) => {
    if (!isDragging || pointerStartRef.current === null) return;
    const clientX = event.clientX ?? 0;
    setDragOffset(clientX - pointerStartRef.current);
  };

  const finalizeDrag = (event) => {
    if (!isDragging) return;
    const clientX = event.clientX ?? pointerStartRef.current ?? 0;
    const delta = clientX - (pointerStartRef.current ?? clientX);

    pointerStartRef.current = null;
    setDragOffset(0);
    setIsDragging(false);

    if (Math.abs(delta) > 60) {
      if (delta < 0) {
        goNext();
      } else {
        goPrev();
      }
    }

    if (sliderRef.current?.releasePointerCapture) {
      try {
        sliderRef.current.releasePointerCapture(event.pointerId);
      } catch (_) {}
    }
  };

  const handlePointerUp = (event) => {
    finalizeDrag(event);
  };

  const handlePointerCancel = (event) => {
    finalizeDrag(event);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
    stopAutoplay();
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (isDragging) {
      setIsDragging(false);
      pointerStartRef.current = null;
      setDragOffset(0);
    }
  };

  const handleKeyDown = (event) => {
    if (!slideCount) return;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      stopAutoplay();
      goNext();
    }

    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      stopAutoplay();
      goPrev();
    }

    if (event.key === "Home") {
      event.preventDefault();
      stopAutoplay();
      setCurrentIndex(0);
    }

    if (event.key === "End") {
      event.preventDefault();
      stopAutoplay();
      setCurrentIndex(slideCount - 1);
    }
  };

  const maxVisible =
    slideCount > 5 ? 3 : Math.max(1, Math.floor(slideCount / 2));

  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-linear-to-b from-slate-50 via-white to-slate-100" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(148,163,184,0.18),transparent_58%)]" />
      <div className="pointer-events-none absolute inset-0 mix-blend-soft-light opacity-70 bg-[linear-gradient(115deg,rgba(255,255,255,0.32)_0%,rgba(148,163,184,0.12)_45%,rgba(15,23,42,0.18)_100%)]" />
      <div className="absolute -top-52 right-[-15%] h-[520px] w-[520px] rounded-full bg-linear-to-br from-primary/25 via-purple-500/20 to-sky-400/20 blur-3xl opacity-80" />
      <div className="absolute -bottom-48 left-[-12%] h-[580px] w-[580px] rounded-full bg-linear-to-tr from-sky-500/20 via-primary/18 to-violet-500/18 blur-3xl opacity-75" />
      <div className="pointer-events-none absolute inset-0 opacity-35 bg-[linear-gradient(0deg,rgba(148,163,184,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.12)_1px,transparent_1px)] bg-size-[120px_120px]" />

      <div className="container relative z-10">
        <div className="row justify-center mb-16">
          <div className="lg:w-10/12 xl:w-8/12">
            <div className="space-y-6 text-center">
              <Subtitle
                variant="halo"
                icon={HiSparkles}
                endIcon={IoMdInfinite}
                iconClassName="text-primary text-xl animate-pulse"
                endIconClassName="text-primary text-xl"
                className="inline-flex bg-white/70 shadow-2xl backdrop-blur border border-white/40"
                textClassName="text-sm font-bold text-primary tracking-[0.45em] uppercase"
              >
                Celestial Showcase
              </Subtitle>

              <Title
                as="h2"
                variant="black"
                title="Where Iconic Covers Orbit in Luxury"
                highlight="Iconic Covers"
                className="text-center text-4xl leading-tight md:text-5xl lg:text-6xl"
              />

              <p className="mx-auto max-w-3xl text-gray-700 text-lg md:text-xl font-medium leading-relaxed">
                Experience a museum-grade carousel of jacket art that shimmers
                with depth and motion. Each rotation invites guests to pause,
                revel in the craft, and imagine the story waiting beyond the
                cover.
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-center">
          <div className="flex w-full flex-col items-center gap-14">
            <div className="relative w-full max-w-6xl">
              <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-1/2 h-[540px] w-[540px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/40 shadow-[0_0_90px_rgba(148,163,184,0.35)]" />

                <div className="absolute left-1/2 top-1/2 h-[840px] w-[840px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[conic-gradient(from_120deg_at_50%_50%,rgba(59,130,246,0.18),rgba(244,114,182,0.0),rgba(99,102,241,0.2),rgba(59,130,246,0.12))] blur-3xl opacity-60 animate-[spin_48s_linear_infinite]" />
                <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-br from-primary/20 via-sky-400/12 to-violet-500/20 blur-2xl opacity-80" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.08),transparent_60%)]" />
              </div>

              <div
                ref={sliderRef}
                role="region"
                aria-roledescription="carousel"
                aria-label="Portfolio highlight carousel"
                tabIndex={0}
                onFocus={handleMouseEnter}
                onBlur={handleMouseLeave}
                onKeyDown={handleKeyDown}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerLeave={handlePointerCancel}
                onPointerCancel={handlePointerCancel}
                className={`relative mx-auto h-[460px] select-none sm:h-[520px] lg:h-[540px] ${
                  isDragging ? "cursor-grabbing" : "cursor-grab"
                }`}
                style={{ perspective: "1600px", transformStyle: "preserve-3d" }}
              >
                {slideMeta.map((meta, index) => {
                  const offset = getRelativeOffset(index);
                  const limitedOffset = Math.max(
                    -maxVisible,
                    Math.min(offset, maxVisible)
                  );
                  const angle = limitedOffset * 32;
                  const radians = (angle * Math.PI) / 180;
                  const isActive = offset === 0;
                  const dragInfluence = Math.max(
                    -160,
                    Math.min(160, dragOffset)
                  );
                  const translateX =
                    Math.sin(radians) * helixRadius +
                    (isActive ? dragInfluence * 0.45 : dragInfluence * 0.12);
                  const translateY =
                    limitedOffset * -helixRise +
                    (isActive ? dragInfluence * -0.08 : 0);
                  const translateZ =
                    -depthOffset +
                    Math.cos(radians) * depthOffset * 0.55 -
                    Math.abs(limitedOffset) * 36;
                  const rotateY = angle * 0.9;
                  const rotateX = limitedOffset * -6.2;
                  const scale = isActive
                    ? 1.08 + Math.min(Math.abs(dragInfluence) / 900, 0.05)
                    : Math.max(0.58, 0.92 - Math.abs(limitedOffset) * 0.08);
                  const opacity = isActive
                    ? 1
                    : Math.max(0.12, 1 - Math.abs(limitedOffset) * 0.24);
                  const blur = Math.max(0, Math.abs(limitedOffset) * 1.25);

                  return (
                    <div
                      key={meta.id ?? `${index}`}
                      aria-hidden={!isActive}
                      className="absolute left-1/2 top-1/2 h-80 w-[220px] will-change-transform transition-[transform,filter,opacity] duration-800 ease-out sm:h-[360px] sm:w-[260px] md:h-[420px] md:w-[300px] lg:h-[480px] lg:w-[340px]"
                      style={{
                        transform: `translate3d(-50%, -50%, 0) translate3d(${translateX}px, ${translateY}px, ${translateZ}px) rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(${scale})`,
                        opacity,
                        filter: `blur(${blur}px)`,
                        zIndex: 200 - Math.abs(offset) * 12,
                      }}
                    >
                      <div className="relative size-full">
                        <div className="relative size-full overflow-hidden">
                          <div
                            aria-hidden
                            className="absolute inset-0 transition-transform bg-contain bg-center bg-no-repeat duration-700 ease-out"
                            style={{
                              backgroundImage: `url(${meta.src})`,
                              transform: isActive
                                ? "scale(1.04)"
                                : "scale(1.08)",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {slideCount > 0 && activeMeta && (
              <div className="flex w-full flex-col items-center gap-12">
                <div className="relative w-full max-w-3xl text-center">
                  <div
                    className="pointer-events-none absolute inset-0 -z-10 blur-3xl opacity-80"
                    style={{
                      background:
                        activeMeta.accentGradient ??
                        "linear-gradient(135deg, rgba(59,130,246,0.35), rgba(236,72,153,0.32))",
                    }}
                  />
                </div>

                <div className="flex flex-col items-center gap-7">
                  <div className="grid grid-cols-3 gap-2 sm:grid-cols-5 lg:grid-cols-7">
                    {slideMeta.map((meta, index) => {
                      const isActive = index === currentIndex;
                      return (
                        <button
                          key={meta.id ?? `${index}`}
                          type="button"
                          onClick={() => {
                            stopAutoplay();
                            setCurrentIndex(index);
                          }}
                          aria-label={`Reveal slide ${index + 1}`}
                          className={`group relative h-20 w-13 transition-all duration-400 ${
                            isActive
                              ? "scale-125 -translate-y-2"
                              : "opacity-75 hover:opacity-100"
                          }`}
                        >
                          <span className="relative block size-full">
                            <span
                              className="block size-full transition-transform duration-400 bg-contain bg-center bg-no-repeat"
                              style={{
                                backgroundImage: `url(${meta.src})`,
                              }}
                            />
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoundSlider;
