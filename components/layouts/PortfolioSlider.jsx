"use client";

import {
  books_1_1,
  books_1_2,
  books_2_1,
  books_2_2,
  books_3_1,
  books_3_2,
  books_4_1,
  books_4_2,
  books_5_1,
  books_5_2,
  books_6_1,
  books_6_2,
} from "@/public";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import { HiSparkles } from "react-icons/hi2";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Subtitle from "../ui/Subtitle";
import Title from "../ui/Title";

const PortfolioSlider = ({ bg }) => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const portfolioItems = [
    books_1_1,
    books_2_1,
    books_3_1,
    books_4_1,
    books_5_1,
    books_6_1,
    books_1_2,
    books_2_2,
    books_3_2,
    books_4_2,
    books_5_2,
    books_6_2,
  ];

  return (
    <>
      <section
        ref={sectionRef}
        className={`relative py-32 px-0 overflow-hidden ${
          bg || "bg-linear-to-br from-primary-50 via-white to-accent-50"
        }`}
      >
        <motion.div
          style={{ y, opacity }}
          className="absolute top-0 left-0 w-[600px] h-[600px] bg-linear-to-br from-primary-200/30 to-accent-200/30 rounded-full blur-3xl"
        />

        <div className="container relative z-10">
          <div className="row gap-y-16 max-lg:text-center justify-center items-center">
            <div className="lg:w-5/12 lg:pl-10">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Subtitle
                  variant="soft"
                  icon={HiSparkles}
                  iconClassName="text-primary text-lg"
                  className="mb-6 max-lg:mx-auto"
                >
                  Excellence in Publishing
                </Subtitle>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-8"
              >
                <Title
                  as="h2"
                  variant="black"
                  title="A Glimpse into our Award-winning Portfolio"
                  highlight="Award-winning"
                  className="max-lg:text-center"
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-gray-700 font-medium text-lg leading-relaxed mb-8"
              >
                We pride ourselves on our ability to produce quality and
                creative content at a fraction of the cost. We have a long
                history in the industry and have won many awards.
              </motion.p>
            </div>

            <div className="lg:w-7/12 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-linear-to-r from-primary-400/30 to-secondary-400/30 blur-3xl scale-110 rounded-full" />

                <div className="relative perspective-[2000px]">
                  <Swiper
                    modules={[Autoplay, EffectCoverflow]}
                    effect="coverflow"
                    loop
                    centeredSlides
                    autoplay={{
                      delay: 3500,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: true,
                    }}
                    speed={1200}
                    slidesPerView="auto"
                    spaceBetween={0}
                    coverflowEffect={{
                      rotate: 15,
                      stretch: 0,
                      depth: 250,
                      modifier: 1.5,
                      slideShadows: true,
                    }}
                    breakpoints={{
                      320: {
                        slidesPerView: 1,
                        coverflowEffect: {
                          rotate: 10,
                          depth: 150,
                          modifier: 1,
                        },
                      },
                      768: {
                        slidesPerView: 2,
                        coverflowEffect: {
                          rotate: 12,
                          depth: 200,
                          modifier: 1.2,
                        },
                      },
                      1024: {
                        slidesPerView: 3,
                        coverflowEffect: {
                          rotate: 15,
                          depth: 250,
                          modifier: 1.5,
                        },
                      },
                    }}
                    className="portfolio-swiper pb-12!"
                  >
                    {portfolioItems.map((img, idx) => (
                      <SwiperSlide key={idx} className="w-[273px]!">
                        <div className="relative group cursor-pointer h-[387px] overflow-hidden">
                          <div className="relative h-full w-full">
                            <Image
                              width={600}
                              height={957}
                              src={img}
                              alt={`Portfolio ${idx + 1}`}
                              className="h-full w-full object-cover"
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <style jsx global>{`
          .perspective-\[2000px\] {
            perspective: 2000px;
          }
        `}</style>
      </section>
    </>
  );
};

export default PortfolioSlider;
