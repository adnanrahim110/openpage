"use client";

import { faqs } from "@/constants";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { FaAngleDown, FaQuestionCircle } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";
import Button from "../ui/Button";
import Subtitle from "../ui/Subtitle";
import Title from "../ui/Title";

const Faqs = ({ qouestionare = faqs }) => {
  const [openId, setOpenId] = useState(0);

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-primary-50" />
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-32 lg:col-span-5"
          >
            <motion.div className="mb-2">
              <Subtitle
                variant="halo"
                icon={HiSparkles}
                iconClassName="text-primary text-lg"
                className="mb-6 mx-auto"
              >
                FAQs Section
              </Subtitle>
            </motion.div>
            <motion.div className="mb-6">
              <Title
                as="h2"
                variant="black"
                title="Frequently Asked Questions"
                highlight="Questions"
                className="font-normal"
              />
            </motion.div>

            <p className="text-gray-700 font-medium text-lg  mb-10">
              Get clear guidance on timelines, publishing steps, and
              distribution options. We simplify the process so you can focus on
              your story while we handle the rest.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 p-8 rounded-3xl bg-linear-to-br from-primary/10 via-primary-500/10 to-blue-500/10 border-2 border-primary/20 backdrop-blur-sm"
            >
              <div className="">
                <h3 className="text-2xl font-black text-gray-900 mb-3">
                  Still Have Questions?
                </h3>
                <p className="text-gray-700 font-medium mb-6">
                  Our expert team is ready to help you with any additional
                  queries
                </p>
                <Button>Contact Support</Button>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
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
                                <p className="text-gray-700 font-medium text-base ">
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
