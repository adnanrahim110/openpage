"use client";

import { testimonials } from "@/constants";
import { banners_reviews_bg } from "@/public";
import { motion } from "motion/react";
import Image from "next/image";
import React, { useState } from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";
import { IoCheckmarkCircle } from "react-icons/io5";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-cards";
import { Autoplay, EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Subtitle from "../ui/Subtitle";
import Title from "../ui/Title";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative py-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${banners_reviews_bg})` }}
      />
      <div className="absolute inset-0 bg-linear-to-b from-white via-gray-50 to-white" />

      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-linear-to-br from-primary-100/50 to-accent-100/50 rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-linear-to-tl from-primary-100/50 to-accent-200/50 rounded-full blur-3xl opacity-60" />

      <div className="container relative z-10">
        <div className="text-center mb-16">
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
              className="mb-6 mx-auto"
            >
              Client Success Stories
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
              as="h2"
              variant="black"
              title="Hear It From Our Clients"
              highlight="Clients"
              className="text-center"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-gray-700 font-medium text-lg leading-relaxed max-w-3xl mx-auto"
          >
            We could definitely rave about our services, but it would be even
            better if our clients could tell their success stories themselves.
            Hear what authors are saying about their experiences with Western
            Book Publishing.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <Swiper
            modules={[Autoplay, EffectCards]}
            effect="cards"
            grabCursor={true}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            cardsEffect={{
              slideShadows: false,
              perSlideOffset: 8,
              perSlideRotate: 2,
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="testimonials-swiper pb-16!"
          >
            {testimonials.map((review, idx) => (
              <SwiperSlide key={idx}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="relative bg-secondary-50 rounded-3xl p-8 md:p-12 overflow-hidden"
                  style={{ minHeight: "400px" }}
                >
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-linear-to-br from-primary/20 to-purple-500/20 rounded-full blur-3xl" />
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-linear-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl" />

                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="absolute top-8 right-8 w-20 h-20 rounded-2xl bg-linear-to-br from-primary/10 to-purple-500/10 flex items-center justify-center"
                  >
                    <FaQuoteLeft className="text-primary text-3xl" />
                  </motion.div>

                  <div className="flex gap-1 mb-6 relative z-10">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                      >
                        <FaStar className="text-yellow-400 text-xl" />
                      </motion.div>
                    ))}
                  </div>

                  <blockquote className="relative z-10 mb-8">
                    <p className="text-gray-700 font-medium text-base md:text-lg leading-relaxed">
                      {review.comment}
                    </p>
                  </blockquote>

                  <div className="relative z-10 flex items-center gap-4 pt-6 border-t-2 border-gray-100">
                    <div className="relative">
                      <motion.div
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="absolute inset-0 bg-linear-to-br from-primary to-purple-600 rounded-full blur-md opacity-50"
                      />
                      <Image
                        width={400}
                        height={400}
                        src={review.img}
                        className="relative w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                        alt={review.author}
                      />
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-linear-to-br from-primary to-purple-600 border-2 border-white flex items-center justify-center">
                        <IoCheckmarkCircle className="text-white text-sm" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-black text-gray-900 text-lg">
                        {review.author}
                      </h4>
                      <p className="text-gray-600 text-sm font-medium">
                        {review.title}
                      </p>
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs font-bold text-gray-400">
                    {idx + 1} / {testimonials.length}
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <motion.div
                key={idx}
                animate={{
                  width: activeIndex === idx ? "40px" : "8px",
                  backgroundColor:
                    activeIndex === idx ? "#1a73e8" : "rgba(0,0,0,0.2)",
                }}
                transition={{ duration: 0.3 }}
                className="h-2 rounded-full cursor-pointer"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
