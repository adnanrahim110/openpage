"use client";

import {
  portfolio_p10,
  portfolio_p2,
  portfolio_p3,
  portfolio_p4,
  portfolio_p5,
  portfolio_p6,
  portfolio_p7,
  portfolio_p8,
  portfolio_p9,
} from "@/public";
import { fadeInUp } from "@/utils/animations";
import { motion } from "motion/react";
import React, { useState } from "react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const PortfolioSlider = ({ bg }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
      <section className={`py-24 px-0 overflow-hidden bg-primary-50 ${bg}`}>
        <div className="px-3 lg:px-1">
          <div className="row gap-y-10 max-lg:text-center justify-center items-center">
            <div className="lg:w-5/12 lg:pl-10">
              <motion.h3
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp()}
                className="title mb-7"
              >
                A Glimpse into our Award-winning Portfolio
              </motion.h3>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp({ delay: 0.2 })}
              >
                We pride ourselves on our ability to produce quality and
                creative content at a fraction of the cost. We have a long
                history in the industry and have won many awards.
              </motion.p>
            </div>
            <div className="lg:w-7/12 relative">
              <Swiper
                modules={[Autoplay]}
                loop
                autoplay={{ delay: 3000, disableOnInteraction: true }}
                speed={1500}
                slidesPerView={3}
                spaceBetween={10}
              >
                {[
                  portfolio_p2,
                  portfolio_p3,
                  portfolio_p4,
                  portfolio_p5,
                  portfolio_p6,
                  portfolio_p7,
                  portfolio_p8,
                  portfolio_p9,
                  portfolio_p10,
                ].map((img, idx) => (
                  <SwiperSlide
                    key={idx}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className={`relative before:inset-0 before:absolute before:bg-black/40 before:backdrop-blur-sm before:opacity-0 before:transition-all before:duration-300 before:ease-in-out transition-all duration-300 ease-in-out ${
                      hoveredIndex === null
                        ? ""
                        : hoveredIndex === idx
                        ? ""
                        : "before:opacity-100"
                    }`}
                  >
                    <img src={img} alt={`Portfolio ${idx + 1}`} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioSlider;
