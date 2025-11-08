"use client";

import { amazone, books_cta } from "@/public";
import { fadeInLeft, fadeInRight, fadeInUp } from "@/utils/animations";
import { motion } from "motion/react";
import Image from "next/image";
import { BiSupport } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";
import { IoMdInfinite } from "react-icons/io";
import Button from "../ui/Button";
import Subtitle from "../ui/Subtitle";
import Title from "../ui/Title";

const Sec2 = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-32">
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.015]">
          <div
            className="size-full"
            style={{
              backgroundImage:
                "linear-gradient(to right, black 1px, transparent 1px), linear-gradient(to bottom, black 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="absolute left-[5%] top-[15%] h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px] animate-pulse" />
        <div
          className="absolute right-[10%] bottom-[20%] h-[400px] w-[400px] rounded-full bg-slate-900/5 blur-[100px] animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container relative z-10">
        <div className="row items-center gap-y-16">
          <div className="lg:w-[58%]">
            <div className="relative">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp()}
                className="group relative overflow-hidden bg-linear-to-br from-black via-slate-900 to-black p-8 shadow-2xl rounded-2xl border border-white/10 md:p-12"
              >
                {/* Corner Decorations */}
                <div className="absolute left-0 top-0 h-16 w-16">
                  <div className="absolute left-0 top-0 h-px w-full bg-linear-to-r from-primary/50 to-transparent" />
                  <div className="absolute left-0 top-0 h-full w-px bg-linear-to-b from-primary/50 to-transparent" />
                </div>
                <div className="absolute bottom-0 right-0 h-16 w-16">
                  <div className="absolute bottom-0 right-0 h-px w-full bg-linear-to-l from-primary/50 to-transparent" />
                  <div className="absolute bottom-0 right-0 h-full w-px bg-linear-to-t from-primary/50 to-transparent" />
                </div>

                <div className="relative z-10 space-y-6">
                  <Subtitle
                    variant="glass"
                    icon={HiSparkles}
                    endIcon={IoMdInfinite}
                    className="inline-flex border border-white/20 bg-white/10 backdrop-blur-md"
                    textClassName="text-[10px] font-semibold tracking-[0.25em] uppercase text-white/90"
                    iconClassName="text-primary text-sm"
                    endIconClassName="text-primary text-sm"
                  >
                    Our Mission
                  </Subtitle>

                  <Title
                    as="h2"
                    title="Everlasting Tales via Open Page Publishing"
                    highlight="Open Page Publishing"
                    variant="white"
                    highlightColor="primary"
                    className="text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl"
                  />

                  <div className="space-y-4 text-base leading-relaxed text-neutral-200 md:text-lg">
                    <p>
                      Becoming an author starts a journey that goes well beyond
                      the writing of a single book. The spark of inventions has
                      no limitations. As an author, your drive to write more
                      stories, thoughts, and experiences is limitless.
                    </p>
                    <p>
                      Western Book Publishing Portal is here to keep the flame
                      burning and assist your ongoing journey of
                      self-expression. Our commitment is to assist you in
                      realizing and living that ideal, book after book.
                    </p>
                  </div>

                  <div className="flex items-center gap-4 py-4">
                    <div className="h-px flex-1 bg-linear-to-r from-white/20 to-transparent" />
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <div className="h-px flex-1 bg-linear-to-l from-white/20 to-transparent" />
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    <Button
                      href="/contact"
                      icon={BiSupport}
                      tone="primary"
                      variant="solid"
                      size="lg"
                    >
                      Contact Us
                    </Button>
                    <Button
                      href="tel:+13462967813"
                      tone="light"
                      variant="outline"
                      size="lg"
                      icon={FaPhoneAlt}
                    >
                      +1 346 296 7813
                    </Button>
                  </div>
                </div>

                <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-primary/20 blur-3xl" />
              </motion.div>
            </div>
          </div>

          <div className="lg:w-[42%]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight()}
              className="group relative"
            >
              <div className="relative overflow-hidden bg-white shadow-2xl rounded-2xl">
                <div className="relative aspect-4/5 overflow-hidden">
                  <Image
                    width={1080}
                    height={1080}
                    src={amazone}
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    alt="Amazon Publishing"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sec2;
