"use client";

import { fadeInRight, fadeInUp } from "@/utils/animations";
import { motion } from "motion/react";
import { HiSparkles } from "react-icons/hi2";
import { IoCheckmarkCircle } from "react-icons/io5";
import Subtitle from "../ui/Subtitle";
import Title from "../ui/Title";

const defaultTitle =
  "Open Page Publishing The Top Book Ghostwriting Publishing Company You'll Ever Need";

const Sec2 = ({ title, text, titleHighlight }) => {
  const displayTitle = title || defaultTitle;
  const highlightText = title
    ? titleHighlight
    : titleHighlight || "Ghostwriting Publishing";

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-white via-gray-50 to-white" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-linear-to-br from-primary-100/50 to-accent-100/50 rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-linear-to-tr from-primary-100/50 to-accent-200/50 rounded-full blur-3xl opacity-60" />
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, gray 1px, transparent 0)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container relative z-10">
        <div className="row max-lg:flex-col-reverse justify-between items-center max-lg:text-center gap-y-16">
          <div className="lg:w-6/12 xl:w-7/12">
            <div className="flex flex-col h-full justify-center items-start lg:pr-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <Subtitle
                  variant="soft"
                  icon={HiSparkles}
                  iconClassName="text-primary"
                  className="mb-6 max-lg:mx-auto"
                >
                  Industry Leader
                </Subtitle>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="mb-6"
              >
                <Title
                  as="h3"
                  variant="black"
                  title={displayTitle}
                  highlight={highlightText}
                  className="text-left max-lg:text-center"
                />
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp({ delay: 0.2 })}
                className="relative"
              >
                <div className="absolute -left-4 top-0 w-1 h-full bg-linear-to-b from-primary via-purple-500 to-primary rounded-full" />
                <p className="text-gray-700 font-medium text-base lg:text-lg  pl-6">
                  {text ||
                    "Be in the limelight with Open Page Publishing, where we make sure to transform your idea into an interesting book. It is not just a publishing service, but your passport to worldwide recognition, creative fulfilment, and a lifetime of achievement. Are you just getting started with on demand Amazon self publishing, investigating ebook publishing services, or wanting to go all the way and find book publication services? With us, you have come to the right place to make your publishing vision a published reality. With a decade of experience under our belt and the support of one of the top publishing houses, we are bound to get you on the path to literary success. It is your time to make a difference, to innovate, and to make your mark in the world. Join us and bring a creative revolution, and light your way to success."}
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-wrap gap-4 mt-8"
              >
                {[
                  "10+ Years Experience",
                  "500+ Books Published",
                  "98% Client Satisfaction",
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 px-4 py-2 bg-linear-to-r from-green-50 to-emerald-50 rounded-full border border-green-200"
                  >
                    <IoCheckmarkCircle className="text-green-600 text-lg shrink-0" />
                    <span className="text-sm font-bold text-gray-800">
                      {stat}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
          <div className="lg:w-5/12 xl:w-4/12">
            <div className="relative flex justify-center items-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] rounded-full bg-linear-to-br from-primary-100/30 to-accent-100/30 blur-2xl" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[280px] h-[280px] lg:size-[540px] aspect-square rounded-full border-2 border-dashed border-primary/30" />
                <div className="absolute top-1/2 left-1/2 -translate-1/2 size-[520px] aspect-square rounded-full bg-radial from-primary via-secondary to-primary" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="size-80 lg:w-[420px] lg:h-[420px] rounded-full border border-primary-200/20" />
              </div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInRight({ delay: 0.2, distance: 30 })}
                className="relative z-20 hover-optimize"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-linear-to-br from-primary-100/50 to-accent-100/50 blur-3xl scale-110 rounded-3xl" />
                  <img
                    src="/images/book_mockups/bc_sec2.avif"
                    alt="Book cover"
                    className="relative z-1 "
                    style={{
                      transformStyle: "preserve-3d",
                      transform: "perspective(1000px) rotateY(-5deg)",
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sec2;
