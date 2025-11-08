"use client";

import TiltImage from "@/components/ui/TiltImage";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import { FaCheck, FaDiamond } from "react-icons/fa6";

const ServiceBody = ({ service }) => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      ref={containerRef}
      className="relative py-32 bg-white overflow-hidden"
    >
      {/* Sophisticated light textured background */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 opacity-50"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(139, 92, 246, 0.05) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(59, 130, 246, 0.05) 0%, transparent 50%),
              repeating-linear-gradient(
                0deg,
                transparent,
                transparent 40px,
                rgba(139, 92, 246, 0.02) 40px,
                rgba(139, 92, 246, 0.02) 41px
              ),
              repeating-linear-gradient(
                90deg,
                transparent,
                transparent 40px,
                rgba(59, 130, 246, 0.02) 40px,
                rgba(59, 130, 246, 0.02) 41px
              )
            `,
          }}
        />
      </motion.div>

      {/* Floating gradient orbs */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl pointer-events-none"
          style={{
            background: `radial-gradient(circle, ${
              i % 2 === 0
                ? "rgba(139, 92, 246, 0.08)"
                : "rgba(59, 130, 246, 0.08)"
            } 0%, transparent 70%)`,
            width: 500,
            height: 500,
            left: `${5 + i * 30}%`,
            top: `${10 + i * 25}%`,
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20 + i * 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="container relative z-10">
        <div className="space-y-32">
          {service.service_body?.map((sec, i) => {
            const isEven = i % 2 === 0;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative"
              >
                <div
                  className={`grid lg:grid-cols-12 gap-12 items-center ${
                    !isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content Section */}
                  <div
                    className={`lg:col-span-7 ${
                      !isEven ? "lg:col-start-6" : ""
                    }`}
                  >
                    {/* Decorative number badge */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        delay: 0.2,
                      }}
                      className="inline-flex items-center gap-3 mb-6"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white font-black text-2xl shadow-xl">
                        {i + 1}
                      </div>
                      <div className="h-px w-16 bg-linear-to-r from-purple-600 to-transparent" />
                    </motion.div>

                    {/* Premium glass card */}
                    <motion.div
                      whileHover={{ y: -5, scale: 1.01 }}
                      transition={{ duration: 0.3 }}
                      className="relative bg-white/80 backdrop-blur-xl p-10 rounded-3xl border-2 border-purple-100/50 shadow-2xl overflow-hidden group"
                    >
                      {/* Animated gradient overlay on hover */}
                      <div className="absolute inset-0 bg-linear-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/5 group-hover:to-blue-500/5 transition-all duration-500" />

                      <div className="relative z-10">
                        {/* Diamond icon accent */}
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-12 h-12 rounded-xl bg-linear-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-lg">
                            <FaDiamond className="text-white text-xl" />
                          </div>
                          <div className="h-px flex-1 bg-linear-to-r from-purple-200 via-blue-200 to-transparent" />
                        </div>

                        <h3 className="text-4xl font-black text-gray-900 mb-6 leading-tight">
                          {sec.title}
                        </h3>

                        {sec.bold && (
                          <div className="mb-6 p-5 bg-linear-to-br from-purple-50 to-blue-50 rounded-2xl border-l-4 border-purple-500 shadow-sm">
                            <strong className="text-gray-900 text-lg">
                              {sec.bold}
                            </strong>
                          </div>
                        )}

                        {sec.text && (
                          <div className="space-y-4 text-gray-700 leading-relaxed mb-8 text-lg">
                            {Array.isArray(sec.text) ? (
                              sec.text.map((txt, idx) => (
                                <motion.p
                                  key={idx}
                                  initial={{ opacity: 0, x: -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: idx * 0.1 }}
                                  dangerouslySetInnerHTML={{ __html: txt }}
                                />
                              ))
                            ) : (
                              <p
                                dangerouslySetInnerHTML={{ __html: sec.text }}
                              />
                            )}
                          </div>
                        )}

                        {sec.points && sec.points.length > 0 && (
                          <div className="space-y-4">
                            {sec.points.map((point, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                whileHover={{ x: 5 }}
                                className="flex items-start gap-4 group/item"
                              >
                                <div className="mt-1 w-8 h-8 rounded-lg bg-linear-to-br from-purple-500 to-blue-500 flex items-center justify-center shrink-0 shadow-md group-hover/item:scale-110 transition-transform">
                                  <FaCheck className="text-white text-sm" />
                                </div>
                                <span className="text-gray-700 flex-1 leading-relaxed">
                                  {point}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        )}

                        {sec.details && sec.details.length > 0 && (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="mt-8 pt-8 border-t-2 border-purple-100"
                          >
                            <h4 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
                              <span>Additional Details</span>
                              <div className="h-px flex-1 bg-linear-to-r from-purple-200 to-transparent" />
                            </h4>
                            <div className="grid sm:grid-cols-2 gap-4">
                              {sec.details.map((detail, idx) => (
                                <motion.div
                                  key={idx}
                                  whileHover={{ scale: 1.03, y: -2 }}
                                  className="bg-linear-to-br from-purple-50/50 to-blue-50/50 backdrop-blur-sm p-5 rounded-xl border border-purple-100/50 shadow-sm"
                                >
                                  <div className="text-xs font-bold text-purple-600 mb-2 uppercase tracking-wider">
                                    Feature {idx + 1}
                                  </div>
                                  <h5 className="font-black text-lg mb-2 text-gray-900">
                                    {detail.title}
                                  </h5>
                                  <p className="text-sm text-gray-600 leading-relaxed">
                                    {detail.text}
                                  </p>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  </div>

                  {/* Image Section */}
                  {sec.img && (
                    <div
                      className={`lg:col-span-5 ${
                        !isEven ? "lg:col-start-1 lg:row-start-1" : ""
                      }`}
                    >
                      <motion.div
                        initial={{
                          opacity: 0,
                          scale: 0.9,
                          rotate: isEven ? -5 : 5,
                        }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        whileHover={{
                          scale: 1.05,
                          rotate: isEven ? 2 : -2,
                          y: -10,
                        }}
                        className="relative group"
                      >
                        <div className="absolute -inset-4 bg-linear-to-br from-purple-400 to-blue-400 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />

                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                          <TiltImage
                            src={sec.img}
                            alt={sec.title}
                            shadow={sec.shadow ?? false}
                          />

                          {/* Corner accent with number */}
                          <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white font-black text-3xl rounded-bl-3xl shadow-xl">
                            {i + 1}
                          </div>

                          {/* Premium badge overlay */}
                          <div className="absolute bottom-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-xl rounded-full border border-purple-200 shadow-lg">
                            <span className="text-sm font-bold bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                              Premium Quality
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceBody;
