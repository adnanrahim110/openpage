"use client";

import { motion, useMotionValue, useScroll, useTransform } from "motion/react";
import { useEffect, useRef } from "react";

const TitleMarquee = ({ service }) => {
  const ref = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden flex items-center"
    >
      {/* Sophisticated texture overlay */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
              repeating-linear-gradient(
                45deg,
                transparent,
                transparent 10px,
                rgba(255, 255, 255, 0.02) 10px,
                rgba(255, 255, 255, 0.02) 20px
              )
            `,
          }}
        />
      </div>

      {/* Floating orbs */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            background:
              i % 2 === 0
                ? "radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)"
                : "radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)",
            width: 300 + i * 50,
            height: 300 + i * 50,
            left: `${10 + i * 20}%`,
            top: `${20 + i * 15}%`,
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Premium Typography with 3D effect */}
          <motion.div
            style={{ rotateX, rotateY, transformPerspective: 1000 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <h1 className="text-6xl font-black text-transparent bg-clip-text bg-linear-to-r from-white via-purple-200 to-blue-200 leading-tight">
                {service.title}
              </h1>

              {/* Text shadow effect */}
              <div className="absolute inset-0 blur-2xl opacity-50">
                <h1 className="text-6xl font-black text-purple-500 leading-tight">
                  {service.title}
                </h1>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 leading-relaxed max-w-xl"
            >
              {service.subtitle ||
                "Premium publishing services tailored to your creative vision"}
            </motion.p>

            {/* Animated gradient bar */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="h-1.5 bg-linear-to-r from-purple-500 via-blue-500 to-purple-500 rounded-full origin-left"
              style={{ width: "60%" }}
            />

            {/* Premium badges */}
            <div className="flex gap-4 flex-wrap">
              {["Award Winning", "Trusted by 1000+", "5-Star Rated"].map(
                (badge, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-5 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-sm font-semibold text-white shadow-lg"
                  >
                    {badge}
                  </motion.div>
                )
              )}
            </div>
          </motion.div>

          {/* Right: 3D Card Showcase */}
          <motion.div
            style={{ y }}
            className="relative h-[600px] hidden lg:block"
          >
            {/* Main floating card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: -20 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="w-full h-full bg-linear-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl p-8 flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 bg-linear-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path
                        fillRule="evenodd"
                        d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>

                  <h3 className="text-3xl font-black text-white mb-3">
                    Premium Quality
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Industry-leading standards with personalized attention to
                    every detail
                  </p>
                </div>

                <div className="flex justify-between items-center pt-6 border-t border-white/10">
                  <div className="text-center">
                    <div className="text-3xl font-black text-purple-400">
                      100%
                    </div>
                    <div className="text-xs text-gray-400">Quality</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-blue-400">
                      24/7
                    </div>
                    <div className="text-xs text-gray-400">Support</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-purple-400">
                      A+
                    </div>
                    <div className="text-xs text-gray-400">Rating</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating accent cards */}
            {[
              { top: "10%", left: "5%", delay: 0.2, rotate: -10 },
              { bottom: "15%", right: "5%", delay: 0.4, rotate: 10 },
            ].map((pos, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: pos.delay }}
                whileHover={{ scale: 1.1, rotate: 0 }}
                className="absolute w-32 h-32 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-xl p-4 flex items-center justify-center"
                style={{ ...pos, rotate: pos.rotate }}
              >
                <div className="text-center">
                  <div className="text-2xl font-black text-white mb-1">
                    {i === 0 ? "95%" : "1k+"}
                  </div>
                  <div className="text-xs text-gray-300">
                    {i === 0 ? "Satisfied" : "Clients"}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Premium wave divider */}
      <div className="absolute bottom-0 left-0 w-full">
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

export default TitleMarquee;
