"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";

const TiltImage = ({ src, alt = "", shadow = false }) => {
  const imgRef = useRef(null);
  const shadowRef = useRef(null);

  const MAX_TILT = 12;

  const [shadowPosition, setShadowPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;

    const rotY = ((x - midX) / midX) * -MAX_TILT;
    const rotX = ((y - midY) / midY) * MAX_TILT;

    imgRef.current.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;

    const shadowX = (rotY / MAX_TILT) * 30;
    const shadowY = (rotX / MAX_TILT) * 30;

    const maxShadowX = 50;
    const maxShadowY = 30;

    setShadowPosition({
      x: Math.min(Math.max(shadowX, -maxShadowX), maxShadowX),
      y: Math.min(Math.max(shadowY, -maxShadowY), maxShadowY),
    });
  };

  const handleMouseLeave = () => {
    imgRef.current.style.transform = "rotateX(0deg) rotateY(0deg)";
    setShadowPosition({ x: 0, y: 0 });
  };

  return (
    <div
      className="w-full h-full relative"
      style={{ perspective: "1200px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {shadow && (
        <div
          ref={shadowRef}
          className="absolute bg-black/75 rounded-full transform rotate-x-90 blur-[20px] left-1/2 top-full"
          style={{
            width: "50%",
            height: "50px",
            transform: `translateX(-50%) translate(${shadowPosition.x}px, ${shadowPosition.y}px) rotateX(90deg)`,
            top: "calc(100% - 10px)",
            zIndex: -1,
          }}
        />
      )}

      <Image
        width={1080}
        height={1080}
        ref={imgRef}
        src={src}
        alt={alt}
        className="relative w-full h-full object-contain transition-transform duration-200 ease-out"
        style={{ transformStyle: "preserve-3d" }}
      />
    </div>
  );
};

export default TiltImage;
