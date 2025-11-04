"use client";

import { servicesList } from "@/constants";
import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";

const ServicesSec = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="relative pt-32 pb-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-white via-gray-50 to-white" />
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "radial-linear(circle at 2px 2px, #000 1px, transparent 0)",
          backgroundSize: "50px 50px",
        }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute top-20 left-10 w-96 h-96 bg-linear-to-br from-primary/30 to-purple-500/30 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-linear-to-tr from-blue-500/30 to-primary/30 rounded-full blur-3xl"
      />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-lg:text-center"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-primary/10 to-purple-500/10 backdrop-blur-sm rounded-full border border-primary/20 mb-6 max-lg:mx-auto shadow-lg">
              <HiSparkles className="text-primary animate-pulse" />
              <span className="text-sm font-bold text-primary tracking-wide uppercase">
                Our Services
              </span>
            </div>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
              <span className="bg-linear-to-r from-gray-900 via-primary to-gray-900 bg-clip-text text-transparent">
                Leave Your Print in the World of Literature
              </span>
            </h3>
            <p className="text-gray-700 font-medium text-lg leading-relaxed">
              with the Best Book Writing Services
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center"
          >
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-linear-to-b from-primary via-purple-500 to-primary rounded-full max-lg:hidden" />
              <p className="text-gray-700 font-medium text-base lg:text-lg leading-relaxed pl-6 max-lg:pl-0">
                Discover the epitome of book publishing service providers with
                Western Book Publishing- your reliable partner in the
                publication venture. Would-be writers, here is your chance to
                collaborate with one of the best book publishing teams. We
                provide you with unequaled service in order to succeed in the
                current competitive market. Allow your story to soar with one of
                the best book writing and publishing companies in the business.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service, idx) => (
            <ServiceCard
              key={idx}
              service={service}
              index={idx}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service, index, hoveredIndex, setHoveredIndex }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      className="group"
    >
      <Link href={service.link} className="block h-full">
        <motion.div
          whileHover={{ y: -8, scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="relative h-full bg-white rounded-3xl p-8 border-2 border-gray-200 shadow-xl hover:shadow-2xl overflow-hidden"
        >
          <motion.div
            animate={{
              scale: hoveredIndex === index ? 1.2 : 0,
              opacity: hoveredIndex === index ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-linear-to-br from-primary/10 via-purple-500/10 to-blue-500/10 blur-2xl"
          />

          <div className="relative z-10">
            <div className="flex items-start justify-between mb-6">
              <motion.div
                animate={{
                  scale: hoveredIndex === index ? 1.1 : 1,
                  rotate: hoveredIndex === index ? 5 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="w-16 h-16 rounded-2xl bg-linear-to-br from-primary to-purple-600 flex items-center justify-center shadow-lg"
              >
                <service.icon className="text-white text-3xl" />
              </motion.div>
              <motion.div
                animate={{
                  x: hoveredIndex === index ? 0 : 5,
                  y: hoveredIndex === index ? 0 : -5,
                  opacity: hoveredIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="w-10 h-10 rounded-full bg-linear-to-br from-primary to-purple-600 flex items-center justify-center"
              >
                <FaArrowRight className="text-white text-sm" />
              </motion.div>
            </div>

            <div className="mb-4">
              <h5 className="text-xl font-black text-gray-900 mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h5>
              <p className="text-gray-600 font-medium text-sm leading-relaxed">
                {service.text}
              </p>
            </div>

            <div className="flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all">
              <span>Learn More</span>
              <FaArrowRight className="text-xs" />
            </div>

            <motion.div
              animate={{
                opacity: hoveredIndex === index ? 1 : 0.3,
              }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-4 right-4 text-7xl font-black text-gray-100 group-hover:text-primary/10 transition-colors"
            >
              {String(index + 1).padStart(2, "0")}
            </motion.div>
          </div>

          <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-primary/20 transition-colors" />
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default ServicesSec;
