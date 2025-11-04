"use client";

import {
  about_2,
  banners_usa_bg,
  icons_books,
  icons_literature,
  icons_pen,
  icons_rate,
} from "@/public";
import { fadeInUp } from "@/utils/animations";
import { motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

const counterInfo = [
  { icon: icons_rate, number: 20, text: "Years of Experience" },
  { icon: icons_books, number: 280, text: "Books Internationally aclaimed" },
  { icon: icons_literature, number: 1500, text: "Books written" },
  { icon: icons_pen, number: 550, text: "Native writers" },
];

const CounterCard = ({ icon, number, text, hasStarted, idx }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!hasStarted) return;
    const duration = 2000;
    const stepTime = 30;
    const totalSteps = Math.ceil(duration / stepTime);

    let frame = 0;
    const timer = setInterval(() => {
      frame += 1;
      const progress = frame / totalSteps;
      setCount(Math.floor(number * progress));

      if (frame === totalSteps) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [hasStarted, number]);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp({ delay: idx * 0.2 })}
      className="flex flex-col items-start bg-white/80 border border-white h-[200px] py-5 px-4 shadow-[0_0_20px_rgba(0,0,0,0.1)]"
    >
      <img src={icon} className="h-16 object-contain w-auto" alt="" />
      <h3 className="text-black font-montserrat text-[26px] font-bold mt-8 mb-1.5">
        {count}+
      </h3>
      <span className="text-black font-semibold text-[13px]">{text}</span>
    </motion.div>
  );
};
const Sec1 = () => {
  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="pt-28 pb-10 lg:py-28 bg-contain bg-right bg-no-repeat"
      style={{ backgroundImage: `url(${about_2})` }}
    >
      <div className="container">
        <div className="row justify-between items-center gap-y-10 max-lg:text-center">
          <div className="lg:w-[56%]">
            <div className="flex flex-col gap-10">
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp()}
                className="title"
              >
                GET IN TOUCH WITH <br /> WESTERN BOOK PUBLISHING
              </motion.h2>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp({ delay: 0.2 })}
                className="text-black font-medium"
              >
                Ready to take the next step in your writing career? Western Book
                Publishing excels at turning writers into renowned authors. Our
                team of publishing experts will guide you every step of the way,
                ensuring your voice resonates in the literary world. Join us on
                this journey and let your story captivate the world. Embrace the
                famous author status with Western Book Publishing and showcase
                your talent to a global audience. With us by your side, the path
                to literary success is illuminated, offering you the chance to
                make a lasting impact in the dynamic world of literature.
                Connect Western Book Publishing and let your literary
                aspirations soar to new horizons. Your success story starts
                here!
              </motion.p>
            </div>
          </div>
          <div className="lg:w-5/12">
            <div
              className="bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${banners_usa_bg})`,
                backgroundSize: "100%",
              }}
            >
              <div className="grid grid-cols-2 gap-5 px-3">
                {counterInfo.map((item, idx) => (
                  <CounterCard
                    key={idx}
                    icon={item.icon}
                    number={item.number}
                    text={item.text}
                    idx={idx}
                    hasStarted={startCount}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sec1;
