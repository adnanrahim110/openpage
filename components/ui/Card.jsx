"use client";

import { fadeInUp } from "@/utils/animations";
import { motion } from "motion/react";
import React, { useEffect, useState } from "react";

const Card = ({ card, tilt = false, shadow = false, idx }) => {
  const [bgStyle, setBgStyle] = useState({});
  const [effectStyle, setEffectStyle] = useState({});

  const defaultBg = {
    background:
      "radial-gradient(circle at center, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 80%)",
  };

  useEffect(() => setBgStyle(defaultBg), []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = ((e.clientX - rect.left) / rect.width) * 100;
    const yPct = ((e.clientY - rect.top) / rect.height) * 100;

    setBgStyle({
      background: `radial-gradient(circle at ${xPct}% ${yPct}%, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 70%)`,
    });

    const style = {};
    if (tilt) {
      const tiltX = (yPct - 50) / 5;
      const tiltY = (xPct - 50) / 5;
      style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
      if (shadow) {
        style.boxShadow = `${-tiltY * 2}px ${tiltX * 2}px 20px rgba(0,0,0,0.2)`;
      }
    } else if (shadow) {
      style.boxShadow = "0 0 20px rgba(0,0,0,0.2)";
    }

    setEffectStyle(style);
  };

  const handleMouseLeave = () => {
    setBgStyle(defaultBg);
    setEffectStyle({});
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp({ delay: idx * 0.2 })}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ ...bgStyle, ...effectStyle }}
      className="px-6 flex flex-col max-h-[300px] justify-evenly text-center items-center
                 overflow-hidden min-h-80 rounded-2xl bg-radial from-secondary-100 to-white
                 border border-secondary-100 cursor-pointer transition-transform duration-300 ease-out
                 shadow-[0_0_20px_rgba(0,0,0,0.2)]"
    >
      <img src={card.icon} alt={card.title} className="max-h-16" />
      <h5 className="text-xl font-sitka font-bold text-primary">
        {card.title}
      </h5>
      <p className="mb-0 text-[15px]">{card.text}</p>
    </motion.div>
  );
};

export default Card;
