"use client";

import { usePopup } from "@/context/PopupProvider";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import Button from "../ui/Button";
import Subtitle from "../ui/Subtitle";
import Title from "../ui/Title";

const useSmoothMouse = () => {
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.x.set(e.clientX);
      mouse.y.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return smoothMouse;
};

export default function Hero() {
  const { x, y } = useSmoothMouse();
  const { openPopup } = usePopup();

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0)",
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white pt-48 pb-24">
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          x,
          y,
          background:
            "radial-gradient(circle, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 60%)",
        }}
      />

      <div className="absolute inset-0">
        <Image
          src="/images/banners/child-banner.avif"
          alt="Child reading an enchanted book"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#03183c]/90 via-[#010c1e]/70 to-transparent" />
        <motion.div
          className="absolute -top-24 -right-24 h-[420px] w-[420px] rounded-full bg-[#4ac7ff]/25 blur-[140px]"
          animate={{
            scale: [1, 1.1, 0.95, 1],
            opacity: [0.35, 0.55, 0.4, 0.35],
          }}
          transition={{ duration: 18, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-32 left-12 h-[360px] w-[360px] rounded-full bg-[#ff89b5]/20 blur-[130px] pointer-events-none"
          animate={{
            scale: [1, 0.9, 1.15, 1],
            opacity: [0.3, 0.5, 0.35, 0.3],
          }}
          transition={{ duration: 20, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="container">
        <div className="row">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8 lg:w-8/12"
          >
            <Subtitle variant="glass">Children's Book Publishing</Subtitle>
            <Title
              variant="white"
              highlightColor="primary"
              title="Transform Your Story into a Children’s Book Parents Trust and Kids Love"
              highlight="Parents Trust and Kids Love"
              style={{ fontFamily: "'Baloo 2', cursive" }}
              className="tracking-tight lg:text-6xl"
            />

            <motion.p
              variants={itemVariants}
              className="text-lg text-white/80 sm:text-xl lg:w-[95%]"
            >
              Create a children’s book that delights young readers and earns
              parents’ trust with our complete publishing support. From writing
              to illustrations, we bring your story to life with care and
              creativity.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-2"
            >
              <Button type="button" onClick={openPopup}>
                Talk to a Children’s Book Expert
              </Button>
              <Button href="/contact" variant="outline" tone="light">
                View Sample Pages
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
