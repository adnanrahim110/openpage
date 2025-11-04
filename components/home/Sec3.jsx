"use client";

import { usePopup } from "@/context/PopupProvider";
import { motion } from "motion/react";
import { FaBookOpen, FaStar } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";
import { IoCheckmarkCircle } from "react-icons/io5";
import { RiCustomerServiceFill } from "react-icons/ri";
import Button from "../ui/Button";

const Sec3 = () => {
  const { openPopup } = usePopup();

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-linear-to-b from-gray-50 to-white">
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
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-lg">
            <HiSparkles className="text-primary text-lg" />
            <span className="text-sm font-bold text-gray-900 uppercase tracking-wider">
              Premium Publishing
            </span>
          </div>
          <div className="h-px w-12 bg-linear-to-l from-transparent to-primary" />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-black text-center mb-4 bg-linear-to-r from-gray-900 via-primary to-gray-900 bg-clip-text text-transparent leading-tight"
        >
          Western Book Publishing
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-600 text-lg font-medium max-w-3xl mx-auto mb-16"
        >
          Best Book Publishing Services To Opt For in USA
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
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
              src="/images/books/3.avif"
              alt="Book Publishing"
              className="relative rounded-3xl shadow-2xl border-4 border-white"
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
                  <div className="text-xs font-bold text-gray-600">Rating</div>
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
                  <div className="text-2xl font-black text-gray-900">1000+</div>
                  <div className="text-xs font-bold text-gray-600">Books</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-700 font-medium text-lg leading-relaxed mb-8">
              You are welcome to Western Book Publishing, one of the top ten
              publishing houses changing the way stories meet their audience. We
              are not merely keeping up with the trends; we set them. Our
              publishing services shatter boundaries and establish new standards
              with daring innovation and a passion to excel. Whether through
              Amazon self publishing or our full-spectrum book publication
              services, we believe in empowering authors, creativity, and making
              a difference in the world.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {[
                "Innovation-Driven",
                "Award-Winning Team",
                "24/7 Support",
                "Global Reach",
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
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                onClick={openPopup}
                secondary
                small
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
