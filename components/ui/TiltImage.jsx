"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { useReducedMotion } from "motion/react";

const TiltImage = ({ src, alt = "", shadow = false, interactive = true }) => {
  const imgRef = useRef(null);
  const MAX_TILT = 12;
  const prefersReducedMotion = useReducedMotion();
  const enableTilt = interactive && !prefersReducedMotion;

  const [shadowPosition, setShadowPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    if (!enableTilt || !imgRef.current) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;

    const rotY = ((x - midX) / midX) * -MAX_TILT;
    const rotX = ((y - midY) / midY) * MAX_TILT;

    imgRef.current.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;

    const shadowX = (rotY / MAX_TILT) * 30;
    const shadowY = (rotX / MAX_TILT) * 30;

    setShadowPosition({
      x: Math.min(Math.max(shadowX, -50), 50),
      y: Math.min(Math.max(shadowY, -30), 30),
    });
  };

  const handleMouseLeave = () => {
    if (!enableTilt || !imgRef.current) return;
    imgRef.current.style.transform = "rotateX(0deg) rotateY(0deg)";
    setShadowPosition({ x: 0, y: 0 });
  };

  return (
    <div
      className="relative h-full w-full"
      style={{ perspective: "1200px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {shadow && (
        <div
          className="pointer-events-none absolute left-1/2 top-full h-12 w-1/2 -translate-x-1/2 rounded-full bg-black/40 blur-2xl"
          style={{
            transform: `translate(${shadowPosition.x}px, ${shadowPosition.y}px)`,
            opacity: enableTilt ? 0.5 : 0.35,
          }}
        />
      )}

      <Image
        width={1080}
        height={1080}
        ref={imgRef}
        src={src}
        alt={alt}
        className="relative h-full w-full object-contain transition-transform duration-200 ease-out"
        style={{ transformStyle: "preserve-3d" }}
      />
    </div>
  );
};

export default TiltImage;
