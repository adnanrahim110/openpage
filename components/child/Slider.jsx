"use client";

import { motion } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const slides = [
  {
    id: "stellar-orchard",
    src: "/images/ills/1.avif",
    accent: "#ffbdd6",
  },
  {
    id: "lunar-lagoon",
    src: "/images/ills/2.avif",
    accent: "#7fe5ff",
  },
  {
    id: "chrono-compass",
    src: "/images/ills/3.avif",
    accent: "#f7d389",
  },
  {
    id: "velvet-celestials",
    src: "/images/ills/4.avif",
    accent: "#c7b9ff",
  },
  {
    id: "ember-atlas",
    src: "/images/ills/5.avif",
    accent: "#ff9b7a",
  },
  {
    id: "prism-parade",
    src: "/images/ills/6.avif",
    accent: "#9cf3da",
  },
];

const SlideCard = ({ slide, isActive }) => {
  const cardRef = useRef(null);
  const frameRef = useRef(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, x: 0, y: 0 });

  const resetTilt = () => {
    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    frameRef.current = null;
    setTilt({ rotateX: 0, rotateY: 0, x: 0, y: 0 });
  };

  useEffect(() => {
    if (!isActive) resetTilt();
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [isActive]);

  const handlePointerMove = (event) => {
    if (!isActive || !cardRef.current) return;
    if ("pointerType" in event && event.pointerType === "touch") return;

    const bounds = cardRef.current.getBoundingClientRect();
    const relativeX = (event.clientX - bounds.left) / bounds.width - 0.5;
    const relativeY = (event.clientY - bounds.top) / bounds.height - 0.5;

    const nextTilt = {
      rotateX: -(relativeY * 18),
      rotateY: relativeX * 24,
      x: relativeX * 26,
      y: relativeY * 26,
    };

    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(() => {
      setTilt(nextTilt);
    });
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative w-full max-w-[560px] origin-center"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
      animate={{
        scale: isActive ? 1 : 0.92,
        opacity: isActive ? 1 : 0.6,
        rotate: isActive ? 0 : -2,
        x: isActive ? tilt.x : 0,
        y: isActive ? tilt.y : 14,
        rotateX: isActive ? tilt.rotateX : 0,
        rotateY: isActive ? tilt.rotateY : 0,
        filter: isActive ? "saturate(1.05)" : "grayscale(0.08)",
      }}
      transition={{ type: "spring", stiffness: 150, damping: 24 }}
      style={{
        transformStyle: "preserve-3d",
        aspectRatio: "1 / 1",
        width: "100%",
      }}
    >
      <motion.span
        className="pointer-events-none absolute -left-16 top-10 hidden h-32 w-32 rounded-full blur-[80px] md:block"
        style={{ background: slide.accent }}
        animate={{ opacity: isActive ? [0.2, 0.55, 0.2] : 0.1 }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <div className="relative h-full w-full overflow-hidden rounded-[2.75rem] border border-white/70 bg-white/95">
        <motion.div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(circle at 22% 18%, ${slide.accent}55, transparent 70%)`,
          }}
          animate={{ opacity: isActive ? [0.7, 0.35, 0.7] : 0.2 }}
          transition={{ duration: 5.5, repeat: Infinity }}
        />
        <img
          src={slide.src}
          alt=""
          className="h-full w-full select-none object-cover"
          draggable={false}
        />
      </div>
    </motion.div>
  );
};

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [trackWidth, setTrackWidth] = useState(0);
  const trackRef = useRef(null);
  const isHoveringRef = useRef(false);
  const dragState = useRef({
    active: false,
    id: null,
    startX: 0,
    delta: 0,
    handled: false,
  });
  const totalSlides = slides.length;

  useEffect(() => {
    const node = trackRef.current;
    if (!node) return;

    setTrackWidth(node.offsetWidth);

    if (
      typeof window === "undefined" ||
      typeof window.ResizeObserver === "undefined"
    )
      return;

    const observer = new window.ResizeObserver((entries) => {
      if (!entries.length) return;
      const [{ contentRect }] = entries;
      setTrackWidth(contentRect.width);
    });

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalSlides);
    }, 3500);

    return () => clearInterval(timer);
  }, [isPaused, totalSlides]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const getOffset = useCallback(
    (index) => {
      const half = Math.floor(totalSlides / 2);
      let offset = index - activeIndex;

      if (offset > half) offset -= totalSlides;
      if (offset < -half) offset += totalSlides;

      return offset;
    },
    [activeIndex, totalSlides]
  );

  const offsetDistance = useMemo(() => {
    if (!trackWidth) return 320;
    const base = trackWidth * 0.36;
    return Math.max(220, Math.min(420, base));
  }, [trackWidth]);

  const handlePointerEnterTrack = useCallback(() => {
    isHoveringRef.current = true;
    setIsPaused(true);
  }, []);

  const handlePointerDown = useCallback((event) => {
    if (event.button && event.button !== 0) return;
    dragState.current = {
      active: true,
      id: event.pointerId,
      startX: event.clientX,
      delta: 0,
      handled: false,
    };
    setIsPaused(true);
  }, []);

  const handlePointerMove = useCallback(
    (event) => {
      const drag = dragState.current;
      if (!drag.active || drag.id !== event.pointerId) return;

      drag.delta = event.clientX - drag.startX;
      if (!drag.handled && Math.abs(drag.delta) > 60) {
        drag.handled = true;
        if (drag.delta < 0) {
          handleNext();
        } else {
          handlePrev();
        }
      }
    },
    [handleNext, handlePrev]
  );

  const finishDrag = useCallback(() => {
    const drag = dragState.current;
    if (!drag.active) return;

    if (!drag.handled && Math.abs(drag.delta) > 40) {
      if (drag.delta < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }

    dragState.current = {
      active: false,
      id: null,
      startX: 0,
      delta: 0,
      handled: false,
    };
    if (!isHoveringRef.current) {
      setIsPaused(false);
    }
  }, [handleNext, handlePrev]);

  const handlePointerLeaveTrack = useCallback(() => {
    isHoveringRef.current = false;
    finishDrag();
    setIsPaused(false);
  }, [finishDrag]);

  return (
    <section className="relative overflow-hidden bg-linear-to-b from-primary-50/70 via-white to-white py-24 text-slate-900">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary-200/70 blur-[150px]" />
        <div className="absolute inset-0 bg-[url('/images/banners/noisy_bg.avif')] opacity-[0.08] mix-blend-multiply" />
      </div>

      <div className="relative z-10 px-6">
        <div className="relative flex flex-col items-center gap-10 pt-6">
          <div className="relative w-full">
            <div
              ref={trackRef}
              className="relative mx-auto flex min-h-[360px] w-full max-w-[1200px] items-center justify-center overflow-visible px-2 pb-12 pt-4 md:min-h-[500px] md:px-8"
              onPointerEnter={handlePointerEnterTrack}
              onPointerLeave={handlePointerLeaveTrack}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={finishDrag}
              onPointerCancel={finishDrag}
              style={{ perspective: "1600px", touchAction: "pan-y" }}
            >
              {slides.map((slide, idx) => {
                const offset = getOffset(idx);
                const absOffset = Math.abs(offset);
                const isActive = offset === 0;
                const isVisible = absOffset <= 1;
                const baseDistance = offset * offsetDistance;
                const gapShift = isActive ? 0 : offset > 0 ? 90 : -90;
                const translateX = baseDistance + gapShift;
                const scale = isActive ? 1 : 0.9;
                const opacity = isVisible ? (isActive ? 1 : 0.82) : 0;
                const rotateY = isActive ? 0 : offset > 0 ? -40 : 40;
                const rotateZ = isActive ? 0 : offset > 0 ? 0 : 0;

                return (
                  <motion.div
                    key={slide.id}
                    className="absolute left-1/2 top-1/2 w-full max-w-[520px] -translate-x-1/2 -translate-y-1/2"
                    animate={{
                      x: translateX,
                      scale,
                      opacity,
                      rotateY,
                      rotateZ,
                      y: isActive ? 0 : 20,
                    }}
                    transition={{ type: "spring", stiffness: 140, damping: 20 }}
                    style={{
                      zIndex: slides.length - absOffset,
                      pointerEvents: isActive ? "auto" : "none",
                      visibility: isVisible ? "visible" : "hidden",
                      transformStyle: "preserve-3d",
                    }}
                    aria-hidden={!isActive}
                  >
                    <SlideCard slide={slide} isActive={isActive} />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
