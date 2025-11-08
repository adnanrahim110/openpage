"use client";

import { icons_books, icons_literature, icons_pen, icons_rate } from "@/public";
import { fadeInUp } from "@/utils/animations";
import { motion } from "motion/react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { HiSparkles } from "react-icons/hi2";
import Subtitle from "../ui/Subtitle";
import Title from "../ui/Title";

const counterInfo = [
  { icon: icons_rate, number: 20, text: "Years of Experience" },
  { icon: icons_books, number: 280, text: "Books Internationally Acclaimed" },
  { icon: icons_literature, number: 1500, text: "Books Written" },
  { icon: icons_pen, number: 550, text: "Native Writers" },
];

const CounterCard = ({ icon, number, text, hasStarted, idx }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!hasStarted) return;
    const duration = 2000;
    const stepTime = 30;
    const totalSteps = Math.ceil(duration / stepTime);

    let frame = 0;
    const timer = setInterval(() => {
      frame += 1;
      const progress = frame / totalSteps;
      setCount(Math.floor(number * progress));

      if (frame === totalSteps) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [hasStarted, number]);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp({ delay: idx * 0.15 })}
      className="group relative"
    >
      <div className="relative flex h-full min-h-56 flex-col justify-between overflow-hidden bg-white rounded-xl p-6 shadow-lg border border-gray-200 transition-all duration-500 hover:shadow-xl hover:border-primary/20 md:p-8">
        {/* Icon Container */}
        <div className="relative z-10">
          <div className="inline-flex rounded-xl bg-primary/5 p-4 transition-all duration-300 group-hover:bg-primary/10">
            <Image
              width={500}
              height={500}
              src={icon}
              className="h-12 w-auto object-contain md:h-14"
              alt=""
            />
          </div>
        </div>

        {/* Counter Display */}
        <div className="relative z-10 space-y-2">
          <div className="flex items-baseline gap-2">
            <h3 className="font-mono text-5xl font-bold tracking-tight text-primary md:text-6xl">
              {count}
            </h3>
            <span className="text-3xl font-bold text-gray-400 md:text-4xl">
              +
            </span>
          </div>
          <p className="font-semibold text-gray-600 text-sm uppercase tracking-wide md:text-base">
            {text}
          </p>
        </div>

        {/* Subtle accent */}
        <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-500 group-hover:w-full" />
      </div>
    </motion.div>
  );
};

const Sec1 = () => {
  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-linear-to-b from-white via-slate-50/50 to-white py-20 md:py-32"
    >
      <div className="absolute inset-0 z-2">
        <div className="absolute inset-0 opacity-[0.2]">
          <div
            className="size-full"
            style={{
              backgroundImage:
                "linear-linear(to right, black 1px, transparent 1px), linear-linear(to bottom, black 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>
      </div>
      <div
        className="absolute inset-0 bg-contain bg-right bg-no-repeat opacity-[0.5] z-0"
        style={{ backgroundImage: `url(/images/about-2.avif)` }}
      />

      <div className="container relative z-10">
        <div className="row items-center justify-between gap-y-16">
          <div className="lg:w-[52%]">
            <div className="flex flex-col gap-8 md:gap-10">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp()}
              >
                <Subtitle variant="halo" icon={HiSparkles}>
                  About Us
                </Subtitle>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp({ delay: 0.15 })}
              >
                <Title
                  as="h2"
                  title="Get in Touch with Open Page Publishing"
                  highlight="Open Page Publishing"
                  variant="black"
                />
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp({ delay: 0.3 })}
                className="space-y-6"
              >
                <div className="relative">
                  <div className="space-y-2 text-base text-black/70 md:text-lg">
                    <p>
                      Ready to take the next step in your writing career?
                      Western Book Publishing excels at turning writers into
                      renowned authors. Our team of publishing experts will
                      guide you every step of the way, ensuring your voice
                      resonates in the literary world.
                    </p>
                    <p>
                      Join us on this journey and let your story captivate the
                      world. Embrace the famous author status with Open Page
                      Publishing and showcase your talent to a global audience.
                    </p>
                    <p>
                      With us by your side, the path to literary success is
                      illuminated, offering you the chance to make a lasting
                      impact in the dynamic world of literature. Connect with
                      Open Page Publishing and let your literary aspirations
                      soar to new horizons.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="lg:w-[44%]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp({ delay: 0.2 })}
              className="relative"
            >
              <div
                className="absolute inset-0 -z-10 bg-center bg-no-repeat opacity-[0.03]"
                style={{
                  backgroundImage: `url(/images/banners/usa-bg.avif)`,
                  backgroundSize: "100%",
                }}
              />

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {counterInfo.map((item, idx) => (
                  <CounterCard
                    key={idx}
                    icon={item.icon}
                    number={item.number}
                    text={item.text}
                    idx={idx}
                    hasStarted={startCount}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sec1;
