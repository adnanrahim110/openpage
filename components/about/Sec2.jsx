"use client";

import { contactDetails } from "@/constants";
import { book_mockups_5 } from "@/public";
import { fadeInRight, fadeInUp } from "@/utils/animations";
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
                <div className="absolute left-0 top-0 h-16 w-16">
                  <div className="absolute left-0 top-0 h-px w-full bg-linear-to-r from-primary/50 to-transparent" />
                  <div className="absolute left-0 top-0 h-full w-px bg-linear-to-b from-primary/50 to-transparent" />
                </div>
                <div className="absolute bottom-0 right-0 h-16 w-16">
                  <div className="absolute bottom-0 right-0 h-px w-full bg-linear-to-l from-primary/50 to-transparent" />
                  <div className="absolute bottom-0 right-0 h-full w-px bg-linear-to-t from-primary/50 to-transparent" />
                </div>

                <div className="relative z-10 space-y-6">
                  <Title
                    as="h2"
                    title="Our Vision"
                    variant="white"
                    className="text-3xl font-bold lg:text-4xl"
                  />

                  <div className="space-y-4 text-base text-neutral-200 md:text-lg">
                    <p>
                      To create a publishing experience where every story gets
                      the recognition it deserves. We aim to empower authors
                      with tools, expertise, and confidence to share their
                      stories with the world ethically, beautifully, and
                      globally.
                    </p>
                  </div>

                  <Title
                    as="h2"
                    title="Our Values"
                    variant="white"
                    className="text-3xl font-bold lg:text-4xl"
                  />

                  <div className="w-full">
                    {(() => {
                      const values = [
                        {
                          title: "Integrity",
                          text: "Transparent, honest, and author-focused at every step.",
                          icon: HiSparkles,
                          color: "from-primary to-indigo-600",
                        },
                        {
                          title: "Creativity",
                          text: "Innovative solutions that make every book stand out.",
                          icon: IoMdInfinite,
                          color: "from-amber-500 to-pink-600",
                        },
                        {
                          title: "Excellence",
                          text: "World-class standards in editing, design, and publishing.",
                          icon: BiSupport,
                          color: "from-emerald-500 to-teal-600",
                        },
                        {
                          title: "Empowerment",
                          text: "Supporting authors to take full control of their creative vision.",
                          icon: FaPhoneAlt,
                          color: "from-violet-500 to-indigo-500",
                        },
                      ];
                      return (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                          {values.map((v, idx) => {
                            const Icon = v.icon;
                            return (
                              <motion.div
                                key={v.title}
                                initial={{ opacity: 0, y: 8 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                  duration: 0.5,
                                  delay: idx * 0.08,
                                }}
                                className="group bg-white/3 border border-white/10 rounded-2xl p-5 shadow-lg hover:shadow-2xl transform-gpu hover:-translate-y-1 transition-all duration-300"
                              >
                                <div className="flex items-start gap-4">
                                  <div
                                    className={`shrink-0 h-12 w-12 rounded-lg bg-linear-to-br ${v.color} flex items-center justify-center text-white text-2xl drop-shadow-lg`}
                                  >
                                    <Icon className="h-6 w-6" />
                                  </div>

                                  <div className="min-w-0">
                                    <h3 className="text-white text-lg font-semibold leading-snug truncate">
                                      {v.title}
                                    </h3>
                                    <p className="mt-1 text-sm text-neutral-300 leading-relaxed">
                                      {v.text}
                                    </p>
                                  </div>
                                </div>
                              </motion.div>
                            );
                          })}
                        </div>
                      );
                    })()}
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
                      href={contactDetails[0].href}
                      tone="light"
                      variant="outline"
                      size="lg"
                      icon={FaPhoneAlt}
                    >
                      {contactDetails[0].text}
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
                    src={book_mockups_5}
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
