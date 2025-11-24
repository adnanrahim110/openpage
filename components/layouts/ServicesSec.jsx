"use client";

import { servicesList } from "@/constants";
import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";
import Subtitle from "../ui/Subtitle";
import Title from "../ui/Title";

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
        <div className="text-center mx-auto max-w-5xl mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Subtitle
              variant="halo"
              icon={HiSparkles}
              iconClassName="text-primary animate-pulse"
              className="mb-6 max-lg:mx-auto shadow-lg"
              textClassName="text-sm font-bold text-primary uppercase"
            >
              Our Services
            </Subtitle>
            <Title
              as="h3"
              variant="black"
              title="Professional Book Publishing Services"
              className="mb-2 font-normal"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center"
          >
            <div className="relative">
              <p className="text-gray-700 font-medium">
                Our publishing solutions blend creative design with expert
                guidance to help authors produce polished, industry-standard
                books across global platforms.
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
              x: hoveredIndex === index ? 0 : 5,
              y: hoveredIndex === index ? 0 : -5,
              opacity: hoveredIndex === index ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="absolute top-4 right-4 size-10 rounded-full bg-linear-to-br from-primary to-primary-800 flex items-center justify-center"
          >
            <FaArrowRight className="text-white text-sm" />
          </motion.div>
          <motion.div
            animate={{
              scale: hoveredIndex === index ? 1.2 : 0,
              opacity: hoveredIndex === index ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-linear-to-br from-primary/10 via-purple-500/10 to-blue-500/10 blur-2xl"
          />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6 pr-5">
              <motion.div
                animate={{
                  scale: hoveredIndex === index ? 1.1 : 1,
                  rotate: hoveredIndex === index ? 5 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="size-12 shrink-0 rounded-xl bg-linear-to-br from-primary to-primary-800 flex items-center justify-center shadow-lg"
              >
                <service.icon className="text-white text-2xl" />
              </motion.div>

              <h5 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors">
                {service.title}
              </h5>
            </div>

            <div className="relative z-2">
              <p className="text-gray-600 font-medium text-base">
                {service.text}
              </p>
            </div>

            <motion.div
              animate={{
                opacity: hoveredIndex === index ? 1 : 0.3,
              }}
              transition={{ duration: 0.3 }}
              className="absolute z-0 -bottom-4 leading-none right-0 text-9xl font-black text-gray-100 group-hover:text-primary/10 transition-colors"
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
