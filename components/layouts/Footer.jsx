"use client";

import { usePopup } from "@/context/PopupProvider";
import { nav_logo, pay } from "@/public";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";
import { contactDetails, navigation, servicesList } from "../../constants";

const Footer = () => {
  const pathname = usePathname();
  const { openPopup } = usePopup();

  return (
    <>
      <footer
        className={`relative overflow-hidden ${
          pathname === "/thankyou" ? "hidden" : ""
        }`}
      >
        <div className="absolute inset-0 bg-linear-to-b from-white via-primary-50 to-white" />
        <motion.div
          className="absolute opacity-[0.035] -inset-[200%] w-[400%] h-[400%] bg-[url(/images/banners/noisy_bg.avif)]"
          animate={{
            x: ["0%", "-20%", "20%", "0%"],
            y: ["0%", "20%", "-20%", "0%"],
          }}
          transition={{
            duration: 1,
            ease: "linear",
            repeat: Infinity,
          }}
        />

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-linear-to-br from-primary-100/50 to-accent-100/50 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-linear-to-tl from-primary-100/50 to-accent-200/50 rounded-full blur-3xl opacity-60" />

        <div className="relative z-10">
          <div className="container pt-20 pb-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-4"
              >
                <div className="flex flex-col gap-6">
                  <Image
                    width={500}
                    height={300}
                    src={nav_logo}
                    alt="Open Page Publishing"
                    className="max-w-[290px]"
                  />
                  <p className="text-gray-700 font-medium text-base">
                    We help storytellers turn passion into pages. Whether you're
                    starting fresh or revisiting a dream, we're here with tools,
                    trust, and a touch of magic. Give your story the voice it
                    deserves— authentically, beautifully, and with heart.
                  </p>

                  <button
                    onClick={openPopup}
                    className="inline-flex items-center gap-2 px-5 py-3 bg-primary/5 backdrop-blur-sm rounded-xl border border-primary/20 w-fit group hover:bg-primary/10 transition-all cursor-pointer"
                  >
                    <HiSparkles className="text-primary text-lg animate-pulse" />
                    <span className="text-sm font-bold text-gray-900">
                      Start Your Publishing Journey
                    </span>
                    <FaArrowRight className="text-primary text-xs group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="lg:col-span-3"
              >
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-1 h-8 bg-linear-to-b from-primary to-purple-600 rounded-full" />
                    <h5 className="text-xl font-medium text-gray-900">
                      Our Services
                    </h5>
                  </div>
                  <ul className="flex flex-col gap-3">
                    {servicesList.slice(0, 8).map((service, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 + idx * 0.05 }}
                        className="group"
                      >
                        <Link
                          href={service.link}
                          className="flex items-center gap-2 text-base text-gray-600 hover:text-black transition-colors group"
                        >
                          <FaArrowRight className="text-primary text-xs opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                          <span className="group-hover:translate-x-1 transition-transform">
                            {service.title}
                          </span>
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-2"
              >
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-1 h-8 bg-linear-to-b from-primary to-purple-600 rounded-full" />
                    <h5 className="text-xl font-medium text-gray-900">
                      Quick Links
                    </h5>
                  </div>
                  <ul className="flex flex-col gap-3">
                    {navigation
                      .filter((it) => it.link !== false)
                      .map((item, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.4,
                            delay: 0.3 + idx * 0.05,
                          }}
                          className="group"
                        >
                          <Link
                            href={item.link}
                            className="flex items-center gap-2 text-base text-gray-600 hover:text-black transition-colors"
                          >
                            <FaArrowRight className="text-primary text-xs opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                            <span className="group-hover:translate-x-1 transition-transform">
                              {item.title}
                            </span>
                          </Link>
                        </motion.li>
                      ))}
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="lg:col-span-3"
              >
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-1 h-8 bg-linear-to-b from-primary to-purple-600 rounded-full" />
                    <h5 className="text-xl font-medium text-gray-900">
                      Contact Us
                    </h5>
                  </div>
                  <ul className="space-y-4">
                    {contactDetails.map((item, idx) => {
                      const Wrapper = item.href ? Link : "div";
                      const Icon = item.icon;
                      return (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.4 + idx * 0.1 }}
                        >
                          <Wrapper
                            {...(item.href && { href: item.href })}
                            className="flex gap-3 items-start group"
                          >
                            <div
                              className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                                idx === 0
                                  ? "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white"
                                  : idx === 1
                                  ? "bg-amber-500/10 text-amber-500 group-hover:bg-amber-500 group-hover:text-white"
                                  : idx === 2
                                  ? "bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white"
                                  : "bg-gray-200 text-gray-600 group-hover:bg-gray-300"
                              }`}
                            >
                              <Icon className="text-lg" />
                            </div>
                            <div className="flex-1">
                              <span className="text-base text-gray-600 group-hover:text-black transition-colors block ">
                                {item.text}
                              </span>
                            </div>
                          </Wrapper>
                        </motion.li>
                      );
                    })}
                  </ul>

                  <div className="p-4 rounded-xl bg-linear-to-br from-primary/10 to-primary-600/10 border border-primary/20 backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-linear-to-br from-primary to-primary-600 flex items-center justify-center">
                        <HiSparkles className="text-white text-xl" />
                      </div>
                      <div>
                        <p className="text-gray-900 font-bold text-sm">
                          24/7 Support
                        </p>
                        <p className="text-gray-600 text-xs">
                          Always here to help
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="border-t border-gray-200">
            <div className="container py-8">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col lg:flex-row lg:items-center gap-3"
                >
                  <p className="text-sm text-gray-600">
                    © {new Date().getFullYear()}{" "}
                    <Link
                      href="/"
                      className="text-gray-900 font-bold hover:text-primary transition-colors"
                    >
                      Open Page Publishing
                    </Link>
                  </p>
                  <span className="hidden lg:block w-1 h-1 rounded-full bg-gray-300" />
                  <p className="text-xs text-gray-500">All rights reserved.</p>
                </motion.div>

                <div className="w-full lg:w-60">
                  <Image
                    src="/images/pay.avif"
                    width={1062}
                    height={231}
                    className="w-full h-auto"
                    alt=""
                  />
                </div>

                <motion.ul
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="flex items-center gap-6"
                >
                  {[
                    {
                      title: "Terms & Conditions",
                      link: "/terms-and-conditions",
                    },
                    { title: "Privacy Policy", link: "/privacy-policy" },
                  ].map((item, idx) => (
                    <li key={idx}>
                      <Link
                        href={item.link}
                        className={`text-sm font-medium transition-colors ${
                          pathname === item.link
                            ? "text-primary"
                            : "text-gray-600 hover:text-gray-900"
                        }`}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
