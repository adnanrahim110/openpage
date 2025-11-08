"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

const ServicesShowcase = ({ service, pathname }) => {
  const [hoveredId, setHoveredId] = useState(null);
  const containerRef = useRef(null);

  const cards = (service.servicesCard || []).filter((c) => c.link !== pathname);
  const list = cards.length > 6 ? cards.filter((c) => c.id !== 2) : cards;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      ref={containerRef}
      className="relative py-32 bg-linear-to-br from-gray-900 via-slate-900 to-gray-900 overflow-hidden"
    >
      {/* Premium light textured background for dark section */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 opacity-20"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 30% 40%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 70% 60%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
              repeating-linear-gradient(
                45deg,
                transparent,
                transparent 40px,
                rgba(255, 255, 255, 0.02) 40px,
                rgba(255, 255, 255, 0.02) 42px
              ),
              repeating-linear-gradient(
                -45deg,
                transparent,
                transparent 40px,
                rgba(255, 255, 255, 0.02) 40px,
                rgba(255, 255, 255, 0.02) 42px
              )
            `,
          }}
        />
      </motion.div>

      {/* Animated light particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.1,
          }}
        />
      ))}

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="h-1 w-32 bg-linear-to-r from-transparent via-purple-500 to-transparent mx-auto mb-8"
          />

          <h2 className="text-6xl lg:text-7xl font-black mb-6">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-purple-300 to-blue-300">
              Explore More
            </span>
          </h2>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover our comprehensive suite of premium services
          </p>
        </motion.div>

        {/* Premium Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((card, i) => {
            const isHovered = hoveredId === card.id;

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                className={`${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
                onMouseEnter={() => setHoveredId(card.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <Link href={card.link}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className={`relative h-full ${
                      i === 0 ? "min-h-[500px]" : "min-h-[300px]"
                    } rounded-3xl overflow-hidden group`}
                  >
                    {/* Premium glass card with gradient */}
                    <div className="absolute inset-0 bg-linear-to-br from-purple-900/40 via-slate-900/40 to-blue-900/40 backdrop-blur-xl border-2 border-white/10 group-hover:border-purple-500/50 transition-all duration-500" />

                    {/* Animated gradient overlay */}
                    <motion.div
                      animate={{
                        opacity: isHovered ? 1 : 0.3,
                        scale: isHovered ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 bg-linear-to-br from-purple-600/20 to-blue-600/20 blur-xl"
                    />

                    {/* Image Background */}
                    <div className="absolute inset-0">
                      <Image
                        src={card.img}
                        alt={card.title}
                        fill
                        className="object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-700 group-hover:scale-110"
                        style={{ transition: "all 0.7s ease-out" }}
                      />
                    </div>

                    {/* Content */}
                    <div className="absolute inset-0 p-8 flex flex-col justify-between">
                      {/* Top: Icon with animated ring */}
                      <div className="relative inline-flex self-start">
                        <motion.div
                          animate={{
                            scale: isHovered ? [1, 1.2, 1] : 1,
                            rotate: isHovered ? 360 : 0,
                          }}
                          transition={{ duration: 0.6 }}
                          className="absolute inset-0 rounded-2xl bg-linear-to-br from-purple-500 to-blue-500 blur-lg opacity-50"
                        />

                        <div className="relative w-16 h-16 rounded-2xl bg-linear-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-xl">
                          <Image
                            src={card.img}
                            alt=""
                            width={32}
                            height={32}
                            className="brightness-0 invert object-contain"
                          />
                        </div>
                      </div>

                      {/* Bottom: Text Content */}
                      <div className="space-y-4">
                        <motion.h3
                          animate={{
                            x: isHovered ? 5 : 0,
                            scale: isHovered ? 1.02 : 1,
                          }}
                          className={`font-black text-white leading-tight ${
                            i === 0
                              ? "text-4xl lg:text-5xl"
                              : "text-2xl lg:text-3xl"
                          }`}
                        >
                          {card.title}
                        </motion.h3>

                        <AnimatePresence>
                          {isHovered && (
                            <motion.div
                              initial={{ opacity: 0, height: 0, y: -10 }}
                              animate={{ opacity: 1, height: "auto", y: 0 }}
                              exit={{ opacity: 0, height: 0, y: -10 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <p className="text-gray-300 leading-relaxed">
                                {card.text}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Premium CTA Button */}
                        <motion.div
                          animate={{
                            x: isHovered ? 10 : 0,
                            opacity: isHovered ? 1 : 0.7,
                          }}
                          className="flex items-center gap-3 text-purple-400 font-bold"
                        >
                          <span>Explore Service</span>
                          <motion.svg
                            animate={{ x: isHovered ? [0, 5, 0] : 0 }}
                            transition={{
                              repeat: isHovered ? Infinity : 0,
                              duration: 1,
                            }}
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                          </motion.svg>
                        </motion.div>
                      </div>
                    </div>

                    {/* Animated border glow */}
                    <motion.div
                      animate={{
                        opacity: isHovered ? 1 : 0,
                        scale: isHovered ? 1 : 0.95,
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 rounded-3xl pointer-events-none"
                      style={{
                        boxShadow:
                          "0 0 40px rgba(139, 92, 246, 0.5), inset 0 0 40px rgba(139, 92, 246, 0.2)",
                        border: "2px solid rgba(139, 92, 246, 0.5)",
                      }}
                    />
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 w-full rotate-180">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default ServicesShowcase;
