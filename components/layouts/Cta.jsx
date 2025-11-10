"use client";

import { usePopup } from "@/context/PopupProvider";
import {
  books_1_3,
  books_2_3,
  books_3_3,
  books_4_3,
  books_5_3,
  books_6_3,
} from "@/public";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { FiPhone } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";
import { MdStart } from "react-icons/md";
import Button from "../ui/Button";

const Cta = () => {
  const { openPopup } = usePopup();
  const containerRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 150, mass: 1 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothMouseY, [-1, 1], [10, -10]);
  const rotateY = useTransform(smoothMouseX, [-1, 1], [-10, 10]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const x = (e.clientX - centerX) / (rect.width / 2);
      const y = (e.clientY - centerY) / (rect.height / 2);
      mouseX.set(x);
      mouseY.set(y);
    };

    const handleMouseLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [mouseX, mouseY]);

  const books = [
    { img: books_1_3 },
    { img: books_2_3 },
    { img: books_3_3 },
    { img: books_4_3 },
    { img: books_5_3 },
    { img: books_6_3 },
  ];

  const orbitConfig = {
    radius: 220,
    bookSize: 130,
    orbitDuration: 30,
  };

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-top bg-no-repeat bg-[url(/images/banners/texture2.avif)]" />
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="size-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #197BBC 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-purple-200/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-linear-to-br from-cyan-100/20 to-indigo-100/20 rounded-full blur-3xl" />
      <div className="container relative z-10">
        <div className="row gap-y-16 max-lg:text-center items-center justify-between">
          <div className="lg:w-[40%]">
            <div
              ref={containerRef}
              className="relative w-full h-[400px] flex items-center justify-center"
              style={{ perspective: "1500px" }}
            >
              <motion.div
                className="relative size-full"
                style={{
                  transformStyle: "preserve-3d",
                  rotateX,
                  rotateY,
                }}
              >
                <motion.div
                  className="absolute inset-0"
                  style={{ transformStyle: "preserve-3d" }}
                  animate={{ rotateY: 360 }}
                  transition={{
                    duration: orbitConfig.orbitDuration,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {books.map((book, i) => {
                    const angleRad = (i / books.length) * Math.PI * 2;
                    const xPos = Math.sin(angleRad) * orbitConfig.radius;
                    const zPos = Math.cos(angleRad) * orbitConfig.radius;
                    const rotateYDeg = (angleRad * 360) / Math.PI;

                    return (
                      <OrbitingBook
                        key={i}
                        x={xPos}
                        z={zPos}
                        rotateY={-rotateYDeg}
                        img={book.img}
                        size={orbitConfig.bookSize}
                      />
                    );
                  })}
                </motion.div>
              </motion.div>
            </div>
          </div>
          <div className="lg:w-[55%]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-4"
            >
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 self-start max-lg:self-center px-4 py-2 bg-blue-50 backdrop-blur-sm border border-blue-200/50 rounded-full"
              >
                <HiSparkles className="text-primary text-base" />
                <span className="text-xs font-semibold tracking-widest uppercase text-gray-700">
                  Award-Winning Publisher
                </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h2 className="text-4xl lg:text-[52px] font-bold text-gray-800 leading-tight">
                  Ready To Publish Your Book
                  <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Globally?
                  </span>
                </h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                  Transform your manuscript into a professionally published
                  masterpiece with our comprehensive suite of ghostwriting,
                  editing, publishing, and marketing services.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col md:flex-row items-center gap-4 pt-2"
              >
                <Button
                  icon={MdStart}
                  onClick={openPopup}
                  tone="primary"
                  variant="solid"
                >
                  Start Your Journey
                </Button>
                <Button
                  href="tel:+13462967813"
                  tone="dark"
                  variant="outline"
                  icon={FiPhone}
                >
                  +1 346 296 7813
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex items-center gap-3 pt-4"
              >
                <div className="flex -space-x-3">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-white border-2 border-blue-100 flex items-center justify-center shadow-sm"
                    >
                      <span className="text-amber-400 text-sm font-bold">
                        ★
                      </span>
                    </div>
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  Trusted by
                  <span className="text-gray-800 font-semibold">1000+</span>
                  authors worldwide
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const OrbitingBook = ({ x, z, rotateY, img, size }) => {
  return (
    <motion.div
      className="absolute left-1/2 top-1/2"
      style={{
        transformStyle: "preserve-3d",
        x,
        z,
        rotateY,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      <div
        className="relative rounded-lg bg-white/20 border border-white/30 backdrop-blur-md shadow-xl"
        style={{
          height: size * 1.4,
        }}
      >
        <Image
          src={img}
          alt="Book"
          width={size}
          height={size * 1.4}
          className="size-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 rounded-lg bg-linear-to-t from-transparent via-white/10 to-transparent" />
      </div>
    </motion.div>
  );
};

export default Cta;
