"use client";

import { testimonials } from "@/constants";
import { banners_reviews_bg } from "@/public";
import { motion } from "motion/react";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { HiSparkles } from "react-icons/hi2";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-cards";
import { Autoplay, EffectCreative, Keyboard, Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Subtitle from "../ui/Subtitle";
import Title from "../ui/Title";

const Stars = ({ n = 5 }) => (
  <div className="flex gap-1" aria-label={`${n} out of 5 stars`}>
    {Array.from({ length: n }, (_, i) => (
      <FaStar key={i} className="w-4 h-4 text-yellow-500" />
    ))}
  </div>
);

const TicketCard = ({ comment, name, role, avatar }) => (
  <div className="relative mx-auto w-[92%] max-w-[520px] select-none">
    <div className="relative rounded-2xl bg-linear-to-br from-secondary-50 via-primary-50 to-white p-7 border border-gray-200 transition-all duration-500 will-change-transform group-[.swiper-slide-active]:border-primary/40 group-[.swiper-slide-active]:shadow-[0_0_15px] shadow-black/25 group-[.swiper-slide-active]:scale-[1.02] group-[.swiper-slide-active]:-translate-y-1">
      <div className="absolute top-0 left-8 right-8 h-px bg-primary/20" />

      <div className="flex items-center gap-4 mb-5">
        <div className="relative">
          <Image
            width={1080}
            height={1080}
            src={avatar}
            alt={name}
            className="h-14 w-14 rounded-full object-cover ring-2 ring-gray-100 shadow-sm transition-all duration-300 group-[.swiper-slide-active]:ring-primary/30"
          />
        </div>
        <div className="flex-1">
          <p className="text-xl font-semibold text-gray-900">{name}</p>
          {role && (
            <p className="text-sm text-gray-600 font-medium mt-0.5">{role}</p>
          )}
        </div>
      </div>

      <blockquote className="relative pl-4 text-base text-gray-700  border-l-2 border-gray-200 transition-colors duration-300 group-[.swiper-slide-active]:border-primary">
        {comment}
      </blockquote>

      <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
        <Stars n={5} />
      </div>

      <div className="absolute -left-2 top-10 h-4 w-4 rounded-full bg-primary/10 border border-primary/20" />
      <div className="absolute -right-2 bottom-10 h-4 w-4 rounded-full bg-secondary/10 border border-secondary/20" />
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-gray-50">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.03]"
        style={{ backgroundImage: `url(${banners_reviews_bg})` }}
      />

      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
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
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6"
          >
            <Title
              as="h2"
              variant="black"
              title="Why Authors Love Working with Us"
              highlight="Working with Us"
              className="text-center font-normal"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-700 text-lg  max-w-3xl mx-auto"
          >
            Our authors are the heart of everything we do. From first drafts to
            published bestsellers, we’ve helped countless writers bring their
            stories to life with creativity, precision, and passion.
            <br />
            Here’s what they say about working with Open Page Publishing their
            success is our greatest achievement.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative w-full"
        >
          <Swiper
            modules={[Autoplay, EffectCreative, Mousewheel, Keyboard]}
            effect="creative"
            centeredSlides
            loop
            initialSlide={3}
            speed={500}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 16 },
              480: { slidesPerView: 1.1, spaceBetween: 18 },
              640: { slidesPerView: 1.25, spaceBetween: 20 },
              768: { slidesPerView: 1.45, spaceBetween: 22 },
              1024: { slidesPerView: 1.6, spaceBetween: 24 },
              1280: { slidesPerView: 1.75, spaceBetween: 26 },
            }}
            slidesPerView={1.753}
            spaceBetween={0}
            keyboard={{ enabled: true }}
            mousewheel={{ forceToAxis: true, releaseOnEdges: true }}
            creativeEffect={{
              limitProgress: 2,
              prev: {
                translate: ["-55%", 0, -100],
                rotate: [0, 0, -5],
                scale: 0.92,
                opacity: 0.7,
              },
              next: {
                translate: ["55%", 0, -100],
                rotate: [0, 0, 5],
                scale: 0.92,
                opacity: 0.7,
              },
            }}
            onInit={(swiper) => {
              const bar = document.querySelector(".rev-progress-bar");
              if (!bar) return;
              const total = swiper.slides.length - swiper.loopedSlides * 2;
              const idx = swiper.realIndex + 1;
              bar.style.width = Math.round((idx / total) * 100) + "%";
            }}
            onSlideChange={(swiper) => {
              const bar = document.querySelector(".rev-progress-bar");
              if (!bar) return;
              const total = swiper.slides.length - swiper.loopedSlides * 2;
              const idx = swiper.realIndex + 1;
              bar.style.width = Math.round((idx / total) * 100) + "%";
            }}
            className="rev-deck pb-4"
          >
            {testimonials.map((r, i) => (
              <SwiperSlide
                key={i}
                className="rounded-2xl bg-transparent p-10 group transition-all duration-400"
              >
                <TicketCard {...r} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="mt-10 mx-auto max-w-sm">
            <div className="h-0.5 w-full bg-gray-300 rounded-full overflow-hidden">
              <div
                className="rev-progress-bar h-full bg-primary transition-all duration-300 ease-out"
                style={{ width: "0%" }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
