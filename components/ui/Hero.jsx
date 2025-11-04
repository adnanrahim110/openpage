"use client";

import { usePopup } from "@/context/PopupProvider";
import { banners_noisy_bg, icons_curve_line, testi } from "@/public";
import { motion } from "motion/react";
import Image from "next/image";
import { GiTalk } from "react-icons/gi";
import { HiSparkles } from "react-icons/hi2";
import { IoMdCheckmarkCircle } from "react-icons/io";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SignUp from "../layouts/SignUp";
import Button from "./Button";

const Hero = ({
  title,
  subtitle,
  text,
  hero2 = false,
  textSlider = false,
  actionBtns,
  comp = false,
  contentLg = false,
  images,
}) => {
  const { openPopup } = usePopup();

  const TrustedBy = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="mt-8 flex max-lg:justify-center lg:w-4/5"
    >
      <div className="group relative overflow-hidden bg-linear-to-br from-primary/20 via-primary/10 to-transparent backdrop-blur-md rounded-2xl border border-primary/30 px-6 py-4 transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)]">
        <div className="absolute inset-0 bg-linear-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative flex items-center gap-5">
          <div className="flex items-center gap-2">
            <IoMdCheckmarkCircle className="text-primary text-xl animate-pulse" />
            <span className="font-sitka lg:text-lg text-neutral-300 font-semibold">
              Trusted By:
            </span>
          </div>
          <Image
            width={1080}
            height={500}
            src={testi}
            alt="Trusted partners"
            className="max-h-9 lg:max-h-11 transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
    </motion.div>
  );

  const ActionBtns = () => (
    <div className="flex flex-wrap max-lg:justify-center gap-5 mt-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button icon={GiTalk} onClick={openPopup} type="button">
          LAUNCH A PROJECT
        </Button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button onClick={() => Tawk_API.toggle()} secondary btn2>
          Let us Talk
        </Button>
      </motion.div>
    </div>
  );

  const ParticlesBackground = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/30 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            y: [null, Math.random() * -100 - 50],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );

  return !hero2 ? (
    <section className="relative hero_Slider overflow-hidden size-full">
      <div className="absolute inset-0">
        <Swiper
          modules={[Autoplay, EffectFade]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          effect="fade"
          loop
          speed={2000}
          className="overflow-clip! relative touch-pan-y! size-full"
        >
          {images.map((item, index) => (
            <SwiperSlide key={index} className="backface-hidden">
              <div className="relative size-full">
                <Image
                  width={1440}
                  height={900}
                  src={item}
                  className="size-full object-cover object-center"
                  alt=""
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/30 to-transparent" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="relative pt-44 pb-20 size-full bg-linear-to-r from-black/70 via-black/50 to-black/40 flex items-center justify-center flex-col z-2">
        <ParticlesBackground />

        <div className="container h-full flex flex-col items-center justify-center">
          <div className="row justify-between gap-y-10 items-center max-lg:text-center">
            <div className={`${contentLg ? "lg:w-[55%]" : "lg:w-[55%]"} z-1`}>
              <div className="flex flex-col text-white h-full justify-center relative">
                <div className="absolute -inset-4 bg-linear-to-r from-primary/20 to-transparent blur-3xl rounded-full opacity-30 animate-pulse" />

                {subtitle && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="relative"
                  >
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-primary/20 to-primary/5 backdrop-blur-xl rounded-full border border-primary/30 mb-6 shadow-[0_0_20px_rgba(var(--primary-rgb),0.2)]">
                      <HiSparkles className="text-primary animate-pulse" />
                      <span className="subtitle text-sm lg:text-base font-semibold tracking-wide">
                        {subtitle}
                      </span>
                    </div>
                  </motion.div>
                )}

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative text-[42px] lg:text-[64px] xl:text-[72px] mb-6 font-black leading-[1.1] tracking-tight"
                >
                  <span className="relative inline-block">
                    <span className="relative z-10 bg-linear-to-r from-white via-neutral-100 to-neutral-300 bg-clip-text text-transparent">
                      {title}
                    </span>
                    <span
                      className="absolute inset-0 blur-lg bg-linear-to-r from-primary/50 to-transparent bg-clip-text text-transparent"
                      aria-hidden="true"
                    >
                      {title}
                    </span>
                  </span>
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.4,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <p
                    className="text-neutral-300 font-medium text-lg lg:text-xl leading-relaxed max-w-2xl"
                    dangerouslySetInnerHTML={{ __html: text }}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="w-full flex flex-col relative"
                >
                  {actionBtns ? (
                    <>
                      {comp && <TrustedBy />}
                      <ActionBtns />
                    </>
                  ) : (
                    <TrustedBy />
                  )}
                </motion.div>
              </div>
            </div>

            <div className="lg:w-[45%]">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="lg:pl-10 relative"
              >
                <motion.div
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="max-lg:hidden absolute right-[94%] top-[35%] z-0"
                >
                  <Image
                    width={1080}
                    height={1080}
                    src={icons_curve_line}
                    className="opacity-40 drop-shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)]"
                    alt=""
                  />
                </motion.div>

                <div className="absolute inset-0 bg-linear-to-tr from-primary/30 to-transparent blur-3xl rounded-full opacity-20" />

                <div className="relative">
                  <SignUp />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute inset-0 size-full z-1 opacity-20 bg-center bg-repeat mix-blend-overlay"
        style={{ backgroundImage: `url(${banners_noisy_bg})` }}
      />

      <div className="absolute inset-0 size-full z-1 bg-radial from-transparent via-transparent to-black/80 pointer-events-none" />
    </section>
  ) : (
    <section className="relative min-h-[620px] overflow-hidden size-full flex items-center justify-center">
      <div className="absolute inset-0 -z-1">
        <div className="relative size-full">
          <video
            src="/imgs/hero.webm"
            className="size-full object-cover object-center"
            muted
            autoPlay
            loop
            playsInline
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/70 to-black/80" />
          <div className="absolute inset-0 bg-linear-to-r from-primary/10 to-transparent" />
        </div>
      </div>

      <ParticlesBackground />

      <div className="container relative z-10">
        <div className="row max-lg:text-center">
          <div className="w-full">
            <div className="flex flex-col items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-primary/20 to-primary/5 backdrop-blur-xl rounded-full border border-primary/40 mb-6 shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)]"
              >
                <HiSparkles className="text-primary text-xl animate-pulse" />
                <span className="subtitle max-lg:text-sm s2 text-white font-bold tracking-wider">
                  {subtitle}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative text-5xl lg:text-8xl xl:text-9xl mb-12 font-black tracking-wide"
              >
                <span className="relative inline-block">
                  <span className="relative z-10 bg-linear-to-r from-primary via-primary to-white bg-clip-text text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.3)]">
                    {title}
                  </span>
                  <motion.span
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 blur-2xl bg-linear-to-r from-primary to-white bg-clip-text text-transparent"
                    aria-hidden="true"
                  >
                    {title}
                  </motion.span>
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.4,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative w-full text-center text-neutral-200 lg:px-16 max-w-4xl"
              >
                <div className="relative bg-black/30 backdrop-blur-sm rounded-2xl border border-white/10 px-8 py-6 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                  {textSlider ? (
                    <Swiper
                      modules={[Autoplay, EffectFade]}
                      loop
                      effect="fade"
                      autoplay={{ delay: 4000, disableOnInteraction: false }}
                      slidesPerView={1}
                      speed={1000}
                    >
                      {text.map((item, index) => (
                        <SwiperSlide key={index}>
                          <p className="text-lg lg:text-xl font-medium leading-relaxed">
                            {item}
                          </p>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  ) : (
                    <p className="text-lg lg:text-xl font-medium leading-relaxed">
                      {text}
                    </p>
                  )}
                </div>
              </motion.div>

              {actionBtns && (
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="flex flex-wrap max-lg:justify-center gap-5 mt-12"
                >
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button icon={GiTalk} onClick={openPopup} type="button">
                      Start a Project
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button onClick={() => Tawk_API.toggle()} secondary btn2>
                      Let's Talk
                    </Button>
                  </motion.div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
