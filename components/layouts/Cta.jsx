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
import { useEffect, useRef } from "react";
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

  const spiralConfig = {
    radius: 170,
    height: 320,
    depth: 140,
    turns: 1.8,
    duration: 20,
  };

  const portalSparks = [
    { style: { top: "8%", left: "14%" }, size: 70, delay: 0 },
    { style: { top: "26%", right: "10%" }, size: 56, delay: 0.35 },
    { style: { bottom: "18%", left: "6%" }, size: 60, delay: 0.6 },
    { style: { bottom: "26%", right: "18%" }, size: 64, delay: 0.9 },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-linear-to-br from-gray-50 via-white to-blue-50/30">
      {/* Light Theme Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="size-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #197BBC 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Elegant Light Accent Orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-purple-200/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-linear-to-br from-cyan-100/20 to-indigo-100/20 rounded-full blur-3xl" />

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
                {/* Atmosphere and holographic grid */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(14,165,233,0.18),_transparent_65%)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.25),_transparent_60%)] blur-3xl opacity-80" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.15),transparent)] opacity-70" />
                </div>

                {/* Portal base */}
                <div
                  className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[420px] h-[420px]"
                  style={{
                    transform: "rotateX(78deg)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl opacity-70" />
                  <div className="absolute inset-2 rounded-full border border-white/10" />
                  <div className="absolute inset-8 rounded-full border border-white/40 opacity-70" />
                  <div className="absolute inset-0 rounded-full border-[6px] border-white/20 shadow-[0_35px_90px_rgba(30,64,175,0.35)] backdrop-blur-md" />
                  <div className="absolute inset-14 rounded-full border border-dashed border-white/60 opacity-50" />
                </div>

                {/* Core light column */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-24 h-72">
                    <div className="absolute inset-x-0 bottom-0 h-12 rounded-full bg-primary/40 blur-3xl" />
                    <div className="absolute inset-0 rounded-[999px] bg-linear-to-b from-white/70 via-primary/20 to-transparent border border-white/40 shadow-[0_0_45px_rgba(59,130,246,0.45)]" />
                    <motion.div
                      className="absolute left-1/2 top-6 -translate-x-1/2 w-16 h-16 border border-white/50 rounded-full"
                      animate={{
                        y: [-30, 40, -30],
                        opacity: [0.9, 0.4, 0.9],
                      }}
                      transition={{ duration: 4.5, repeat: Infinity }}
                    >
                      <div className="absolute inset-1 rounded-full bg-white/60 blur-sm" />
                    </motion.div>
                    <motion.div
                      className="absolute left-1/2 bottom-8 -translate-x-1/2 w-12 h-12 border border-primary/40 rounded-full"
                      animate={{
                        scale: [0.7, 1.15, 0.7],
                        opacity: [0.4, 1, 0.4],
                      }}
                      transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        delay: 0.5,
                      }}
                    />
                  </div>
                </div>

                {/* Rotating energy halo */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px]"
                  style={{ transformStyle: "preserve-3d", rotateX: 58 }}
                  animate={{ rotateZ: [0, 360] }}
                  transition={{
                    duration: 26,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <div className="absolute inset-0 rounded-full border-2 border-white/30 backdrop-blur-[2px]" />
                  <div className="absolute inset-10 rounded-full border border-dashed border-primary/40 opacity-70" />
                  <div className="absolute inset-0 rounded-full bg-linear-to-r from-white/20 via-transparent to-white/10 opacity-70 blur-lg" />
                </motion.div>

                {/* Helical book elevator */}
                <motion.div
                  className="absolute inset-0"
                  style={{ transformStyle: "preserve-3d" }}
                  animate={{ rotateY: [0, 360] }}
                  transition={{
                    duration: spiralConfig.duration,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {books.map((book, index) => {
                    const t = index / books.length;
                    const angle = t * spiralConfig.turns * Math.PI * 2;
                    const x = Math.cos(angle) * spiralConfig.radius;
                    const y = (t - 0.5) * spiralConfig.height;
                    const z = Math.sin(angle) * spiralConfig.depth;
                    const depthScale =
                      0.55 +
                      ((z + spiralConfig.depth) / (spiralConfig.depth * 2)) *
                        0.45;

                    return (
                      <div
                        key={index}
                        className="absolute left-1/2 top-1/2"
                        style={{
                          transformStyle: "preserve-3d",
                          transform: `translate3d(${x}px, ${y}px, ${z}px)`,
                          zIndex: Math.round(z + spiralConfig.depth + y),
                        }}
                      >
                        <motion.div
                          className="relative group"
                          style={{
                            transformStyle: "preserve-3d",
                            scale: depthScale,
                          }}
                          animate={{ rotateY: [0, -360] }}
                          transition={{
                            duration: spiralConfig.duration,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          whileHover={{ scale: depthScale * 1.08 }}
                        >
                          <div className="relative w-[170px] h-[240px] -translate-x-1/2 -translate-y-1/2">
                            <motion.div
                              className={`absolute -inset-3 bg-linear-to-br ${book.color} rounded-2xl blur-2xl opacity-40`}
                              animate={{
                                opacity: [0.25, 0.6, 0.25],
                              }}
                              transition={{
                                duration: 3.2,
                                repeat: Infinity,
                                delay: index * 0.4,
                              }}
                            />

                            <div className="relative w-full h-full bg-white rounded-xl shadow-2xl overflow-hidden border border-white/40">
                              <Image
                                src={book.img}
                                alt={`Book ${index + 1}`}
                                width={170}
                                height={240}
                                className="size-full object-cover"
                              />
                              <div className="absolute inset-0 bg-linear-to-t from-white/25 via-transparent to-white/40" />
                            </div>

                            <motion.div
                              className="absolute -top-2 -right-2 w-9 h-9 bg-white border-2 border-primary/30 rounded-full flex items-center justify-center text-primary text-xs font-bold shadow-md"
                              animate={{
                                y: [-2, 2, -2],
                              }}
                              transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                delay: index * 0.3,
                              }}
                            >
                              {index + 1}
                            </motion.div>
                          </div>
                        </motion.div>
                      </div>
                    );
                  })}
                </motion.div>

                {/* Floating holo shards */}
                <div className="absolute inset-0 pointer-events-none z-40">
                  {portalSparks.map((spark, idx) => (
                    <motion.div
                      key={idx}
                      className="absolute rounded-full border border-white/40 bg-white/10 backdrop-blur"
                      style={{
                        width: spark.size,
                        height: spark.size,
                        ...spark.style,
                      }}
                      animate={{
                        y: [-14, 18, -14],
                        opacity: [0.3, 0.8, 0.3],
                      }}
                      transition={{
                        duration: 4 + idx,
                        repeat: Infinity,
                        delay: spark.delay,
                      }}
                    >
                      <div className="absolute inset-2 rounded-full bg-white/50 blur-md" />
                    </motion.div>
                  ))}
                </div>
                {/* Soft shadow base - light theme */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[400px] h-24 bg-blue-200/20 rounded-full blur-3xl" />
              </motion.div>
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
              {/* Sophisticated Badge - Light Theme */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 self-start max-lg:self-center px-4 py-2 bg-blue-50 backdrop-blur-sm border border-blue-200/50 rounded-full"
              >
                <HiSparkles className="text-primary text-base" />
                <span className="text-xs font-semibold tracking-widest uppercase text-gray-700">
                  Award-Winning Publisher
                </span>
              </motion.div>

              {/* Elegant Heading - Light Theme */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h2 className="text-4xl lg:text-6xl font-bold text-gray-800 leading-tight">
                  Ready To Publish Your Book{" "}
                  <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Globally?
                  </span>
                </h2>
              </motion.div>

              {/* Clean Description - Light Theme */}
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

              {/* Refined Stats - Light Theme */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="grid grid-cols-3 gap-6 py-6 border-y border-gray-200/80"
              >
                {[
                  { number: "500+", label: "Books Published" },
                  { number: "150+", label: "Awards" },
                  { number: "98%", label: "Success Rate" },
                ].map((stat, index) => (
                  <div key={index} className="flex flex-col gap-1">
                    <div className="text-3xl font-bold text-primary">
                      {stat.number}
                    </div>
                    <div className="text-xs text-gray-600 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Sophisticated CTA Buttons - Light Theme */}
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
                  className="backdrop-blur-sm border-gray-300"
                >
                  +1 346 296 7813
                </Button>
              </motion.div>

              {/* Trust Badge - Light Theme */}
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
                      className="w-10 h-10 rounded-full bg-white border-2 border-blue-100 flex items-center justify-center shadow-sm"
                    >
                      <span className="text-amber-400 text-sm font-bold">
                        ★
                      </span>
                    </div>
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  Trusted by{" "}
                  <span className="text-gray-800 font-semibold">1000+</span>{" "}
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
