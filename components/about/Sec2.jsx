"use client";

import { amazone, books_cta } from "@/assets";
import { fadeInLeft, fadeInRight, fadeInUp } from "@/utils/animations";
import { motion } from "motion/react";
import React from "react";
import { BiSupport } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import Button from "../ui/Button";

const Sec2 = () => {
  return (
    <section className="py-28 overflow-hidden">
      <div className="container">
        <div className="row gap-y-10 max-lg:text-center">
          <div className="lg:w-7/12">
            <div className="relative h-full">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp()}
                className="p-5 relative z-1 after:absolute after:bg-accent-950 after:w-[120%] after:h-[110%] after:-left-5 lg:after:left-0 after:-top-[15px] after:z-[-1]"
              >
                <h2 className="text-2xl lg:text-[28px] font-bold text-white leading-[1.2] mb-2.5 font-manrope">
                  Everlasting Tales via <br />
                  <span className="text-secondary">
                    western book publishing
                  </span>
                </h2>
                <p className="text-sm text-neutral-300 font-medium leading-6 mb-8">
                  Becoming an author starts a journey that goes well beyond the
                  writing of a single book. The spark of inventions has no
                  limitations. As an author, your drive to write more stories,
                  thoughts, and experiences is limitless. Western Book
                  Publishing Portal is here to keep the flame burning and assist
                  your ongoing journey of self-expression. Our Commitment is to
                  assist you in realizing and living that ideal, book after
                  book.
                </p>
              </motion.div>
              <div className="w-full">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp({ delay: 0.3 })}
                  className="flex mt-10 lg:mt-20 justify-center gap-2.5 lg:ml-[35px]"
                >
                  <Button to="/contact" small icon={BiSupport}>
                    contact us
                  </Button>
                  <Button
                    to="tel:+13462967813"
                    small
                    secondary
                    icon={FaPhoneAlt}
                  >
                    +1 346 296 7813
                  </Button>
                </motion.div>
              </div>
              <motion.img
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInLeft({ delay: 0.3 })}
                src={books_cta}
                className="max-lg:hidden absolute left-0 bottom-2.5 w-[140px] z-2 filter-[drop-shadow(-1mm_-1mm_0_#fff)]"
                alt=""
              />
            </div>
          </div>
          <div className="lg:w-5/12 z-2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight()}
              className="w-full border-10 border-white h-[450px]"
            >
              <img src={amazone} className="size-full object-cover" alt="" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sec2;
