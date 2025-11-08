"use client";

import { usePopup } from "@/context/PopupProvider";
import {
  banners_cta_bg,
  portfolio_sq1,
  portfolio_sq2,
  portfolio_sq3,
  portfolio_sq4,
  portfolio_sq5,
  portfolio_sq6,
} from "@/public";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FiPhone } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";
import { MdStart } from "react-icons/md";
import Button from "../ui/Button";

const Cta = () => {
  const { openPopup } = usePopup();
  const containerRef = useRef(null);

  // Physics-based parallax mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Create layered parallax depths
  const rotateX = useTransform(smoothMouseY, [-1, 1], [8, -8]);
  const rotateY = useTransform(smoothMouseX, [-1, 1], [-8, 8]);
  const translateZ = useTransform(smoothMouseX, [-1, 1], [-20, 20]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const x = (e.clientX - centerX) / (rect.width / 2);
      const y = (e.clientY - centerY) / (rect.height / 2);
      mouseX.set(x);
      mouseY.set(y);
    };

    const handleMouseLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [mouseX, mouseY]);

  // 3D Book Stack Configuration
  const books = [
    { img: portfolio_sq1, color: "from-blue-500/20 to-cyan-500/20" },
    { img: portfolio_sq2, color: "from-purple-500/20 to-pink-500/20" },
    { img: portfolio_sq3, color: "from-orange-500/20 to-red-500/20" },
    { img: portfolio_sq4, color: "from-green-500/20 to-emerald-500/20" },
    { img: portfolio_sq5, color: "from-indigo-500/20 to-blue-500/20" },
    { img: portfolio_sq6, color: "from-pink-500/20 to-rose-500/20" },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-white">
      {/* Light Sophisticated Background */}
      <div className="absolute inset-0 bg-linear-to-br from-gray-50 via-blue-50/50 to-purple-50/50" />

      {/* Subtle Grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="size-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, #197BBC 1px, transparent 1px), linear-gradient(to bottom, #197BBC 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Elegant Accent Orbs */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-secondary/8 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="row gap-y-16 max-lg:text-center items-center justify-center">
          {/* Mind-Blowing 3D Book Stack with Physics */}
          <div className="lg:w-[40%]">
            <div
              ref={containerRef}
              className="relative size-full min-h-[500px] flex items-center justify-center perspective-distant"
            >
              <motion.div
                style={{
                  rotateX,
                  rotateY,
                  transformStyle: "preserve-3d",
                }}
                className="relative w-full h-[450px]"
              >
                {/* Orbital Ring Effect */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-primary/30"
                  style={{
                    transform: "rotateX(75deg)",
                  }}
                  animate={{
                    borderColor: [
                      "rgba(25, 123, 188, 0.3)",
                      "rgba(125, 34, 216, 0.4)",
                      "rgba(25, 123, 188, 0.3)",
                    ],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />

                {books.map((book, index) => {
                  // Calculate accurate orbital position using physics
                  const totalBooks = books.length;
                  const startAngle = (index / totalBooks) * Math.PI * 2;
                  const orbitRadius = 180;

                  return (
                    <motion.div
                      key={index}
                      className="absolute top-1/2 left-1/2"
                      style={{
                        transformStyle: "preserve-3d",
                      }}
                      animate={{
                        rotate: 360, // Revolve around the center
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                        delay: (index * 20) / totalBooks, // Evenly distributed start times
                      }}
                    >
                      {/* Calculate position at radius distance from center */}
                      <motion.div
                        className="relative group"
                        style={{
                          transformStyle: "preserve-3d",
                          x: orbitRadius, // Position at radius distance
                          y: 0,
                        }}
                        whileHover={{ z: 80 }}
                      >
                        {/* Book with sophisticated shadow */}
                        <div className="relative w-[200px] h-[280px]">
                          {/* Glow aura */}
                          <motion.div
                            className={`absolute -inset-4 bg-linear-to-br ${book.color} rounded-2xl blur-2xl`}
                            animate={{
                              opacity: [0.4, 0.7, 0.4],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              delay: index * 0.5,
                            }}
                          />

                          {/* Book container */}
                          <div className="relative w-full h-full bg-white rounded-xl shadow-2xl overflow-hidden border-2 border-gray-200">
                            <Image
                              src={book.img}
                              alt={`Book ${index + 1}`}
                              width={200}
                              height={280}
                              className="size-full object-cover"
                            />

                            {/* Subtle overlay */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/5 via-transparent to-white/10" />
                          </div>

                          {/* Floating badge */}
                          <motion.div
                            className="absolute -top-3 -right-3 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg"
                            animate={{
                              y: [-3, 3, -3],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: index * 0.2,
                            }}
                          >
                            {index + 1}
                          </motion.div>
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}

                {/* Central focal point */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <motion.div
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="w-24 h-24"
                  >
                    <div className="w-full h-full rounded-full border-4 border-dashed border-primary/40" />
                  </motion.div>
                </div>

                {/* Depth indicator lines */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-px h-full bg-linear-to-b from-transparent via-gray-300/30 to-transparent"
                      style={{
                        transform: `rotateZ(${i * 60}deg)`,
                      }}
                      animate={{
                        opacity: [0.2, 0.4, 0.2],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5,
                      }}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Premium shadow base */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[350px] h-20 bg-gray-400/20 rounded-full blur-3xl" />
            </div>
          </div>
          {/* Premium Content Section */}
          <div className="lg:w-[55%]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-8"
            >
              {/* Sophisticated Badge */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 self-start max-lg:self-center px-4 py-2 bg-primary/5 backdrop-blur-sm border border-primary/20 rounded-full"
              >
                <HiSparkles className="text-primary" />
                <span className="text-xs font-semibold tracking-widest uppercase text-gray-700">
                  Award-Winning Publisher
                </span>
              </motion.div>

              {/* Elegant Heading */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Ready To Publish Your Book{" "}
                  <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Globally?
                  </span>
                </h2>
              </motion.div>

              {/* Clean Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                  Transform your manuscript into a professionally published
                  masterpiece with our comprehensive suite of ghostwriting,
                  editing, publishing, and marketing services.
                </p>
              </motion.div>

              {/* Refined Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="grid grid-cols-3 gap-6 py-6 border-y border-gray-200"
              >
                {[
                  { number: "500+", label: "Books Published" },
                  { number: "150+", label: "Awards" },
                  { number: "98%", label: "Success Rate" },
                ].map((stat, index) => (
                  <div key={index} className="flex flex-col gap-1">
                    <div className="text-3xl font-bold text-gray-900">
                      {stat.number}
                    </div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Sophisticated CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col md:flex-row items-center gap-4 pt-2"
              >
                <Button
                  icon={MdStart}
                  onClick={openPopup}
                  tone="primary"
                  variant="solid"
                  size="xl"
                >
                  Start Your Journey
                </Button>
                <Button
                  href="tel:+13462967813"
                  tone="light"
                  variant="outline"
                  size="xl"
                  icon={FiPhone}
                  className="backdrop-blur-sm"
                >
                  +1 346 296 7813
                </Button>
              </motion.div>

              {/* Trust Badge */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex items-center gap-3 pt-4"
              >
                <div className="flex -space-x-3">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-linear-to-br from-primary/20 to-secondary/20 border-2 border-white flex items-center justify-center backdrop-blur-sm shadow-md"
                    >
                      <span className="text-primary text-xs font-bold">★</span>
                    </div>
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  Trusted by{" "}
                  <span className="text-gray-900 font-semibold">1000+</span>{" "}
                  authors worldwide
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
