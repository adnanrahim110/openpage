"use client";

import { usePopup } from "@/context/PopupProvider";
import { motion } from "motion/react";
import { FaBookOpen, FaStar } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";
import { IoCheckmarkCircle } from "react-icons/io5";
import { RiCustomerServiceFill } from "react-icons/ri";
import Button from "../ui/Button";
import Subtitle from "../ui/Subtitle";
import Title from "../ui/Title";

const Sec3 = () => {
  const { openPopup } = usePopup();

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-primary-50">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, #000 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute top-20 right-20 w-96 h-96 bg-linear-to-br from-primary-100/50 to-accent-100/50 rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-linear-to-tr from-primary-100/50 to-accent-200/50 rounded-full blur-3xl opacity-60" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-2 mb-4"
        >
          <div className="h-px w-12 bg-linear-to-r from-transparent to-primary" />
          <Subtitle
            variant="neutral"
            icon={HiSparkles}
            iconClassName="text-primary text-lg"
          >
            Premium PublishingOpen Page Publishing
          </Subtitle>
          <div className="h-px w-12 bg-linear-to-l from-transparent to-primary" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-2"
        >
          <Title
            as="h2"
            variant="black"
            title="Professional Book Publishing Services in the USA"
            highlight="Book Publishing Services"
            className="text-center font-normal"
          />
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-600 font-medium max-w-3xl mx-auto mb-16"
        >
          Welcome to Open Page Publishing, where creativity meets precision. As
          one of the leading book publishing companies in the USA, we help
          authors bring their stories to life with passion and purpose.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-purple-500/20 rounded-3xl blur-2xl" />
              <motion.img
                whileHover={{ scale: 1.02, rotate: 2 }}
                transition={{ duration: 0.3 }}
                src="/images/book_mockups/2.avif"
                alt="Book Publishing"
                className="relative aspect-square max-h-[500px] rounded-3xl shadow-2xl border-4 border-white"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring" }}
                className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-2xl border-2 border-gray-200"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                    <FaStar className="text-white text-xl" />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-gray-900">4.9</div>
                    <div className="text-xs font-bold text-gray-600">
                      Rating
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring" }}
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-2xl border-2 border-gray-200"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                    <FaBookOpen className="text-white text-xl" />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-gray-900">
                      1000+
                    </div>
                    <div className="text-xs font-bold text-gray-600">Books</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-700 font-medium mb-8">
              We don’t follow trends we set them. Our publishing experts combine
              innovation, global reach, and proven strategies to help every
              author shine. Whether through Amazon self-publishing or our
              complete book publication services, we empower you to publish
              confidently and connect with readers worldwide.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {[
                "Innovation-Driven",
                "Award-Winning Team",
                "24/7 Support",
                "Global Reach",
                "24/7 Support",
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 bg-linear-to-r from-gray-50 to-gray-100 rounded-full border border-gray-200"
                >
                  <IoCheckmarkCircle className="text-primary text-lg" />
                  <span className="text-sm font-bold text-gray-900">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button
                onClick={openPopup}
                variant="solid"
                icon={RiCustomerServiceFill}
              >
                Get a Free Consultation
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Sec3;
