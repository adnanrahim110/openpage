"use client";

import { usePopup } from "@/context/PopupProvider";
import { banners_noisy_bg, testi } from "@/public";
import { motion } from "motion/react";
import Image from "next/image";
import { GiTalk } from "react-icons/gi";
import { HiSparkles } from "react-icons/hi2";
import { IoMdCheckmarkCircle } from "react-icons/io";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
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
  images,
  titleHighlight,
}) => {
  const { openPopup } = usePopup();

  const primaryImage = Array.isArray(images) ? images[0] : images;

  return !hero2 ? (
    <section className="relative hero_Slider overflow-hidden size-full min-h-screen flex items-center justify-center">
      <div className="absolute inset-0">
        <div className="relative size-full">
          {primaryImage ? (
            <Image
              width={1920}
              height={1080}
              src={primaryImage}
              className="size-full object-cover object-center"
              alt=""
              priority
            />
          ) : (
            <div className="size-full bg-linear-to-br from-gray-900 via-black to-gray-900" />
          )}
          <div className="absolute inset-0 bg-linear-to-b from-black/90 via-black/70 to-black/90" />
          <div className="absolute inset-0 bg-linear-to-r from-black/80 via-transparent to-black/80" />
        </div>
      </div>

      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="size-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(25, 123, 188, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(25, 123, 188, 0.3) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px]"
        />
      </div>

      <div className="relative z-10 container px-6 pt-44 pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center text-center">
            {subtitle && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative mb-5"
              >
                <div className="flex items-center gap-4">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="h-px w-12 bg-linear-to-r from-transparent to-primary"
                  />
                  <Subtitle
                    variant="glass"
                    icon={HiSparkles}
                    iconClassName="text-primary"
                    className="backdrop-blur-2xl bg-linear-to-r from-white/10 to-white/5 border border-white/20"
                    textClassName="text-sm lg:text-base font-bold tracking-[0.2em] uppercase"
                  >
                    {subtitle}
                  </Subtitle>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="h-px w-12 bg-linear-to-l from-transparent to-primary"
                  />
                </div>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative mb-5"
            >
              <Title
                as="h1"
                title={title}
                highlight={titleHighlight}
                variant="white"
                highlightColor="primary"
                className="xl:text-5xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-linear-to-r from-primary/5 via-transparent to-secondary/5 transform -skew-y-1" />

                <div className="relative backdrop-blur-xl bg-white/3 border-y border-white/10 py-8 px-6 lg:px-12">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-16 bg-linear-to-b from-primary to-secondary" />
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-16 bg-linear-to-b from-secondary to-primary" />

                  <p
                    className="text-neutral-200 font-medium text-base lg:text-xl"
                    dangerouslySetInnerHTML={{ __html: text }}
                  />
                </div>
              </div>
            </motion.div>

            {actionBtns && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap items-center justify-center gap-6 pt-6"
              >
                <Button
                  icon={GiTalk}
                  onClick={openPopup}
                  type="button"
                  tone="primary"
                  variant="solid"
                  size="lg"
                  className="shadow-[0_0_50px_0] shadow-primary/40 hover:shadow-primary/60 transition-all duration-300"
                >
                  Launch A Project
                </Button>
                <Button
                  onClick={() => Tawk_API.toggle()}
                  tone="light"
                  variant="outline"
                  size="lg"
                  className="backdrop-blur-xl bg-white/5 hover:bg-white/10 border-2"
                >
                  Let's Talk
                </Button>
              </motion.div>
            )}

            {comp && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="pt-8 inline-block"
              >
                <div className="relative group">
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative backdrop-blur-xl bg-white/2 border border-white/10 rounded-full px-8 py-4 flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-6">
                    <div className="flex items-center gap-3">
                      <IoMdCheckmarkCircle className="text-primary text-xl" />
                      <span className="font-sitka text-base text-neutral-300 font-semibold">
                        Trusted By:
                      </span>
                    </div>
                    <div className="h-px lg:h-6 w-24 lg:w-px bg-white/20" />
                    <Image
                      width={1080}
                      height={500}
                      src={testi}
                      alt="Trusted partners"
                      className="max-h-8 lg:h-10 h-full w-auto opacity-90"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="w-full pt-12"
            >
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {[
                  { number: "500+", text: "Books Published" },
                  { number: "98%", text: "Success Rate" },
                  { number: "50+", text: "Awards Won" },
                  { number: "15+", text: "Years Experience" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-secondary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

                    <div className="relative h-full backdrop-blur-2xl bg-white/2 border border-white/10 rounded-xl p-6 hover:border-primary/30 hover:bg-white/5 transition-all duration-300">
                      <div className="flex flex-col items-center justify-center space-y-2">
                        <motion.div
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 1 + index * 0.1 }}
                          className="w-12 h-0.5 bg-linear-to-r from-primary to-secondary mb-2"
                        />

                        <div className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white">
                          {stat.number}
                        </div>

                        <div className="text-xs lg:text-sm text-neutral-400 font-medium tracking-wider uppercase text-center">
                          {stat.text}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="pt-20"
            >
              <div className="flex flex-col items-center gap-4">
                <motion.div
                  animate={{
                    y: [0, 10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative"
                >
                  <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
                    <motion.div
                      animate={{
                        y: [0, 12, 0],
                        opacity: [1, 0.3, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="w-1.5 h-1.5 bg-white rounded-full"
                    />
                  </div>
                </motion.div>
                <span className="text-xs uppercase tracking-widest text-white/30 font-medium">
                  Scroll to Explore
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div
        className="absolute inset-0 size-full z-5 opacity-[0.08] bg-center bg-repeat mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: `url(${banners_noisy_bg})` }}
      />

      <div className="absolute inset-0 size-full z-6 pointer-events-none">
        <div className="absolute inset-0 bg-radial from-transparent via-transparent to-black/80" />
        <div className="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-black/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-black to-transparent" />
      </div>
    </section>
  ) : (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center">
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
          <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/80" />
          <div className="absolute inset-0 bg-primary/5" />
        </div>
      </div>

      <div className="absolute top-1/4 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

      <div className="container relative z-10 px-6 py-24 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-center space-y-6">
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

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.15,
              }}
              className="text-center relative"
            >
              <div className="relative">
                <Title
                  as="h1"
                  title={title}
                  highlight={titleHighlight}
                  variant="white"
                  highlightColor="primary"
                  className="text-2xl md:text-3xl lg:text-5xl xl:text-6xl drop-shadow-2xl"
                />
              </div>
            </motion.div>

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
