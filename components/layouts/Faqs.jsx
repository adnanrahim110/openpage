"use client";

import { faqs } from "@/constants";
import { AnimatePresence, motion } from "motion/react";
import React, { useState } from "react";
import { FaAngleDown, FaQuestionCircle } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";
import { IoCheckmarkCircle } from "react-icons/io5";

const Faqs = ({ qouestionare = faqs }) => {
  const [openId, setOpenId] = useState(0);

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-white via-gray-50 to-white" />
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "radial-linear(circle at 2px 2px, #000 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-linear-to-br from-primary-100/50 to-accent-100/50 rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-linear-to-tl from-primary-100/50 to-accent-200/50 rounded-full blur-3xl opacity-60" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-32"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-primary-50 to-accent-50 rounded-full border border-primary-200 mb-6">
              <HiSparkles className="text-primary text-lg" />
              <span className="text-sm font-bold text-primary tracking-wide uppercase">
                FAQ Section
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
              <span className="text-gray-900">Frequently Asked</span>{" "}
              <span className="relative inline-block">
                <span className="bg-linear-to-r from-primary to-accent-600 bg-clip-text text-transparent">
                  Questions
                </span>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-linear-to-r from-primary to-accent-600 rounded-full origin-left"
                />
              </span>
            </h2>

            <p className="text-gray-700 font-medium text-lg leading-relaxed mb-10">
              Our customer care is here to serve you with any queries you have
              concerning our services. You can always rely on our team of
              experts, who will answer your questions and give you the necessary
              information to make the right decisions.
            </p>

            <motion.div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white">
              <img src="/images/faq.avif" alt="FAQ" className="w-full h-auto" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              {qouestionare.map((faq, idx) => {
                const isOpen = openId === idx;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      className={`relative overflow-hidden rounded-2xl transition-all duration-300 ${
                        isOpen
                          ? "bg-white shadow-xl border-2 border-primary"
                          : "bg-white shadow-lg border-2 border-gray-100 hover:border-primary/30"
                      }`}
                    >
                      <button
                        onClick={() => setOpenId(isOpen ? -1 : idx)}
                        className="w-full p-6 flex items-start gap-4 text-left"
                      >
                        <motion.div
                          animate={{
                            rotate: isOpen ? 0 : 0,
                            scale: isOpen ? 1.1 : 1,
                          }}
                          transition={{ duration: 0.3 }}
                          className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                            isOpen
                              ? "bg-linear-to-br from-primary to-purple-600"
                              : "bg-gray-100 group-hover:bg-primary/10"
                          }`}
                        >
                          <FaQuestionCircle
                            className={`text-lg transition-colors duration-300 ${
                              isOpen ? "text-white" : "text-primary"
                            }`}
                          />
                        </motion.div>

                        <div className="flex-1">
                          <span
                            className={`font-bold text-lg leading-snug transition-colors duration-300 ${
                              isOpen
                                ? "text-primary"
                                : "text-gray-900 group-hover:text-primary"
                            }`}
                          >
                            {faq.title}
                          </span>
                        </div>

                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                            isOpen
                              ? "bg-primary/10"
                              : "bg-gray-100 group-hover:bg-primary/10"
                          }`}
                        >
                          <FaAngleDown
                            className={`transition-colors duration-300 ${
                              isOpen ? "text-primary" : "text-gray-600"
                            }`}
                          />
                        </motion.div>
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-6 pt-0">
                              <div className="pl-14 pr-12">
                                <div className="h-px bg-linear-to-r from-primary/20 via-primary/50 to-primary/20 mb-4" />
                                <p className="text-gray-700 font-medium text-base leading-relaxed">
                                  {faq.ans}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {isOpen && (
                        <motion.div
                          layoutId="activeFaq"
                          className="absolute inset-0 rounded-2xl pointer-events-none"
                          style={{
                            background:
                              "linear-gradient(135deg, rgba(26, 115, 232, 0.1), rgba(147, 51, 234, 0.1))",
                          }}
                        />
                      )}
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 p-8 rounded-3xl bg-linear-to-br from-primary/10 via-purple-500/10 to-blue-500/10 border-2 border-primary/20 backdrop-blur-sm"
            >
              <div className="text-center">
                <h3 className="text-2xl font-black text-gray-900 mb-3">
                  Still Have Questions?
                </h3>
                <p className="text-gray-700 font-medium mb-6">
                  Our expert team is ready to help you with any additional
                  queries
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-primary to-purple-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  <span>Contact Support</span>
                  <HiSparkles className="text-lg" />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
