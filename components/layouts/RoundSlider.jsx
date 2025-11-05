"use client";

import { roundSlider } from "@/constants";
import React, { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { HiSparkles } from "react-icons/hi2";
import { IoMdInfinite } from "react-icons/io";
import Subtitle from "../ui/Subtitle";
import Title from "../ui/Title";

const RoundSlider = () => {
  const carouselRef = useRef(null);
  const currDegRef = useRef(0);
  const intervalIdRef = useRef(null);
  const rotationInProgressRef = useRef(false);
  const mouseDownXRef = useRef(null);
  const mouseUpXRef = useRef(null);
  const [zDepth, setZDepth] = useState(
    () => (typeof window !== "undefined" && window.innerWidth < 786 ? 180 : 250)
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const carouselEl = carouselRef.current;
    if (!carouselEl) return;

    const items = carouselEl.querySelectorAll(".item");
    const rotateDeg = 360 / (roundSlider.length - 1);

    const rotate = (direction) => {
      if (rotationInProgressRef.current) return;
      rotationInProgressRef.current = true;

      if (direction === "n") {
        currDegRef.current -= rotateDeg;
        setCurrentIndex((prev) => (prev + 1) % roundSlider.length);
      }
      if (direction === "p") {
        currDegRef.current += rotateDeg;
        setCurrentIndex(
          (prev) => (prev - 1 + roundSlider.length) % roundSlider.length
        );
      }

      carouselEl.style.transform = `rotateY(${currDegRef.current}deg)`;
      items.forEach((it) => {
        it.style.transform = `rotateY(${-currDegRef.current}deg)`;
      });

      setTimeout(() => {
        rotationInProgressRef.current = false;
      }, 1000);
    };

    const startRotation = () => {
      if (intervalIdRef.current === null) {
        intervalIdRef.current = setInterval(() => {
          rotate("n");
        }, 2000);
      }
    };

    const stopRotation = () => {
      if (intervalIdRef.current !== null) {
        clearInterval(intervalIdRef.current);
        intervalIdRef.current = null;
      }
    };

    const handleMouseDown = (e) => {
      mouseDownXRef.current = e.pageX;
      stopRotation();
    };
    const handleMouseMove = (e) => {
      if (mouseDownXRef.current !== null) {
        mouseUpXRef.current = e.pageX;
      }
    };
    const handleMouseUp = () => {
      if (mouseDownXRef.current !== null && mouseUpXRef.current !== null) {
        const swipeDistance = mouseUpXRef.current - mouseDownXRef.current;
        const threshold = 50;

        if (swipeDistance > threshold) {
          rotate("p");
        } else if (swipeDistance < -threshold) {
          rotate("n");
        }
      }

      mouseDownXRef.current = null;
      mouseUpXRef.current = null;
      startRotation();
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        stopRotation();
      } else {
        startRotation();
      }
    };

    carouselEl.addEventListener("mousedown", handleMouseDown);
    carouselEl.addEventListener("mousemove", handleMouseMove);
    carouselEl.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    startRotation();

    window.rotateCarousel = rotate;

    return () => {
      stopRotation();
      carouselEl.removeEventListener("mousedown", handleMouseDown);
      carouselEl.removeEventListener("mousemove", handleMouseMove);
      carouselEl.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      delete window.rotateCarousel;
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window === "undefined") return;
      setZDepth(window.innerWidth < 786 ? 150 : 250);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="py-24 overflow-hidden relative">
      <div className="absolute inset-0 bg-linear-to-br from-gray-50 via-white to-gray-100" />

      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-linear-to-br from-primary/15 to-purple-500/15 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-linear-to-tr from-blue-500/15 to-primary/15 rounded-full blur-3xl" />

      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "radial-linear(circle at 1px 1px, gray 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container relative z-10">
        <div className="row justify-center mb-16">
          <div className="lg:w-10/12 xl:w-9/12">
            <div className="text-center space-y-6">
              <Subtitle
                variant="halo"
                icon={HiSparkles}
                endIcon={IoMdInfinite}
                iconClassName="text-primary text-xl animate-pulse"
                endIconClassName="text-primary text-xl"
                className="inline-flex shadow-lg"
                textClassName="text-sm font-bold text-primary tracking-wider uppercase"
              >
                Our Masterpieces
              </Subtitle>

              <Title
                as="h2"
                variant="black"
                title="Portfolio of the Best Book Publishers"
                highlight="Book Publishers"
                className="text-center text-4xl md:text-5xl lg:text-6xl"
              />

              <p className="mx-auto max-w-3xl text-gray-700 font-medium text-lg leading-relaxed">
                Peek behind the curtain at the storytelling magic we craft every
                day. At Western Book Publishing, we do not simply publish books,
                but <span className="text-primary font-bold">legacies</span>.
                Our catalog is eloquent, with titles that have not only
                dominated charts but also set new standards in publishing.
              </p>

              <div className="flex flex-wrap justify-center gap-6 pt-2">
                {[
                  { label: "Books Published", value: "500+" },
                  { label: "Happy Authors", value: "300+" },
                  { label: "Awards Won", value: "50+" },
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className="px-6 py-3 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-lg transition-shadow duration-300 hover:shadow-xl"
                  >
                    <div className="text-2xl font-black text-primary">
                      {stat.value}
                    </div>
                    <div className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="w-full">
            <div className="relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] bg-linear-to-r from-primary/5 to-purple-500/5 rounded-full blur-3xl -z-10" />

              <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 lg:px-12 z-20 pointer-events-none">
                <button
                  onClick={() => window.rotateCarousel?.("p")}
                  className="pointer-events-auto w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-white shadow-2xl border-2 border-primary/20 flex items-center justify-center text-primary transition-all duration-300 group hover:-translate-x-1 hover:bg-primary hover:text-white"
                  aria-label="Previous"
                >
                  <FaChevronLeft className="text-xl lg:text-2xl transition-transform group-hover:scale-110" />
                </button>

                <button
                  onClick={() => window.rotateCarousel?.("n")}
                  className="pointer-events-auto w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-white shadow-2xl border-2 border-primary/20 flex items-center justify-center text-primary transition-all duration-300 group hover:translate-x-1 hover:bg-primary hover:text-white"
                  aria-label="Next"
                >
                  <FaChevronRight className="text-xl lg:text-2xl transition-transform group-hover:scale-110" />
                </button>
              </div>

              <div className="w-[120px] h-60 lg:w-[150px] lg:h-[280px] mx-auto relative perspective-distant lg:perspective-normal mt-12">
                <div className="absolute inset-0 bg-linear-to-b from-white/50 via-transparent to-white/50 rounded-full blur-2xl scale-150 pointer-events-none" />

                <div
                  ref={carouselRef}
                  className="carousel absolute size-full transform-3d transition-transform duration-1000 select-none"
                >
                  {roundSlider.map((item, idx) => {
                    const deg = 360 / (roundSlider.length - 1);
                    const angle = deg * idx;
                    const isCenter = idx === currentIndex;

                    return (
                      <div
                        key={idx}
                        className="transform-3d"
                        style={{
                          transform: `rotateY(${angle}deg) translateZ(${zDepth}px) rotateY(-${angle}deg)`,
                        }}
                      >
                        <div
                          className={`block absolute w-[120px] h-60 lg:w-[150px] lg:h-[280px] item bg-center bg-no-repeat bg-contain size-full [transition:transform_1s,opacity_0.5s,filter_0.5s] rounded-2xl`}
                          style={{
                            backgroundImage: `url(${item})`,
                            filter: isCenter
                              ? "drop-shadow(0 20px 40px rgba(0,0,0,0.3))"
                              : "drop-shadow(0 10px 20px rgba(0,0,0,0.2))",
                          }}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="flex justify-center gap-2 mt-12">
                {roundSlider.slice(0, -1).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      const diff = idx - currentIndex;
                      const direction = diff > 0 ? "n" : "p";
                      for (let i = 0; i < Math.abs(diff); i++) {
                        setTimeout(
                          () => window.rotateCarousel?.(direction),
                          i * 1100
                        );
                      }
                    }}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === currentIndex
                        ? "w-12 bg-primary"
                        : "w-6 bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoundSlider;
