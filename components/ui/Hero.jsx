"use client";

import { usePopup } from "@/context/PopupProvider";
import { banners_noisy_bg, icons_curve_line, testi } from "@/public";
import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
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
import Subtitle from "./Subtitle";
import Title from "./Title";

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
  titleHighlight,
}) => {
  const { openPopup } = usePopup();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const TrustedBy = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="mt-8 flex max-lg:justify-center lg:w-4/5"
    >
      <div className="group relative overflow-hidden bg-linear-to-br from-primary/20 via-primary/10 to-transparent backdrop-blur-md rounded-2xl border border-primary/30 px-6 py-4 transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_30px] shadow-primary/30">
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
            className="max-h-9 lg:h-14 h-full w-auto"
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
      >
        <Button
          icon={GiTalk}
          onClick={openPopup}
          type="button"
          tone="primary"
          variant="solid"
          size="lg"
        >
          Launch A Project
        </Button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <Button
          onClick={() => Tawk_API.toggle()}
          tone="light"
          variant="outline"
          size="lg"
        >
          Let's Talk
        </Button>
      </motion.div>
    </div>
  );

  const primaryImage = Array.isArray(images) ? images[0] : images;

  return !hero2 ? (
    <section className="relative hero_Slider overflow-hidden size-full">
      <div className="absolute inset-0">
        <div className="relative size-full">
          {primaryImage ? (
            <Image
              width={1440}
              height={900}
              src={primaryImage}
              className="size-full object-cover object-center"
              alt=""
              priority
            />
          ) : (
            <div className="size-full bg-black" aria-hidden="true" />
          )}
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/30 to-transparent" />
        </div>
      </div>

      <div className="relative pt-44 pb-20 size-full bg-linear-to-r from-black/70 via-black/50 to-black/40 flex items-center justify-center flex-col z-2">
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
                    <Subtitle
                      variant="glass"
                      icon={HiSparkles}
                      iconClassName="text-primary"
                      className="mb-6 shadow-[0_0_20px] shadow-primary/20"
                      textClassName="subtitle text-sm lg:text-base font-semibold tracking-wide"
                    >
                      {subtitle}
                    </Subtitle>
                  </motion.div>
                )}

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Title
                    as="h1"
                    title={title}
                    highlight={titleHighlight}
                    variant="white"
                    highlightColor="primary"
                    className="mb-6 text-balance text-5xl md:text-6xl lg:text-7xl xl:text-[80px]"
                  />
                </motion.div>

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
                    className="text-neutral-300 font-medium text-lg lg:text-xl max-w-2xl"
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
                    className="opacity-40 drop-shadow-[0_0_15px] shadow-primary/50"
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
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center">
      {/* Video Background with Clean Overlay */}
      <div className="absolute inset-0">
        <div className="relative size-full">
          <video
            src="/images/hero.webm"
            className="size-full object-cover object-center"
            muted
            autoPlay
            loop
            playsInline
          />
          {/* Sophisticated Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/80" />
          <div className="absolute inset-0 bg-primary/5" />
        </div>
      </div>

      {/* Subtle Background Accents */}
      <div className="absolute top-1/4 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

      <div className="container relative z-10 px-6 py-24 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-center space-y-10">
            {/* Subtitle with Clean Glass Effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Subtitle
                variant="glass"
                icon={HiSparkles}
                iconClassName="text-primary"
                className="mb-6 border border-white/20"
                textClassName="subtitle text-sm lg:text-base font-bold tracking-[0.15em] uppercase"
              >
                {subtitle}
              </Subtitle>
            </motion.div>

            {/* Title with Clean Animation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.15,
              }}
              className="text-center relative"
            >
              <div className="absolute inset-0 blur-2xl opacity-30">
                <Title
                  as="h1"
                  title={title}
                  highlight={titleHighlight}
                  variant="white"
                  className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
                />
              </div>

              {/* Main Title */}
              <div className="relative">
                <Title
                  as="h1"
                  title={title}
                  highlight={titleHighlight}
                  variant="white"
                  highlightColor="primary"
                  className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl drop-shadow-2xl"
                />
              </div>
            </motion.div>

            {/* Description with Enhanced Typography */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="w-full max-w-4xl"
            >
              <div className="relative group">
                {/* Decorative Lines */}
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-linear-to-b from-primary via-white/50 to-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -right-4 top-0 bottom-0 w-1 bg-linear-to-b from-secondary via-white/50 to-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10">
                  <div className="relative text-center">
                    {textSlider ? (
                      <Swiper
                        modules={[Autoplay]}
                        loop
                        autoplay={{
                          delay: 4500,
                        }}
                        slidesPerView={1}
                        speed={1200}
                        className="premium-text-swiper"
                      >
                        {text.map((item, index) => (
                          <SwiperSlide key={index}>
                            <p className="text-xl font-medium leading-relaxed text-white/95 md:text-2xl md:leading-relaxed drop-shadow-lg">
                              {item}
                            </p>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    ) : (
                      <p className="text-xl font-medium leading-relaxed text-white/95 md:text-2xl md:leading-relaxed drop-shadow-lg">
                        {text}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Premium Action Buttons */}
            {actionBtns && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex flex-wrap items-center justify-center gap-5 pt-4"
              >
                <Button
                  onClick={openPopup}
                  icon={GiTalk}
                  tone="primary"
                  variant="solid"
                  size="xl"
                >
                  Start a Project
                </Button>

                <Button
                  onClick={() => Tawk_API.toggle()}
                  tone="light"
                  variant="outline"
                  size="xl"
                  showArrow={false}
                  className="backdrop-blur-sm"
                >
                  Let's Talk
                </Button>
              </motion.div>
            )}

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="pt-16"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex flex-col items-center gap-3"
              >
                <div className="text-xs font-medium uppercase tracking-wider text-white/50">
                  Scroll Down
                </div>
                <div className="h-10 w-px bg-linear-to-b from-white/30 to-transparent" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        .premium-text-swiper {
          width: 100%;
        }

        .premium-text-swiper .swiper-slide {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100px;
        }
      `}</style>
    </section>
  );
};

export default Hero;
