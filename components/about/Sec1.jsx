"use client";

import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Subtitle from "../ui/Subtitle";

const fadeInUp = ({ delay = 0, duration = 0.4 } = {}) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

const Title = ({ as: Component = "h1", title, highlight, variant }) => {
  const parts = highlight ? title.split(highlight) : [title];
  return (
    <Component className="text-4xl font-bold text-gray-900 md:text-5xl">
      {parts[0]}
      {highlight && <span className="text-primary">{highlight}</span>}
      {parts[1]}
    </Component>
  );
};

const HiSparklesSvg = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.39-3.47 3.385c-.645.632-.293 1.75.59 1.936l5.092.832 2.177 4.721c.322.771 1.416.771 1.737 0l2.177-4.721 5.092-.832c.882-.186 1.234-1.304.59-1.936l-3.47-3.385-4.753-.39-1.83-4.401z"
      clipRule="evenodd"
    />
  </svg>
);

const FaMedalSvg = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    {...props}
  >
    <path d="M256 32C114.6 32 0 118.4 0 236.8c0 53.3 20.3 102.3 54.2 139.9l-11.2 11.2C34.2 396.7 32 408.3 32 420.3v24c0 13.3 10.7 24 24 24h32c11.1 0 21.3-7.6 23.6-18.4l4.6-20.9c13.9 4.3 28.5 7.9 43.6 10.9L155.6 480H356.4l-4.2-39.7c15.1-3 29.7-6.5 43.6-10.9l4.6 20.9c2.3 10.8 12.5 18.4 23.6 18.4h32c13.3 0 24-10.7 24-24v-24c0-11.9-2.2-23.6-11.1-32.3l-11.2-11.2c33.9-37.6 54.2-86.6 54.2-139.9C512 118.4 397.4 32 256 32zm0 128c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64z" />
  </svg>
);

const FaBookOpenSvg = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 576 512"
    fill="currentColor"
    {...props}
  >
    <path d="M542.2 32H33.8C15.1 32 0 47.1 0 65.8V446.2C0 464.9 15.1 480 33.8 480H542.2c18.7 0 33.8-15.1 33.8-33.8V65.8C576 47.1 560.9 32 542.2 32zM288 432c-60.6 0-109.8-40.4-123.9-96H160c13.3 0 24-10.7 24-24s-10.7-24-24-24H164.1c14.1 0 24-10.7 24-24s10.7 24 24 24h3.9C397.8 391.6 348.6 432 288 432z" />
  </svg>
);

const FaPencilAltSvg = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    {...props}
  >
    <path d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0z" />
  </svg>
);

const FaUserTieSvg = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    fill="currentColor"
    {...props}
  >
    <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm-45.7 48C126.4 304 64 366.4 64 440.8v22.4c0 13.3 10.7 24 24 24h272c13.3 0 24-10.7 24-24v-22.4c0-74.5-62.4-136.8-114.3-136.8h-11.4c-8.5 0-16.7 1.4-24.4 4-5.3-11.4-12.1-21.6-20-30.6-5.2-6-11.5-11.2-18.2-15.6-20.1-13.3-43.2-21.9-68.2-21.9z" />
  </svg>
);

const counterInfo = [
  { icon: FaMedalSvg, number: 20, text: "Years of Experience" },
  { icon: FaBookOpenSvg, number: 280, text: "Books Globally Acclaimed" },
  { icon: FaPencilAltSvg, number: 1500, text: "Books Written" },
  { icon: FaUserTieSvg, number: 550, text: "Native Writers" },
];

const CounterCard = ({ icon: Icon, number, text, idx, scrollYProgress }) => {
  const value = useTransform(scrollYProgress, [0.15, 0.6], [0, 1]);
  const animatedNumber = useTransform(value, [0, 1], [0, number]);
  const springValue = useSpring(animatedNumber, {
    damping: 60,
    stiffness: 400,
  });
  const [count, setCount] = useState(0);

  useEffect(() => {
    const unsubscribe = springValue.onChange((latest) => {
      setCount(Math.floor(latest));
    });
    return () => unsubscribe();
  }, [springValue]);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp({ delay: idx * 0.15 })}
      className="group relative"
      style={{ transformStyle: "preserve-3d", transform: "translateZ(75px)" }}
    >
      <div className="relative flex h-full min-h-56 flex-col justify-between overflow-hidden rounded-xl bg-white/60 p-6 shadow-xl backdrop-blur-lg border border-white/30 transition-all duration-500 hover:shadow-2xl md:p-8">
        <div className="relative z-10">
          <div className="inline-flex rounded-xl bg-primary/10 p-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/15">
            <Icon className="h-12 w-12 text-primary md:h-14 md:w-14" />
          </div>
        </div>

        <div className="relative z-10 space-y-2">
          <div className="flex items-baseline gap-2">
            <h3 className="font-mono text-5xl font-bold text-primary">
              {count}
            </h3>
            <span className="text-3xl font-bold text-gray-500 md:text-4xl">
              +
            </span>
          </div>
          <p className="font-semibold text-gray-700 text-sm uppercase">
            {text}
          </p>
        </div>

        <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-500 group-hover:w-full" />
      </div>
    </motion.div>
  );
};

const Sec1 = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { stiffness: 100, damping: 20, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);
  const blobX = useTransform(smoothMouseX, [-500, 500], [-150, 150]);
  const blobY = useTransform(smoothMouseY, [-500, 500], [-100, 100]);
  const rotateX = useTransform(smoothMouseY, [-500, 500], [10, -10]);
  const rotateY = useTransform(smoothMouseX, [-500, 500], [-10, 10]);

  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const { left, top, width, height } =
      sectionRef.current.getBoundingClientRect();
    const x = e.clientX - (left + width / 2);
    const y = e.clientY - (top + height / 2);
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden bg-slate-50 py-20 md:py-24 min-h-screen flex items-center"
    >
      <div className="container relative z-10">
        <div className="row items-center justify-between gap-y-16">
          <div className="lg:w-[52%]">
            <div className="flex flex-col gap-8 md:gap-10">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp()}
              >
                <Subtitle variant="halo">About Us</Subtitle>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp({ delay: 0.15 })}
              >
                <Title
                  as="h2"
                  title="Empowering Authors, Inspiring Readers"
                  highlight="Inspiring Readers"
                  variant="black"
                />
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp({ delay: 0.3 })}
                className="space-y-6"
              >
                <div className="relative">
                  <div className="space-y-4 text-base text-black/70 md:text-lg">
                    <p>
                      We’re more than a publishing house we’re your creative
                      partners. Whether you’re a first-time writer or an
                      established author, Open Page Publishing offers complete
                      support through every stage of the journey: writing,
                      editing, design, publishing, and promotion.
                    </p>
                    <p>
                      With years of experience and hundreds of successful
                      titles, we take pride in combining traditional publishing
                      quality with modern, author-friendly flexibility.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="lg:w-[44%]" style={{ perspective: "1500px" }}>
            <motion.div
              className="relative"
              style={{ transformStyle: "preserve-3d", rotateX, rotateY }}
            >
              <div
                className="grid grid-cols-1 gap-6 sm:grid-cols-2"
                style={{ transformStyle: "preserve-3d" }}
              >
                {counterInfo.map((item, idx) => (
                  <CounterCard
                    key={idx}
                    icon={item.icon}
                    number={item.number}
                    text={item.text}
                    idx={idx}
                    scrollYProgress={scrollYProgress}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sec1;
