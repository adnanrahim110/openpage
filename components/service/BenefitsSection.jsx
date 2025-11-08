"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import {
  FaAward,
  FaChevronLeft,
  FaChevronRight,
  FaCrown,
  FaGem,
  FaStar,
} from "react-icons/fa";

const BenefitsSection = ({ service }) => {
  if (!service?.benefits) return null;

  const benefitsArray = Array.isArray(service.benefits.text)
    ? service.benefits.text
    : [service.benefits.text];

  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const icons = [FaStar, FaGem, FaCrown, FaAward];

  const nextBenefit = () => {
    setActiveIndex((prev) => (prev + 1) % benefitsArray.length);
  };

  const prevBenefit = () => {
    setActiveIndex(
      (prev) => (prev - 1 + benefitsArray.length) % benefitsArray.length
    );
  };

  return (
    <section
      ref={containerRef}
      className="relative py-40 bg-white overflow-hidden"
    >
      {/* Sophisticated light background texture */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 opacity-40"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(139, 92, 246, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
              repeating-linear-gradient(
                60deg,
                transparent,
                transparent 50px,
                rgba(139, 92, 246, 0.02) 50px,
                rgba(139, 92, 246, 0.02) 51px
              ),
              repeating-linear-gradient(
                120deg,
                transparent,
                transparent 50px,
                rgba(59, 130, 246, 0.02) 50px,
                rgba(59, 130, 246, 0.02) 51px
              )
            `,
          }}
        />
      </motion.div>

      {/* Floating decorative elements */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${10 + i * 15}%`,
            top: `${15 + i * 12}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-purple-100 to-blue-100 opacity-30 blur-sm" />
        </motion.div>
      ))}

      <div className="container relative z-10">
        {/* Premium Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          {/* Decorative icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-block mb-8"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-br from-purple-500 to-blue-500 rounded-3xl blur-2xl opacity-50" />
              <div className="relative w-24 h-24 rounded-3xl bg-linear-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white shadow-2xl transform rotate-12">
                <FaStar size={48} />
              </div>
            </div>
          </motion.div>

          <h2 className="text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
            {service.benefits.title}
          </h2>

          {/* Decorative separator */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-1 w-24 bg-linear-to-r from-transparent via-purple-500 to-purple-500 rounded-full" />
            <div className="w-3 h-3 rounded-full bg-purple-500" />
            <div className="h-1 w-24 bg-linear-to-l from-transparent via-blue-500 to-blue-500 rounded-full" />
          </div>

          <p className="text-xl text-gray-600">
            Exceptional advantages that set us apart
          </p>
        </motion.div>

        {/* Premium Carousel Container */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Main Card Display */}
            <div className="relative min-h-[500px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 100, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -100, scale: 0.9 }}
                  transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                  className="relative"
                >
                  {/* Premium glass card */}
                  <div className="relative bg-white/90 backdrop-blur-2xl rounded-[3rem] p-12 lg:p-16 shadow-2xl border-2 border-purple-100/50 overflow-hidden">
                    {/* Animated gradient overlay */}
                    <div className="absolute inset-0 bg-linear-to-br from-purple-50/50 via-transparent to-blue-50/50" />

                    <div className="relative z-10">
                      {/* Icon and Number Badge */}
                      <div className="flex items-center justify-between mb-8">
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 200,
                            delay: 0.2,
                          }}
                          className="relative"
                        >
                          <div className="absolute inset-0 bg-linear-to-br from-purple-500 to-blue-500 rounded-2xl blur-xl opacity-50" />
                          <div className="relative w-20 h-20 rounded-2xl bg-linear-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white shadow-xl">
                            {React.createElement(
                              icons[activeIndex % icons.length],
                              {
                                size: 36,
                              }
                            )}
                          </div>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 }}
                          className="px-6 py-3 bg-linear-to-r from-purple-600 to-blue-600 rounded-full text-white font-black text-xl shadow-lg"
                        >
                          {activeIndex + 1} / {benefitsArray.length}
                        </motion.div>
                      </div>

                      {/* Content */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="prose prose-lg max-w-none"
                      >
                        <div
                          className="text-gray-700 leading-relaxed space-y-4 text-lg"
                          dangerouslySetInnerHTML={{
                            __html: benefitsArray[activeIndex],
                          }}
                        />
                      </motion.div>

                      {/* Premium Stats Bar */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t-2 border-purple-100"
                      >
                        {[
                          {
                            label: "Excellence",
                            value: "100%",
                            color: "purple",
                          },
                          {
                            label: "Satisfaction",
                            value: "95%",
                            color: "blue",
                          },
                          { label: "Support", value: "24/7", color: "purple" },
                        ].map((stat, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                              delay: 0.5 + i * 0.1,
                              type: "spring",
                            }}
                            whileHover={{ scale: 1.1, y: -5 }}
                            className="text-center"
                          >
                            <div
                              className={`text-4xl font-black mb-2 bg-linear-to-r from-${stat.color}-600 to-blue-600 bg-clip-text text-transparent`}
                            >
                              {stat.value}
                            </div>
                            <div className="text-sm text-gray-600 font-semibold uppercase tracking-wider">
                              {stat.label}
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>

                    {/* Decorative corner elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-purple-200 to-transparent rounded-bl-[3rem] opacity-30" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-linear-to-tr from-blue-200 to-transparent rounded-tr-[3rem] opacity-30" />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center gap-6 mt-12">
              <motion.button
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevBenefit}
                className="w-14 h-14 rounded-full bg-linear-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white shadow-xl hover:shadow-2xl transition-shadow"
              >
                <FaChevronLeft size={20} />
              </motion.button>

              {/* Progress Indicators */}
              <div className="flex gap-3">
                {benefitsArray.map((_, i) => (
                  <motion.button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                    className={`h-3 rounded-full transition-all duration-300 ${
                      activeIndex === i
                        ? "w-12 bg-linear-to-r from-purple-600 to-blue-600 shadow-lg"
                        : "w-3 bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextBenefit}
                className="w-14 h-14 rounded-full bg-linear-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white shadow-xl hover:shadow-2xl transition-shadow"
              >
                <FaChevronRight size={20} />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
