"use client";

import { usePopup } from "@/context/PopupProvider";
import { book_mockups_ill_process } from "@/public";
import { motion } from "motion/react";
import { FaCheckCircle, FaRocket } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";
import { IoTrendingUp } from "react-icons/io5";
import { RiCustomerServiceFill } from "react-icons/ri";
import Button from "../ui/Button";
import Subtitle from "../ui/Subtitle";
import Title from "../ui/Title";

const Sec4 = () => {
  const { openPopup } = usePopup();

  const features = [
    "Personalized guidance from industry experts",
    "End-to-end publishing support",
    "Full rights and royalties retained",
    "Professional editing and formatting",
    "Global distribution network access",
    "Marketing and promotion strategies",
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-primary-50 via-secondary-50 to-white" />
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "radial-linear(circle at 2px 2px, #000 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute top-10 left-0 w-[500px] h-[500px] bg-linear-to-br from-primary-100/50 to-accent-100/50 rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-linear-to-tl from-primary-100/50 to-accent-200/50 rounded-full blur-3xl opacity-60" />

      <div className="container relative z-10">
        <div className="row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:w-[36%]"
          >
            <img
              src={book_mockups_ill_process.src}
              alt="Books"
              className="w-full h-auto"
            />
          </motion.div>

          <div className="w-full lg:w-7/12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <Subtitle
                variant="soft"
                icon={HiSparkles}
                iconClassName="text-primary text-lg"
                className="mb-6"
              >
                Your Publishing Partner
              </Subtitle>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mb-6"
            >
              <div className="relative inline-block">
                <Title
                  as="h2"
                  variant="black"
                  title="Launch Your Book with Confidence"
                  highlight="Confidence"
                />
              </div>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-gray-700 font-medium mb-6"
            >
              At Open Page Publishing, we make publishing effortless. From
              concept to completion, our team ensures every step is smooth,
              transparent, and built around your goals. With just one step, you
              can transform your manuscript into a beautifully published book —
              crafted to stand out and succeed.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="text-gray-700 font-medium mb-8"
            >
              Whether you’re{" "}
              <strong className="text-black">self-publishing</strong> or
              planning a wider release, we help you launch with creativity,
              precision, and confidence.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8"
            >
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + idx * 0.05 }}
                  className="flex items-center gap-3 group hover-optimize"
                >
                  <div className="shrink-0 w-6 h-6 rounded-full bg-linear-to-br from-primary to-accent-600 flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform">
                    <FaCheckCircle className="text-white text-xs" />
                  </div>
                  <p className="text-gray-700 font-medium text-base  group-hover:text-primary transition-colors">
                    {feature}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Button
                onClick={openPopup}
                variant="solid"
                icon={RiCustomerServiceFill}
              >
                Start a Project
              </Button>
              <Button
                onClick={() => Tawk_API.toggle()}
                tone="dark"
                variant="outline"
              >
                Let's Chat
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.7 }}
              className="mt-8 inline-flex items-center gap-2 text-gray-600 font-medium"
            >
              <div className="flex -space-x-2">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-linear-to-br from-primary to-accent-600 border-2 border-white flex items-center justify-center"
                  >
                    <HiSparkles className="text-white text-xs" />
                  </div>
                ))}
              </div>
              <span className="text-sm">
                Trusted by{" "}
                <span className="font-bold text-primary">1,800+</span> authors
                worldwide
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sec4;
