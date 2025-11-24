"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const heros = [
  {
    name: "Noah Reed",
    title: "The Curious Dreamer",
    desc: "Inspiring imaginative stories that spark wonder and creativity.",
    image: "/images/h1.avif",
    color: "#06b6d4",
  },
  {
    name: "Milo Hayes",
    title: "The Playful Storyteller",
    desc: "Bringing joyful adventures to life with fun, kid-friendly storytelling.",
    image: "/images/h2.avif",
    color: "#f97316",
  },
  {
    name: "Luna Ray",
    title: "The Artistic Explorer",
    desc: "Transforming imagination into vibrant, eye-catching children’s book illustrations.",
    image: "/images/h3.avif",
    color: "#10b681",
  },
  {
    name: "Sophie Dale",
    title: "The Gentle Author",
    desc: "Creating warm, heartfelt stories that deeply connect with young readers.",
    image: "/images/h4.avif",
    color: "#e11d48",
  },
];

const HeroCard = ({ hero }) => {
  const cardRef = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-250, 250], [10, -10]);
  const rotateY = useTransform(x, [-250, 250], [-10, 10]);
  const springConfig = { stiffness: 300, damping: 20 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  const glintX = useTransform(x, [-250, 250], [100, -100]);
  const glintY = useTransform(y, [-250, 250], [100, -100]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative size-full group/card"
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
      whileHover="hover"
    >
      <motion.div
        className="w-full h-full rounded-3xl shadow-lg shadow-black/5 p-6 flex flex-col items-center text-center border border-black/5"
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: "preserve-3d",
        }}
      >
        <motion.div
          className="absolute inset-0 size-full rounded-3xl overflow-hidden"
          style={{
            transform: "translateZ(0px)",
          }}
        >
          <motion.div
            className="absolute size-40"
            style={{
              background: "radial-gradient(circle, white, transparent 30%)",
              x: glintX,
              y: glintY,
              opacity: 0,
              mixBlendMode: "overlay",
              blur: "30px",
            }}
            variants={{
              hover: {
                opacity: 0.1,
                filter: "blur(40px)",
                transition: { duration: 0.3 },
              },
              initial: {
                opacity: 0,
                filter: "blur(40px)",
                transition: { duration: 0.3 },
              },
            }}
            initial="initial"
          />
        </motion.div>

        <motion.div
          className="relative w-full pt-4 flex justify-center items-center"
          style={{
            transform: "translateZ(80px) scale(1.1)",
            transformStyle: "preserve-3d",
          }}
        >
          <Image
            width={608}
            height={1696}
            src={hero.image}
            alt={`Illustration of ${hero.name}`}
            className="h-60 w-auto transition-transform duration-500 ease-in-out group-hover/card:-translate-y-8 group-hover/card:scale-135"
          />
          <div
            className="absolute inset-10 -z-10 rounded-full blur-2xl opacity-60"
            style={{ backgroundColor: hero.color }}
          />
        </motion.div>

        <motion.div
          className="mt-8 flex-1 flex flex-col items-center"
          style={{
            transform: "translateZ(40px)",
          }}
        >
          <p className="text-sm font-semibold" style={{ color: hero.color }}>
            {hero.title}
          </p>
          <h3
            className="mt-1 text-2xl font-bold text-black"
            style={{ fontFamily: "'Baloo 2', cursive" }}
          >
            {hero.name}
          </h3>
          <p className="mt-2 text-sm text-slate-700">{hero.desc}</p>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-2/5 rounded-full -z-10 blur-[60px]"
        style={{ backgroundColor: hero.color }}
        initial={{ opacity: 0.15 }}
        variants={{
          hover: { opacity: 0.3, transition: { duration: 0.3 } },
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

const StorySection = () => {
  return (
    <div className="w-full min-h-screen bg-white text-black py-24 sm:py-32 overflow-hidden relative flex flex-col justify-center items-center">
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 50%, #06b6d4 0%, transparent 20%), radial-gradient(circle at 85% 30%, #e11d48 0%, transparent 20%)",
        }}
      />

      <div className="container mx-auto px-6 z-10">
        <h2
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center text-black"
          style={{ fontFamily: "'Baloo 2', cursive" }}
        >
          Meet Our Story Heroes
        </h2>
        <p className="mt-4 text-lg text-slate-700 max-w-3xl mx-auto text-center">
          Hover over each hero to see their story come to life.
        </p>

        <div className="mt-20 lg:mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-24 place-items-center">
          {heros.map((hero) => (
            <HeroCard key={hero.name} hero={hero} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StorySection;
